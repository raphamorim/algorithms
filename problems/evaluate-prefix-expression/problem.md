# Evaluation of Prefix Expressions

> Retired from https://www.geeksforgeeks.org/evaluation-prefix-expressions/

Prefix and Postfix expressions can be evaluated faster than an infix expression. This is because we don’t need to process any brackets or follow operator precedence rule. In postfix and prefix expressions which ever operator comes before will be evaluated first, irrespective of its priority. Also, there are no brackets in these expressions. As long as we can guarantee that a valid prefix or postfix expression is used, it can be evaluated with correctness.

We can convert infix to postfix and can convert infix to prefix.
In this article, we will discuss how to evaluate an expression written in prefix notation. The method is similar to evaluating a postfix expression. Please read Evaluation of Postfix Expression to know how to evaluate postfix expressions

## Algorithm

```
EVALUATE_PREFIX(STRING)
Step 1: Put a pointer P at the end of the end
Step 2: If character at P is an operand push it to Stack
Step 3: If the character at P is an operator pop two 
        elements from the Stack. Operate on these elements
        according to the operator, and push the result 
        back to the Stack
Step 4: Decrement P by 1 and go to Step 2 as long as there
        are characters left to be scanned in the expression.
Step 5: The Result is stored at the top of the Stack, 
        return it
Step 6: End
```

## Example to demonstrate working of the algorithm  

```
Expression: +9*26

Character | Stack       |  Explanation
Scanned   | (Front to   |
          |  Back)      | 
-------------------------------------------
6           6             6 is an operand, 
                            push to Stack
2           6 2           2 is an operand, 
                            push to Stack
*           12 (6*2)      * is an operator, 
                          pop 6 and 2, multiply 
                          them and push result 
                          to Stack 
9           12 9          9 is an operand, push 
                          to Stack
+           21 (12+9)     + is an operator, pop
                          12 and 9 add them and
                          push result to Stack

Result: 21
```

## Examples:  

```
Input : -+8/632
Output : 8

Input : -+7*45+20
Output : 25
```