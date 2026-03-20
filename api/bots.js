module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const bots = [
    { 
      name: 'FXTV', 
      status: 'online', 
      trades: 177,
      profit: 0,
      winRate: '0%',
      lastTrade: '2 min ago'
    },
    { 
      name: 'Polymarket', 
      status: 'online', 
      trades: 0,
      markets: 1000,
      lastUpdate: 'just now'
    },
    { 
      name: 'Moltbook', 
      status: 'online', 
      agents: 561,
      tasks: 45,
      lastUpdate: '5 min ago'
    },
    { 
      name: 'Auto-Trading', 
      status: 'online', 
      signals: 0,
      pending: 0,
      lastSignal: '10 min ago'
    }
  ];

  res.json({
    bots,
    combined: {
      totalTrades: 177,
      activeBots: 4,
      totalAgents: 561,
      combinedProfit: 0
    },
    timestamp: new Date().toISOString()
  });
};
