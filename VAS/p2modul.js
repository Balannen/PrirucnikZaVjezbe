var eve = require('evejs');

// Implementacija klase agenta
function PozdravAgent(id) {
  eve.Agent.call(this, id); // konstruktor nadređene klase
  this.connect(eve.system.transports.getAll()); // poveži sve vrste prijenosa poruka
}

// proširenje eve.Agent prototype
PozdravAgent.prototype = Object.create(eve.Agent.prototype);
PozdravAgent.prototype.constructor = PozdravAgent;

PozdravAgent.prototype.pozdrav = function(primatelj) {
  this.send(primatelj, 'Bok ' + primatelj + '!');
};

PozdravAgent.prototype.receive = function(posiljatelj, poruka) {
  console.log(posiljatelj + ' je rekao: ' + JSON.stringify(poruka));

  if (poruka.indexOf('Bok') === 0) {
    // odgovor na pozdrav
    this.send(posiljatelj, 'Pozdrav ' + posiljatelj + ', kako žena i djeca?');
  }
};

module.exports = PozdravAgent;
