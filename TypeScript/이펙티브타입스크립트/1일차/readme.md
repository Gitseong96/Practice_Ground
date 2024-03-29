# 타입스크립트와 자바스크립트의 이해 관계 

> 타입스크립트는 문법적으로 자바스크립트의 상위 집합이다.
> 정적 타입 
> 깔끔하고 정확하고 명료한 코드작성을 위해 제대로 된 타입 설계는 필수
>> 자바스크립트 프로그램에 문법 오류가 없다면, 유효한 타입스크립트 프로그램이라고 할수 있다.
>> 그런데 자바스크립트 프로그램에 어떤 이슈가 존재한다면 문법오루가 아니라도 타입 체커에게 지적당할 가능성이 높다.
* 문법의 유효성과 동작의 이슈는 독립적인 문제이다.
* 모든 자바스크립트 프로그램이 타입스크립트라는 명제는 참이지만, 그반대는 성립하지 않습니다.
    * 타입스크립트는 별도의 문법을 가지고 있기 때문에 일반적으로는 유요한 자바스크립트 프로그램이 아니다.
    * 이는 타입스크립트가 타입을 명시하는 추가적인 문법을 가지기 때문이다.
* 타입스크립트 타입 시스템은 전반적으로 자바스크립트 동작을 모델링 한다.
    * 자바스크립트에서는 허용하지만 타입스크립트에서는 문제가 되는 경우가 있다.
## 타입스크립트 목표
- 런타임에 오류를 발생기킬 코드를 미리 찾아내는것
- 오류가 발생하지는 않지만 의도와 다르게 동작하는 코드를 찾아내는것
- 오류가 적은 코드 작성


# 타입스크립트 설정 이해하기 
- 타입스크립트 컴파일러는 매우 많은 설정을 가지고 있다.
- 타입스크립트는 어떻게 설정하느냐에 따라 완전히다른 언어처럼 느껴질 수 있다.
- 타입스크립트 설정은 커맨드 라인을 이용하기보다는 tsconfig.json을 사용하는게 좋다.
- 타입스크립트에서 엄격한 체크를 하고 싶다면 strict 설정을 고려해야 한다.
- 설정 : 대부분의 언어에서는 허용하지 않는 고수준 설계의 설정
    - 소스파일을 찾을지
    - 어떤 종류의 출력을 생성할지 제어하는내용 
    - 언어 자체의 핵심 요소들을 제어하는 설정
```
    tsc --init 통해 설정파일을 만들 수 있다
```
* noImplicitAny : 변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어
    * 타입스크립트는 타입 정보를 가질 때 가장 효과적이기 때문에, 되도록이면 noimplicitAny를 설정해야 한다.

* strictNullChecks : null 과 undefined가 모든 타입에서 허용되는지 확인하는 설정
    * null과 undefiend 관련된 오류를 잡아 내는 데 많은 도움이 된다


# 코드 생성과 타입이 관게없음을 이해하기
- 타입스크립트 컴파일러의 두가지 역활
    - 최신 타입스크립트/자바스크립트를 브라우저에서 동작할 수 있도록 구번전의 자바스크립트로 트랜스파일합니다.
    - 코드의 타입 오류를 체크

- 타입 오류가 있는 코드도 컴파일이 가능하다.
    - 컴파일은 타입 체크와 독립적으로 동작하기 때문에, 타입 오류가 있는 코드도 컴파일일 가능하다.
    -  문제가 될 만한 부분을 알려 주지만, 그렇다고 빌드를 멈추지는 않습니다.
* 오류가 있을 때 컴파일하지 않으려면, noEmitOnError를 설정

- 런타임에는 타입 체크가 불가능하다.
    - 실제로 자바스크립트로 컴파일되는 과정에서 모든 인터페이스,타입,타입 구문은 제거된다.
    - 타입 정보를 유지하는 방법으로 런타임에 접근 가능한 타입정보를 명시적으로 저장하는 "태그"기법을 사용
    ```
        interface A{
            aa:string;
        }
        interface B{
            bb:string;
            cc:number;
        }
        type ABC = A|B 
    ```

- 타입 연산은 런타임에 영향을 주지 않습니다.

- 런타임 타입은 선언된 타입과 다를 수 있다.
- 타입스크립트 타입으로는 함수를 오버로드할 수 없다.
    - 타입스크립트에서는 타입과 런타임의 동작이 무관하기 때문에 , 함수 오버로딩은 불가능하다.
    - 두개의 같은 함수를 선언하고 컴파일러할 시, 제거 되고 구현체만 남게 된다.

- 타입스크립트 타입은 런타임 성능에 영향을 주지 않습니다.
    - 타입과 타입 연산자는 자바스크립트 변환 시점에 제거되기 때문에, 런타임의 성능에 아무런 여향을 주지 않습니다.
    - 타입스크립트는 런타임 오버헤드가 없는 대신 , 빌드타임 오버헤드가 있다.
    - 타입스크립트는 컴파일러 성능을 매우 중요하게 생각하고, 컴파일은 일반적으로 상다히 빠른 편이며 특히 증분 빌드 시에는 더욱 체감된다.
    - 오버헤드가 커피면 , 빌드 도구에서 "트랜스파일만(transpile only)"을 설정하여 타입 체크를 건너뛸 수 있다.

# 구조적 타이핑에 익숙해지기 
- 자바스크립트는 본질적으로 덕 타이핑 기반이다.
    - 만약 어떤 함수의 매개변수값이 모두 제대로 주어진다면 , 그값이 어떻게 만들어졌는지 신경 쓰지 않고 사용한다.
    - 타입스크립트는 이런 동작 , 즉 매개변수 값이 요구사항을 만족한다면 타입이 무엇인지 신경쓰지 않는 동작을 그대로 모델링한다.
* 구조적 타이핑을 제대로 이해한다면 오류인 경우와 오류가 아닌 경우의 차이를 알 수 있다.(더욱 견고한 코드 작성이 가능)
- 구조적 타이핑을 사용하면 유닛 테스팅을 손쉽게 할 수 있다.

# any 타입 지양하기
- 타입스크립트의 타입 시스템은 점진적이고 선택적이다.
    - 점진적 : 코드에 타입을 조금씩 추가할 수 있기 때문이다.
    - 선택적 : 언제든지 타입 체커를 해체할 수 있기 때문이다.
> as any를 추가한다면 일반적인 타입오류를 해결할 수 있다.
> 하지만 일부 특별한 경우를 제외하고 any를 사용하면 타입스크립트의 수많은 장점을 누릴 수 없게 된다.
> 사용을 하게 되더라도 위험성을 인지하고 사용해야한다.

- any 타입에는 타입 안정성이 없다.
- any는 함수 시그니처를 무시해 버린다.
    - 함수를 작성할 때는 시그니처를 명시해야 합니다. 호출하는 쪽은 약속된 타입을 함수는 약속된 타입을 출력을 반환해야한다.
    > any 타입을 사용하면 이런 약속을 어길 수 있다.
- any 타입에는 언어 서비스가 적용되지 않는다.
- any 타입은 코드 리팩터링 때 버그를 감춥니다.
- any는 타입 설계를 감춰버린다.
    애플리케이션 상태 같은 객체를 정의하려면 꽤 복잡하다. 상태 객체안에 있는 수많은 속성의 타입을 일일이 작성해야하는데 any 타입을 사용 하면 간단하게 끝낼 수 있다. 하지만 타입 설계가 불분명해진다.
- any는 타입시스템의 신로도를 떨어뜨린다.
- any 타입을 매개변수에 사용하면 타입 체커는 속절없이 무력해집니다.