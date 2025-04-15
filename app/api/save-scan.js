import { prisma } from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { userId, imageUrl, birdName, confidence, description } = req.body
    
    const scan = await prisma.birdScan.create({
      data: {
        user_id: userId,
        image_url: imageUrl,
        bird_name: birdName,
        confidence: confidence,
        description: description
      }
    })

    res.status(200).json(scan)
  } catch (error) {
    console.error('Error saving scan:', error)
    res.status(500).json({ message: 'Error saving scan' })
  }
}