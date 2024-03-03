let a: number;
let b: boolean;
let c: string;

type User = {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
};

const user: User = {
  name: "Celyne",
  surname: "Kydd",
  age: 30,
  isAdmin: true,
};

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b): number => a * b;

const add: MathFunc = (a, b): number => a + b;
