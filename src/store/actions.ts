import { ActionTree } from "vuex";
import { MutationType } from "./mutations";
import State from "../types/State";
import OptionDropDown from "@/types/OptionDropDown";
import Contact from "@/types/Contact";
export enum ActionTypes {
  GetContacts = "GET_CONTACTS",
  CreateContact = "CREATE_CONTACT",
  SetPopupAdd = "SET_POPUP_ADD",
  SetPopupEdit = "SET_POPUP_EDIT",
  SetSelectedFilter = "SET_SELECTED_FILTER",
  EditContact = "EDIT_CONTACT",
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
};
export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GetContacts]({ commit }: any) {
    commit(MutationType.SetLoading, true);
    commit(MutationType.SetLoading, false);
    commit(MutationType.SetContacts, [
      {
        category: { name: "Коллеги", id: "colleagues" },
        date: "21.21.21",
        email: "asdfasdfasdf@Dsdadddd.ru",
        id: "asdfasdfasdfasd",
        name: "vasya",
        phone: "+7(895)151-39-98",
      },
      {
        category: { name: "Коллеги", id: "colleagues" },
        date: "21.21.21",
        email: "asdfasdfasdf@Dsdadddd.ru",
        id: "asdfasdfasdfasd",
        name: "vasфываya",
        phone: "+7(895)151-39-98",
      },
    ]);
  },
  async [ActionTypes.CreateContact]({ commit }: any, payload: Contact) {
    commit(MutationType.CreateContact, payload);
  },
  async [ActionTypes.EditContact]({ commit }: any, payload: Contact) {
    commit(MutationType.EditContact, payload);
  },
  async [ActionTypes.SetPopupAdd]({ commit }: any, payload: boolean) {
    commit(MutationType.SetPopupAdd, payload);
  },
  async [ActionTypes.SetPopupEdit](
    { commit }: any,
    payload: { showPopup: boolean; contactId: string | undefined },
  ) {
    commit(MutationType.SetPopupEdit, {
      showPopup: payload.showPopup,
      contactId: payload.contactId,
    });
  },
  async [ActionTypes.SetSelectedFilter](
    { commit }: any,
    payload: OptionDropDown,
  ) {
    commit(MutationType.SetSelectedFilter, payload);
  },
};
