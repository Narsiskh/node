const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    //bar()
    setTimeout(bar, 1000)
    baz()
}

foo()
// foo
// baz
// bar
// Call Stack will first execute the `foo` function, inside `foo` it will execute the `setTimeOut` function. As you know this `setTimeOut` function have a timer, so it will execute after 1 second. Just after that the call stack will move to the next function and execute it, and at the end the call stack will execute the function the is causing delay .