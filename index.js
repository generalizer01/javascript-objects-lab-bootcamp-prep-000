var recipies = {}

function updateObjectWithKeyAndValue(object,key,value) {
  nobject = Object.assign( {}, object, {key:value})
  return nobject
}