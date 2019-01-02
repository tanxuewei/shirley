<template>
<div class="body">
  Hello, World3!
  <img :src="imgUrl" />
</div>
</template>

<script>
import ts from '@/static/img/ts.png'

export default {
  name: 'app',
  data () {
    return {
      imgUrl: ts
    }
  }
}
console.log('我是vue')
</script>

<style lang="less" scoped>
.body {
  font-size: 20px;
}

img {
  width: 20px;
  height: 20px;
}
</style>