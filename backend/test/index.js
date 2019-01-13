const chai = require('chai');
const { expect } = require('chai');

chai.use(require('chai-http'));

const app = require('../src/index.js'); // Our app

describe('API endpoint /wrestlers', () => {
    // this.timeout(5000); // How long to wait for a response (ms)

    before(() => {

    });

    after(() => {

    });

    // GET - List all wrestlers
    it('should return all wrestlers', () => chai.request(app)
        .get('/wrestler')
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.data).to.be.an('array');
        }));

    it('should return kevin owens', () => chai.request(app)
        .get('/wrestler/1')
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.data).to.be.an('object');
            expect(res.body.data.name).to.be.string('Kevin');
        }));

    // GET - Invalid path
    it('should return Not Found', () => chai.request(app)
        .get('/INVALID_PATH')
        .then((res) => {
            expect(res).to.have.status(404);
        })
        .catch((err) => {
            expect(err).to.have.status(404);
        }));

    // POST - Add new wrestler
    it('should add new wrestler', () => chai.request(app)
        .post('/wrestler')
        .send({
            id: 100,
            name: 'Pretty Peter Avalon',
        })
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.data.name).to.be.string('Pretty Peter Avalon');
        }));

    // PUT - Update wrestler
    it('should update wrestler', () => chai.request(app)
        .put('/wrestler/100')
        .send({
            id: 100,
            name: 'Ugly Peter Avalon',
        })
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.data.name).to.be.string('Ugly Peter Avalon');
        }));

    // PUT - Update wrestler
    it('should destroy wrestler', () => chai.request(app)
        .delete('/wrestler/100')
        .send({})
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
        }));
});
