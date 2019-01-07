<template>
  <div>
    <ul>
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
  name: 'menu',
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
        }
      ]
    }
  }
}
</script>

