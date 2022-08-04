import { GetterTree } from 'vuex'
import { TRootState } from '~/store/state'

const getters: GetterTree<TRootState, TRootState> = {
  getCounter: state => state.counter
}

export default getters
