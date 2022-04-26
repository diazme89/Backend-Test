"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var app_1 = require("../app");
describe('BACKEND TEST - WEATHER API SERVER', function () {
    it('GET /v1 - responds with json', function (done) {
        supertest_1.default(app_1.app)
            .get('/v1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET /v1 - status running', function (done) {
        supertest_1.default(app_1.app)
            .get('/v1')
            .set('Accept', 'application/json')
            .expect(200, {
            status: 'running'
        }, done);
    });
    it('GET /v1/location - have field city', function (done) {
        supertest_1.default(app_1.app)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET /v1/location - responds with json', function (done) {
        supertest_1.default(app_1.app)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(function (res) {
            if (!res.body.ipApi.city) {
                return done('No existe el campo city');
            }
            done();
        })
            .catch(function (err) { return done(err); });
    });
    it('GET /v1/current - responds with json', function (done) {
        supertest_1.default(app_1.app)
            .get('/v1/current')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET /v1/current/city - responds with json', function (done) {
        supertest_1.default(app_1.app)
            .get('/v1/current/madrid')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET /v1/forecast - responds with json', function (done) {
        supertest_1.default(app_1.app)
            .get('/v1/forecast')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET /v1/forecast/city - responds with json', function (done) {
        supertest_1.default(app_1.app)
            .get('/v1/forecast/madrid')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
//# sourceMappingURL=index.spec.js.map