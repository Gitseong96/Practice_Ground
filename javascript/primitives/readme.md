# 기본 자료형
* 프로그래밍에서 프로그램이 처리할 수 있는 모든것을 자료라고 부르며, 자료 형태에 따라 나눠 놓은 것을 자료형이라고 한다.
* 기본적인 자료형에는 숫자 , 문자, 불리언의 형태가 있다.



## 문자열 자료형
* "" ,'', ``, 안에 문자를 넣어 문자열을 만들 수 있다.
* 문자열 안에 ""를 쓰고 싶다면 , "안녕,난''기성이야'" 이런 형태를 유지해서 사용을 해야한다 
* \n : 줄바꿈
* \t : 탭
* \\ : 역슬래시 자체를 나타냄
```
"hello world "
"hi 'gisoneg' !!" 
```
* 문자열 연산자
    * 문자열 사이에 덧셈 기호를 사용하면 문자열을 연결할 수 있다.

```
console.log("장" + "기성")
 =>  "장기성"
```


## 숫자 자료형
* 자바 스크립트는 소수점이 있는 숫자와 없는 수자를 모두 같은 자료형으로 인식합니다.
* 기본적인 사칙 연산을 할수 있다.
* 연산자 우선순위를 고려하여 연산한다.
```
2*4-2 = 6
2*(4-2) = 4
```
* 나머지 연산자 기능도 사용이 가능하다.
```
10 % 2 = 0
10 % 3 = 1
10 % 4 = 2
```


## 불 자료형
* 참과 거짓 값을 표현할 때 사용
* true 와 false 두 형태이다.

|연산자|설명|
|----|------|
|===|양쪽이 같다.|
|!==|양쪽이 다르다.|
|>|왼쪽이 더 크다|
|<|오른쪽이 더 크다|
|>=|왼쪽이 더 크거나 같다|
|<=|오른쪽이 더 크거나 같다|

* 부정 연산자
```
! false
> true
!true
>false
```

* 논리 연산자 

|연산자|설명|
|--|----|
|&&|논리곱 연산자|
||||논리합 연산자|



## 상수
* "항상 같은 수"라는 의미로 한번 붙이면 값을 수정할 수 없음
* 내용을 다시 꺼낼 필요가 없으니 쌓을 수 있어서 저장 효율이 좋다.
* 변하지 않는 값을 저장하는 식별자
* 상수를 만들 때 const 키워드를 사용한다
* 상수를 선언 할때 만드시 값을 함께 지정해주어야 한다

```
    const 이름 = 값
```

## 변수
* "변할 수 있는 수"라는 의미로 값을 수정할 수 있다.
* 변하는 값을 저장하는 식별자
* 수시로 넣고 뺴야 하다보니 위를 막을 수 없어 저장 효율이 나쁨
* 변수를 만들 때는 let 키워드를 사용한다
```
let 이름 = 값
```

* 변수에 적용할 수 있는 연산자


|복합대입 연산자|설명|사용 예| 의미|
|---------|---------------|-----|-----|
|+=|기존 변수의 값에 값을 더함|a += 1|a = a+1|
|-=|기존의 변수의 값에 값을 뺌|a -= 1|a = a-1|
|*=|기존의 변수의 값에 값을 곱함|a *= 1| a = a * 1|
|/=|기존의 변수의 값에 값을 나눔|a /= 1|a = a / 1|
|%=|기존의 변수의 값에 나머지를 구함|a %=1|a =a % 1|


|증감 연산자|설명|
|----|----------|
|변수++|기존의 변수 값에 1을 더함(후위)|
|++변수|기존의 변수 값에 1을 더함(전위)|
|변수--|기존의 변수 값에 1을 뻄(후위)|
|--변수|기존의 변수 값에 1을 뻄(후위)|


## undefined 자료형
* 값이 없는 변수



