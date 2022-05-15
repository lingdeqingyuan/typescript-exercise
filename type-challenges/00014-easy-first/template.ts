// 1.
type First<T extends any[]> = T extends [] ? never : T[0];

// 2.
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 3.
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 4.
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;
