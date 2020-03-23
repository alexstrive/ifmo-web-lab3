
const object1 = {
	name: 'Boris',
  weight: 15,
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

const isEquivalent = (left, right) => {
  const leftKeys = Object.keys(left)
  const rightKeys = Object.keys(right)
  
  if (leftKeys.join(',') !== rightKeys.join(',')) {
    return false
  }

  return leftKeys.every((leftKey) => left[leftKey] === right[leftKey])
}

// Реализуйте функцию isEquivalent

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false