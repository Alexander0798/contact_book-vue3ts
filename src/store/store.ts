// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import State from "../types/State";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  mutations,
  getters,
  actions,
});

export function useStore() {
  return baseUseStore(key);
}
