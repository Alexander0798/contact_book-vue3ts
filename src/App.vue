<template>
  <AppHeader />
  <main class="main">
    <AppMenu>
      <AppDropDown :options="dropdown.optionsFilter" :selectedOption="dropdown.selectedFilter" :textWeight="true"
        v-model="selectedFilterValue" />
      <AppButtonAdd @click="isOpenPopupAdd" :transformButton="transformButton" />
    </AppMenu>
    <AppList :transformContact="transformContact">
      <AppItem :transformContact="transformContact" v-for="contact in contacts" :key="String(contact.id)"
        :id="`${contact.id}`" :contact="contact"></AppItem>
    </AppList>
  </main>
  <AppPopup v-model:show="showPopupAdd">
    <AppFormAdd :optionsForm="dropdown.optionsForm" :selectedForm="dropdown.selectedForm" @onSubmit="submitFormAdd" />
  </AppPopup>
  <!-- <AppPopup v-model:show="showPopupEdit">
    <AppFormEdit :optionsForm="dropdown.optionsForm" :selectedForm="dropdown.selectedForm" @onSubmit="submitFormAdd" />
  </AppPopup> -->
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import AppMenu from './components/AppMenu.vue';
import AppDropDown from './components/UI/AppDropDown.vue';
// import State from './types/State';
import AppPopup from './components/UI/AppPopup.vue';
import AppHeader from './components/AppHeader.vue';
import AppList from './components/AppList.vue';
import AppButtonAdd from './components/AppButtonAdd.vue';
import AppFormAdd from './components/AppFormAdd.vue';
import AppItem from './components/AppItem.vue'
import OptionDropDown from './types/OptionDropDown';

import { ActionTypes } from './store/actions'
import { useStore } from './store/store'
// import AppFormEdit from './components/AppFormEdit.vue';


const optionsFilter: OptionDropDown[] = [{
  name: "Все",
  id: 'all'
}, {
  name: "Родственники",
  id: 'relatives'
}, {
  name: "Коллеги",
  id: 'colleagues'
}]

const selectedFilter: OptionDropDown = optionsFilter[0]
const optionsForm: OptionDropDown[] = optionsFilter.slice(1)
const selectedForm: OptionDropDown = { name: 'Не выбрано', id: "no" }

const dropdown = ref<any>({
  optionsFilter: optionsFilter,
  selectedFilter: selectedFilter,
  optionsForm: optionsForm,
  selectedForm: selectedForm
})

const store = useStore()

console.log(store.state.contacts)
const selectedFilterValue = ref<OptionDropDown>(selectedFilter)
const showPopupAdd = ref<boolean>(false)
// const showPopupEdit = ref<boolean>(true)
const transformButton = ref<boolean>(true)
const transformContact = ref<boolean>(true)


const contacts = ref<any>([
  {
    name: 'vasya',
    phone: '89515139989',
    email: 'asdfasdfasdf@Dsda',
    id: 'asdfasdfasdfasd',
    date: '21.21.21'
  },
  {
    name: 'vasya',
    phone: '89515139989',
    email: 'asdfasdfasdf@Dsda',
    id: 'asdfasdfasdfafsd',
    date: '21.21.21'
  }
])

const isOpenPopupAdd = (() => {
  showPopupAdd.value = true
})

const emit = defineEmits(['submitFormAdd'])

const submitFormAdd = (data: any) => {
  contacts.value.push(data.value)
  showPopupAdd.value = false
}


const onResize = () => {
  const resize = document.documentElement.clientWidth
  if (resize >= 576) {
    transformButton.value = false
  } else {
    transformButton.value = true
  }
  if (resize >= 768) {
    transformContact.value = false
  } else {
    transformContact.value = true
  }
}
onMounted(async () => {
  store.dispatch({
    type: ActionTypes.GetContacts
  })
  setTimeout(()=> {
    console.log(store.state)
  },1500)
  window.addEventListener("resize", onResize);
  onResize();
})
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
})
</script>


<style lang="scss"></style>
./types/State