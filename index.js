var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  var nobject = Object.assign({}, object, {[key]:value})
  return nobject
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  Object.assign(object,{[key]:value})
  return object
}