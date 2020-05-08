const reverseString = require('./reverseString')

test('A reversed string',() =>
    expect(reverseString("Mia san mia"))
        .toEqual("aim nas aiM")
)

test('A reversed string',() =>
    expect(reverseString("This is Wild, Mia san mia"))
        .toEqual("aim nas aiM ,dliW si sihT")
)



