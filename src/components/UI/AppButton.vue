<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppButton",
});
</script>
<style lang="scss">
.button {
  padding: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;



}
</style>
