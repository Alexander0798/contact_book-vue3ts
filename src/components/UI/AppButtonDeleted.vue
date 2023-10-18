<template>
  <button class="button-deleted">
    <img src="@/assets/deleted.svg" alt="deleted" class="button-deleted__image">
    <span class="button-deleted__text">Удалить контакт</span>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppButtonDeleted",
});
</script>
<style lang="scss">
.button-deleted {
  color: #2F80ED;
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  font-size: 12px;
  &__image {}

  &__text {}
}
</style>