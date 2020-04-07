<template>
  <div>
    <div>
      <h1>Tech-Stack📚</h1>
      <h3>신입 개발자로서 성장을 위한 전공 지식을 정리합니다 😊</h3>
      <div>
        <ul class="ul">
          <li>
            <a href="https://github.com/shjang1013">GitHub(shjang1013)</a>
          </li>
          <li>
            <a href="https://github.com/HyeminNoh">GitHub(HyeminNoh)</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

h1 {
  font-weight: 500;
  border-bottom: 17px solid #ffd816;
  word-break: keep-all;
  font-size: 5rem;
}
.ul {
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
</style>
