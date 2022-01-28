"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const postFunctions_1 = __importDefault(require("../functions/postFunctions"));
describe('stringParser', () => {
    it('firstParserIsString', () => {
        let body = postFunctions_1.default.firstParser('BRYAN0000PULLA0009994567');
        (0, chai_1.expect)(body).to.be.an('object');
        (0, chai_1.expect)(body).to.have.property('firstName').that.is.a.a('string');
        (0, chai_1.expect)(body).to.have.property('lastName').that.is.a.a('string');
        (0, chai_1.expect)(body).to.have.property('clientId').that.is.a.a('string');
    });
    it('firstParserIsString', () => {
        let body = postFunctions_1.default.firstParser('BRYAN0000PULLA0009994567');
        (0, chai_1.expect)(body).to.be.an('object');
        (0, chai_1.expect)(body).to.have.property('firstName').that.is.a.a('string').equals('BRYAN0000');
        (0, chai_1.expect)(body).to.have.property('lastName').that.is.a.a('string').equals('PULLA000');
        (0, chai_1.expect)(body).to.have.property('clientId').that.is.a.a('string').equals('9994567');
    });
    it('secondParserEqualsOutput', () => {
        let body = postFunctions_1.default.secondParser('BRYAN0000PULLA0009994567');
        (0, chai_1.expect)(body).to.be.an('object');
        (0, chai_1.expect)(body).to.have.property('firstName').that.is.a.a('string');
        (0, chai_1.expect)(body).to.have.property('lastName').that.is.a.a('string');
        (0, chai_1.expect)(body).to.have.property('clientId').that.is.a.a('string');
    });
    it('secondParserEqualsOutput', () => {
        let body = postFunctions_1.default.secondParser('BRYAN0000PULLA0009994567');
        (0, chai_1.expect)(body).to.be.an('object');
        (0, chai_1.expect)(body).to.have.property('firstName').that.is.a.a('string').equals('BRYAN');
        (0, chai_1.expect)(body).to.have.property('lastName').that.is.a.a('string').equals('PULLA');
        (0, chai_1.expect)(body).to.have.property('clientId').that.is.a.a('string').equals('999-4567');
    });
});
