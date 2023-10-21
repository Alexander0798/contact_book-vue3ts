
import { MutationTree } from 'vuex'
import State from '../types/State'
import Contact from '../types/Contact'
import OptionDropDown from '@/types/OptionDropDown'
export enum MutationType {
    CreateContact = 'CREATE_CONTACT',
    SetContacts = 'SET_CONTACTS',
    RemoveContact = 'REMOVE_CONTACT',
    EditContact = 'EDIT_CONTACT',
    SetLoading = 'SET_LOADING',
    SetPopupAdd = 'SET_CREATE_POPUP',
    SetPopupEdit = 'SET_EDIT_POPUP',
    SetSelectedFilter = 'SET_SELECTED_FILTER',
    SetLoadingSave = 'SET_LOADER_SAVE',
    SetLoadingEdit = 'SET_LOADER_EDIT',
    SetLoadingRemove = 'SET_LOADER_REMOVE',
    SetNotifierSave = 'SET_NOTIFIER_SAVE',
    SetNotifierEdit = 'SET_NOTIFIER_EDIT',
    SetNotifierRemove = 'SET_NOTIFIER_REMOVE',
    SetEditContactId = 'SET_EDIT_CONTACT_ID'
}

export type Mutations = {
    [MutationType.CreateContact](state: State, contact: Contact): void
    [MutationType.SetContacts](state: State, contacts: Contact[]): void
    [MutationType.RemoveContact](
        state: State,
        id: string
    ): void
    [MutationType.EditContact](
        state: State,
        id: Partial<Contact> & { id: string }
    ): void
    [MutationType.SetLoading](state: State, value: boolean): void
    [MutationType.SetPopupAdd](state: State, value: boolean): void
    [MutationType.SetPopupEdit](state: State, value: boolean): void
    [MutationType.SetSelectedFilter](state: State, payload: OptionDropDown): void
    [MutationType.SetEditContactId](state: State, contactId: string | undefined): void
    [MutationType.SetLoadingSave](state: State, payload: boolean): void
    [MutationType.SetLoadingEdit](state: State, payload: boolean): void
    [MutationType.SetLoadingRemove](state: State, payload: boolean): void
    [MutationType.SetNotifierEdit](state: State, payload: boolean): void
    [MutationType.SetNotifierRemove](state: State, payload: boolean): void
    [MutationType.SetNotifierSave](state: State, payload: boolean): void
}
export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateContact](state: State, contact: Contact) {
        state.contacts.unshift(contact)
    },
    [MutationType.SetContacts](state: State, contacts: Contact[]) {
        state.contacts = contacts.sort((a: Contact, b: Contact): any => {
            return Number(a.date) - Number(b.date);
          });
    },
    [MutationType.RemoveContact](state: State, id: string) {
        const contactIndex = state.contacts.findIndex(element => element.id === id)
        if (contactIndex === -1) return
        state.contacts.splice(contactIndex, 1)
    },
    [MutationType.EditContact](state: State, contact: Contact) {
        const contactIndex = state.contacts.findIndex(element => element.id === contact.id)
        if (contactIndex === -1) return
    state.contacts[contactIndex] = { ...contact }
    },
    [MutationType.SetLoading](state: State, value: boolean) {
        state.loading = value
        console.log("I am loading...")
    },
    [MutationType.SetPopupAdd](state: State, value: boolean) {
        state.showPopupAdd = value
    },
    [MutationType.SetPopupEdit](state: State, value: boolean) {
        state.showPopupEdit = value

    },
    [MutationType.SetSelectedFilter](state: State, payload: OptionDropDown) {
        state.selectedFilter = payload
    },
    [MutationType.SetEditContactId](state: State, payload: string | undefined) {
        state.editContactId = payload
    },
    [MutationType.SetLoadingSave](state: State, payload: boolean) {
        state.loadingSave = payload
        console.log(state.loadingSave)
    },
    [MutationType.SetLoadingEdit](state: State, payload: boolean) {
        state.loadingEdit = payload
    },
    [MutationType.SetLoadingRemove](state: State, payload: boolean){
        state.loadingRemove = payload
    },
    [MutationType.SetNotifierEdit](state: State, payload: boolean) {
        state.notifierEdit = payload
    },
    [MutationType.SetNotifierRemove](state: State, payload: boolean) {
        state.notifierRemove = payload
    },
    [MutationType.SetNotifierSave](state: State, payload: boolean) {
        state.notifierSave = payload
    },

}