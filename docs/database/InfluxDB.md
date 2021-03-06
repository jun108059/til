# InfluxDB란?

InfluxDB를 알아보기 전 시계열 데이터베이스가 무엇인지 먼저 살펴보자.

## 0.시계열 데이터베이스 (TSDB; Time-series Database)

데이터베이스하면 Oracle이니 MySQL이니 하면서 관계형 데이터베이스(RDB)만을 떠올리던 시절은 이미 한참 전에 지나갔다. 

이제는 **DynamoDB, MongoDB, Redis, Cassandra, Neo4j** 같은 Key-Value 스토어, 도큐먼트, 인-메모리, 그래프, Wide-칼럼, 공간 데이터베이스 등 다양한 NoSQL 데이터베이스를 하나의 시스템에 적어도 한 종류 이상을 흔하게 사용하는 시대가 되었다.

이런 다양한 종류의 데이터베이스 중에 시시각각 수집된 데이터를 시간 순서에 따라 저장하고 조회하는 기능을 제공하는 시계열 데이터베이스가 있다. 예전에는 관계형 DB의 테이블에 저장하고 집계 쿼리를 사용해서 데이터를 뽑았다면, 이제는 특화된 시계열 데이터베이스를 사용해서 효율적인 시계열 데이터 처리를 할 수 있다.

IT의 흐름상 빅 데이터의 시대인 만큼, 앞으로 시계열 데이터베이스의 쓰임이 많아질 것 같다. AWS에서는 완전관리형 시계열 데이터베이스 서비스인 Timestream을 제공하고 있음.

[https://aws.amazon.com/ko/timestream/](https://aws.amazon.com/ko/timestream/)

## 1.개요

- InfluxDB는 높은 쓰기 및 쿼리로드를 처리하도록 설계된 시계열 데이터베이스
- InfluxDB는 DevOps 모니터링, 응용 프로그램 메트릭, IoT 센서 데이터 및 실시간 분석을 포함하여 많은 양의 타임스탬프가 적용된 모든 유스케이스의 백업 저장소로 사용 됨
- InfluxDB는 data store를 위해 구글이 만든 key/value database library인 LevelDB를 사용
  - 따라서, 다음과 같은 LevelDB의 특징이 있다.
  > *기본적으로 데이터를 compression하기 때문에 읽기와 삭제에 다소 느릴 수 있다. 그러나 LevelDB와 다르게 SQL-like query language를 지원한다*  
  > *group by, join, 또 복수개의 time series를 merge하는 것도 가능하다*

## 2. 주요 특징

- 시계열 데이터를 위해 특별히 작성된 사용자 정의 고성능 데이터 스토어 TSM 엔진은 높은 수신 속도 및 데이터 압축을 허용함.
- 전체적으로 Go로 작성되었습니다. 외부 종속성 없이 단일 바이너리로 컴파일됨.
- 간단하고 고성능의 HTTP API 작성 및 쿼리.
- 집계된 데이터를 쉽게 쿼리 할 수 ​​있도록 맞춤 설정된 표현형 SQL과 유사한 쿼리 언어.
- 태그를 사용하면 빠르고 효율적인 쿼리를 위해 시리즈를 인덱싱 할 수 있음.
- 보존 정책은 유효하지 않은 데이터를 자동으로 만료시킴.
- 연속 쿼리는 자동으로 집계 데이터를 계산하여 자주 쿼리를 하는 것 보다 효율적임.
- distributed and scale horizontally하게 설계되었음. 따라서, cluster에 새로운 node만 추가하면 쉽게 scale-out 할 수 있음. (Enterprise 버전)

#### Reference

- https://andro-jinu.tistory.com/entry/InfluxDB1
- https://musma.github.io/2019/07/08/getting-started-with-influxdb-time-series-database.html
