var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  x = key
  console.log(x)
  
  var nobject = Object.assign({}, object, {x:value})
  return nobject
}