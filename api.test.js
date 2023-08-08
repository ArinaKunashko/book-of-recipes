const request = require('supertest')
const agent = request('https://www.themealdb.com/api/json/v1/1/')


describe('check the responses from api /search', function() {
  it('Тест 1.1', function(done) {
    agent
     .get('/search.php')
     .expect(200, done)
  })
})

describe('check the responses from api /random', function() {
    it('Тест 1.2', function(done) {
      agent
       .get('/random.php')
       .expect(200, done)
    })
  })

  describe('check the responses from api /filter', function() {
    it('Тест 1.3', function(done) {
      agent
       .get('/filter.php')
       .expect(200, done)
    })
  })