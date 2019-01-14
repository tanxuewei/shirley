import { INCREMENT_COUNT } from './mutation-types'

export const mutations = {
  [INCREMENT_COUNT] (state) {
    state.count++
  }
}