var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var temp = [element, ...array];
  return([element, ...array]);
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return(array.unshift(element));
}

function addElementToEndOfArray (array, element) {
  var temp = [...array, element]
  return(temp);
}

function destructivelyAddElementToEndOfArray (array, element) {
  var temp = array.push(element);
  return(temp)
}

function accessElementInArray (array, index) {
  return(array[index])
}

function removeElementFromBeginningOfArray (array) {
  return(array.shift())
}

function removeElementFromEndOfArray (array) {
  return(array.pop())
}
