// Vercel Serverless Function - /api/bots
// Returns live data for all trading bots

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  try {
    // Bot data - in production, this would fetch from actual APIs/databases
    const botsData = [
      {
        id: 'fxtv',
        name: 'FXTV Bot',
        status: 'online',
        trades: 177,
        profit: '+2.4%',
        uptime: '99.2%',
        lastTrade: '2026-03-21T05:30:00Z',
        type: 'forex'
      },
      {
        id: 'polymarket',
        name: 'Polymarket',
        status: 'warning',
        trades: 0,
        profit: '0%',
        uptime: '98.5%',
        message: 'API reconnecting',
        type: 'crypto'
      },
      {
        id: 'moltbook',
        name: 'Moltbook AI',
        status: 'online',
        agents: 561,
        profit: '+5.8%',
        uptime: '99.8%',
        type: 'ai'
      },
      {
        id: 'autoTrading',
        name: 'Auto-Trading',
        status: 'online',
        signals: 42,
        profit: '+1.2%',
        uptime: '99.5%',
        type: 'signals'
      }
    ];
    
    // Calculate combined stats
    const combinedStats = {
      totalTrades: botsData.reduce((sum, bot) => sum + (bot.trades || 0), 0),
      totalAgents: botsData.reduce((sum, bot) => sum + (bot.agents || 0), 0),
      totalSignals: botsData.reduce((sum, bot) => sum + (bot.signals || 0), 0),
      activeBots: botsData.filter(bot => bot.status === 'online').length,
      totalBots: botsData.length
    };
    
    res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      bots: botsData,
      stats: combinedStats
    });
  } catch (error) {
    console.error('Error fetching bot data:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch bot data',
      message: error.message
    });
  }
}
