var eve = require('evejs');
eve.system.init({
  transports: [{
    type: 'ws',
    url: 'ws://127.0.0.1:3000/agents/:id',
    localShortcut: true,
  }]
});

var PozdravAgent = require('./p3modul');

var agent1 = new PozdravAgent('agent1');
