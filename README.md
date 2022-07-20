# Examples

### Turn JSON into a specified class

```typescript
const userJson = {
  name: 'Jack',
  age: 27,
}

bindJSON<User>(userJson);

Result: User { name: "Jack", age: 27 }
```

### Turn a class back into JSON

```typescript
const user = new User("Jack", 27);

toJSON(user);

Result: {"name":"Jack","age":27}
```
