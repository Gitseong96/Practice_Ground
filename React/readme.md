# 리액트
* 페이스북에서 만든 웹 UI 작성을 위한 라이브러이다.
* 기본적으로 단일 페이지 어플리케이션 (SPA) 방식을 사용한다.
* MVC (model , View , Controller) 중 View에 집중한 라이브러이다.
* 리액트는 가사의 DOM을 사용한다. (Virual DOM)
* UI 영역의 재사용을 위해 캡슐화된 컴포넌트를 만들고, 조합하여 UI를 만든다.
    * 컴포넌트의 로직은 자바 스크립트로 구현한다.
    * JS의 확장 문법인 JSX(Javascript XML)사용한다.

## 특징
1. 상태관리와 단방향 데티터 바인딩 
* Vue & Angular 는 양방향 데이터 바인딩이다.
* 리액트는 상태가 바뀌면 뷰가 변한다.
* 리액트는 event handler를 통해 상태를 변화 시켜 뷰와 상호 작용한다.
    * 이벤트를 통해 변경되기 때문에 상태 변경과정에 대해 예측과 추적이 용이하다.

2. 컴포넌트 기반의 개발 
* 특정 부분과 기능을 컴포넌트 단위로 개발이 가능하다.
* 다른 요소들과 독립적인 컴포넌트이므로 재사용성이 뛰어나다.
* 최종적으로 UI를 위한 DOM 요소를 생성하고 조작한다.

## 상태
* 컴포넌트가 보유하고 관리하는 데이터
* 상태의 변경은 보유한 컴포넌트에서만 수행한다.
* 상태 값을 자식 컴포넌트로 전달할 경우 자식에서 상태값을 변경해서는 안된다.
* useState() 훅으로 상태를 초기화할 수 있다.

## 이벤트
* 리액트와 HTML DOM에서 이벤트를 처리하는 방법과 조금 다르다.
* HTML DOM 이벤트를 추상화 하여 여러 브라우저에서 동일한 특성을 이용할 수 있도록 이벤트를 정규화 함
* 사용시 주의사항
    * 이벤트 지정시 카멜 표기법을 사용
    * 이벤트와 함수를 연결할 때는 {}사용
    * 문자열은 지정할 수 없지만 익명함수를 통해전달이 가능
    * DOM 요소가 아닌 컴포넌트에 이벤트를 설정할 수 없다.

## 컴포넌트
* 상태와 상태를 변경하는 로직과 속성과 이벤트를 정의하는 컴포넌트를 분리해서 만들어야한다.

## React Hooks

### useState 
* 함수 컴포넌트에서 상태를 이용하기 위해 사용하는 훅
```
    const [getter ,setter] =useState<StateType>(initiaValue)
```
* getter : 읽기 전용 속성
* setter : 상태 변경 속성
* StateType : 상태 데이터 타입
* initialValue : 상태 초기 데이터

### useEffect
* class 문법의 생명주기 기능을 사용하기 위한 훅
```
    useEffect(EffectOption ,[depsList])
```
* EffectOption : 필수 옵션, 콜백함수 
* depsList : 의존성 배열(특정 데이터 변경에 대해 작동하게 도와준다.)

### useReducer 
* 복잡한 상태를 관리 할때 사용
* 상태관련 로직을 분리할 수 있게 도와준다.
* 유사한 상태 관리 기능을 공유할 수 있다.
* 불변성을 가지는 상태 변경을 강제하게 되므로 상태 변경을 추적하기 용이하다.
```
    (state , action)=>{
        return newState
    }
```
* state와 action을 이용해 연산을 수행후 새로운 상태(newState)를 리턴


### useRef
* 훅의 리턴값은 값에 대한 참조를 포함하는 객체이다.
* 상태가 아닌 데이터 관리이다.
* current 속성을 통해 접근할 수 있다.
```
    const refObject = useRef(initalValue);
```
* initalValue : 참조 객체로 주어질 초깃값


### useMemo
* 함수가 호출되고 연산된 리턴값을 캐싱하여 재사용
* 캐싱되는 것은 함수를 호출한 후의 리턴값이다.
```
    const memo = useMemo<T>(factory:()=>T,depsList)
```
* factory : 캐싱할 값을 만들어내는 함수
* 의존성 배열 객체로 배열의 값이 바뀌기 전까지 캐시를 유지한다.


### useCallback
* 컴포넌트 내부의 함수를 캐싱하고, 렌더링할 때마다 함수가 생성되지 않게 재사용
* 캐싱되는 것은 컴포넌트 내부의 함수이다.
```
    const callback =useCallback(callback ,depsList)
```
* callback :  캐싱하려는 대상 함수
* depsList :  함수를 캐싱할 떄 의존성 배열 객체, 이 값이 변화가 없으면 함수를 새로 만들지 않는다

### 고차함수
* 다른 함수와 컴포넌트를 인자로 전달받거나 리턴하는 함수
* 공통 로직을 분리하고 재사용하기 위해 사용가능