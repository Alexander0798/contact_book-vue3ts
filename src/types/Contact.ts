import OptionDropDown from './OptionDropDown'
export default interface Contact {
    name: string,
    phone: string,
    email: string
    category: null | OptionDropDown,
    id: string,
    date: string
}