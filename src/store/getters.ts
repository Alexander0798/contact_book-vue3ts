
import { GetterTree } from 'vuex'
import State from '../types/State'
import Contact from '../types/Contact'

export type Getters = {
  getContactById(state: State): (id :string) => Contact | undefined
}

export const getters: GetterTree<State, State> & Getters = {
  getContactById: (state: State) => (id: string) => {
    return state.contacts.find(contact => contact.id === id)
  }
}
