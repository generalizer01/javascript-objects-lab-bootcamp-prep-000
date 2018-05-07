var recipies = {}

function updateObjectWithKeyAndValue(object,key,value) {
  var nobject = Object.assign( {}, object, {key:value})
  return nobject
}