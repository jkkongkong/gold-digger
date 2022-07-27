

<template>
  <div class="container">
    <span>备案号：蜀ICP备 </span>
    <a href="https://beian.miit.gov.cn/" class="link" target="_blank" rel="noopener noreferrer">2029021234号-1</a>
  </div>
</template>

<script>

export default {
  name: 'PageFooter',
}
</script>

<style lang="less" scoped >
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(180, 176, 176);
  width: 100%;
  height: 50px;
  background-color: hsla(0, 0, 0, 0.682);

  .link {
    color: rgb(180, 176, 176)
  }
}
</style>