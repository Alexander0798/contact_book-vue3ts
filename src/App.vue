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
  <Transition name="translate-popup">
    <AppPopup v-model:show="showPopupAdd">
      <AppFormAdd />
    </AppPopup>
  </Transition>
  <Transition name="translate-popup">
    <AppPopup v-model:show="showPopupEdit">
      <AppFormEdit />
    </AppPopup>
  </Transition>
  <Transition name="translate-notifiers">
    <AppNotifiers v-if="notifiersRemove">Контакт удалён</AppNotifiers>
  </Transition>
  <Transition name="translate-notifiers">
    <AppNotifiers v-if="notifiersSave">Контакт сохранён</AppNotifiers>
  </Transition>
  <Transition name="translate-notifiers">
    <AppNotifiers v-if="notifiersEdit">Контакт изменён</AppNotifiers>
  </Transition>
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
import AppNotifiers from './components/UI/AppNotifiers.vue';

const store = useStore()

const dropdown = ref<any>(store.state.dropDown)
const transformButton = ref<boolean>(true)
const transformContact = ref<boolean>(true)

const contacts = computed((): Contact[] => store.state.contacts)
const notifiersSave = computed((): boolean => store.state.notifierSave)
const notifiersEdit = computed((): boolean => store.state.notifierEdit)
const notifiersRemove = computed((): boolean => store.state.notifierRemove)
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


<style lang="scss">
.translate-popup-enter-active,
.translate-popup-leave-active {
  transition: all .5s ease;
}

.translate-popup-enter-from,
.translate-popup-leave-to {
  opacity: 0;
  transform: translateY(-30px);

}
.translate-notifiers-enter-active,
.translate-notifiers-leave-active {
  transition: all 1s ease;
  transform: translateX(-50%);
}

.translate-notifiers-enter-from,
.translate-notifiers-leave-to {
  opacity: 0;
  transform: translateY(-30px);

}
</style>