var eve = require('evejs');
eve.system.init({
  transports: [{
    type: 'http',
    port: 3001,
    url: 'http://127.0.0.1:3001/agents/:id',
    remoteUrl: 'http://127.0.0.1:3001/agents/:id',
    localShortcut: false,
  }]
});

var PozdravAgent = require('./p2modul');

var agent2 = new PozdravAgent('agent2');

// agent2 šalje poruku agentu1
agent2.pozdrav('http://127.0.0.1:3000/agents/agent1');
