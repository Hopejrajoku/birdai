import { prisma } from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const scans = await prisma.birdScan.findMany({
      where: {
        user_id: req.query.userId
      },
      orderBy: {
        detected_at: 'desc'
      },
      take: 5
    })
    
    res.status(200).json(scans)
  } catch (error) {
    console.error('Error fetching scans:', error)
    res.status(500).json({ message: 'Error fetching scans' })
  }
}