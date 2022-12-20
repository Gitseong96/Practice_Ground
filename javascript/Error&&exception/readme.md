# Error
* 에러의 종류
    * 프로그램 실행 전에 발생하는 오류 : 구문오류(syntax error) 
    * 프로그램 실행 중에 발생하는 오류 : 런타임오류(runtime error) , 예외(exceotion)

## 구문오류
* 괄호의 짝을 맞추지 않았는지 문자열을 열고 닫지 않았을때 발생하는 오류
* 구문 오류가 있으면 웹 브라우저가 코드를 분석조차 하지 못해 실행 되지 않습니다.
```
    console.log("hi"

    >Uncaught SyntaxError : missing ) after argment list 
``` 



## 예외
* 실행중 발생하는 오류
* Syntax Error 를 제외한 모든 에러들을 예외라고 지칭한다 (TypeError,ReferenceError , RangeError) 
```
    console.rog("hi")
    > Uncaugth TypeError : console.rog is not a function 
```

## 기본 예외 처리
* 조건문을 사용해서 예외가 발생하지 않게 만드는것을 말함
```
    if(특정 조건){
        retrun 
    }else {
        console.log("특정조건에 부합하지 않습니다.")
    }
```

## 고급 예외 처리
* try catch finally 구문
* finally 구문을 사용하는 이유
    * finally 구문은 예외 발생 여부와 상관없이 실행해야 하는 작업이 있을때 사용
    * return을 사용할 경우 함수가 종료 되기 때문
    * break , continue를 만날경우 
```
    기본형태
    try{
        예외가 발생할 가능성이 있는 코드
    }catch (exceotion){
        예외가 발생했을 때 실행할 코드
    }finally{
        무조건 실행할 코드 => 필요할 경우에만 사용
    }
```
* Ex1
```
    try{
        Ex.sayHllo() // 존재하지 않는 객체
    }catch (error){
        console.log(error)
    }
    >>    object error
```
* Ex2
```
    try{
        Ex.sayHllo()
    }catch (error){
        console.log(error)
    }finally{
        console.log("동작을 완료했습니다.")
    }
    > object error
    > "동작을 완료했습니다."
```

## 예외 객체
* try catch 문 사용중 catch문 안에 error 부분을 나타낸다.
* 예외 객체에는 에러의 이름 및 에러의 내용이 들어있다.
* name , message를 통해 내용을 확인 또는 알려줄 수 있다.
|속성|설명|
|----|----|
|name|예외 이름|
|message|예외 메시지|

```
    try{
        Ex.sayHllo() // 존재하지 않는 객체
    }catch (error){
        console.log(`에러 이름:${error.name} , 에러 내용 : ${error.message} `)
    }
    >"에러 이름:ReferenceError , 에러 내용 : Ex is not defined "
```
* throw 구문을 통해 예외를 강제로 발생시킬 수 있다.