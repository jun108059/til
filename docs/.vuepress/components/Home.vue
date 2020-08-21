<template>
  <div>
    <div class="titleContainer">
      <h1>
        개발하는 만두
        <br>공부 일기
      </h1>
      <div class="infoContainer">
        <div class="name">YoungJun TIL</div>
        <ul>
          <li>
            <a href="https://dev-youngjun.tistory.com/">Blog</a>
          </li>
          <li>
            <a href="https://github.com/jun108059">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
    <br/>
    <div class="footer">
      <hr/>
      <p class="copyright">
       © 2020 YoungJunPark
       <br/>
       This site/repository is licensed under the MIT license. See <a href="https://github.com/jun108059/til/blob/master/LICENSE">LICENSE</a> for details.
      </p>
    </div>
  </div>
</template>



<script>
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Gugi";

.infoContainer {
  text-align: right;
}
h1 {
  font-family: "Gugi", cursive;
  font-weight: 500;
  border-bottom: 17px solid #16a2ff;
  word-break: keep-all;
  font-size: 5rem;
}
.name {
  font-weight: 900;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}
@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }
  .name {
    font-size: 1.7rem;
  }
}
@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
.footer{
  text-align: center;
}
.copyright {
  color: gray;
  display: inline-block;
}
</style>