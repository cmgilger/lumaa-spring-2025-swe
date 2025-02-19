"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
// create a request object
const request = (0, supertest_1.default)(index_1.default);
describe('Test basic endpoint server', () => {
    it('Get the / endpoint', async () => {
        const response = await request.get('/');
        console.log(response);
    });
});
