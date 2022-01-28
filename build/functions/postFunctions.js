"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostFunctions {
    firstParser(data) {
        // This is the easist slice, the last 6 digits are always the clientId
        var fourZero = /0000/gi;
        var threeZero = /000/gi;
        let tempString = data.replace(fourZero, " ");
        let splitData = tempString.replace(threeZero, " ");
        let arr = splitData.split(" ", 3);
        let first = arr[0] + "0000";
        let second = arr[1] + "000";
        let third = arr[2];
        return {
            firstName: first,
            lastName: second,
            clientId: third
        };
    }
    ;
    secondParser(data) {
        var fourZero = /0000/gi;
        var threeZero = /000/gi;
        let tempString = data.replace(fourZero, " ");
        let splitData = tempString.replace(threeZero, " ");
        let arr = splitData.split(" ", 3);
        let first = arr[0];
        let second = arr[1];
        let third = arr[2].slice(0, 3) + "-" + arr[2].slice(3);
        return {
            firstName: first,
            lastName: second,
            clientId: third
        };
    }
    ;
    doRespond(res, data) {
        res.status(200).json({
            statusCode: 200,
            data: data
        });
    }
    ;
}
exports.default = new PostFunctions();
