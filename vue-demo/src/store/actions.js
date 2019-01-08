export default {
  increment ({ commit }) {
    commit('increment')
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}