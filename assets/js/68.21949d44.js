(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{456:function(e,t,s){"use strict";s.r(t);var v=s(27),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("내 PC에서 실습하기 - 1")]),e._v(" "),s("p",[e._v("윈도우나 맥이 설치되어 있는 Desktop가 1대 있고, 그위에 VirtualBox와 같은 도구를 이용해서 VM을 만드는 경우")]),e._v(" "),s("p",[e._v("1-1) Install Virtualbox")]),e._v(" "),s("p",[e._v("1-1-1) Virtualbox 다운로드 및 설치\n[윈도우10 버전으로 진행] 아래 경로에서 [Windows hosts] 클릭 하여 다운로드 후 설치 (별다른 변경 없이 Next만 함)")]),e._v(" "),s("blockquote"),e._v(" "),s("p",[e._v("https://www.virtualbox.org/wiki/Downloads")]),e._v(" "),s("p",[e._v("Mac 사용자 참고 URL")]),e._v(" "),s("blockquote",[s("p",[e._v("https://www.virtualbox.org/wiki/Mac%20OS%20X%20build%20instructions")])]),e._v(" "),s("p",[e._v("1-1-2) CentOS Download\n아래 경로로 들어가서 원하는 경로에서 파일 다운로드")]),e._v(" "),s("blockquote",[s("p",[e._v("http://isoredirect.centos.org/centos/7/isos/x86_64/")])]),e._v(" "),s("p",[e._v("1-1-3) 원격접속 툴 MobaXterm 설치\n꼭 MobaXterm이 아닌 각자 편한 원격접속 툴을 사용하면 됨.\n아래 예제는 MobaXterm를 설치하고 필요한 Host 등록 예제")]),e._v(" "),s("blockquote",[s("p",[e._v("https://mobaxterm.mobatek.net/")])]),e._v(" "),s("ul",[s("li",[e._v("[GET MOBAXTERM NOW] 버튼 클릭")]),e._v(" "),s("li",[e._v("Free 버전 [Download now]")]),e._v(" "),s("li",[e._v("Installer editon 다운로드 및 실행")]),e._v(" "),s("li",[e._v("Sessions > SSH > Remote host : 192.168.0.30 > [Bookmark settings] Session name : master-192.168.0.30 > [ok]")]),e._v(" "),s("li",[e._v("Sessions > SSH > Remote host : 192.168.0.31 > [Bookmark settings] Session name : node1-192.168.0.31 > [ok]")]),e._v(" "),s("li",[e._v("Sessions > SSH > Remote host : 192.168.0.32 > [Bookmark settings] Session name : node2-192.168.0.32 > [ok]")])]),e._v(" "),s("p",[e._v("2-1) Setting VM")]),e._v(" "),s("p",[e._v("2-1-1) VM 스펙 설정\n메모리 및 디스크는 각자 상황에 맞게 참고해서 VM 설정")]),e._v(" "),s("ol",[s("li",[e._v("[VM 생성 1단계] 머신 > 새로 만들기 클릭")]),e._v(" "),s("li",[e._v("[VM 생성 1단계] 이름 : k8s-master, 종류: Linux, 버전: Other Linux(32-bit)")]),e._v(" "),s("li",[e._v("[VM 생성 2단계] 메모리 : 4096 MB")]),e._v(" "),s("li",[e._v("[VM 생성 3단계] 하드디스크 : 지금 새 가상 하드 디스크 만들기 (VDI:VirtualBox 디크스 이미지, 동적할당, 150GB)")]),e._v(" "),s("li",[e._v("[VM 생성 후 시스템 설정] 프로세서 개수 : CPU 2개")]),e._v(" "),s("li",[e._v("[VM 생성 후 저장소 설정] 컨트롤러:IDE 하위에 있는 광학드라이브 클릭 > CentOS 이미지 선택 후 확인")]),e._v(" "),s("li",[e._v("[VM 생성 후 네트워크 설정] VM 선택 후 설정 버튼 클릭 > 네트워크 > 어댑터 1 탭 > 다음에 연결됨 [어댑터에 브리지] 선택")]),e._v(" "),s("li",[e._v("시작")])]),e._v(" "),s("p",[e._v("2-2) Install CentOS")]),e._v(" "),s("p",[e._v("2-2-1) CentOS 설치\n4번 단계에서 \n8.8.8.8\n는 Google DNS입니다. 원하는 DNS 쓰면 됨")]),e._v(" "),s("ol",[s("li",[e._v("Test this media & install CentOS 7")]),e._v(" "),s("li",[e._v("Language : 한국어")]),e._v(" "),s("li",[e._v("Disk 설정 [시스템 > 설치 대상]\n"),s("ul",[s("li",[e._v("[기타 저장소 옵션 > 파티션 설정] 파티션을 설정합니다. [체크] 후 [완료]")]),e._v(" "),s("li",[e._v("새로운 CentOS 설치 > 여기를 클릭하여 자동으로 생성합니다. [클릭]")]),e._v(" "),s("li",[e._v("/home [클릭] 후 용량 5.12 GiB로 변경 [설정 업데이트 클릭]")]),e._v(" "),s("li",[e._v("/ [클릭] 후 140 GiB 변경 후 [설정 업데이트 클릭]")]),e._v(" "),s("li",[e._v("[완료], [변경 사항 적용]")])])]),e._v(" "),s("li",[e._v("네트워크 설정 [시스템 > 네트워크 및 호스트명 설정]\n"),s("ul",[s("li",[e._v("호스트 이름: k8s-master [적용]")]),e._v(" "),s("li",[e._v("이더넷 [켬], [설정], [IPv4 설정] 탭")]),e._v(" "),s("li",[e._v("방식: 수동으로 선택,")]),e._v(" "),s("li",[e._v("[Add] -> 주소: 192.168.0.30, 넷마스크 : 255.255.255.0, 게이트웨이: 192.168.0.1, DNS 서버 : 8.8.8.8 [저장][완료]")])])]),e._v(" "),s("li",[e._v("설치시작")]),e._v(" "),s("li",[e._v("[설정 > 사용자 설정] ROOT 암호 설정")]),e._v(" "),s("li",[e._v("설치 완료 후 [재부팅]")])]),e._v(" "),s("p",[e._v("내 PC에서 실습하기 - 2")]),e._v(" "),s("p",[e._v("3-1) Pre-Setting")]),e._v(" "),s("p",[e._v("3-1-1) SELinux 설정")]),e._v(" "),s("p",[e._v("Ubuntu나 Debian등 다른 OS를 설치하면 참고")]),e._v(" "),s("p",[e._v("https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/")]),e._v(" "),s("p",[e._v("https://kubernetes.io/docs/setup/production-environment/container-runtimes/#docker")]),e._v(" "),s("p",[e._v("쿠버네티스가 Pod Network에 필요한 호스트 파일 시스템에 액세스가 가능하도록 하기 위해서 필요한 설정")]),e._v(" "),s("p",[e._v("아래 설정으로 SELinux을 permissive로 변경")]),e._v(" "),s("p",[e._v("setenforce 0")]),e._v(" "),s("p",[e._v("리부팅시 다시 원복되기 때문에 아래 명령을 통해서 영구적으로 변경")]),e._v(" "),s("p",[e._v("sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config")]),e._v(" "),s("p",[e._v("아래 명령어를 실행해서 Current mode:permissive 내용 확인")]),e._v(" "),s("p",[e._v("sestatus")]),e._v(" "),s("p",[e._v("3-1-2) 방화벽 해제")]),e._v(" "),s("p",[e._v("firewalld 비활성화")]),e._v(" "),s("p",[e._v("systemctl stop firewalld && systemctl disable firewalld")]),e._v(" "),s("p",[e._v("NetworkManager 비활성화")]),e._v(" "),s("p",[e._v("systemctl stop NetworkManager && systemctl disable")]),e._v(" "),s("p",[e._v("NetworkManager")]),e._v(" "),s("p",[e._v("3-1-3) Swap 비활성화")]),e._v(" "),s("p",[e._v("Swap 사용에 관련한 내용")]),e._v(" "),s("blockquote",[s("p",[e._v("https://github.com/kubernetes/kubernetes/issues/53533")])]),e._v(" "),s("p",[e._v("참고해서 설정")]),e._v(" "),s("p",[e._v("swapoff -a && sed -i '/ swap / s/^/#/' /etc/fstab")]),e._v(" "),s("p",[e._v("3-1-4) Iptables 커널 옵션 활성화")]),e._v(" "),s("p",[e._v("RHEL이나 CentOS7 사용 시 iptables가 무시돼서 트래픽이 잘못 라우팅되는 문제가 발생한다고 하여 아래 설정이 추가")]),e._v(" "),s("p",[e._v("cat <"),s("EOF",[e._v("  /etc/sysctl.d/k8s.conf")])],1),e._v(" "),s("p",[e._v("net.bridge.bridge-nf-call-ip6tables = 1")]),e._v(" "),s("p",[e._v("net.bridge.bridge-nf-call-iptables = 1")]),e._v(" "),s("p",[e._v("EOF")]),e._v(" "),s("p",[e._v("sysctl --system")]),e._v(" "),s("p",[e._v("3-1-5) 쿠버네티스 YUM Repository 설정")]),e._v(" "),s("p",[e._v("YUM에 대한 자세한 내용")]),e._v(" "),s("blockquote",[s("p",[e._v("https://www.lesstif.com/display/1STB/yum")])]),e._v(" "),s("p",[e._v("cat <"),s("EOF",[e._v(" /etc/yum.repos.d/kubernetes.repo")])],1),e._v(" "),s("p",[e._v("[kubernetes]")]),e._v(" "),s("p",[e._v("name=Kubernetes")]),e._v(" "),s("p",[e._v("baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64")]),e._v(" "),s("p",[e._v("enabled=1")]),e._v(" "),s("p",[e._v("gpgcheck=1")]),e._v(" "),s("p",[e._v("repo_gpgcheck=1")]),e._v(" "),s("p",[e._v("gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg")]),e._v(" "),s("p",[e._v("EOF")]),e._v(" "),s("p",[e._v("3-1-6) Centos Update")]),e._v(" "),s("p",[e._v("yum update")]),e._v(" "),s("p",[e._v("3-1-7) Hosts 등록")]),e._v(" "),s("p",[e._v("계획된 master와 node의 호스트 이름과 IP를 모두 등록하기")]),e._v(" "),s("p",[e._v("안하면 kubeadm init시 Host이름으로 IP를 찾을 수 없다고 에러 발생")]),e._v(" "),s("p",[e._v("cat << EOF >> /etc/hosts")]),e._v(" "),s("p",[e._v("192.168.0.30 k8s-master")]),e._v(" "),s("p",[e._v("192.168.0.31 k8s-node1")]),e._v(" "),s("p",[e._v("192.168.0.32 k8s-node2")]),e._v(" "),s("p",[e._v("EOF")]),e._v(" "),s("p",[e._v("3-2) Install")]),e._v(" "),s("p",[e._v("3-2-1) Docker 설치")]),e._v(" "),s("p",[e._v("도커 설치 전에 필요한 패키지 설치")]),e._v(" "),s("p",[e._v("yum install -y yum-utils device-mapper-persistent-data lvm2")]),e._v(" "),s("p",[e._v("도커 설치를 위한 저장소 를 설정")]),e._v(" "),s("p",[e._v("yum-config-manager --add-repo")]),e._v(" "),s("p",[e._v("https://download.docker.com/linux/centos/docker-ce.repo")]),e._v(" "),s("p",[e._v("도커 패키지 설치")]),e._v(" "),s("p",[s("code",[e._v("yum update && yum install docker-ce-18.06.2.ce")])]),e._v(" "),s("p",[s("code",[e._v("mkdir /etc/docker")])]),e._v(" "),s("p",[s("code",[e._v("cat > /etc/docker/daemon.json <<EOF")])]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"exec-opts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"native.cgroupdriver=systemd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"log-driver"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"json-file"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"log-opts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"max-size"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"100m"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"storage-driver"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"overlay2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"storage-opts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"overlay2.override_kernel_check=true"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[s("code",[e._v("EOF")])]),e._v(" "),s("p",[s("code",[e._v("mkdir -p /etc/systemd/system/docker.service.d")])]),e._v(" "),s("p",[e._v("3-2-2) Kubernetes 설치")]),e._v(" "),s("p",[s("code",[e._v("yum install -y --disableexcludes=kubernetes kubeadm-1.15.5-0.x86_64 kubectl-1.15.5-0.x86_64 kubelet-1.15.5-0.x86_64")])]),e._v(" "),s("p",[e._v("4-1) Clone VM")]),e._v(" "),s("p",[e._v("4-1-1) 시스템 Shutdown")]),e._v(" "),s("p",[e._v("여기까지 만든 이미지를 복사해 놓기 위해서 Master를 잠시 Shutdown")]),e._v(" "),s("p",[e._v("shutdown now")]),e._v(" "),s("p",[e._v("4-1-2) VM 복사")]),e._v(" "),s("p",[e._v("VirtualBox UI를 통해 Master 선택 후 마우스 우클릭을 해서 [복제] 버튼 클릭")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("이름 : k8s-node1, MAC 주소정책 : 모든 네트워크 어댑터의 새 MAC 주소 생성")])]),e._v(" "),s("li",[s("p",[e._v("복제방식 : 완전한 복제\nnode2도 반복")])])]),e._v(" "),s("p",[e._v("4-2) Config Node")]),e._v(" "),s("p",[e._v("4-2-1) Network 변경하기")]),e._v(" "),s("p",[e._v("VirtualBox UI에서 k8s-node1을 시작 시키면 뜨는 Console 창을 통해 아래 명령어 입력")]),e._v(" "),s("p",[e._v("Host의 Ip Address를 변경하기 위해 아래 명령어로 설정을 열고")]),e._v(" "),s("p",[s("code",[e._v("vi /etc/sysconfig/network-scripts/ifcfg-eth0")])]),e._v(" "),s("p",[e._v("IPADDR=\n부분을 해당 Node의 IP (192.168.0.31)로 변경")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('DEVICE=\n"etho0"\nONBOOT="yes"\nIPADDR="192.168.0.31"\n')])])]),s("p",[e._v("그리고 아래 명령어로 네트워크 재시작")]),e._v(" "),s("p",[s("code",[e._v("systemctl restart network")])]),e._v(" "),s("p",[e._v("4-2-2) Host Name 변경")]),e._v(" "),s("p",[e._v("해당 Node의 Host 이름을 변경")]),e._v(" "),s("p",[s("code",[e._v("hostnamectl set-hostname k8s-node1")])]),e._v(" "),s("p",[e._v("이와 같은 방식으로 k8s-node2(192.168.0.32) 도 설정")])])}),[],!1,null,null,null);t.default=_.exports}}]);