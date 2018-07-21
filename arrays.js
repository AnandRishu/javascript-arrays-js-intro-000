var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return([element, ...array]);
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return(array);
}

function addElementToEndOfArray (array, element) {
  let temp = [...array, element]
  return(temp);
}

function destructivelyAddElementToEndOfArray (array, element) {
  temp
  return(array.push(element))
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
