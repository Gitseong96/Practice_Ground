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
* depsList :  함수를 캐싱할 떄 의존성 배열 객체, 이 값이 변화가 없으면 함수를 새로 만들지 않는다.

### 고차함수 (higher-order-function)
* 다른 함수와 컴포넌트를 인자로 전달받거나 리턴하는 함수
* 공통 로직을 분리하고 재사용하기 위해 사용가능(에러처리...)


### Context API
* 컴포넌트 트리에서 속성을 전달하지 않고 필요한 데이터를 컴포넌트에 전달하는 방법
* Provider를 이용해 데이터를 공유 및 접근을 가능하게 한다.
```
    const Context = createContext<ContextValueType|null >(null)
    ~~
    const values = useContext({상태값})
    return (
        <Contxet.Provide value={values}>
        {props.childern}
        </Contxet.Provide>
    )
```


## 리액트 라우터
* 리액트 기반의 강력한 라우팅 라이브러리 
* 화면에 렌더링하는 컴포넌트와 URL 경로를 동기화하면서 새로운 화면과 흐름을 애플리케이션에 빠르게 추가할 수 있는 기능 제공
```
    <Router>
        <Routes>
            <Route path="/" element ={<One/>}></Route>
            <Route path="/home" element ={<Two/>}></Route>
            <Route path="*" element ={<Erorr/>} ></Route>
        </Routes>
    </Router>
    -----------------------------------------------------
    const Link = ()=>{
        return(<>
            <div>
            <Link to="/" >One</Link>
            </div>
            <div>
            <Link to="/home" >Two</Link>
            </div>
        </>
        )
    }

```
* Routes : Route 묶음
* Route : 직접적으로 URL 경로와 렌더링할 컴포넌트나 요소를 지정하는 기능 제공
    * path : 경로
    * element : 지정된 JSX 요소에 직접 속성을 전달할 수 있다.
    * element={<컴포넌트 props={prop} />}
*  Link : to = {이동시킬 경로}
### URL 파라미터
* 동적으로 매번 다른 값이 포함되고, 컴포넌트를 실행할 떄 URL 경로의 동적인 값을 받아 이용할때 이용
```
    <Route path="/list/:id element={<List/ list={lists}>}>
    <Route path="/list/:id/:name element={<List/ list={lists}>}>
```
* :id와 같이 URL 경로의 파라미터 이름을 지정
* 파라미터의 값은 element로 렌더링하는 컴포넌트에서 받아낼 수 있다.
```
    type ListParamsType ={
        id?:string
    }
    const {id} = useParams<ListParamsType>()
```
* 타입을 미리 정의하고 사용
* useParams 훅을 이용 id값을 받아 낸다.
* URL은 기본적으로 문자열이므로 문자열 타입으로 파라미터 타입 지정
* 전달 파라미터르 여러개 사용가능

### 중첩 라우트 
* 컴포넌트에 의해 렌더링된 컴포넌트에 기존의 중첩된 Route의 컴포넌트가 나타나도록 구성하는 적용방법이다.
* 아래 형태로 적용이 가능하다.
```
    <Route path="/lise" element ={<List list={list}/>}/>
    <Route path="/lise/:id" element ={<List list={list}/>}/>
    ============================================================
    <Route path="/list" element={<List list={lists} />} >
        <Route path=":id" element={ListDetail list={list}/}>
    </Route>
```

## 리액트 라우터 hook
> Hooks

|Hooks| 설명|
|-------------------|----------------------------------------------------------------------|
|useMatch()|현재 요청 경로가 지정한 경로 패턴에 매칭되는 경우 PathMatch객체 리턴|
|useParams()|URL 파라미터값을 포함하는 Params 객체 리턴|
|useSearchParams()|현재 요청의 쿼리 문자열을 읽거나 수정할 수 있다.|
|useLocation()|현재 요청된 경로 정보를 포함하는 Location 객체 리턴|
|useNavigate()|화면 이동을 위한 Navigate함수를 리턴|
|useOutletContext()|상위 경로에 상태를 저장하고 , Outlet 컴포넌트에 랜더링하는 자식 컴포넌트에서 상태에 접근할수 있도록 해주는 함수|

### useMatch 
* 현재 요청된 URL 경로가 인자로 전달한 경로 패턴과 매칭하는지 확인하고 PathMatch 객체 리턴
```
    const pathMatch = useMatch(경로)
```
* <Route /> 컴포넌트의 path 속성에 지정하던 경로 형태를 전달 
* pathMatch의 객체 속성
    * params : URL 경로 파라미터
    * pathname : 요청된 경로
    * pattern : 요청된 경로 패턴

### useSearchParams 
* 요청 시 전달하는 퀴리 문자열 정보를 읽어내거나 설정하는 기능
```
    const [ searchParams , setSearchParams ]=useSearchParams()
```
* searchParams : 퀴리 문자열을 읽을 수 있는 전용 객체
* setSearchParams : 쿼리 문자열을 설정할 수 있는 기능을 제공하는 함수
* 

### SPA(single page application) 
* 하나의 HTML페이지로 여러 개의 화면을 전활할 수 있는 내비게이션 기법
* 요청된 URL 경로를 이용해 화면을 전환하기 때문에 화면의 전환을 위해 웹 서버로부터 새로운 페이지를 로딩하지 않는다.
* 화면 전환에 필요한 모든 코드는 첫 화면을 로딩할 때 한꺼번에 서버에서 로딩한다.
