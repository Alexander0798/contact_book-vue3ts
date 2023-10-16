<template>
  <AppHeader />
  <main class="main">
    <AppMenu>
      <AppDropDown v-if="!show" :options="dropdown.optionsFilter" :selectedOption="dropdown.selectedFilter" :textWeight="true"
        v-model="selectedFilterValue" />
      <AppButtonAdd @click="isOpenPopupAdd" />
    </AppMenu>
  </main>
  <AppPopup v-model:show="show">
    <AppFormAdd :optionsForm="dropdown.optionsForm" :selectedForm="dropdown.selectedForm" @onSubmit="submitFormAdd" />
  </AppPopup>
</template>
<script setup lang="ts">

import AppButtonAdd from './components/AppButtonAdd.vue';
import AppFormAdd from './components/AppFormAdd.vue';
import { ref } from 'vue'

// import OptionDropDown from './types/OptionDropDown';
import AppMenu from './components/AppMenu.vue';
import AppDropDown from './components/UI/AppDropDown.vue';
import AppState from './types/AppState';
import AppPopup from './components/UI/AppPopup.vue';
import AppHeader from './components/AppHeader.vue';
const optionsFilter = [{
  name: "Все",
  id: 'all'
}, {
  name: "Родственники",
  id: 'relatives'
}, {
  name: "Коллеги",
  id: 'colleagues'
}]
const selectedFilter = optionsFilter[0]

const optionsForm = optionsFilter.slice(1)
const selectedForm = { name: 'Не выбрано', id: "no" }

const dropdown = ref<AppState>({
  optionsFilter: optionsFilter,
  selectedFilter: selectedFilter,
  optionsForm: optionsForm,
  selectedForm: selectedForm
})
const selectedFilterValue = ref(selectedFilter)
const show = ref(false)

const isOpenPopupAdd = (() => {
  show.value = true
})

const emit = defineEmits(['submitFormAdd'])

const submitFormAdd = (data: any) => {
  console.log(data)
}

</script>


<style lang="scss"></style>
