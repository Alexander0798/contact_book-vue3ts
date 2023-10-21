import State from "../types/State"
const  optionsFilter = [{
    name: "Все",
    id: 'all'
}, {
    name: "Родственники",
    id: 'relatives'
}, {
    name: "Коллеги",
    id: 'colleagues'
}]

export const state: State = {
    dropDown: {
        optionsFilter: optionsFilter,
        defaultSelectedFilter: optionsFilter[0],
        optionsForm: optionsFilter.slice(1),
        defaultSelectedForm: { name: 'Не выбрано', id: "not" },
    },
    contacts: [],
    selectedFilter: optionsFilter[0],
    loading: false,
    loadingSave: false,
    loadingEdit: false,
    loadingRemove: false,
    showPopupAdd: false,
    showPopupEdit: false,
    editContactId: undefined,
    notifierSave: false,
    notifierRemove: false,
    notifierEdit: false
}
