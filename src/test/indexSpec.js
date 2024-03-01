"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arraay_1 = require("../utilities/arraay");
describe('cut3', () => {
    it('should return an array with the first three elements', () => {
        expect((0, arraay_1.cut3)([1, 2, 3, 4, 5], 1)).toEqual([1, 2, 3]);
    });
});
