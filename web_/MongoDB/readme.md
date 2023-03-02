# server 세팅

1. install   
server 폴더 생성
dotenv :환경 변수 관리 
express : 서버 관리
mongoose : 프로젝트 주요 DB
``` 
    $ mkdir server && cd server
    $ npm init -y
    $ npm install express dotenv mongoose
```

2. connection DB
```
    # port number
    PORT=4500
    # MongoDB URI
    MONGO_URI=mongodb://localhost:27017/<db-name>
```

