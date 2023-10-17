import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import State from '../types/State'

export enum ActionTypes {
    GetContacts = 'GET_CONTACTS',
    SetPopupAdd = 'SET_POPUP_ADD',
    SetPopupEdit = 'SET_POPUP_EDIT'
}
type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}
export type Actions = {
    [ActionTypes.GetContacts]({commit}: any): void
    [ActionTypes.SetPopupAdd]({commit}: any): void
    [ActionTypes.SetPopupEdit]({commit}: any): void
}
export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.GetContacts]({commit}: any) {
        commit(MutationType.SetLoading, true)

        commit(MutationType.SetLoading, false)
        commit(MutationType.SetContacts, [
            {
                name: 'vasya',
                phone: '89515139989',
                email: 'asdfasdfasdf@Dsda',
                id: 'asdfasdfasdfasd',
                date: '21.21.21'
            },
            {
                name: 'vasya',
                phone: '89515139989',
                email: 'asdfasdfasdf@Dsda',
                id: 'asdfasdfasdfafsd',
                date: '21.21.21'
            }
        ])
    },
    async [ActionTypes.SetPopupAdd]({commit}: any) {
        commit(MutationType.SetPopupAdd, true)
    },
    async [ActionTypes.SetPopupEdit]({commit}: any, payload: { showPopup: boolean, contactId: string | undefined }) {
        commit(MutationType.SetPopupEdit, { showPopup: payload.showPopup, contactId: payload.contactId })
    }
}     