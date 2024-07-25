const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    bar()
    baz()
}

foo()
// foo
// bar
// baz
// Call Stack will put this function in a row or a que and then executes it one by one