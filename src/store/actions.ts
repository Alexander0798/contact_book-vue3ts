import { ActionTree } from "vuex";
import { MutationType } from "./mutations";
import State from "../types/State";
import OptionDropDown from "@/types/OptionDropDown";
import Contact from "@/types/Contact";
import api from "@/api";
export enum ActionTypes {
  GetContacts = "GET_CONTACTS",
  CreateContact = "CREATE_CONTACT",
  SetPopupAdd = "SET_POPUP_ADD",
  SetPopupEdit = "SET_POPUP_EDIT",
  SetSelectedFilter = "SET_SELECTED_FILTER",
  EditContact = "EDIT_CONTACT",
  RemoveContact = "REMOVE_CONTACT"
}

export type Actions = {
  [ActionTypes.GetContacts]({ commit }: any): void;
  [ActionTypes.CreateContact]({ commit }: any, payload: Contact): void;
  [ActionTypes.EditContact]({ commit }: any, payload: Contact): void;
  [ActionTypes.SetPopupAdd]({ commit }: any, payload: boolean): void;
  [ActionTypes.SetPopupEdit](
    { commit }: any,
    payload: { showPopup: boolean; contactId: string | undefined },
  ): void;
  [ActionTypes.SetSelectedFilter](
    { commit }: any,
    payload: OptionDropDown,
  ): void;
  [ActionTypes.RemoveContact]({ commit }: any, id: string): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async  [ActionTypes.GetContacts]({ commit }: any) {
    commit(MutationType.SetLoading, true);
    // получение данный с фейкого апи, данные не являются контактом
    const contacts = await api.getContact()
    console.log(contacts)
    // устанавливаю пустой масив из-за отсутсвия действующего апи
    commit(MutationType.SetContacts, [])
    commit(MutationType.SetLoading, false);

  },
  async [ActionTypes.CreateContact]({ commit }: any, payload: Contact) {
    try {
      commit(MutationType.SetLoadingEdit, true)
      const setContact = await api.setContact(payload)
      console.log(setContact)
      commit(MutationType.CreateContact, payload);
      commit(MutationType.SetLoadingEdit, false)
      commit(MutationType.SetPopupAdd, false)
      setTimeout(() => {
        commit(MutationType.SetNotifierSave, true)
        setTimeout(() => {
          commit(MutationType.SetNotifierSave, false)
        }, 3000)
      }, 500)
    } catch (err) {
      console.log(err)
    }
  },
  async [ActionTypes.EditContact]({ commit }: any, payload: Contact) {
    try {
      commit(MutationType.SetLoadingEdit, true)
      const editContact = await api.patchContact
      
      console.log(editContact)
      commit(MutationType.EditContact, payload)
      commit(MutationType.SetLoadingEdit, false)
      commit(MutationType.SetPopupEdit, false)
      setTimeout(() => {
        commit(MutationType.SetNotifierEdit, true)
        setTimeout(() => {
          commit(MutationType.SetNotifierEdit, false)
        }, 3000)
      }, 1000)

    } catch (err) {
      console.log(err)
    }

  },
  async [ActionTypes.SetPopupAdd]({ commit }: any, payload: boolean) {
    commit(MutationType.SetPopupAdd, payload);
  },
  async [ActionTypes.SetPopupEdit](
    { commit }: any,
    payload: { showPopup: boolean; contactId: string | undefined },
  ) {
    commit(MutationType.SetPopupEdit, payload.showPopup);
    commit(MutationType.SetEditContactId, payload.contactId);
  },
  async [ActionTypes.SetSelectedFilter](
    { commit }: any,
    payload: OptionDropDown,
  ) {
    commit(MutationType.SetSelectedFilter, payload);
  },
  [ActionTypes.RemoveContact]({ commit }: any, id: string) {
    commit(MutationType.RemoveContact, id)
  }
};
