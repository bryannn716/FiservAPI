import {expect} from "chai"
import postFunctions from "../functions/postFunctions"

describe('stringParser', () => {
    it('firstParserIsString', () => {
        let body = postFunctions.firstParser('BRYAN0000PULLA0009994567');

        expect(body).to.be.an('object');
        expect(body).to.have.property('firstName').that.is.a.a('string');
        expect(body).to.have.property('lastName').that.is.a.a('string');
        expect(body).to.have.property('clientId').that.is.a.a('string');
    });

    it('firstParserIsString', () => {
        let body = postFunctions.firstParser('BRYAN0000PULLA0009994567');

        expect(body).to.be.an('object');
        expect(body).to.have.property('firstName').that.is.a.a('string').equals('BRYAN0000');
        expect(body).to.have.property('lastName').that.is.a.a('string').equals('PULLA000');
        expect(body).to.have.property('clientId').that.is.a.a('string').equals('9994567');
    });

    it('secondParserEqualsOutput', () => {
        let body = postFunctions.secondParser('BRYAN0000PULLA0009994567');

        expect(body).to.be.an('object');
        expect(body).to.have.property('firstName').that.is.a.a('string');
        expect(body).to.have.property('lastName').that.is.a.a('string');
        expect(body).to.have.property('clientId').that.is.a.a('string');
    });

    it('secondParserEqualsOutput', () => {
        let body = postFunctions.secondParser('BRYAN0000PULLA0009994567');

        expect(body).to.be.an('object');
        expect(body).to.have.property('firstName').that.is.a.a('string').equals('BRYAN');
        expect(body).to.have.property('lastName').that.is.a.a('string').equals('PULLA');
        expect(body).to.have.property('clientId').that.is.a.a('string').equals('999-4567');
    });


});