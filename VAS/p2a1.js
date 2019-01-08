var eve = require('evejs');
eve.system.init({
  transports: [{
    type: 'http',
    port: 3000,
    url: 'http://127.0.0.1:3000/agents/:id',
    remoteUrl: 'http://127.0.0.1:3000/agents/:id',
    localShortcut: false,
  }]
});

var PozdravAgent = require('./p2modul');

var agent1 = new PozdravAgent('agent1');
