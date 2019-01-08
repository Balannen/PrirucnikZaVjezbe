var eve = require('evejs');
eve.system.init({
  transports: [{
    type: 'ws',
    url: 'ws://127.0.0.1:3001/agents/:id',
    localShortcut: true,
  }]
});

var PozdravAgent = require('./p3modul');

var agent2 = new PozdravAgent('agent2');

// agent2 šalje poruku agentu1
agent2.pozdrav('ws://127.0.0.1:3000/agents/agent1');
