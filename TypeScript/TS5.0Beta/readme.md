## const 

- 구체적인 유형이 필요한 경우 타입 단언을 하기 위해 사용하는 문법
- 5.0 이전에는 as const 를 사용해 타입 단언 
```
    type HasNames = { readonly names: string[] };
    function getNamesExactly<T extends HasNames>(arg: T): T["names"] {
    return arg.names;
}
    const names = getNamesExactly({ names: ["Alice", "Bob", "Eve"]} as const);
    // 추가 적으로 타입 단언을 실행한다


```
- 5.0 beta 
```
    type HasNames = { names: readonly string[] };
function getNamesExactly<const T extends HasNames>(arg: T): T["names"] {
//   함수의 타입을 정의 할 때  ^^^^^ 선언을 통해 기본 값으로 지정이 가능하다.
    return arg.names;
}

// Inferred type: readonly ["Alice", "Bob", "Eve"]
// Note: Didn't need to write 'as const' here
const names = getNamesExactly({ names: ["Alice", "Bob", "Eve"] });

```

## tsconfig.json extends 복수로 사용 가능
- 이전에는 compilerOptions를 상속하기 위해서는 @tsconfig/strictest를 사용하거나 @tsconfig/strictest의 버전을 만들어야했습니다.
- 5.0 beta에서는 필드 형태로 여러 항목을 사용 할수 있습니다.
```
    // tsconfig1.json
{
    "compilerOptions": {
        "strictNullChecks": true
    }
}

// tsconfig2.json
{
    "compilerOptions": {
        "noImplicitAny": true
    }
}

// tsconfig.json
{
    "compilerOptions": {
        "extends": ["./tsconfig1.json", "./tsconfig2.json"]
    },
    "files": ["./index.ts"]
}
```
