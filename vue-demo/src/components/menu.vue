<template>
  <div>
    <ul class="m-menu">
      <li
        v-for="(item, index) in menus"
        :key="index">
        <h3>
          <router-link :to="item.href">{{ item.name }}</router-link>
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmenu',
  data () {
    return {
      menus: [
        {
          name: '首页',
          href: '/'
        }, {
          name: '服务',
          href: '/service'
        }, {
          name: '业务',
          href: '/business'
        }, {
          name: '购物车',
          href: '/cart'
        }, {
          name: '产品',
          href: '/product'
        }, {
          name: '答题',
          href: '/score'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.m-menu {
  width: 300px;

  li {
    padding: 10px;
  }
}
</style>
