# numLisp

A naïve Lisp interpreter.
It only supports Lists and Numbers and doesn't support custom definitions.

Usage:

```ts
import { numLisp } from "./src/Interpreter";

numLisp`
  (+ 10
    (car
      (list 32 33 34)
    )
  )
` // 42
```

## Motivation

I've created this to find out how to build an interpreter - and it's surprisingly simple, really!
Try it out for yourself before you have a look at this one, it's a lot of fun.
