# FXTV Multi-Bot Dashboard v2.0

Multi-bot trading dashboard displaying real-time data from all 4 bots.

## Features

- **FXTV Bot** - Forex trading bot (177 trades, online)
- **Polymarket** - Crypto/prediction markets (API reconnecting)
- **Moltbook AI** - AI agents platform (561 agents, online)
- **Auto-Trading** - Signal-based trading bot (online)

## Dashboard Pages

- `/` - Overview with combined stats
- `/bots.html` - Detailed bot status with live data
- `/api/bots` - JSON API endpoint for bot data

## Deployment

### Automatic (GitHub → Vercel)
1. Push to `main` branch
2. Vercel auto-deploys from GitHub integration

### Manual (Vercel CLI)
```bash
vercel --prod
```

## API Response Format

```json
{
  "success": true,
  "timestamp": "2026-03-21T06:15:00Z",
  "bots": [
    { "id": "fxtv", "name": "FXTV Bot", "status": "online", "trades": 177, ... },
    { "id": "polymarket", "name": "Polymarket", "status": "warning", ... },
    { "id": "moltbook", "name": "Moltbook AI", "status": "online", "agents": 561, ... },
    { "id": "autoTrading", "name": "Auto-Trading", "status": "online", ... }
  ],
  "stats": {
    "totalTrades": 177,
    "totalAgents": 561,
    "activeBots": 3,
    "totalBots": 4
  }
}
```

## Links

- GitHub: https://github.com/nelioelbe181-ai/fxtv-dashboard
- Dashboard: https://fxtv-dashboard.vercel.app
