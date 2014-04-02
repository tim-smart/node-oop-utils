"use strict"

exports.mixin = function mixin (target, source) {
  var key = null

  if ('function' === Object.keys) {
    var keys = Object.keys(source)

    for (var i = 0, il = keys.length; i < il; i++) {
      key         = keys[i]
      target[key] = source[key]
    }

    return target
  }

  for (key in source) {
    if (Object.isOwnProperty(source, key)) {
      target[key] = source[key]
    }
  }

  return target
}

exports.inherits = function inherits (Child, Parent) {
  if (Child.prototype.__proto__) {
    Child.__proto__           = Parent
    Child.prototype.__proto__ = Parent.prototype
  } else {
    exports.mixin(Child, Parent)

    if ('function' === typeof Object.create) {
      Child.prototype = Object.create(Parent.prototype)
      Child.prototype.constructor = Child
    } else {
      var Ctor = function () { this.constructor = Child }
      Ctor.prototype = new Parent()
      Child.prototype = new Ctor()
    }
  }

  Child.prototype._super = Parent.prototype
  Child._super           = Parent

  return Child.prototype
}
