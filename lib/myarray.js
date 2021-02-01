'use strict'

function MyArray (size) {
  if (!(this instanceof MyArray)) {
    return new MyArray(size)
  }
  this.size = size
  console.log('MyArray created. size = ' + this.size)
}

module.exports = MyArray
