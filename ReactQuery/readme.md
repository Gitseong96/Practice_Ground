# React-Query
======================
### 서버 상태를 관리하는 라이브러리


1. QueryClient 
    * 캐시와 상호작용을 하는 객체 
    * queryClient를 통해 전체적으로 옵션을 설정 할수있다 .

2. QueryClientProvider 
    *   QueryClient의 값을 연결하고 제공하는 제공자
    *    client 값으로  생성한 queryClient을 준다

3. ReactQueryDevtools : 현재 캐시에 있는 데이터를 알려주기 때문에 > 디버깅에 도움을 준다 
    *   option : initialIsOpen={false} 

4. useQuery : 서버로부터 데이터를 가져올때 사용한다
* option 
    * querykey :  캐싱 관리,re-fetch를 트리거 , 배열의 형태로 구성요소로 문자열 숫자 변수사용이 가능 

    * queryFn :  Query를 사용하기 위해 전달되는 함수

    *  retry : 실패 했을때 요청 횟수를 지정하는 옵션이다. ,boolean | number 타입을 갖는다
        * false => 재시도 x | true 무한정으로 시도 | number 지정한 횟수 만큼

    *  staleTime : 쿼리가 fresh에서 stale로 전환될 때까지의 유효 기간  , number | Infinity
        * Infinity statleTime이 무한정으로 데이터가 살아있음 | number 지정된 시간만큼 데이터가 살아있음 

     * cacheTime : 비활성 쿼리가 캐시에서 제거될 때까지의 시간 ,기본값은 5분 , number | Infinity
        * Infinity 캐쉬가 무한정으로 살아있음 | number 지정된 시간만큼 캐쉬가 살아있음

    *   onSuccess : 쿼리가 새데이터를 성공적으로 가져올 때 실행되는 옵션 ,() => void

    * onError : 쿼리에 오류가 발생 했을때 실행이되고 오류를 전달하는 함수 , () => void

    * select : 쿼리함수의 반환값을 변화 또는 선택할때 사용하는 함수 , 중간에 가로챈다? 
* return 
    * data : 쿼리가 성공적으로 해결된 데이터값 (마지막으로)


    * status : isLoading : Boolean  , isSuccess : Boolean , isError : Boolean 값을 포함하고 있다.

    * error : 오류가 발생했을 경우의 객체값 , null | object

    * failureReason : 쿼리 재시도 실패 이유 , null | object 

    * remove : 캐시에 쿼리를 제거하는 기능 , () => void 




5. useMutation : 서버에 데이터를 변경할때 사용한다.
