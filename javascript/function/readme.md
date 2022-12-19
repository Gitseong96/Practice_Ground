# 함수 (Function)
* 함수는 프로그래밍 문법의 꽃이라 불리운다.....
* 코드의 집합을 나타내는 자료형이다.
* 함수 호출 : 함수를 사용하는 것
* 매개 변수 : 함수를 호출할 때 괄호 내부에 들어가는 자료
* 리턴 값 : 함수르 호출해서 최종적으로 나오는 결과를 리턴값

## 익명함수 
```
    기본형태
    function ()){}
```
* 이름이 없는 함수
* 함수를 사용하면 좋은점
    * 반복되는 코드를 정의 해놓고 필요할때 마다 호출하면 반복작업을 줄일 수 있다.
    * 긴 프로그램을 기능별로 나눠 여러 함수로 나누어 작성하면 모듈화로 전체 코드의 가독성이 좋아진다.
    * 기능별(함수별)로 수정이 가능하므로 유지보수가 쉽다.

## 선언적 함수
* 익명함수와 차이점은 함수에 이름이 붙어있다는 것
```
    function 함수이름(){}
    let 함수이름 = function(){}
    let 함수이름 = () => {}
```

## 콜백 함수 
* 자바스크립트의 함수는 하나의 자료형이므로 매개변수로 전달할 수 있다. 이런 형태를 콜백 함수라고 한다.(callback)

```
    function callBacktimes(callback){
        for (let i =0; i <3;i++){
            callback(i)
        }
    }

    callBacktimes(function(i){
        console.log(`${i}번쨰 함수 호출`)
    })
>> 0번쨰 함수 호출
>> 1번쨰 함수 호출
>> 2번쨰 함수 호출
```
* 콜백함수를 활용하는 함수 Ex_
1. forEach()
* 배열이 갖고 있는 함수로써 단순하게 배열 내부의 요소를 사용해서 콜백 함수를 호출해줍니다.
```
    const numbers = [273,52,103,32,57];
    numbers.forEach(function(value ,index,array){
        console.log(`${index}번째 요소 : ${value} `)
    })
    numbers.forEach((value , index , array)=>{
        console.log(`${index}번째 요소 : ${value} `)
    })
>0번째 요소 : 273 
>1번째 요소 : 52 
>2번째 요소 : 103 
>3번째 요소 : 32 
>4번째 요소 : 57 
```

2. map()
* 리턴값을 기반으로 새로운 배열을 만드는 함수입니다.
```
    let numbers = [273,52,103,32,57];
    numbers = numbers.map(function(value,index,array){
        return value * value
    })
    numbers = numbers.map((value , index , array)=>{
        return value * value
    })
    numbers.forEach(console.log)
> 74529 0 (5) [74529, 2704, 10609, 1024, 3249]
> 2704 1 (5) [74529, 2704, 10609, 1024, 3249]
> 10609 2 (5) [74529, 2704, 10609, 1024, 3249]
> 1024 3 (5) [74529, 2704, 10609, 1024, 3249]
> 3249 4 (5) [74529, 2704, 10609, 1024, 3249]
```

3. filter()
* 콜백하는 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수입니다.
```
    const numbers =[0, 1,2,3,4]
    const evenNumbers = numbers.filter(function(value){
        return value %2 ===0
    })
    console.log(`원래 배열 : ${numbers}`)
    console.log(`짝수 추출 : ${evenNumbers}`)
    >"원래 배열 : 0,1,2,3,4"
    >"짝수 추출 : 0,2,4"
```

## 타이머 함수 
* 자바스크립트에는 특정 시간마다 또는 특정 시간 이후에 콜백 함수를 호출 할수 있는 타이머 함수들이 있다.

|함수 이름|설명|
|------|-------------------|
|setTimeout|특정 시간 후에 함수를 한번 호출|
|setInterval|특정 시간마다 함수를 호출|
* 타이머를 종료하고 싶은 때는 clearTimeout() 와 clearInterval()를 사용

|함수 이름|설명|
|------|--------------------|
|clearTimeout|setTimeout()함수로 설정한 타이머를 제거합니다.|
|clearInterval|setInterval()함수로 설정한 타이머를 제거합니다.|

## 엄격 모드
* use strict라는 문자열을 블록 가장 위쪽에 배치해야 사용이 가능하다
* 엄격 모드를 통해 실수를 줄일 수 있는 방법이다
