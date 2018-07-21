var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var temp = [element, ...array];
  return(temp);
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  var temp = array.unshift(element);
  return(temp);
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

function destructivelyRemoveElementFromEndOfArray (array) {
  return(array.pop());
}

function removeElementFromEndOfArray (array) {
  //let temp = array.slice(-1)
  return(array.slice(-1));
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  return(array.shift())
}
