<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script  lang="ts">


export default {
  name: "AppButton",
};
</script>
<style lang="scss">
.button {
  padding: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;



}
</style>
