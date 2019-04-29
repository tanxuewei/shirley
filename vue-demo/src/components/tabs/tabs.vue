<script>
import TabNav from './tab-nav'

export default {
  name: 'sl-tabs',

  components: {
    TabNav
  },

  props: {
    type: String,
    activeName: String,
    value: {},
    beforeLeave: Function
  },

  data () {
    return {
      currentName: this.value || this.activeName,
      panes: []
    }
  },

  watch: {
    activeName (value) {
      this.setCurrentName(value)
    },
    value (value) {
      this.setCurrentName(value)
    }
  },

  render (h) {
    let {
      handleTabClick,
      currentName,
      panes
    } = this
    const navData = {
      props: {
        onTabClick: handleTabClick,
        currentName,
        panes
      },

      ref: 'nav'
    }
    const header = (
      <div class="sl-tabs_header">
        <tab-nav {...navData}></tab-nav>
      </div>
    )
    const panel = (
      <div class="sl-tabs_content">
        {this.$slots.default}
      </div>
    )
    return (
      <div class={{
        'sl-tabs': true
      }}>
        {[header, panel]}
      </div>
    )
  },

  methods: {
    calcPaneInstances (isLabelUpdated = false) {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter(vnode => vnode.tag &&
          vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'sl-tab-panel')
        const panes = paneSlots.map(({ componentInstance }) => componentInstance)
        const panesChanged = !(panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index]))
        if (isLabelUpdated || panesChanged) {
          this.panes = panes
        }
      } else if (this.panes.length !== 0) {
        this.panes = []
      }
    },

    setCurrentName (value) {
      const changeCurrentName = () => {
        this.currentName = value
        this.$emit('input', value)
      }

      if (this.currentName !== value) {
        changeCurrentName()
      }
    },

    handleTabClick (tab, tabName, event) {
      if (tab.disabled) return
      this.setCurrentName(tabName)
      this.$emit('tab-click', tab, event)
    }
  },

  created () {
    if (!this.currentName) {
      this.setCurrentName('0')
    }

    this.$on('tabLabelChanged', this.calcPaneInstances.bind(null, true))
  },

  mounted () {
    this.calcPaneInstances()
  }
}
</script>

<style lang="less">
.sl-tabs {
  &_header {
    .sl-tabs__nav-scroll {
      overflow: hidden;
    }
    .sl-tabs__item {
      padding: 0 20px;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      position: relative;

      &:first-child {
        padding-left: 0;
      }

      &.is-active {
        color: #f00;
      }
    }
  }

  &_content {

  }
}
</style>

