import { ActionTree } from "vuex";
import { MutationType } from "./mutations";
import State from "../types/State";
import OptionDropDown from "@/types/OptionDropDown";
import Contact from "@/types/Contact";
import api from "@/api";
export enum ActionTypes {
  GetContacts = "GET_CONTACTS",
  CreateContact = "CREATE_CONTACT",
  FilterContact = "FILTER_CONTACT",
  SetPopupAdd = "SET_POPUP_ADD",
  SetPopupEdit = "SET_POPUP_EDIT",
  SetSelectedFilter = "SET_SELECTED_FILTER",
  EditContact = "EDIT_CONTACT",
  RemoveContact = "REMOVE_CONTACT",
}

export type Actions = {
  [ActionTypes.GetContacts]({ commit }: any): void;
  [ActionTypes.FilterContact]({ commit }: any, payload: Contact[]): void;
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
  async [ActionTypes.GetContacts]({ commit }: any) {
    try {
      commit(MutationType.SetLoading, true);
      // получение данный с фейкого апи, данные не являются контактом
      const contacts = await api.getContact();
      console.log(contacts);
      // устанавливаю пустой масив из-за отсутсвия действующего апи
      commit(MutationType.SetContacts, []);
      commit(MutationType.SetLoading, false);
    } catch (err) {
      alert("Ошибка при загрузки контактов! Обновите страницу");
      console.log(err);
    }
  },
  [ActionTypes.FilterContact]({ commit }: any, payload: Contact[]) {
    commit(MutationType.SetContacts, payload);
  },
  async [ActionTypes.CreateContact]({ commit }: any, payload: Contact) {
    try {
      commit(MutationType.SetLoadingSave, true);
      const setContact = await api.setContact(payload);
      console.log(setContact);
      commit(MutationType.CreateContact, payload);
      commit(MutationType.SetLoadingSave, false);
      commit(MutationType.SetPopupAdd, false);
      commit(MutationType.SetNotifierSave, true);
      setTimeout(() => {
        commit(MutationType.SetNotifierSave, false);
      }, 3000);
    } catch (err) {
      alert("Ошибка при сохранении контакта! Повторите попытку");
      console.log(err);
      commit(MutationType.SetLoadingSave, false);
    }
  },
  async [ActionTypes.EditContact]({ commit }: any, payload: Contact) {
    try {
      commit(MutationType.SetLoadingEdit, true);
      const editContact = await api.patchContact(payload);
      console.log(editContact);

      commit(MutationType.EditContact, payload);
      commit(MutationType.SetLoadingEdit, false);
      commit(MutationType.SetPopupEdit, false);
      commit(MutationType.SetNotifierEdit, true);
      setTimeout(() => {
        commit(MutationType.SetNotifierEdit, false);
      }, 3000);
    } catch (err) {
      alert("Ошибка при изменении контакта! Повторите попытку");
      console.log(err);
      commit(MutationType.SetLoadingEdit, false);
    }
  },
  async [ActionTypes.RemoveContact]({ commit }: any, id: string) {
    try {
      commit(MutationType.SetLoadingRemove, true);
      const deleteContact = await api.deleteContact(id);
      console.log(deleteContact);

      commit(MutationType.RemoveContact, id);
      commit(MutationType.SetLoadingRemove, false);
      commit(MutationType.SetPopupEdit, false);
      commit(MutationType.SetNotifierRemove, true);
      setTimeout(() => {
        commit(MutationType.SetNotifierRemove, false);
      }, 3000);
    } catch (err) {
      alert("Ошибка при удалении контакта! Повторите попытку");
      console.log(err);
      commit(MutationType.SetLoadingRemove, false);
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
};
