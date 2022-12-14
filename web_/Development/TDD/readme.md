# TDD(Test Driven Development)
* TDD(테스트 주도 개발): 소프트웨어를 개발하는 여러 방법론 중하나
* 반복 테스트를 이용한 소프트웨어 방법론으로 작은 다위의 테스트 케이스를 작성하고 이를 통과하는 코드를 추가하는 단계를 반복하여 구현
* 짧은 개발 주기의 반복에 의존하는 개발 프로세스
* 애자일 방법론 중 하나인  eXtream Programming(XP)의 ‘Test-First’ 개념에 기반을 둔 단순한 설계를 중요시한다

절차 
1. 제품의 기능 구현을 위한 코드와 별개로, 해당 기능이 정상적으로 작동하는지 검즘하는 테스트 코드를 작성한다
2. 테스트가 실패할 경우 , 테스트를 통과하기 위한 최소한으로 코드를 개선
3. 최종적으로 테스트에 성공한 코드를 리팩토링

효과 
- 기능 단위 테스트 , 코드가 모두 완성되어 프로그래머의 손을 떠나기 전에 피드백을 받는 것이 가능하다.
- 불안정성과 불확실성을 지속적으로 해소해준다.
- 기능 단위로 테스트를 진행하기 때문에,문제가 발견되지 않은 코드에 영향을 줄수있는 오버 코딩을 하지 않는다.
- 개발 과정이 테스트 코드로 남기 때문에, 과거 의사 결정을 쉽게 상기할 수 있다.
    * 테스트 코드를 작성하는 과정에서 히스토리가 남는다.

장점 
- 튼튼한 객체 지향적인 코드 생산
    * TDD는 코드의 재사용 보장을 명시하므로 TDD를 통한 소프트웨어 개발 시 시능 별 철저한 모듈화가 이뤄진다.
    * 종속성과 의존성이 낮은 모듈로 조합된 소프트웨어 개발을 가능하게 하며 필요에 따라 모둘을 추가하거나 제거해도 소프트웨어 전체 구조에 영향을 미치지 않게 된다.

- 재설계 시간의 단축
    * 테스트 코드를 먼저 작성하기 때문에 개발자가 지금 무엇을 해야하는지 분명히 정의하고 개발을 시작하게 된다.
    * 테스트 시나리오를 작성하면서 다양한 예외사항에 대해 생각해 볼 수 있다.
    * 개발 진행중 소프트웨어의 전반적인 설계가 변경되는 일을 방지할 수 있다.

- 디버깅 시간의 단축
    * 유닛 테스팅을 하는 이점
    * TDD의 경우 자동화 된 유닛 테스팅을 전제하므로 특정 버그를 손쉽게 찾아낼 수 있다.

- 테스트 문서의 대체 가능
    * TDD를 하게 될 경우 테스팅을 자동화 시킴과 동시에 보다 정확한 테스트 근거를 산출 할 수 있다

- 추가 구현에 용의함
    * TDD의 경우 자동화된 유닛 테스팅을 전제하므로 테스트 기간을 획기적으로 단축시킬 수 있다.


단점
- 생상성 저하
    * 처음부터 기능 코드와 테스트 코드를 짜야하고 중간 테스트를 하면서 고쳐나가야하기 때문이다.
    * TDD 방식은 일반적인 개발 방식에 비해 10~30% 정도 시간이 든다

- 자신의 개발 방식을 많이 바꿔야 한다.
- TDD 특유의 틀이 있다.
    * 단위 테스트 프레임워크를 써서 개발해야한다고 생각한다,
    * 규칙에 얽매인다.
    * 도구와 규칙에 맞춰 하려해서 TDD가 어려워진다.











<a href="https://hanamon.kr/tdd%EB%9E%80-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A3%BC%EB%8F%84-%EA%B0%9C%EB%B0%9C/">TDD란? 테스트 주도 개발</a>