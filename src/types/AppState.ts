import OptionDropDown from "./OptionDropDown";

export default interface AppState {
    optionsFilter: OptionDropDown[];
    selectedFilter: OptionDropDown;
    optionsForm: OptionDropDown[];
    selectedForm: OptionDropDown;
}
