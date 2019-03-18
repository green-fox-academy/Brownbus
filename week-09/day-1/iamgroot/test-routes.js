'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./routes');


test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .expect(304)
    .end(function (err, res) {
     t.error(err)
     t.end();
    });

});