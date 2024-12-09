let spec = {
  type: /* some value */,
};

// Assuming isDiscrete() function returns a boolean value
function isDiscrete(type) {
  // implementation
}

let range;

if (isDiscrete(spec.type)) {
  range = [0, /* some value */];
} else {
  range = /* some value */;
}

console.log(range);
