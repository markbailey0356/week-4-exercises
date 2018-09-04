# My Week 4 exercises

After rat-holing on JavaScript for most of last week, I have decided to resume working through _The
Odin Project_'s curriculum. Having read 4 of the 6 _You Don't Know JS_ series from _Kyle Simpson_, I
have explored JavaScript's mechanisms for:

* Objects
* Prototypical inheritance
* _this_ scoping
* Coercion
* Inbuilt types (Primitives and their natives)
* Grammar, the parser (and you)
* Closures
* Much, much more...

Anyway, onto the exerises for this week...

## for-performance

I wanted to explore the impacts on performance of using a block-scoped (let) counter for a `for` loop
compared to a global- or function-scoped (var) counter. I wondered if the let version would be
slower due to the internal implementation details where it starts a new scope for each iteration.
This is mostly useful if you need a separate closure for each loop (i.e. creating callbacks).

This came to me while working throug this [MDN article on looping
code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) and
was inspired by what I read in [YDKJS _Scope and
Closures_](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures).

Initially, I was very surprised to see that the var version was slower and was taking around twice
as long to complete the same number of iterations. I eventually discovered that this went away once
I placed the `for` loops into an IIFE, which moved the var counter off of the global object and into
a new smaller function scope. This revealed two things to me:

* Lookup of variables on the global object takes longer than a separate function scope, presumably
  due to the exiting pollution of the space
* Performance difference of the let and var `for` loops is negligible (especially if you aren't
  actually leveraging the separate closures in the let version).

## contact-finder

One of the code examples from [MDN article on looping
code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code). Used
to demonstrate using break to short circuit a search operation once the key has been found in the
target array.

Interesting points included:

* Use of the focus() method on the text field (but presumably -- any DOM element) to place the text
  cursor back in the field after submitting -- to be ready for the next search.
* The search field doesn't submit upon pressing enter. This must require the use of an additional
  listener to the same function call-back.
  