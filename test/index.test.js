const app = require('../app');
const request = require('supertest');

it('returns movies json', (done) => {
  request(app)
    .get('/movies')
    .expect('Content-Type', /json/)
    .expect(200, done);
});
