function receivesAFunction (callback) {
    console.log(callback())
}
function returnsANamedFunction() {
    return function namedFunction(){

    }
}
const returnsAnAnonymousFunction = () => {
    return function (){
}
}