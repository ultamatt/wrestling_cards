const chai = require('chai');
const { expect } = require('chai');

chai.use(require('chai-http'));

const app = require('../src/index.js'); // Our app

describe('API endpoint /wrestlers', () => {
    // this.timeout(5000); // How long to wait for a response (ms)
    let newWrestlerId = null;
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
        .get('/wrestler/92684a24-06be-47cc-9494-bcc96d9a0f51')
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
            name: 'Pretty Peter Avalon',
        })
        .then((res) => {
            newWrestlerId = res.body.data.id;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.data.name).to.be.string('Pretty Peter Avalon');
        }));

    // PUT - Update wrestler
    it('should update wrestler', () => chai.request(app)
        .put(`/wrestler/${newWrestlerId}`)
        .send({
            name: 'Ugly Peter Avalon',
            description: 'Hes a really really ugly guy',
        })
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.data.name).to.be.string('Ugly Peter Avalon');
        }));

    // PUT - Update wrestler
    it('should destroy wrestler', () => chai.request(app)
        .delete(`/wrestler/${newWrestlerId}`)
        .send({})
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
        }));
});
