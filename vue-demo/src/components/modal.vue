<template>
  <transition
    name="fadeIn">
    <div class="m-modal-wrap" v-show="visible">
      <div class="m-modal" :style="style">
        <div class="m-modal-hd">{{ title }}</div>
        <div class="m-modal-bd">
          <slot></slot>
        </div>
        <div class="m-modal-ft">
          <button class="u-btn">确定</button>
          <button class="u-btn" @click="close">取消</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'sl-modal',
  data () {
    return {
      visible: false
    }
  },

  props: {
    title: {
      type: String,
      default: '标题'
    },

    width: String
  },

  computed: {
    style () {
      return {
        width: this.width
      }
    }
  },

  methods: {
    show () {
      this.visible = true
      this.$emit('input', true)
    },

    close () {
      this.visible = false
      this.$emit('input', false)
    }
  }
}
</script>

<style>
.m-modal {
  width: 650px;
  height: 400px;
  background: #fff;
  margin: 0 auto;
  
  &-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    z-index: 999;
  }
}
</style>


