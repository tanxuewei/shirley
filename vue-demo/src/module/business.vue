<template>
  <div>
    {{ msg }} {{ count }} {{ doneTodoCount }}
    <button @click="increment">我是业务button</button>
    <button @click="incrementAsync">action BTN</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'business',
  computed: {
    // ...mapState({
    //   count: state => state.count
    // })
    // 如果不改变名称就用下面的写法
    ...mapState(['count']),
    ...mapGetters([
      'doneTodoCount'
    ])
  },
  data () {
    return {
      msg: '大家好，我是业务'
    }
  },
  methods: {
    // 直接映射为store.commit
    // ...mapMutations([
    //   'INCREMENT_COUNT'
    // ]),
    // incrementAsync () {
    //   this.$store.dispatch('incrementAsync')
    // },
    ...mapActions([
      'increment',
      'incrementAsync'
    ])
  }
}
</script>

