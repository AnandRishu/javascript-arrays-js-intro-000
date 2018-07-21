var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = function (array, element) {
  return([element, ...array]);
}

var destructivelyAddElementToBeginningOfArray = function (array, element) {
  return(array.unshift(element));
}

var addElementToEndOfArray = function (array, element) {
  return([...array, element]);
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  return(array.push(element))
}

var accessElementInArray = () => (array, index) {
  return(array[index])
}

var removeElementFromBeginningOfArray = (array) => {
  return(array.shift())
}

var removeElementFromEndOfArray = (array) => {
  return(array.pop())
}
