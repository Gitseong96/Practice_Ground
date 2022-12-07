## 1. Big O 표기법

```
f(n) = O(f(n)=n)
f(n) = O(f(n)=n제곱)
f(n) = O(f(n)=1)
f(n) = O(f(n)= nlog n)
```
* 알고리즘 평가 기준 :실행 시간이 어떻게 변하는지 설명하는 공식적인 방식
    * 시간 복잡도 : 컴퓨터가 처리해야하는 연산 갯수를 세는 방법 , 입력값에 따라 실행시간이 변하는 관계를 나타낸다
    * 공간 복잡도 : 알고리즘 자체가 필요로 하는 공간
 
필요성  <br/>
 여러가지 코드를 일반적으로 서로 비교하고 성능을 평가하는 방법<br/>
코드를 분류하거나 비교 할 수 있는 시스템  <br/>
속도? 메모리를 얼마나 사용했는지?코드를 길이? 
    
## 1.2 객체 Big O
```
Insertion -   O(1)
Removal -   O(1)
Searching -   O(N)
Access -   O(1)


Object.keys -   O(N)
Object.values -   O(N)
Object.entries -   O(N)
hasOwnProperty -   O(1)
```

## 1.3 배열 Big O
```
Searching -   O(N)
Access -   O(1)

push -   O(1)
pop -   O(1)
shift -   O(N)
unshift -   O(N)
concat -   O(N)
slice -   O(N)
splice -   O(N)
sort -   O(N * log N)
forEach/map/filter/reduce/etc. -   O(N)
```

## 2. 재귀함수
* 어떤 종료점에 도달할 때까지 더 작은 부분이나 변경되는 부분을 반복적으로 수행하는 것 

* 자기자신을 호출하는 함수

* 호출 스택 : 자바스크립트의 보이지 않는 곳에서 작동하는 정적인 데이터 구조 ,

* 
* pure recursion (순수 재귀)
 
* helper method recursion (메소드 재귀)