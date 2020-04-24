## Tistory에 정리했다!
https://dev-youngjun.tistory.com/43

<p>&nbsp;</p>
<h2>&nbsp;</h2>
<blockquote style="font-size: 1.12em;" data-ke-style="style3"><b>Git 기초 공부하기 목차<br /></b><a href="https://dev-youngjun.tistory.com/7" target="_blank" rel="noopener">(1) 2020/02/29 - [Git] - Visual Studio Code에 Github 연동하기</a><br /><b>(2) 2020/04/16 - [Git] - Git 이란?</b><br /><a href="https://dev-youngjun.tistory.com/44" target="_blank" rel="noopener">(3) 2020/04/17 - [Git] - Git 설치 및 커멘드 사용법</a><br /><a href="https://dev-youngjun.tistory.com/45" target="_blank" rel="noopener">(4) 2020/04/18 - [Git] - Git Branch 사용하기</a><br /><a href="https://dev-youngjun.tistory.com/46" target="_blank" rel="noopener">(5) 2020/04/19 - [Git] - Git remote 원격 저장소와 Github</a><br /><a href="https://dev-youngjun.tistory.com/47" target="_blank" rel="noopener">(6) 2020/04/20 - [Git] - Git - Pull Request 활용하기</a></blockquote>
<p>&nbsp;</p>
<h2 data-ke-size="size26">1. 오픈 소스 소프트웨어</h2>
<p>&nbsp;</p>
<p><span style="background-color: #f6e199;">오픈 소스 소프트웨어(OSS)</span></p>
<p>오픈 소스는 공개된 코드를 보고, 사용하고, 수정하고, 배포할 수 있는 소프트웨어입니다. 대표적인 오픈 소스 소프트웨어로는 Linux, Android, Python, 그리고 수업에서 다루는 Git 등이 있습니다.</p>
<p>오픈 소스에는 다양한 라이선스가 있는데 라이선스에 따라 사용 권한에 조금씩의 차이는 있습니다.&nbsp;<br /><br /></p>
<p>사람들은 왜 오픈 소스를 사용할까요?</p>
<p>많은 장점이 있지만 3가지 정도로 말씀드릴 수 있습니다.</p>
<ol>
<li>오픈 소스는 무료 이용이 가능합니다. 이는 비용 절감이 됩니다.</li>
<li>원하는 기능을 구현하기 위하여 처음부터 개발하는 것 보다 오픈 소스를 수정하여 구현한다면 개발 기간을 단축시킬 수 있을 것입니다.</li>
<li>오픈 소스는 누구나 볼 수 있습니다. 즉, 누구나 소스에서 오류를 검증할 수 있다는 뜻이죠.</li>
</ol>
<p>이와 같은 장점을 토대로 많은 기업에서 기업 프로젝트에 오픈 소스 도입을 추진하고 있습니다.</p>
<p>오픈 소스 프로젝트는 다양한 유저들이 최신 기술 정보와 문제점의 해결책을 공유하여 운영됩니다. 프로젝트의 품질이 우수하고, 커스터마이징이 가능하기 때문에 개발 기간을 단축시킬 수 있습니다. 다양한 커뮤니티와 공유하여 프로젝트를 더 완성도 있게 만들 수 있습니다.</p>
<p>물론, 무료라는 장점도 빼놓을 수 없습니다.</p>
<h2>2. Git을 많이 사용하는 요인</h2>
<p>&nbsp;</p>
<p>오픈 소스의 장점과 함께 효율적인 협업의 방법으로 Git을 많이 사용합니다.</p>
<p>그렇다면 프로젝트를 진행함에 있어서 Git을 사용하는 이유는 무엇일까요?&nbsp;<br /><br /></p>
<p data-ke-size="size16"><span style="background-color: #f6e199;">첫 번째로, 효율적인 협업이 가능해집니다.</span></p>
<p>기업에서는 여러명의 개발자들이 동시에 작업을 진행합니다. 다음과 같은 문제가 발생할 수 있습니다.</p>
<ul>
<li>버그를 수정했지만, 다른 개발자가 버그 수정 전 파일에서 다른 부분을 작업 후 업로드하여 버그를 수정한 코드가 사라졌습니다.</li>
<li>한 파일을 동시에 수정하는 경우 최종적으로 검수하는 사람이 필요하고, 문제가 발생한 경우 해당 코드를 작업한 사람을 일일이 찾아야 됩니다.</li>
</ul>
<p>이와 같은 문제 때문에 개발 기간이 늘어나는 등 협업의 효율이 떨어집니다.</p>

<p>Git을 사용하면 파일을 합치는데 문제가 발생할 시(Conflict 등) 사용자에게 알려주고, 코드의 수정 내용이 관리되기 때문에 코드의 변동 과정을 비교하여 위의 문제를 피할 수 있도록 해줍니다.</p>
<p>&nbsp;</p>
<p data-ke-size="size16"><span style="background-color: #f6e199;">두 번째로, 쉬운 버전관리 입니다.</span></p>

<p>작업 중 변경한 코드가 문제가 되어 예전 버전으로 돌아가고 싶을 때가 있습니다.</p>
<p>Git은 스냅샷 형태로 데이터를 저장합니다. 로컬 저장소에서 손쉽게 예전 버전으로 돌아갈 수 있습니다.</p>

<p>버전 관리는 백업의 목적으로 사용될 수도 있습니다.</p>
<p>위와 같이 복잡한 파일관리 대신 Git을 활용하여 관리할 수 있습니다.</p>
<h2 data-ke-size="size26">3. Git의<span>&nbsp;</span>특징</h2>
<h3>가지 치기(Branch)와 병합(Merge)</h3>
<p>사용자는 메인 코드에서 가지를 생성해서 독립성을 유지한 채로 개발을 진행할 수 있습니다. 이는 다양한 코드를 개발 또는 테스트 해 볼 수 있는 환경을 제공해줍니다.</p>
<p>여러 가지를 만들어 개발 또는 테스트를 진행할 수 있고 이후 병합을 통해 메인 코드에 반영을 하거나 삭제할 수 있습니다.</p>
<p>가지는 일 단위의 작업이 될 수도 있고, 기능이 될 수도 있습니다. 사용하기 나름입니다.&nbsp;<br /><br /></p>
<h3>가볍고 빠르다</h3>
<p>Git은 모든 작업이 대부분 로컬에서 진행됩니다.</p>
<p>매번 네트워크에 접속할 필요가 없기 때문에 대부분의 작업이 네트워크 속도와 관계없고, 매우 빠르게 진행됩니다.&nbsp;<br /><br /></p>
<h3>분산 작업</h3>
<p>Git은 분산 작업에 효율적입니다. 사용자들은 복사된 프로젝트에서 동시에 작업을 진행할 수 있습니다.</p>
<p>또한 각각의 사용자들은 메인 코드 전체를 가지고 있습니다. 서버가 다운되는 등의 문제가 발생했더라도 사용자 각각은 코드 전체를 가지고 있기 때문에 문제가 발생할 소지가 없습니다.</p>
<p>Git의 특성과 우수한 분기 시스템 덕분에 거의 무한대의 워크 플로를 상대적으로 쉽게 구현할 수 있습니다.</p>
<p>때때로 소스 코드를 병합하는데 있어서 번거로움을 느낄 수도 있어, Git에서는 통합 관리자를 두어 역할 분담을 할 수 있습니다. 사용자는 소스 코드의 통합에 많은 신경을 쓰지 않아도 되고, 맡은 역할에만 집중할 수 있습니다.</p>
<p>뒤에서 소개할 Github에서 종종 볼 수 있는 개발 형태입니다.&nbsp;<br /><br /></p>
<h3>데이터 보장</h3>
<p>Git은 프로젝트의 무결성을 보장합니다. 모든 파일은 체크섬이라는 검사를 거치게 됩니다.</p>
<p>체크섬은 16진수 문자열로 구성되어 있으며, Commit ID라고 불립니다. Commit ID가 같은 것은 파일 또는 구성이 완벽히 같다는 것으로, Commit ID는 같은데, 파일 또는 구성이 다를 순 없습니다.</p>
<p>이를 통해 누가 어느 파일을 작업했는지 기록이 남기 때문에 Version history 관리도 할 수 있습니다.&nbsp;<br /><br /></p>
<h3>준비 영역 (Staging area)</h3>
<p>Git은 준비 영역을 가지고 있습니다. 이는 수정한 내용을 반영하기 전 검토하는 단계라고 할 수 있습니다.</p>
<p>작업 디렉토리에서 반영할 파일을 선택하고 이후 수정한 파일을 실제로 저장소에 반영하는 2단계를 거쳐야 완료됩니다.</p>
<p>물론 수정한 파일 중 저장소에 반영할 파일만 선택하여 적용하는 것도 가능합니다.&nbsp;<br /><br /></p>
<h3>오픈 소스</h3>
<p>마지막으로 Git은 오픈 소스입니다. 앞에서 말씀드린 장점을 그대로 가지고 있으면서 계속 발전해 나가고 있습니다.</p>
<h2 data-ke-size="size26">4.SVN vs Git</h2>
<h3><span style="background-color: #f6e199;">SVN</span></h3>
<p><b>SVN</b><b>은</b><b><span>&nbsp;</span></b><b>중앙집중식</b><b><span>&nbsp;</span></b><b>버전</b><b><span>&nbsp;</span></b><b>관리</b><b><span>&nbsp;</span></b><b>시스템</b>입니다.</p>
<p>즉, 파일을 관리하는 중앙서버가 별도로 있고 클라이언트가 중앙 서버에서 파일을 받아서 사용하는 형태입니다.</p>
<p>SVN에서는 Git과는 달리 로컬 저장소/원격 저장소라는 개념이 없습니다. 따라서 Commit을 하는 순간 중앙 서버에 코드가 바로 반영됩니다.</p>
<p>이는 내가 작업한 코드를 바로 적용할 수 있는 장점이 있지만 Commit한 코드에 실수가 있을 경우 중앙 서버에서 파일을 받아 작업하는 다른 개발자에게 영향을 줄 수 있습니다.</p>
<p>또한 로컬 저장소라는 개념이 없어 나만의 Version history를 가질 수 없습니다.</p>
<p>작업을 진행하는 동안 항상 중앙 서버와 연결되어 있어야하고, 만약 중앙 서버가 다운되었을 경우, 다른 개발자와 협업할 수 없고 최악의 상황에서는 진행중이었던 프로젝트의 모든 Version history를 잃을 수 있습니다.&nbsp;<br /><br /></p>
<h3><span style="background-color: #f6e199;">Git</span></h3>
<p><b>Git</b><b>은</b><b><span>&nbsp;</span></b><b>분산</b><b><span>&nbsp;</span></b><b>버전</b><b><span>&nbsp;</span></b><b>관리</b><b><span>&nbsp;</span></b><b>시스템</b>입니다.</p>
<p>즉, 클라이언트가 원격 저장소의 모든 정보를 복제해서 가지고 있습니다.</p>
<p>이는 클라이언트가 모든 정보를 가지고 있기 때문에 원격 저장소가 다운될지라도 보유하고 있는 정보로 다시 복원할 수 있습니다.</p>
<p>개발자는 로컬 저장소에서 자신만의 Version history를 가질 수 있고, 로컬 저장소와 원격 저장소는 독립적으로 관리 가능합니다. 즉, 개발자가 로컬 저장소에서 Commit한 정보가 즉시 원격 저장소에 반영되는 것이 아니고 원하는 순간에 원격 저장소에 반영(Push)할 수 있다는 것입니다.</p>
<p>원격 저장소는 여러개를 설정할 수도 있어서, 동시에 다양한 그룹과 다양한 방법으로 협업할 수 있습니다.</p>
<h2 data-ke-size="size26">&nbsp;</h2>
<h2 data-ke-size="size26">5. SVN<span>&nbsp;</span>대비<span>&nbsp;</span>Git<span>&nbsp;</span>차별점</h2>
<h3>(1) 분산식</h3>
<p>SVN과 비교되는 Git의 대표적인 차별점은 Git이 분산식이라는 점입니다. 반면 SVN은 중앙집중식입니다. SVN에서는 중앙 서버가 있고, 코드를 사용해야 할 때 중앙 서버에서 Checkout해야 합니다. 이때 클라이언트에 저장되는 것은 원본을 복제한 버전입니다. Git은 Checkout을 하는 시점에 저장소를 복제합니다. 이는 다른 사람들이 내 저장소를 중앙 저장소로 사용할 수 있을 정도입니다.&nbsp;<br /><br /></p>
<h3>(2) 낮은 통신 의존도</h3>
<p>SVN을 사용할 때 대부분의 작업에서는 중앙 서버와의 통신이 필수입니다. 네트워크 속도가 느리거나 불안정한 경우 작업속도에 영향을 끼칠 수 밖에 없습니다. Git은 원격 저장소에서 코드를 각져올 때(Pull)와 반영할 때(Push) 등 일부 작업에서만 원격 저장소와 통신합니다. 즉, 로컬에서 작업할 때의 자유도가 훨씬 높습니다.<br /><br /></p>
<h3>(3) 효율적은 버전 관리</h3>
<p>SVN은 파일의 변화(차이점)만 기록하지만 Git은 그 순간을 스냅샷으로 저장합니다. 버전을 되돌릴 필요가 있을 때, SVN은 중앙 서버에서 모든 변경내역을 다운받아야 하지만 Git은 저장된 스냅샷으로 바로 되돌릴 수 있습니다. 원격 저장소와 통신할 필요도 없죠.</p>
<h2 data-ke-size="size26">&nbsp;</h2>
<h2 data-ke-size="size26">6. Git<span>&nbsp;</span>세<span>&nbsp;</span>가지<span>&nbsp;</span>영역</h2>
<p>Git이 가지고 있는 세 가지 영역에 대해 알아봅시다.</p>
<ul>
<li>작업 디렉토리(Working Directory): 작업 디렉토리는 현재 작업을 진행중인 공간입니다.</li>
<li>준비 영역(Staging Area): 반영할 파일에 대한 정보를 저장하는 영역입니다. 저장소에 반영되기 전에 거치는 영역입니다.</li>
<li>.git 디렉토리(Repository): .git 디렉토리(로컬 저장소)는 Git 프로젝트의 메타데이터와 데이터가 저장되는 곳을 말합니다. Git의 핵심이며 서버에 있는 저장소를 복제 할 때 .git 디렉토리가 만들어집니다.</li>
</ul>

<h4 data-ke-size="size20"><span style="background-color: #f6e199;">작업 흐름</span></h4>
<p>Git에서는 세 가지 영역에서 다음과 같은 흐름으로 작업이 진행됩니다.</p>
<ul>
<li>Modified: 파일이 수정되었으나, 아직 저장소에 반영 되지 않은 상태</li>
</ul>
<p>작업 디렉토리에서 comment.js 파일을 수정</p>
<ul>
<li>Staged: 수정한 파일 중 곧 반영 할 것인 상태</li>
</ul>
<p>준비 영역에 수정한 파일 comment.js를 추가</p>
<ul>
<li>Committed: 수정한 파일이 저장소에 반영된 상태</li>
</ul>
<p>준비 영역에 있는 파일들을 .git 디렉토리(저장소)에 반영합니다.</p>