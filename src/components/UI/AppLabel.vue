<template>
  <label class="form__label" :class="{ form__label_padding: !showError }">
    <slot></slot>
    <span class="form__error" v-if="showError">{{ errorMessage }}</span>
  </label>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppLabel",
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
    showError: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
<style lang="scss">
.form {
  &__label {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    &_padding {
      padding-bottom: 21px;
    }
  }

  &__error {
    font-size: 14px;
    color: red;
  }
}
</style>
