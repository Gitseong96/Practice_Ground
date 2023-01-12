# ES6
* ECMA스크립트의 여섯 번째 버전이라는 뜻
* ECMA-262 기술 규격에 정의된 표준화 된 스크립트 프로그래밍 언어
* ES5의 모든 무법을 지원한다.
* import 와 export를 통해 모듈화 기능을 만들고 사용할 수 있다.

## let 과 const 
* var 키워드의 문제점을 보완하고자 나온 키워드
    * 변수를 중복 선언해도 에러가 발생하지 않는 문제
> 문제점을 보완하기 위해 let 키워드를 지원 하게 되었다.

* 아래 코드 예시를 보면 함수 내부의 블록의 유효 범위가 다른게 보인다
* let은 블록 수준의 유효 범위를 지원하는걸 알수 있다.
```
    let names = "Giseong";
    function out() {
    let names = "jang";
    console.log(names);
    if (true) {
        let names = "Jang Gisenog"
        console.log(names)
    }
    }
    -------------------------------------
    "use strict";

    var names = "Giseong";
    function out() {
    var names = "jang";
    console.log(names);
    if (true) {
    var _names = "Jang Gisenog";
    console.log(_names);
    }
    }
    >"jang"
    >"Jang Gisenog"
```
> 2번쨰로 const 키워들 지원 하게 되었다.

* const는 선언될 때 한번 값이 할당되면 더이상 값을 변경할 수 없는 상수이다.
* const로 선언 당시 키값을 선언 하여 메모리를 할당하였기 때문에 속성 값에 대한 수정은 가능하다.
* 새로운 객체가 할당되는 것은 불가능하다.
```
    const object1 = { name: "giseong", age: 27 };

    object1.name = "JangGiseong"
    console.log(object1)
    object1 = { name: "Jang", age: 25 }
    console.log(object1)
---------------------------------------------
    "use strict";

    function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
    var object1 = {
      name: "giseong",
      age: 27
    };
    object1.name = "JangGiseong";
    ({
      name: "Jang",
      age: 25
    }), _readOnlyError("object1");
    console.log(object1);


    > {name : "JangGiseong , age:25}
    > Error
```

## 구조 분해 할당
* 배열이나 객체의 값들을 추출하여 한 번에 여러 변수에 할당할 수 있는 구조 분해 할당이라는 기능을 제공
* ES6이상 사용이가 가능하고 배열이나 객체의 값들을 한번에 추출 할때 사용한다.
> 아래 형태로 사용이 가능하다.
```
    let arr = [1, 2, 3, 4]
    let [a1, a2, a3] = arr
    console.log(a1, a2, a3)

    let obj = { name: "기성", age: 25 };
    let { name: n, age: b } = obj
    let { names, age } = obj
    console.log(n, b)
    console.log(names, age)
    >1,2,3
    >"기성",25
    >"기성", 25
    ------------------------------------
    "use strict";

    var arr = [1, 2, 3, 4];
    var a1 = arr[0],
      a2 = arr[1],
      a3 = arr[2];
    console.log(a1, a2, a3);
    var obj = {
      name: "기성",
      age: 25
    };
    var n = obj.name,
      b = obj.age;
    var name = obj.name,
      age = obj.age;
    console.log(n, b);
    console.log(name, age);
```

## 화살표 함수
* 기존의 함수 표현식을 간결화 한것이다.
* 화살표 함수는 함수 중첩이 되었을때 this로 인한 문제가 발생할 수 있다.
> 아래의 형태로 사용이 가능하다
```
    const test1 = function (a, b) {
        return a + b
    }
    const test2 = (a, b) => {
        return a + b
    }
    const test3 = (a, b) => a + b
------------------------------------------------
    "use strict";

    var test1 = function test1(a, b) {
      return a + b;
    };
    var test2 = function test2(a, b) {
      return a + b;
    };
    var test3 = function test3(a, b) {
      return a + b;
    };
```
## 객체 리터럴
* ES6 이상에서는 객체의 속성 표기법이 개성 되었습니다.
* 작성시 객체의 속성과 변수명이 동일하다면 변수명을 생략할 수 있다.
> 
```
    let names = "장기성";
    let age = 28;

    let obj1 = { names: names, age: age }
    let obj2 = { names, age }
    console.log(obj1)
    console.log(obj2)
----------------------------------
    "use strict";

    var names = "장기성";
    var age = 28;
    var obj1 = {
      names: names,
      age: age
    };
    var obj2 = {
      names: names,
      age: age
    };
    console.log(obj1);
    console.log(obj2);
    > {"names":"장기성" , age : 28}
    > {"names":"장기성" , age : 28}
```
## 템플릿 리터럴 
* 역따움표로 묶인 문자열에서 ${}을 이용해 동적으로 문자열을 끼워 넣을 수 있는 방법을 제공합니다.
* 개행 문자를 포함하여 여러줄로 작성할 수 있습니다.

## 전개 연산자
* ...연산자와 함께 객체 리터럴 또는 배열 리터럴에서 사용하고 객체 또는 배열의 값을 분해된 값으로 전달합니다.
>
```
    let obj1 = { name: "기성", age: 28 }
    let obj2 = obj1
    let obj3 = { ...obj1 }
    let obj4 = { ...obj1, email: "rltjd523@naver.com" }

    obj2.age = 44;
    console.log(obj1)
    console.log(obj2)
    console.log(obj3)
    console.log(obj4)
    console.log(obj1 === obj2)
    console.log(obj1 === obj3)
    > 44
    > 44
    > 28
    > 28
    > true
    > false
```

