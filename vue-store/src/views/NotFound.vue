<template>
  <div class="container404">
    <div>
      <div>404 Not Found</div>
      <div class="message">페이지를 찾을수 없습니다.</div>
      <div class="mt10"><router-link to="/">홈으로</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.container404 {
  position: fixed;
  background: #f5f5f5;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
