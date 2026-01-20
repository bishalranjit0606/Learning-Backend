//Variable
//Something which keep changing.
//A place to store data

var name = "Bishal"
console.log(name)

//how to name a varaiable

//1. a-z A-Z, 0-9, _, $ onluse use them
//2. cannot use kewwords like id else, for etc 
//no space between variabler words, eg first_name is correct bbut first name is nnot correct
//few guide lines:
//1. use meaningful names of variable.
//observations:
//variables are always case sebnsative eg first is not equal to First.

var age
var hobby
var Nationality
//var %error this gives error

console.log(age)
console.log(hobby)
console.log(Nationality)


//datya types

//for eg we show diffrent tyoe of memeber in the family. like this js has many data SVGUnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX
//tyes = primittive and non-primitive datatype

//primitive is simple and immutable
//non-primitive is complex and mutable

//immutable is not ginna change but muttable is ginna change. 

//primitive dtata types:
//string 
var names = "ranjitkar"
//we can use " " or '

var title = 'mr ranjitkar'

console.log(title)

//how to find the tyoe od data.
console.log(typeof names)
//or 
console.log(typeof (names))


//number 
var age = 20
console.log(age)
console.log(typeof age)

//limitation is it has limited number
//so we can use big int

var bign = 123n
console.log(bign)
console.log(typeof bign)

console.log(typeof Nan)


//nulll data type

console.log(typeof null)
console.log(null)
//null is a datatype but it give object as datatype . its a nun bug in js

//undefined

var name
console.log(typeof name)
//it is undefiend but not null.

//undefiend is that we have not assigned the value but the null is we havenot out aything in the value purposefully

//bollen data type

var hero = true
console.log(typeof hero)
//gives true or false. i.e is 0 and 1

