let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

interface BasicUser<A = boolean> {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: string[];
}

const user: BasicUser = {
  name: "Celyne",
  surname: "Kydd",
  age: 28,
  isAdmin: true,
};

const user2: BasicUser<number> = {
  name: "Zarya",
  surname: "Lumi",
  age: 30,
  isAdmin: 1,
  permissions: ["manager", "operator", "instructor"],
};

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b): number => a * b;

const add: MathFunc = (a, b): number => a + b;
