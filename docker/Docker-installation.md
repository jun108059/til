# 도커 설치하기
도커는 리눅스 컨테이너 기술이므로 macOS나 windows에 설치할 경우 가상머신에 설치가 됨  
> 리눅스 컨테이너 말고 윈도우즈 컨테이너라는 것도 있지만 리눅스 컨테이너를 사용할 예정!  

## Linux
리눅스에 도커를 설치하는 방법은 자동 설치 스크립트를 이용하는 것이 가장 쉽다. 다음 명령어를 입력하면 root 권한을 요구하고 잠시 기다리면 설치가 완료된다.

```bash
curl -fsSL https://get.docker.com/ | sudo sh
```

## sudo 없이 사용하기

docker는 기본적으로 root권한이 필요하다. root가 아닌 사용자가 sudo없이 사용하려면 해당 사용자를 docker그룹에 추가하면 된다.

```bash
sudo usermod -aG docker $USER # 현재 접속중인 사용자에게 권한주기
sudo usermod -aG docker your-user # your-user 사용자에게 권한주기
```

사용자가 로그인 중이라면 다시 로그인 후 권한이 적용된다.

## Docker for Mac / Docker for Windows
도커를 맥이나 윈도우즈에 설치하려면 Docker for mac 또는 Docker for windows를 설치하면 된다. 파일을 다운받고 설치하고 재부팅하면 대부분 문제없이 완료된다. 소소한 옵션들이 있는데 특별히 건드릴 부분은 없으나 한번 살펴보고 적절하게 설정하면 된다. (windows는 공유 드라이브를 선택!)

마치 네이티브스럽게 설치된 것 같지만 도커는 리눅스 컨테이너이므로 실제로는 가상머신에 설치가 되었다. 사용자는 가상머신을 사용한다는 느낌이 전혀 안드는데 그런부분을 굉장히 신경써서 설계한 것 같다. 예를 들면, 포트를 연결하기 위해 도커 컨테이너의 특정 포트를 가상머신에 연결하고 다시 mac이나 windows의 포트와 연결해야 한다. 디렉토리를 연결한다면 디렉토리를 가상머신과 공유하고 그 디렉토리를 다시 컨테이너와 연결해야 한다. 이런 한단계 추가적으로 거쳐야하는 부분을 자연스럽게 처리해준다!

> docker for mac은 xhyve라는 macOS에서 제공하는 가상환경을 이용하고 docker for windows는 Hyper-V기능을 이용한다. 따라서 OS가 최신버전이 아니면 동작하지 않을 수 있다.

## 가상머신에 설치하기
이런저런 이유로 Docker for … 를 사용하지 못하는 경우 Docker machine을 이용할 수 있는데 처음 도커를 공부하는 경우에는 Virtual Box나 VMware같은 가상머신에 리눅스를 설치하고 리눅스에 접속하여 도커를 사용하는 방법을 권장함. 처음부터 Docker machine을 사용하면 환경이 약간 혼란스러울 수 있다.

## 설치확인하기
설치가 완료되었다면 정상적으로 설치되었는지 도커 명령어를 입력해 확인!

```
docker version
```


output:
```
Client:
 Version:      1.12.6
 API version:  1.24
 Go version:   go1.6.4
 Git commit:   78d1802
 Built:        Wed Jan 11 00:23:16 2017
 OS/Arch:      darwin/amd64

Server:
 Version:      1.12.6
 API version:  1.24
 Go version:   go1.6.4
 Git commit:   78d1802
 Built:        Wed Jan 11 00:23:16 2017
 OS/Arch:      linux/amd64
```

Client와 Server 정보가 정상적으로 출력되었다면 설치 완료!

> Server 정보가 안나오고 Error response from daemon: Bad response from Docker engine이라는 메시지가 출력되는 경우는 보통 docker daemon이 정상적으로 실행되지 않았거나 sudo를 입력하지 않은 경우.
