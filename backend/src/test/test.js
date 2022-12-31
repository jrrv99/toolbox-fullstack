import { describe, it } from 'mocha'; // const mocha = require('mocha')
import chai from 'chai'; // let chai = require('chai');
import chaiHttp from 'chai-http'; // let chaiHttp = require('chai-http');
import server from '../server.js'

chai.use(chaiHttp);

describe('Csv Files', () => {
  describe('GET /files/data', () => {
    it('Should get all the files', done => {
      chai
        .request(server)
        .get('/files/data')
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
});

