# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 1
Encapsulation in object-oriented programming means bundling data and the methods that work on that data into a single object, while also controlling who can access or change that data.
It protects important information from being changed accidentally and makes code easier to maintain, understand, and reuse.
Encapsulation is beneficial because it:
keeps data safe from unintended changes
reduces bugs by controlling access
makes objects easier to understand and work with
helps organize code into clear, manageable parts

```js
const counter = {
  value: 0
  increase(){
    this.value += 1;
  }
  decrease(){
    this.value -= 1;
  }
  show() {
    console.log(`current value: ${this.value}` );
    }

}
---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2
The `this` keyword refers to the current object that is using a method. It is useful because it lets methods access or change the object’s own data, so the same method can work for different objects without rewriting it 


In this code, `this` refers to the specific object calling the method. For example, when `counterA.increment()` runs, this is `counterA`; when `counterB.` `increment()` runs, this is `counterB`. This lets each Counter instance keep its own separate count.
---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.




## Response 3

polymorphism means “many forms.” In OOP, it allows different objects to use the same method name but behave differently depending on the object. This makes code more flexible and reusable because the same interface can work with multiple object types

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4