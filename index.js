var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  var nobject = Object.assign({}, object, {'prop2':value})
  return nobject
}