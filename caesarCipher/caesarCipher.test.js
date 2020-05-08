import {caesarCypher} from "./caesarCipher";

test("test crypting",() => {
    expect(caesarCypher("The best is yet to come",17))
        .toEqual("Kyv svjk zj pvk kf tfdv")
})

test("test crypting",() => {
    expect(caesarCypher("The best, is yet to Come!",3))
        .toEqual("Wkh ehvw, lv bhw wr Frph!")
})

test("test crypting",() => {
    expect(caesarCypher("The crypter, really is working?",-8))
        .toEqual("Lzw ujqhlwj, jwsddq ak ogjcafy?")
})

test("test crypting",() => {
    expect(caesarCypher("The crypter, really is working for huge offsets?",-80))
        .toEqual("Rfc apwnrcp, pcyjjw gq umpigle dmp fsec mddqcrq?")
})

