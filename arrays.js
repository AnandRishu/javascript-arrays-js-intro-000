var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var temp = [element, ...array];
  return(temp);
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return(array.unshift(element));
}

function addElementToEndOfArray (array, element) {
  var temp = [...array, element]
  return(temp);
}

function destructivelyAddElementToEndOfArray (array, element) {
  return(array.push(element));
}

function accessElementInArray (array, index) {
  return(array[index])
}

function removeElementFromBeginningOfArray (array) {
  return(array.slice(1));
}

function removeElementFromEndOfArray (array) {
  let temp = array.slice(-1)
  return(temp);
}

