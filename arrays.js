var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var temp = [element, ...array];
  return(temp);
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray (array, element) {
  var temp = [...array, element]
  return(temp);
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return(array);
}

function accessElementInArray (array, index) {
  return(array[index])
}

function removeElementFromBeginningOfArray (array) {
  array.slice(1);
  return(array);
}

function destructivelyRemoveElementFromEndOfArray (array) {
  return(array.pop());
}

function removeElementFromEndOfArray (array) {
  array.slice(-1);
  return(array);
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return(array);
}
