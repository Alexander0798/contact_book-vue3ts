<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppForm",
});
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
}
</style>
