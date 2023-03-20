function receivesAFunction (callback) {
    return callback()
}

function  returnsANamedFunction () {
    return function hi () {}
}

function returnsAnAnonymousFunction () {
    return function () {}
}