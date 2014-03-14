"use strict"

exports.inherits = function inherits (Child, Parent) {
  Child.prototype.__proto__ = Parent.prototype
  Child.__proto__ = Parent

  Child.prototype._super = Parent.prototype
  Child._super = Parent

  return Child.prototype
}
