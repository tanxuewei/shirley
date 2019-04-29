<script>
function noop () {}

export default {
  name: 'sl-tab-nav',
  data () {
    return {

    }
  },

  props: {
    panes: Array,
    currentName: String,
    onTabClick: {
      type: Function,
      default: noop
    }
  },

  render () {
    const {
      panes,
      onTabClick
    } = this

    const tabs = this._l(panes, (pane, index) => {
      let tabName = pane.name || pane.index || index

      pane.index = `${index}`

      const tabLabelContent = pane.$slots.label || pane.label

      const tabindex = pane.active ? 0 : -1

      return (
        <div
          class={{
            'sl-tabs__item': true,
            'is-active': pane.active
          }}
          id={`tab-${tabName}`}
          key={`tab-${tabName}`}
          role="tab"
          tabindex={tabindex}
          ref="tabs"
          refInFor
          on-click={(ev) => onTabClick(pane, tabName, ev)}>
          {tabLabelContent}
        </div>
      )
    })
    return (
      <div class={['sl-tabs__nav-wrap']}>
        <div class={['sl-tabs__nav-scroll']} ref="navScroll">
          <div
            class={['sl-tabs__nav']}
            ref="nav"
            role="tabList">
            {tabs}
          </div>
        </div>
      </div>
    )
  },

  methods: {

  }
}
</script>
