"use strict";

var Cylon = require("cylon");

Cylon.api("http",{ 
  ssl:false,
  host: '0.0.0.0'
});

Cylon.robot({
  name:"Test",

  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    redLed: { driver: 'led', pin: 11 },
  }
}).start();
