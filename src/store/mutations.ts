
import { MutationTree } from 'vuex'
import State from '../types/State'
import Contact from '../types/Contact'
import { state } from './state'

export enum MutationType {
    CreateContact = 'CREATE_CONTACT',
    SetContacts = 'SET_CONTACTS',
    RemoveContact = 'REMOVE_CONTACT',
    EditContact = 'EDIT_CONTACT',
    SetLoading = 'SET_LOADING',
    SetPopupAdd = 'SET_CREATE_POPUP',
    SetPopupEdit = 'SET_EDIT_POPUP',
}

export type Mutations = {
    [MutationType.CreateContact](state: State, task: Contact): void
    [MutationType.SetContacts](state: State, tasks: Contact[]): void
    [MutationType.RemoveContact](
        state: State,
        task: Partial<Contact> & { id: string }
    ): void
    [MutationType.EditContact](
        state: State,
        task: Partial<Contact> & { id: string }
    ): void
    [MutationType.SetLoading](state: State, value: boolean): void
    [MutationType.SetPopupAdd](state: State, value: boolean): void
    [MutationType.SetPopupEdit](state: State, value: { showPopup: boolean, contactId: string | undefined }): void
}
export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateContact](state: State, contact: Contact) {
        state.contacts.unshift(contact)
    },
    [MutationType.SetContacts](state: State, contacts: Contact[]) {
        state.contacts = contacts
    },
    [MutationType.RemoveContact](state: State, id: string) {
        const taskIndex = state.contacts.findIndex(element => element.id === id)
        if (taskIndex === -1) return
        //If Task exist in the state, remove it
        state.contacts.splice(taskIndex, 1)
    },
    [MutationType.EditContact](state: State, contact: Contact) {
        const contactIndex = state.contacts.findIndex(element => element.id === contact.id)
        if (contactIndex === -1) return
        //If Task exist in the state, toggle the editing property
        state.contacts[contactIndex] = { ...contact }
        console.log("contactEdit", state.contacts[contactIndex])
    },
    [MutationType.SetLoading](state: State, value: boolean) {
        state.loading = value
        console.log("I am loading...")
    },
    [MutationType.SetPopupAdd](state: State, value: boolean) {
        state.showPopupAdd = value
    },
    [MutationType.SetPopupEdit](state: State, value: { showPopup: boolean, contactId: string | undefined }) {
        state.showPopupEdit = value.showPopup
        state.editContactId = value.contactId
    },
}