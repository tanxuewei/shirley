<template>
  <div>
    {{ msg }} {{ count }} {{ doneTodoCount }}
    <button @click="increment">我是业务button</button>
    <button @click="incrementAsync">action BTN</button>
    <button @click="showModal">弹框</button>
    <sl-tabs v-model="activeName">
      <sl-tab-panel label="tab1" name="first">
        tab1
      </sl-tab-panel>
      <sl-tab-panel label="tab2" name="second">
        tab2
      </sl-tab-panel>
      <sl-tab-panel label="tab3" name="third">
        tab3
      </sl-tab-panel>
    </sl-tabs>
    <sl-modal
      title="我是一个弹框"
      @input="open"
      ref="modal">
      body1
    </sl-modal>
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
      msg: '大家好，我是业务',
      activeName: 'second'
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
    ]),

    showModal () {
      this.$refs.modal.show()
    },

    open (flag) {
      console.log(flag)
    }
  },
  mounted () {
    let self = this
  }
}
</script>

