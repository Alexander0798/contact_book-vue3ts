<template>
  <AppHeader />
  <main class="main">
    <AppMenu>
      <AppDropDown :options="options" :selectedOption="selectedOption" @toggleSelected="toggleSelected" />
      <AppButtonAdd/>
    </AppMenu>
    <AppFormAdd/>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppMenu from './components/AppMenu.vue';
import AppDropDown from './components/AppDropDown.vue';
import AppButtonAdd from './components/AppButtonAdd.vue';
import AppFormAdd from './components/AppFormAdd.vue';
import DropDownOption from './types/DropDownOption';
import AppState from './types/AppState'



export default defineComponent({
  data(): AppState {
    return {
      options: [{
        name: "Все",
        id: 'all'
      }, {
        name: "Родственники",
        id: 'relatives'
      }, {
        name: "Коллеги",
        id: 'colleagues'
      }],
      selectedOption: null,

    }
  },
  components: {
    AppHeader,
    AppMenu,
    AppDropDown,
    AppButtonAdd,
    AppFormAdd
  },
  created() {
    this.selectedOption = this.options[0]
  },
  methods: {
    toggleSelected(option: DropDownOption) {
      this.selectedOption = option
    }
  }


})

</script>


<style lang="scss">
</style>
