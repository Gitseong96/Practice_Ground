# 정열 알고리즘
https://www.toptal.com/developers/sorting-algorithms
https://www.youtube.com/watch?v=kPRA0W1kECg

* javaScript 
    * sort 
    ```
    string ["a" ,"c" ,"b" "f"].sort();
    // ["a", "b" , "c" ,"f"] 
    [6,4,15,10].sort();
    // [10,15,4,6]
    function numC (num1, num2){
    return num1 - num2
    }
    [6,4,15,10].sort(numC)
    //[4,6,10,15] 
    ```


* 버블 정렬 : 오름차순으로 정렬

* 선택 정렬 : 배열을 순회 하면서  최솟값을 선택하고 맨 앞으로 배치하면서 정렬한다.
     ```
        1.  최솟값을 저장할 변수를 만든다.
        2.  다음 값과 비교
        3.1 작을 경우 해당값을 최솟값의 인덱스 저장 
        3.2 작지 않을 경우 진행
        4.  1,2,3 반복 (확인을 한 인덱스 이후의 값에 대한 최솟값을 확인)
     ```

* 삽입 정렬

* 합병 정렬

* 퀵 정렬

* 지수 정렬
