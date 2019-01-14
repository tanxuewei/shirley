import { INCREMENT_COUNT } from './mutation-types'

export default {
  increment ({ commit }) {
    commit(INCREMENT_COUNT)
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit(INCREMENT_COUNT)
    }, 1000)
  }
}