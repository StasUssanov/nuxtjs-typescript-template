import { MutationTree } from 'vuex'
import { TRootState } from '~/store/state'

const mutations: MutationTree<TRootState> = {
  increment: (state) => {
    state.counter++
  }
}

export default mutations
