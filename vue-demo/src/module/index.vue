<template>
  <div>
    {{ msg }}
    <router-link :to="'/cart'">购物车</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '大家好，我是index'
    }
  }
}
</script>

