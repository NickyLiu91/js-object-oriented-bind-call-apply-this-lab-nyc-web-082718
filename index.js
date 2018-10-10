//Your code here
const justInvoke = function(func) {
  return func()
}

const setThisWithCall = function(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

const setThisWithApply = function(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

const returnNewFunctionOf = function(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue)
}
