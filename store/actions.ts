import { ActionTree } from 'vuex'
import { TRootState } from '~/store/state'

export enum StoreAppActions {
  INCREMENT = 'increment',
}

const actions: ActionTree<TRootState, TRootState> = {
  increment: ({ commit }) => {
    commit(StoreAppActions.INCREMENT)
  }
}

export default actions
