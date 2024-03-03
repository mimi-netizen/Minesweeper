let a: number;
let b: boolean;
let c: string;

interface BasicUser {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
  permissions?: string[];
}

const user: BasicUser = {
  name: "Celyne",
  surname: "Kydd",
  age: 28,
  isAdmin: true,
};

const user2: BasicUser = {
  name: "Zarya",
  surname: "Lumi",
  age: 30,
  isAdmin: false,
  permissions: ["manager", "operator", "instructor"],
};

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b): number => a * b;

const add: MathFunc = (a, b): number => a + b;
