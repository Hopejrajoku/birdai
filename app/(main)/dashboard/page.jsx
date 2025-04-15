'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Upload, Loader2, Share2, History, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/header';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function DashboardPage() {
  // State Management
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanHistory, setScanHistory] = useState([]);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Initialize DeepSeek API (replace with actual initialization)
  const detectBirdWithDeepSeek = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
  
      const response = await fetch('https://api.deepseek.com/v1/bird-detection', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`
        },
        body: formData
      });
  
      // Handle HTTP errors
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'API request failed');
      }
  
      const data = await response.json();
      
      // Handle empty predictions
      if (!data.predictions || data.predictions.length === 0) {
        return { species: 'No birds detected', confidence: 0 };
      }
  
      return data.predictions[0];
  
    } catch (err) {
      console.error('DeepSeek API error:', err);
      // Return error structure that matches expected format
      return { 
        species: 'Identification failed', 
        confidence: 0,
        error: err.message 
      };
    }
  };

  // Save to Supabase with Prisma (via API route)
  const saveScanResult = async (result) => {
    const { data, error } = await supabase
      .from('bird_scans')
      .insert([{
        user_id: 'ymjmmdofbnvshipagwxr', // Replace with actual user ID
        image_url: result.imageUrl,
        bird_name: result.birdName,
        confidence: result.confidence,
        description: result.description,
        detected_at: new Date().toISOString()
      }])
      .select();
    
    if (error) throw error;
    return data;
  };

  // Drag and Drop Handlers
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFileChange({ target: { files: [droppedFile] } });
  };

  // File Handling
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
    setScanResult(null);
    setError(null);
  };

  // Main Processing Function
  const processBirdImage = async () => {
    if (!file) return;

    setIsLoading(true);
    setProgress(0);

    try {
      // Step 1: Upload image (simulated progress)
      const uploadInterval = setInterval(() => {
        setProgress(prev => (prev < 90 ? prev + 10 : prev));
      }, 300);

      // Step 2: Detect bird with DeepSeek
      const detection = await detectBirdWithDeepSeek(file);
      clearInterval(uploadInterval);
      setProgress(100);

      // Step 3: Get description (you can use Gemini here as before)
      const description = `This is a ${detection.species} (${Math.round(detection.confidence * 100)}% confidence). 
      Sample description: Found in North America, known for its distinctive color patterns...`;

      // Step 4: Create result object
      const result = {
        imageUrl: URL.createObjectURL(file),
        birdName: detection.species,
        confidence: detection.confidence,
        description,
        timestamp: new Date().toISOString()
      };

      setScanResult(result);
      
      // Step 5: Save to database
      await saveScanResult(result);
      await fetchScanHistory();

    } catch (err) {
      setError('Failed to process image. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
      setProgress(0);
    }
  };

  // Fetch scan history
  const fetchScanHistory = async () => {
    const { data, error } = await supabase
      .from('bird_scans')
      .select('*')
      .order('detected_at', { ascending: false })
      .limit(5);
    
    if (!error) setScanHistory(data);
  };

  // Share functionality
  const shareResult = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `I found a ${scanResult.birdName}!`,
          text: `Check out this ${scanResult.birdName} I identified with BirdScanner`,
          url: window.location.href
        });
      } else {
        // Fallback for browsers without Web Share API
        navigator.clipboard.writeText(`Found a ${scanResult.birdName}! ${scanResult.description}`);
        alert('Result copied to clipboard!');
      }
    } catch (err) {
      console.error('Sharing failed:', err);
    }
  };

  // Cleanup
  useEffect(() => {
    fetchScanHistory();
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      if (scanResult?.imageUrl) URL.revokeObjectURL(scanResult.imageUrl);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="p-4 md:p-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-700 mb-2">BirdScanner</h1>
          <p className="text-gray-600">Identify birds with AI and build your birdwatching journal</p>
        </div>

        {/* Drag and Drop Zone */}
        <div 
          className={`border-2 border-dashed rounded-xl p-8 mb-6 text-center transition-all 
            ${isDragging ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden" 
          />
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
          <p className="text-lg font-medium">
            {isDragging ? 'Drop your bird photo here' : 'Drag & drop or click to upload'}
          </p>
          <p className="text-sm text-gray-500 mt-1">Supports JPG, PNG (max 5MB)</p>
        </div>

        {/* Preview Section */}
        {previewUrl && (
          <div className="mb-6 relative group">
            <Image
              src={previewUrl}
              alt="Selected bird"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-64"
            />
            {!isLoading && !scanResult && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button 
                  onClick={processBirdImage}
                  className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg"
                >
                  <Camera className="mr-2" /> Identify Bird
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Progress Bar */}
        {isLoading && (
          <div className="mb-6">
            <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-600 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center mt-2 text-gray-600">
              {progress < 100 ? 'Analyzing...' : 'Finalizing results'}
            </p>
          </div>
        )}

        {/* Results Section */}
        <AnimatePresence>
          {scanResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-8"
            >
              <div className="relative">
                <Image
                  src={scanResult.imageUrl}
                  alt={`Identified ${scanResult.birdName}`}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 right-0 m-4 flex space-x-2">
                  <Button 
                    onClick={shareResult}
                    variant="outline"
                    className="bg-white/90 backdrop-blur-sm"
                  >
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{scanResult.birdName}</h2>
                    <p className="text-green-600 font-medium">
                      {Math.round(scanResult.confidence * 100)}% Confidence
                    </p>
                  </div>
                </div>
                
                <div className="prose prose-sm text-gray-700">
                  {scanResult.description.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* History Section */}
        {scanHistory.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <History className="h-5 w-5 mr-2 text-gray-700" /> Your Recent Scans
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {scanHistory.map((scan) => (
                <div 
                  key={scan.id} 
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    setScanResult({
                      imageUrl: scan.image_url,
                      birdName: scan.bird_name,
                      confidence: scan.confidence,
                      description: scan.description
                    });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={scan.image_url}
                      alt={scan.bird_name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium truncate">{scan.bird_name}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(scan.detected_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
            <div className="flex items-center">
              <X className="h-5 w-5 mr-2" />
              <span>{error}</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}