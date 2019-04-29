<template>
<div class="body">
  <!-- Hello, World3!
  <button @click="increment">我是一个button</button>
  <img :src="imgUrl" /> -->
  <Menu/>
  <div class="main">
    <router-view></router-view>
  </div>
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
  },
  methods: {
    increment () {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
console.log('我是vue')
</script>

<style lang="less" scoped>
.body {
  font-size: 20px;
  display: flex;
}

img {
  width: 20px;
  height: 20px;
}

.main {
  flex: 1;
}
</style>