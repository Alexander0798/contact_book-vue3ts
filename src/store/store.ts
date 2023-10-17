// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { state } from './state'
import { Mutations, mutations } from './mutations'
import { Actions, actions } from './actions'
import { Getters, getters } from './getters'
import State from '../types/State'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state,
  mutations,
  getters,
  actions
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}
// export type Store = Omit<
//   VuexStore<State>,
//   'getters' | 'commit' | 'dispatch'
// > & {
//   commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
//     key: K,
//     payload: P,
//     options?: CommitOptions
//   ): ReturnType<Mutations[K]>
// } & {
//   dispatch<K extends keyof Actions>(
//     key: K,
//     payload?: Parameters<Actions[K]>[1],
//     options?: DispatchOptions
//   ): ReturnType<Actions[K]>
// } & {
//   getters: {
//     [K in keyof Getters]: ReturnType<Getters[K]>
//   }
// }