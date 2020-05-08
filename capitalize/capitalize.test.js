const capitalize = require('./capitalize')

test('Capitalizing the full string',() => {
    expect(capitalize("this is my first test!")).toEqual("This is my first test!")
});

test('Capitalizing the full string',() => {
    expect(capitalize("  hello from the other side...")).toBe("  Hello from the other side...")
})

test('Capitalizing the full string',() => {
    expect(capitalize("/hello from the other side...")).toBe("/Hello from the other side...")
})