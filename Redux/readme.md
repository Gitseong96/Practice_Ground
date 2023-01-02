# Redux

>플럭스 (flux)
> * 대규모 애플리케이션에서 일관된 데이터 관리를 손쉽게 하기 위해 만들어진 단방향 데이터 처리 과정을 가지는 아키텍처
> * 가장 중요한 특징은 단방향 데이터 흐름이라는 점
> * 단일 디스패처를 이용
>   * 모니터링과 로깅을 하면 모든 액션의 흐름을 한곳에서 확인할 수 있어서 추적이 쉽다.


## 리덕스 
특징
* 댄 아브라모프라는 개발자가 만든 "자바스크립트 애플리케이션을 위한 예측 가능한 상태 관리 컨테이너" 입니다.
* UI 상태와 데이터 상태를 관리하기 위한 효과적인 도구
* 리액트뿐만 아니라 모든 자바스크립트 애플리케이션에서 이용이 가능
* 플럭스 아키텍처를 이용했지만 보다 발전시키면서 복잡성을 줄일 수 있도록 설계되었습니다.
* 플럭스의 기능과 핫 리로딩 (hot reloading) , 시간 여행 디버깅(time traverl devugging)과 같은 기능을 제공
    * 핫 리로딩 : 리덕스의 스토어는 상태만을 가지고 , 상태 변경의 기능은 리듀서라는 요소로 분리
    => 상태 변경로직이 개발 중에 변경되더라도 상태를 유지시킬 수 있다. 이기능을 핫로딩 기능이라고 한다.
    * 시간 여행 디버깅 : 리듀서를 이용해 상태를 변경할 때 기존 상태를 변경하지 않고 새로운 상태를 생성한다.
    => 불변성을 가지고 상태 변경은 시간 흐름에 따라 상태의 이력을 남기고 이력을 통해 상태의 변경을 손쉽게 추적할 수 있게해주고 어느 한 시점의 상태로 돌아가서 다시 기능을 확인할 수 있어 디버깅에 유리합니다. 이런 기능을 시간 여행 디버깅이라고 부른다.
* 리듀서를 이용해 상태를 변경할 때 기존 상태를 변경하지 않고 새로운 상태를 생성한다는 점

구성
* 스토어 ,리듀서 ,액션 생성자 , 뷰컴포넌트로 구성

동작 순서
1. 스토어의 상태와 액션 생성자를 이용한 디스패치 기능의 함수가 주입된 뷰 컴포넌트에서 이벤트 발생
2. 뷰 컴포넌트의 이벤트 핸들러는 속성으로 주입된 함수가 호출되며, 이때 action을 만들어서 스토어로 전달(dispatch)한다.
    * Ex : {type : "add",playload:{name:"기성",age:28}}
3. 스토어는 전달받은 액션과 자신의 상태를 리듀서 함수의 인자로 전달 
    * 리듀서 형식 : (state,action)=>{...}
4. 리듀서는 인자로 전달받은 상태는 변경하지 않고 action을 이용해 새로운 상태를 만든뒤 리턴
5. 스토어는 리듀서가 리턴한 상태를 새로운 상태로 설절
6. 스토어의 새로운 상태는 뷰 컴포넌트에 연결되어 있으므로 화면이 새롭게 렌더링

### 스토어 
구성
* 리덕스 아키텍처에서 스토어는 하나이다.
* 모든 액션은 이곳을 거쳐간다.
* 모든 상태를 관리 하므로 상태 변경 기능은 리듀서로 분리 되어있다.
장점
* 스토어만 관찰하면 디버깅에 필요한 상태 변경 이력과 데이터 흐름등 중요한 정보를 얻기 쉽다.


### 리듀서
특징
* 여러개 만들 수 있다.
* 상태 변경 로직을 갖고 있다.
* 스토어가 가지는 초기 상태를 전달해주는 기능을 한다.
* 계층 구조를 갖고 있다.
* 리듀서는 순수 함수여야 한다.

### 액션 생성자
* 객체 ,메시지를 생성하는 기능
* 스토어로 전달하는 기능




.