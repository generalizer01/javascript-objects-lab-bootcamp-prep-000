var recipes = {}

function updateObjectWithKeyAndValue(object,k,value) {
  var nobject = Object.assign({}, object, {k:value})
  return nobject
}