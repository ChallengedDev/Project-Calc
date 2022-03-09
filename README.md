
<!-- # Challenge 1 - Project-Calc  -->

#Simple calculator
This calculator was built using HTML and CSS (design) and Javascript (functionality) as per the ChallengeDev requirements. It is important to state that the web interface is not yet mobile responsive as it is for a challenge but this issue will be addressed shortly.

###Caution!!
There are two ways of inputing values: `The numberpad` or normal `keyboard input`.
These input types are to be used separately (per input field) and should not be mixed.
For example in the `num1` input field you could use the `numberpad` and in the `num2`
the standard `keyboard input` but not both in thesame field as it would result to bugs.

## Features
- Written in javascript
- A web-based interface
- Standard `addition`, `subtraction`, `division` and  `multiplication`
- `Memory` (displays automatically)
- `History`
- `Reset`
- `Modulo` operation
- Accepts both keyboard and mouse input

##The Numberpad caveat
The numberpad has a bit of an issue when entering `negative` or `decimal` numbers. Say you're 
trying to enter `-8` with the numberpad. When you hit on the `-` on the numberpad, it stays blank. 
Don't fret, just enter the number to be negated. So to say, `-`, then `8` will yield `-8` in that input
field. Same goes for the `float` values. 

##Info text field
This field will display any possible errors in case of `erratic` or `unsupported` value entries.
## Functions
The calculator offers the following functions:

#### Addition `+`
This operation returns the sum of two numbers. How to use:
1. Enter first number (`num1`)
2. Enter second number (`num2`)
3. Click on the `+` sign to get result.

If either input field is left empty, this operator considers it to be zero.
#### Subtraction `-`
This operation returns the difference between two numbers. How to use:
1. Enter first number (`num1`)
2. Enter second number (`num2`)
3. Click on the `-` sign (on right hand side) to get result.

If either input field is left empty, it will have thesame behavior as in the case of  addition.
#### Division `/`
This operation returns the quotient between two numbers. How to use:
1. Enter numerator (`num1`)
2. Enter denominator  (`num2`)
3. Click on the `/` sign to get quotient.

If `num1` input field is left empty, this operator considers it to be zero.
!! Denominator (`num2`) must be a non-zero number .
#### Multiplication `*`
This operation returns the product of two numbers. How to use:
1. Enter first number (`num1`)
2. Enter second number (`num2`)
3. Click on the `*` sign to get result.

If either input field is left empty, this operator considers it to be zero.
#### Modulo `%`
This operation returns the modulo between two numbers. How to use:
1. Enter  number (`num1`)
2. Enter modulo (`num2`)
3. Click on the `%` sign to get result (`num1` mod `num2`).

Both numbers must be positive.
`num2` can take the value `0`.
#### History `History`
This returns a list of all recent calculations.
Just hit the `History` button.

#### Reset `Reset`
This operation sets all input fields to their default values. How to use:
Just hit the `Reset` button.

#### Support 
I have to equally mention that I am open to any ideas or bug reports, just create and issue.
Thank you.






