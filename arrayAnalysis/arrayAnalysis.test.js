import {analyze} from "./arrayAnalysis";
import {expect} from "@jest/globals";

const array = [1,8,3,4,2,6];
test("Check if analysis is successful",() => {
    expect(analyze(array)).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})