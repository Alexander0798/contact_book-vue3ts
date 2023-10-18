
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
    SetSelectedFilter = 'SET_SELECTED_FILTER'
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
    [MutationType.SetPopupEdit](state: State, value: { showPopup: boolean, contactId: string | undefined }): void
    [MutationType.SetSelectedFilter](state: State, payload: OptionDropDown):void
}
export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateContact](state: State, contact: Contact) {
        state.isLoaderSave = true
        setTimeout(() => {
            state.contacts.unshift(contact) 
            state.isLoaderSave = false
            state.showPopupAdd = false
        }, 1000);
    },
    [MutationType.SetContacts](state: State, contacts: Contact[]) {
        state.contacts = contacts
    },
    [MutationType.RemoveContact](state: State, id: string) {
        const contactIndex = state.contacts.findIndex(element => element.id === id)
        if (contactIndex === -1) return
        //If Task exist in the state, remove it
        state.contacts.splice(contactIndex, 1)
    },
    [MutationType.EditContact](state: State, contact: Contact) {
        const contactIndex = state.contacts.findIndex(element => element.id === contact.id)
        if (contactIndex === -1) return
        //If Task exist in the state, toggle the editing property
        state.isLoaderEdit = true
        setTimeout(() => {
            state.contacts[contactIndex] = { ...contact }
            console.log("contactEdit", state.contacts[contactIndex])
            state.isLoaderEdit = false
            state.showPopupEdit = false
        }, 1000)

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
    [MutationType.SetSelectedFilter](state: State, payload: OptionDropDown) {
        state.selectedFilter = payload
    }
}