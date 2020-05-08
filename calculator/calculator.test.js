import {calculator} from "./calculator";
import {expect} from "@jest/globals";

test("Addition",() => {
    expect(calculator(5,17,"+"))
        .toBe(22)
})

test("Substraction",() => {
    expect(calculator(5,17,"-"))
        .toBe(-12)
})

test("Multiplication",() => {
    expect(calculator(5,17.5,"*"))
        .toBeCloseTo(87.5)
})

test("Division",() => {
    expect(calculator(105,15,"/"))
        .toBe(7)
})