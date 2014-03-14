var oop = require('./')

function Parent () {}
Parent.SOME_THING = 123
Parent.prototype.method = function method () {
  console.log('method from parent')
  return this
}

function Child () {
}

var proto = oop.inherits(Child, Parent)

proto.method = function childMethod () {
  this._super.method.call(this)
  console.log('method from child', Child.SOME_THING)
  return this
}

// --

var child = new Child
child.method()
