let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

type Permissions = "admin" | "user" | "manager";

type PermissionsWithoutAdmin = Exclude<Permissions, "admin">;

interface DepartmentForPermission {
  depName: string;
  lvl: number;
}

const DepsForPerms: Record<Permissions, DepartmentForPermission> = {
  admin: {
    depNane: "security",
    lvl: 10,
  },
  user: {
    depNane: "sales",
    lvl: 5,
  },
  manager: {
    depNane: "sales",
    lvl: 10,
  },
};

type TuplePermissions = [Permissions, Permissions];

type BasicUser<A = boolean, P = TuplePermissions> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};

type BasicUserWithoutPermissions = Omit<BasicUser, "permissions">;

type AdvancedUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;

type BasicUserReadonly = Readonly<BasicUser>;
type BasicUserRequired = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;

type BasicUserReadonlyRequired = Readonly<Required<BasicUser>>;

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

type BasicFunction = () => FullUser[];

type getFirstReturnType = ReturnType<BasicFunction>;

getFirst<FullUser<boolean>>(usersArray);

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b): number => a * b;

const add: MathFunc = (a, b): number => a + b;
