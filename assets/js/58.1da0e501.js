(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{444:function(t,e,a){"use strict";a.r(e);var o=a(27),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"내-tistory-게시글"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#내-tistory-게시글"}},[t._v("#")]),t._v(" 내 Tistory 게시글")]),t._v(" "),a("p",[t._v("https://dev-youngjun.tistory.com/62")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Ubuntu 18.04에 Kubeflow를 설치하고 pipelines SDK를 사용해보려고 한다.")]),t._v(" "),a("p",[a("s",[t._v("왠지 모르겠는데 16.04는 잘 안됨")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("참고한 블로그")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.kangwoo.kr/category/machine-learning/kubeflow/page/5/"}},[t._v("https://www.kangwoo.kr/category/machine-learning/kubeflow/page/5/")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/.vuepress/public/images/img-kubeflow/kubeflow-01.png",alt:"img"}})]),t._v(" "),a("blockquote",{attrs:{"data-ke-style":"style3"}},[a("b",[a("span",{staticStyle:{color:"#ee2323"}},[t._v("목차")])]),a("br"),a("br"),a("b",[t._v("Ubuntu 18.04 LTS 설치")]),a("br"),a("b",[t._v("- Nvidia driver 설치")]),a("br"),a("b",[t._v("Docker 설치")]),a("br"),a("b",[t._v("nvidia-docker 설치")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h4",{attrs:{"data-ke-size":"size20"}},[a("span",{staticStyle:{"background-color":"#c7f1e6"}},[t._v("설치 버전 정리")])]),t._v(" "),a("ul",{staticStyle:{"list-style-type":"disc"}},[a("li",[t._v("Ubuntu 18.04 LTS")]),t._v(" "),a("li",[t._v("Nvidia driver 435")]),t._v(" "),a("li",[t._v("docker-CE 18.09")]),t._v(" "),a("li",[t._v("nvidia-docker")]),t._v(" "),a("li",[t._v("kubernetes 1.15.10")]),t._v(" "),a("li",[t._v("cilium 1.6")]),t._v(" "),a("li",[t._v("nvidia-device-plugin-daemonset 1.12")]),t._v(" "),a("li",[t._v("kubeflow 1.0RC4 with istio 1.3")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h2",{attrs:{"data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#f6e199"}},[t._v("Ubuntu 18.04 LTS 설치하기")])]),t._v(" "),a("p",[t._v("1. 설치 이미지를 다운로드")]),t._v(" "),a("p",[t._v("2. 부팅 USB를 만들기")]),t._v(" "),a("p",[t._v("3. GIGABYTE USB 부팅")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("아래 블로그를 참고했다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hiseon.me/linux/ubuntu/install-ubuntu-18-04/"}},[t._v("https://hiseon.me/linux/ubuntu/install-ubuntu-18-04/")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h4",{attrs:{"data-ke-size":"size20"}},[a("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("(1) Nvidia driver 설치")])]),t._v(" "),a("p",[t._v("우분투 18.04 환경에서 nvidia 그래픽 카드를 사용할 경우 문제가 발생한다.")]),t._v(" "),a("p",[t._v("아래 블로그를 참고했다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.kangwoo.kr/category/machine-learning/kubeflow/page/5/"}},[t._v("https://www.kangwoo.kr/category/machine-learning/kubeflow/page/5/")]),a("span",{staticStyle:{"background-color":"#f6e199"}})]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("nvidia 드라이버 설치를 위해 nouveau를 제거할 필요가 있다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h4",{attrs:{"data-ke-size":"size20"}},[a("span",{staticStyle:{color:"#006dd7"}},[t._v("1. nouveau 설치 확인 후 제거하기")]),a("span",{staticStyle:{"background-color":"#f6e199"}})]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591729929126","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ lsmod | grep nouveau")])]),t._v(" "),a("p",[t._v("명령어를 입력하면 nouveau가 설치되어있는지 확인할 수 있다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/.vuepress/public/images/img-kubeflow/kubeflow-02.png",alt:"img"}})]),t._v(" "),a("p",[a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("/etc/modprobe.d/")]),t._v(" 경로에 blacklist 파일을 생성하자.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("vi 편집기를 이용해 아래 내용을 넣고 "),a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("esc+wq")]),t._v("로 저장하자.")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591730034142","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo vi /etc/modprobe.d/blacklist-nouveau.conf\n"),a("p",[t._v("blacklist nouveau\noptions nouveau modset=0")])])]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("다음 명령어를 실행한 후, 재부팅 하자.")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591730243727","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo update-initramfs -u\n$ sudo service gdm stop")])]),a("p"),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/.vuepress/public/images/img-kubeflow/kubeflow-03.png",alt:"img"}})]),t._v(" "),a("p",[t._v("재부팅하면 모니터 해상도를 정상적으로 인식하지 못하는 경우가 있다.")]),t._v(" "),a("p",[t._v("Nvidia 드라이버를 설치하면 괜찮아진다!")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h4",{attrs:{"data-ke-size":"size20"}},[a("span",{staticStyle:{color:"#006dd7"}},[t._v("2. Nvidia 드라이버 설치하기")]),a("b")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#333333"}},[t._v("컨테이너(Container)를 이용해서 GPU를 사용할 예정이기 때문에, Nvidia 드라이버가 설치하자.")])]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591730417846","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo add-apt-repository ppa:graphics-drivers/ppa\n$ sudo apt-get update\n"),a("p",[t._v("$ sudo apt-get install nvidia-driver-435\n$ sudo reboot")])])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#333333"}},[a("span",{staticStyle:{color:"#333333"}},[t._v("재부팅 후,"),a("span")]),t._v("nvidia-smi"),a("span",{staticStyle:{color:"#333333"}},[a("span"),t._v("명령어를 실행해서, 드라이버가 정상적으로 설치되어 있는지 확인해 볼 수 있다.")])])]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591730448807","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ nvidia-smi")])]),a("p"),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/.vuepress/public/images/img-kubeflow/kubeflow-04.png",alt:"img"}})]),t._v(" "),a("hr",{attrs:{contenteditable:"false","data-ke-type":"horizontalRule","data-ke-style":"style3"}}),t._v(" "),a("h2",{attrs:{"data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#f6e199"}},[t._v("Kubeflow 설치하기")])]),t._v(" "),a("h4",{attrs:{"data-ke-size":"size20"}},[a("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("(1) 최소 시스템 요구사항")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.kubeflow.org/docs/started/k8s/overview/"}},[t._v("https://www.kubeflow.org/docs/started/k8s/overview/")])]),t._v(" "),a("p",[t._v("공식 문서에 따르면 kubeflow 최소 시스템 요구사항은 이렇다.")]),t._v(" "),a("p",[t._v("- RAM 12GB 이상")]),t._v(" "),a("p",[t._v("- CPU 4 core 이상")]),t._v(" "),a("p",[t._v("- Storage 50GB 이상")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("그래서 내 PC 사양을 알아보았다.")]),t._v(" "),a("table",{staticStyle:{"border-collapse":"collapse",width:"74.7674%",height:"112px"},attrs:{border:"1","data-ke-style":"style7"}},[a("tbody",[a("tr",{staticStyle:{height:"22px"}},[a("td",{staticStyle:{height:"22px",width:"23.0232%"}},[t._v("RAM")]),t._v(" "),a("td",{staticStyle:{height:"22px",width:"76.8605%"}},[t._v("16 GB")])]),t._v(" "),a("tr",{staticStyle:{height:"22px"}},[a("td",{staticStyle:{height:"22px",width:"23.0232%"}},[t._v("CPU core")]),t._v(" "),a("td",{staticStyle:{height:"22px",width:"76.8605%"}},[t._v("12")])]),t._v(" "),a("tr",{staticStyle:{height:"22px"}},[a("td",{staticStyle:{height:"22px",width:"23.0232%"}},[a("span",[t._v("Storage")])]),t._v(" "),a("td",{staticStyle:{height:"22px",width:"76.8605%"}},[a("span",[t._v("256 GB")])])]),t._v(" "),a("tr",{staticStyle:{height:"22px"}},[a("td",{staticStyle:{height:"22px",width:"23.0232%"}},[a("span",{staticStyle:{color:"#333333"}},[t._v("CPU")])]),t._v(" "),a("td",{staticStyle:{height:"22px",width:"76.8605%"}},[a("span",{staticStyle:{color:"#333333"}},[t._v("Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz")])])]),t._v(" "),a("tr",{staticStyle:{height:"24px"}},[a("td",{staticStyle:{height:"24px",width:"23.0232%"}},[t._v("Graphic Card")]),t._v(" "),a("td",{staticStyle:{height:"24px",width:"76.8605%"}},[t._v("GeForce RTX 2070 - Nvidia")])])])]),t._v(" "),a("p",[t._v("Kubernetes와 Kubeflow의 버전도 확인해보자.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/.vuepress/public/images/img-kubeflow/kubeflow-05.png",alt:"img"}})]),t._v(" "),a("p",[a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("Kubeflow 1.0")]),t._v("을 사용하기 위해 "),a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("Kubernetes 버전은 1.15")]),t._v("를 설치하자.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("hr",{attrs:{contenteditable:"false","data-ke-type":"horizontalRule","data-ke-style":"style3"}}),t._v(" "),a("h4",{attrs:{"data-ke-size":"size20"}},[a("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("(2) Docker 설치하기")])]),t._v(" "),a("p",[t._v("apt가 https 저장소를 사용할 수 있도록 패키지 추가")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591728160313","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo apt-get update\n$ sudo apt-get install -y apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg-agent \\\n    software-properties-common")])]),t._v(" "),a("p",[t._v("docker의 GPG키 추가")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591728358085","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("저장소를 추가")]),t._v(" "),a("pre",{staticClass:"html xml",staticStyle:{display:"block",overflow:"auto",padding:"15px",color:"#383a42",background:"#f6f7f8","font-size":"14px","border-radius":"3px","font-family":"Menlo, Consolas, Monaco, monospace",border:"1px solid #dddddd",margin:"20px auto 0px",cursor:"default","z-index":"1","font-style":"normal","font-variant-ligatures":"normal","font-variant-caps":"normal","font-weight":"400","letter-spacing":"normal",orphans:"2","text-align":"start","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","text-decoration-style":"initial","text-decoration-color":"initial"},attrs:{id:"code_1591728424859","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v('$ sudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) stable"')])]),t._v(" "),a("p",[t._v("apt 패키지의 인덱스를 업데이트")]),t._v(" "),a("pre",{staticClass:"html xml",staticStyle:{display:"block",overflow:"auto",padding:"15px",color:"#383a42",background:"#f6f7f8","font-size":"14px","border-radius":"3px","font-family":"Menlo, Consolas, Monaco, monospace",border:"1px solid #dddddd",margin:"20px auto 0px",cursor:"default","z-index":"1","font-style":"normal","font-variant-ligatures":"normal","font-variant-caps":"normal","font-weight":"400","letter-spacing":"normal",orphans:"2","text-align":"start","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","text-decoration-style":"initial","text-decoration-color":"initial"},attrs:{id:"code_1591728510577","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo apt-get update")])]),t._v(" "),a("p",[a("span",[t._v("docker-ce는 18.09 버전을 다운로드 받고 패키지를 고정하자.")])]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591728661627","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo apt-get install -y docker-ce=5:18.09.9~3-0~ubuntu-bionic docker-ce-cli=5:18.09.9~3-0~ubuntu-bionic containerd.io\n"),a("p",[t._v("$ sudo apt-mark hold docker-ce docker-ce-cli")])])]),t._v(" "),a("p",[t._v("docker를 18.09 버전으로 다운받는 이유?")]),t._v(" "),a("div",{attrs:{"data-ke-type":"moreLess","data-text-more":"더보기","data-text-less":"닫기"}},[a("a",{staticClass:"btn-toggle-moreless"},[t._v("더보기")]),t._v(" "),a("div",{staticClass:"moreless-content"},[a("p",[t._v("19.03 버전 부터 GPU 관련 내용이 변경되었다. kubernetes에서 GPU 작업을 하려면, "),a("a",{attrs:{href:"https://github.com/NVIDIA/k8s-device-plugin"}},[t._v("k8s-device-plugin")]),a("span",{staticStyle:{color:"#333333"}},[t._v("이 필요한데, 아직(20.06.10) 19.03 버전을 지원하지 않는 것 같다."),a("br"),a("br"),t._v("참고 - "),a("a",{attrs:{href:"https://www.kangwoo.kr/category/machine-learning/kubeflow/page/5/"}},[t._v("https://www.kangwoo.kr/category/machine-learning/kubeflow/page/5/")])])])])]),t._v(" "),a("p",[t._v("도커가 정상적으로 설치되었는지 "),a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("hello-world")]),t._v(" 이미지를 실행해보자")]),t._v(" "),a("p"),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591729503810","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo docker run hello-world")])]),t._v(" "),a("p",[t._v("아래와 같이 출력되면 정상적으로 설치된 것이다.")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591729546984","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("Unable to find image 'hello-world:latest' locally\nlatest: Pulling from library/hello-world\n0e03bdcc26d7: Pull complete\nDigest: sha256:6a65f928fb91fcfbc963f7aa6d57c8eeb426ad9a20c7ee045538ef34847f44f1\nStatus: Downloaded newer image for hello-world:latest"),a("p"),t._v("\n"),a("p",[t._v("Hello from Docker!\nThis message shows that your installation appears to be working correctly.")]),t._v("\n"),a("p",[t._v("...")]),t._v("\n"),a("p",[t._v("For more examples and ideas, visit:\nhttps://docs.docker.com/get-started/")])])]),t._v(" "),a("p"),t._v(" "),a("h4",{attrs:{"data-ke-size":"size20"}}),t._v(" "),a("p"),t._v(" "),a("p"),t._v(" "),a("p",[a("b",[t._v("Sudo 없이 Docker 실행하기")])]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("Docker를 사용하려면 기본적으로 루트 권한이 필요하다.")]),t._v(" "),a("p",[t._v("번거로우니까 Docker를 sudo 권한으로 등록시켜주자.")]),t._v(" "),a("p"),t._v(" "),a("pre",{staticClass:"html xml",staticStyle:{display:"block",overflow:"auto",padding:"15px",color:"#383a42",background:"#f6f7f8","font-size":"14px","border-radius":"3px","font-family":"Menlo, Consolas, Monaco, monospace",border:"1px solid #dddddd",margin:"20px auto 0px",cursor:"default","z-index":"1","font-style":"normal","font-variant-ligatures":"normal","font-variant-caps":"normal","font-weight":"400","letter-spacing":"normal",orphans:"2","text-align":"start","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","text-decoration-style":"initial","text-decoration-color":"initial"},attrs:{id:"code_1591740702401","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo groupadd docker\n$ sudo usermod -aG docker ${USER}\n$ newgrp docker\n$ docker run hello-world")])]),t._v(" "),a("hr",{attrs:{contenteditable:"false","data-ke-type":"horizontalRule","data-ke-style":"style3"}}),t._v(" "),a("h4",{attrs:{"data-ke-size":"size20"}},[a("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("(3) nvidia-docker 설치하기")])]),t._v(" "),a("p",[t._v("도커 컨테이너의 GPU 리소스 사용을 위해 "),a("a",{attrs:{href:"https://github.com/NVIDIA/k8s-device-plugin"}},[t._v("nvidia-docker")]),t._v("를 설치해야한다.")]),t._v(" "),a("p"),t._v(" "),a("p",[a("s",[t._v("아래 distribution이 정상적으로 동작하지 않는 것 같다!")])]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591730876971","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("# Add the package repositories\n$ distribution=$(. /etc/os-release;echo VERSION_ID)\n$ curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -\n$ curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list"),a("p"),t._v("\n"),a("p",[t._v("$ sudo apt-get update")])])]),t._v(" "),a("p",[t._v("그대로 했지만 "),a("b",[a("span",{staticStyle:{"background-color":"#ffc1c8"}},[t._v("오류")])]),t._v("가 발생했다.")]),a("p"),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/.vuepress/public/images/img-kubeflow/kubeflow-06.png",alt:"img"}})]),t._v(" "),a("p",[a("a",{attrs:{href:"https://nvidia.github.io/nvidia-docker/"}},[t._v("https://nvidia.github.io/nvidia-docker/")]),t._v(" 링크를 따라가 확인해보았다.")]),t._v(" "),a("p",[t._v("참고한 블로그 내용과 "),a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("distribution 명령어 내용")]),t._v("이 달랐다")]),t._v(" "),a("p",[t._v("링크의 내용대로 입력해보았다.")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591731393645","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | \\\n    sudo apt-key add -\n"),a("p",[t._v("$ distribution=$(. /etc/os-release;echo $ID$VERSION_ID)")]),t._v("\n"),a("p",[t._v("$ curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | "),a("br"),t._v("\nsudo tee /etc/apt/sources.list.d/nvidia-docker.list")]),t._v("\n"),a("p",[t._v("$ sudo apt-get update")])])]),a("p"),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/.vuepress/public/images/img-kubeflow/kubeflow-07.png",alt:"img"}})]),t._v(" "),a("p",[t._v("이제 "),a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("nvidia-docker")]),t._v("를 설치하자")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591731551769","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo apt-get install nvidia-docker2\n$ sudo systemctl restart docker")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("nvidia-docker")]),a("span",{staticStyle:{color:"#333333"}},[t._v("가 정상적으로 설치되었는지 확인해 보기 위해서, 다음 명령어를 실행해보자.")])]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591731706087","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo docker run --runtime nvidia nvidia/cuda:10.0-base nvidia-smi")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/.vuepress/public/images/img-kubeflow/kubeflow-08.png",alt:"img"}})]),t._v(" "),a("p",[t._v("정상적으로 설치가 되었다면 노드에 설치되어 있는 GPU의 리스트와 각종 상태 및 수해오디는 프로세스를 알 수 있는 정보를 확인 할 수 있다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#333333"}},[t._v("도커의 기본 런타임을 변경해주자 ")])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#333333"}},[t._v("생성된 ")]),a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("/etc/docker/daemon.json")]),a("span",{staticStyle:{color:"#333333"}},[t._v(" 파일에서 ")]),a("span",{staticStyle:{"background-color":"#dddddd"}},[t._v('"default-runtime": "nvidia"')]),a("span",{staticStyle:{color:"#333333"}},[t._v("을 추가해주면 된다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591731892904","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v('$ sudo vi /etc/docker/daemon.json\n\n    {\n      "default-runtime": "nvidia", \n      "runtimes": {\n        "nvidia": {\n          "path": "nvidia-container-runtime",\n          "runtimeArgs": []\n        }\n      }\n    }\n    ')])]),t._v(" "),a("p",[t._v("파일을 수정한 후, 도커를 재시작하자.")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1591732407756","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("$ sudo systemctl restart docker")])]),t._v(" "),a("hr",{attrs:{contenteditable:"false","data-ke-type":"horizontalRule","data-ke-style":"style3"}}),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h3",{attrs:{"data-ke-size":"size23"}},[a("span",{staticStyle:{color:"#000000","font-size":"1.44em","letter-spacing":"-1px"}},[t._v("Reference")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("[1] 지구별 여행자 블로그 - "),a("a",{attrs:{href:"https://www.kangwoo.kr/category/machine-learning/kubeflow/page/5/"}},[t._v("https://www.kangwoo.kr/category/machine-learning/kubeflow/page/5")])]),t._v(" "),a("p",[t._v("[2] EGAS 블로그 - "),a("a",{attrs:{href:"http://ghcksdk.com/kubeflow-installation/"}},[t._v("http://ghcksdk.com/kubeflow-installation/")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/tensorflow/tensorflow/"}},[t._v("https://hub.docker.com/r/tensorflow/tensorflow/")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/guide/gpu"}},[t._v("https://www.tensorflow.org/guide/gpu")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/"}},[t._v("https://docs.docker.com/install/linux/docker-ce/ubuntu/")])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#333333"}},[a("a",{attrs:{href:"https://github.com/NVIDIA/nvidia-docker"}},[t._v("https://github.com/NVIDIA/nvidia-docker")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"}},[t._v("https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"}},[t._v("https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blusky10.tistory.com/359"}},[t._v("https://blusky10.tistory.com/359")])]),t._v(" "),a("p",[t._v(" ")])])}),[],!1,null,null,null);e.default=s.exports}}]);