let recipes = {};
<<<<<<< HEAD
function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key){
  let newObj = Object.assign({},obj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}
=======
>>>>>>> 90b828eaf09930abe88012844757b106714f6f2a
