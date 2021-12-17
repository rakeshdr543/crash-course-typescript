// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const validParenthesis = (s: string): boolean => {
  const stack = [];

  const pair: { [key: string]: string } = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const isPaired = (a: string, b: string) => pair[a] === b;

  let c: string;
  for (c of s) {
    if (isPaired(stack[stack.length - 1], c)) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};

console.log(validParenthesis("{[]}"));
