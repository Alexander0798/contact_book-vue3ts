import DropDownOption from "./DropDownOption";

export default interface AppState {
    options: DropDownOption[],
    selectedOption:  null | DropDownOption
}