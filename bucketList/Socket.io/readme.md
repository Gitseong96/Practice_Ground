# socket.io
클라이언트와 서버 간의 짧은 대기 시간 , 양방향 및 이벤트 기반 통신을 가능하게 하는 라이브러리 입니다.
webSocket 프로토콜 위에 구축되었으며 HTTP 긴 폴링 또는 자동 재연결에 대한 폴백과 같은 기능을 추가로 지원한다
클라이언트가 연결 해제되면 패킷을 자동으로 버퍼링하고 다시 연결하여 전송한다.

<a href="https://socket.io/docs/v4/server-api/">server</a>
<a href="https://socket.io/docs/v4/client-api/">client</a>


폴링 : 일정 주기고 데이터를 주는 방식
롤 폴링 : 지속적인 커넥션을 유지하는 방식
패킷 : 클라이언트가 서버로 요청 할때, 보내는 데이터,헤더와 바디
