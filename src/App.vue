<template>
  <AppHeader />
  <main class="main">
    <AppMenu>
      <AppDropDown :options="dropdown.optionsFilter" :selectedOption="dropdown.defaultSelectedFilter" :textWeight="true"
        v-model="selectedFilter" />
      <AppButtonAdd @click="isOpenPopupAdd" :transformButton="transformButton" />
    </AppMenu>
    <AppList :transformContact="transformContact">
      <AppItem :transformContact="transformContact" v-for="contact in contacts" :key="String(contact.id)"
        :id="`${contact.id}`" :contact="contact" @click="handleClickContact(String(contact.id))"></AppItem>
    </AppList>
  </main>
  <AppPopup v-model:show="showPopupAdd">
    <AppFormAdd />
  </AppPopup>
  <AppPopup v-model:show="showPopupEdit">
    <AppFormEdit />
  </AppPopup>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { ActionTypes } from '@/store/actions'
import { useStore } from '@/store/store'
import AppMenu from '@/components/AppMenu.vue';
import AppDropDown from '@/components/UI/AppDropDown.vue';
import AppPopup from '@/components/UI/AppPopup.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppList from '@/components/AppList.vue';
import AppButtonAdd from '@/components/AppButtonAdd.vue';
import AppFormAdd from '@/components/AppFormAdd.vue';
import AppItem from '@/components/AppItem.vue'
import OptionDropDown from '@/types/OptionDropDown';


import Contact from './types/Contact';
import AppFormEdit from '@/components/AppFormEdit.vue';

const store = useStore()
console.log(store)
const dropdown = ref<any>(store.state.dropDown)
const transformButton = ref<boolean>(true)
const transformContact = ref<boolean>(true)

const showPopupAdd = computed({
  get() {
    return store.state.showPopupAdd
  },
  set(value: boolean) {
    store.dispatch(ActionTypes.SetPopupAdd, value)
  }
})
const showPopupEdit = computed({
  get() {
    return store.state.showPopupEdit
  },
  set(value: boolean) {
    store.dispatch(ActionTypes.SetPopupEdit, value)
  }
})
const selectedFilter = computed({
  get() {
    return store.state.selectedFilter
  },
  set(value: OptionDropDown) {
    store.dispatch(ActionTypes.SetSelectedFilter, value)
  }
})
const contacts = computed((): Contact[] => store.state.contacts)

const handleClickContact = (id: string) => {
  store.dispatch(ActionTypes.SetPopupEdit, { showPopup: true, contactId: id })
}
const isOpenPopupAdd = (() => {
  store.dispatch(ActionTypes.SetPopupAdd, true)
})

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

  window.addEventListener("resize", onResize);
  onResize();
})
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
})
</script>


<style lang="scss"></style>