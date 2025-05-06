/**
 * Resources are handles to some entity that lives outside of the component.
 * They describe things that can't or shouldn't be copied by value; instead,
 * their ownership or reference can be passed between two components via a
 * handle. Unlike other WIT types which are simply plain data, resources only
 * expose behavior through methods. Resources can be thought of as objects that
 * implement an interface.
 *
 * For example, we could model a blob (binary large object) as a resource. The
 * following WIT deﬁnes the blob resource type, which contains a constructor,
 * two methods, and a static function:
 *
 * @example
 *
 * ```ts
 * class Blob extends Resource<{
 *   constructor(init: list<u8>);
 *   write: func(bytes: list<u8>);
 *   read: func(n: u32) -> list<u8>;
 *   merge: static func(lhs: blob, rhs: blob) -> blob;
 * }
 * ```
 *
 * As shown in the blob example, a resource can contain:
 * - *methods*: functions that implicitly take a `self` (often called `this`
 *   in many languages) parameter that is a handle
 * - *static* functions: functions which do not have an implicit self parameter
 *   but are meant to be nested in the scope of the resource type
 * - at most one *constructor*: a function that is syntactic sugar for a function
 *   returning a handle of the containing resource type
 *
 * Methods always desugar to a borrowed self parameter whereas constructors
 * always desugar to an owned return value. For example, the blob resource above
 * could be approximated as:
 *
 * ```wit
 * resource blob;
 * blob-constructor: func(bytes: list<u8>) -> blob;
 * blob-write: func(self: borrow<blob>, bytes: list<u8>);
 * blob-read: func(self: borrow<blob>, n: u32) -> list<u8>;
 * blob-merge: static func(lhs: blob, rhs: blob) -> blob;
 * ```
 *
 * When a resource type name is wrapped with `borrow<...>`, it stands for a
 * "borrowed" resource. A borrowed resource represents a temporary loan of a
 * resource from the caller to the callee for the duration of the call. In
 * contrast, when the owner of an owned resource drops that resource, the
 * resource is destroyed.
 *
 * > NOTE: More precisely, these are borrowed or owned handles of the resource.
 * > Learn more about handles in the upstream component model speciﬁcation.
 */
export abstract class Resource {}
