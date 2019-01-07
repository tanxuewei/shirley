<template>
<div class="body">
  Hello, World3!
  <img :src="imgUrl" />
  <Menu/>
  <router-view></router-view>
</div>
</template>

<script>
import Menu from '@/components/menu.vue'
import ts from '@/static/img/ts.png'

export default {
  name: 'app',
  components: {
    Menu
  },
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