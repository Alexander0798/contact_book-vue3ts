import OptionDropDown from "./OptionDropDown";
import Contact from "./Contact";
interface DropDown {
    optionsFilter: OptionDropDown[],
    defaultSelectedFilter: OptionDropDown,
    optionsForm: OptionDropDown[],
    defaultSelectedForm: OptionDropDown,
}
export default interface State {
    dropDown: DropDown,
    contacts: Contact[],
    selectedFilter: OptionDropDown,
    loading: boolean,
    loadingSave: boolean,
    loadingEdit: boolean,
    loadingRemove: boolean,
    showPopupAdd: boolean,
    showPopupEdit: boolean,
    editContactId: string | undefined
    notifierSave: boolean,
    notifierRemove: boolean,
    notifierEdit: boolean
}
