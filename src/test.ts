let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

type Permissions = "admin" | "user" | "manager";

type TuplePermissions = [Permissions, number];

type BasicUser<A = boolean, P = TuplePermissions[]> = {
  readonly name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};

type AdvancedUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;

const user: FullUser<boolean> = {
  name: "Celyne",
  surname: "Kydd",
  age: 28,
  isAdmin: true,
  account: 100,
  permissions: ["admin", "user", "manager"],
};

user.name = "Test";

const usersArray: FullUser<boolean>[] = [user, user, user];

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<FullUser<boolean>>(usersArray);

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b): number => a * b;

const add: MathFunc = (a, b): number => a + b;
