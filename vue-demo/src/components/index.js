import Modal from './modal.vue'
import Tabs from './tabs/tabs.vue'
import TabPanel from './tabs/tab-panel.vue'

let components = [{
  name: 'sl-modal',
  component: Modal
}, {
  name: 'sl-tabs',
  component: Tabs
}, {
  name: 'sl-tab-panel',
  component: TabPanel
}]

let plugin = (vue) => {
  if (plugin.installed) {
    return
  }

  components.forEach(item => {
    vue.component(item.name, item.component)
  })
}

export default plugin
