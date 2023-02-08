### 자식 선택자
부모 > 자식
.box > p{

}
### 하위 선택자
div p {

}
```
    <div>
    <p> </p>
    <p> </p> 
    </div>
```

### 인접 선택자
앞선 태그 바로 다음 태그 css 삽입
h1 + h2 {

}

```
    <h1></h1>
    <h2></h2>
```

### 형제 선택자
h1~h2{

}


### font-size
% : 해당 속성의 상위 요소 속성값에 상대적인 크기를 가진다
em : 부모 요소의 테스트 크기에 상대적인 크기를 가진다.
rem : html 태그의 텍스트 크기에 상대적인 크기를 가진다.
vw : 뷰포트의 너비를 기준으로 상대적인 크기를 가진다.
vh : 뷰포트의 높이를 기준으로 상대적인 크기를 가진다.


### color
키워드 표기법 
RGB 표기법 
HEX 표기법


### font-family
글꼴 유형으로 작성 권장
font-family : 글꼴 BatangeChe , "Times New Roman"

### font-size
텍스트 크기를 변경하고 싶을 때 사용하는 속성
### font-weight 
텍스트의 굵기를 지정하는데 사용
숫자 표기법과 키워드 표기법으로 사용 가능
font-weigth : bold;
font-weight : 100;

### font-style
글꼴의 스타일을 지정할 때 사용
font-style : 속성값(normal , italic , oblique ...)

### font-variant 
영문 텍스트를 크기가 작은 대문자로 변경할 때 사용
font-variant : normal , small-caps

### text-align 
텍스트를 정렬할 때 사용
text-align : left  택스트를 왼쪽 정렬
text-align : right  텍스트를 오른쪽 정렬
text-align : center 택스트를 중앙 정렬
text-align : justify 텍스트를 양쪽 정렬

### text-decoration 
* a 태그에는 이미 underline이 적용 되어 있다.
text-decoration : none          텍스트 장식을 모두 지운다
text-decoration : line-through  텍스트 중간을 관통하는 선을 긋는다
text-decoration : overline      텍스트 위에 선을 긋는다
text-decoration : underline     텍스트 아래에 선을 긋는다


### letter-spacing 
자간을 조절할 때 사용
letter-spacing : normal | 크기

### line-height 
line-height : normal 
line-height : number
line-height : %
line-height : px


## 박스 모델 구성 
margin : 요소의 외부 여백을 의미
    margin 겹침 : 인접한 margin값이 둘중 더 큰 값으로 통일 되는것을 말한다.(형제 관계에 있는 요소에서 발생한다.)
border : 요소의 테두리를 의미
    border의 영역은 margin보다 안쪽 영역에 있다.
    broder-width: 테두리 굵기를 설정할 수 있다.
    border-style : 테두리의 모양을 설정할 수 있다.
padding : 요소의 내부 여백을 의미
    padding은 margin ,border 보다 안쪽 영역에 있다.margin 속성과 매우 비슷하다.
content : 요소의 내용을 의미
    box-sizing : content-box width,height 속성의 적용 범위를 content 영역으로 제한
    box-sizing : border-box width , height 속성의 적용 범위를 border 영역으로 제한


### 박스 모델의 성격과 dispaly 속성

- 블록 : p , div
요소의 너비가 콘텐츠 유무와 상관없이 항상 가로 한 줄을 다 차지하고, 여러번 사용시 무조건 줄 바꿈된다.
width,height,margin,padding 속성이 적용된다.

- 인라인 : a , span 
요소의 너비를 콘텐츠 크기만큼만 차지하고, 여러 번 사용시 수평 공간이 남아 있으면 한줄로 배치를 한다.
padding ,margin은 각각 왼쪽과 오른쪽에만 속성이 적용된다.

- 인라인 블록 
요소의 너비가 콘텐츠의 크기만크만 차지하지만 , 그외로 블록의 특징을 가지는 복합적인 특징을 갖는다.
width,height,margin,padding 속성이 적용된다.

display를 통해 박스 모델의 속성을 변경 가능하다.(block , inline ,inline-block)


### background-color
요소의 배경에 색상을 넣을 수 있다.

### backgroung-image
background-image:url('이미지 경로')
이미지를 사용할 수 있다.


### background-repeat
background-repeat:값
background-repeat:no-repeat : 이미지를 반복하지 않습니다.
background-repeat:repeat-x  : 이미지를 가로 방향으로 반복
bakcground-repeat:repeat-y  : 이미지를 세로 방향으로 반복  
background-repeat:repeat    : 이미지를 가로와 세로 방향으로 반복
background-repeat:round     : 이미지를 반복하되 이미지가 요소에 딱 맞도록 크기를 자동 조절
background-repeat:space     : 이미지가 잘리지 않도록 반복
이미지의 반복을 제한할 수 있다.

### background-size 
background-size: auto | cover | contain | 너비값
auto : 이미지 크기를 유지
cover : 이미지의 가로 세로 비율을 유지하면서 크기를 확대하거나 축소해 요쇼의 배경을 꽉 채운다.
contain : 이미지의 가로 세로 비율을 유지하면서 이미지가 배경 요소 안에 들어가도록 크기를 확대하거나 축소
너비값 : 이미지 크기를 직접 설정

이미지 크기를 지정해서 처리


### backgroung-position 
background-position : x,y
x: left ,center, right x축 방향의 위치를 지정
y: top ,center ,bottom y축 방향의 위치를 지정
값 : px,rem ,em ,% 위치를 직접 지정

이미지의 위치를 결정할 수 있다.

### background-attachment 
요소에 삽인된 이미지를 스크롤할 때, 이미지의 작동 방식을 정한다.
background-attachment : 값
background-attachment : local   삽인된 이미지가 요소와 웹 브라우저에서 모든 스크롤된다.
background-attachment : scroll  삽입된 이미지가 요소에서는 고정되지만 웹브라우저에서는 스크롤된다.
background-attachment : fixed   삽인된 이미지가 요소와 웹 브라우저 모두 고정된다.

## flex
1차원 방식으로 효과적으로 레이아웃을 설계할 수 있도록 고안된 스타일 속성
    1차원 방식 : 가로나 세로중 한 방향으로만 레이아웃을 설계하는 방식

### display
display : flex;

### flex-direction
플렉스는 기본적으로 flex-direction은 row로 적용되어 있다.
주측 방향에 따라 아이템이 배치 된.
flex-direction : row ;
flex-direction : row-reverse;
flex-direction : column;
flex-direction : column-reverse;

### flex-wrap
플렉스 아이템이 플렉스 컨테이너 영역을 벗어날 때 어떨게 처리할지를 결정할때 사용
flex-wrap : nowrap;
flex-wrap : wrap;
flex-wrap : wrap-reverse;

### justify-content 
justify-content : flex-start    주축 방향의 시작을 기준으로 정렬
justify-content : flex-end      주축 방향의 끝을 기준으로 정렬
justify-content : center        주측 방향의 중앙에 정렬
justify-content : space-between 플렉스 아이템 사이의 간격이 균일 하도록 정렬
justify-content : space-around  플렉스 아이템의 둘레가 균일 하도록 정렬
justify-conetnt : space-evenly  플렉스 아이템 사이의 양끝의 간격이 균일 하도록 정렬

### align-items , align-self
플렉스 아이템을 교차축 방향으로 정렬할 때 사용
align-items : stretch       교차축 방향으로 플렉스 아이템의 너비나 높이가 늘어난다.
align-items : flex-start    교차축 방향의 시작을 기준으로 정렬
align-items : flex-end      교차축 방향의 끝을 기준으로 정렬
align-items : center        교차축 방향의 중앙을 기분으로 정렬
align-items : baseline      플렉스 아이템의 baseline을 기준으로 정렬




### 뷰포트 
* 웹 페이지가 접속한 기기에서 보이는 실제 영역의 크기를 의미
* meta 태그의 name 속성값을 viewport로 지정하고 content 속성에 width=device-width값을 추가하면 뷰포트에 맞게 출력된다.content 속성값 
width         : 뷰포트의 너비를 설정 
height        : 뷰포트의 높이를 설정
initial-scale : 뷰포트의 초기 배율을 설정 ,기본값은 1이며 1보다 작으면 축소 값, 1보다 크면 확대 값 으로 설정된다
minimim-scale : 뷰포트의 최소 축소 비율을 설정 , 기본으로 0.25이 적용되어 있다.
mamimum-scale : 뷰포트의 최대 확대 비율을 설정 , 기본으로 5.0이 적용되어 있다,
user-scalable : 뷰포트의 확대 또는 축소 여부를 설정 yes or no로 지정 ,no 지정시 확대 또는 축소를 할 수 없다.

### 미디어 쿼리
@media <1> <2> and <3>{

}

1. not/only 두가지 선택이 가능 
    not 뒤에 오는 모든 조건을 부정
    only 미디어 쿼리를 지원하는 기기만 미디어 쿼리를 해석하라는 의미

2. mediatype
    생략할 경우 all 처리
    생략하지 않으면 반드시 다음에 and 연산자가 나와야 한다.
    타입 종류 
    all    : 모든 기기
    print  : 인쇄 장치
    screen : 컴퓨터 화면 장치 또는 스마트 기기
    speech : 스크린 리더기 같은 보조 프로그램으로 웹페이지를 소리 내어 읽어 주는 장치

3. media feature
    미디어 쿼리가 적용될 미디어 조건을 작성하는 위치
    min-width : 미디어 쿼리가 적용될 최소 너비
    max-width : 미디어 쿼리가 적용될 최대 너비

