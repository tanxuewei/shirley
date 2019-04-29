<template>
  <div
    class="sl-tab-pane"
    v-if="loaded || active"
    v-show="active"
    role="tabpanel"
    :id="`pane-${paneName}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'sl-tab-panel',

  props: {
    label: String,
    name: String
  },

  data () {
    return {
      index: null,
      loaded: false
    }
  },

  computed: {
    active () {
      const active = this.$parent.currentName === (this.name || this.index)
      if (active) {
        this.loaded = true
      }

      return active
    },
    paneName () {
      return this.name || this.index
    }
  },

  watch: {
    label () {
      this.$parent.$emit('tabLabelChanged')
    }
  }
}
</script>
