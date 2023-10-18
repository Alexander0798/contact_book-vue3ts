<template>
  <label class="form__label" :class="{ form__label_padding: !props.showError }">
    <slot></slot>
    <span class="form__error" v-if="props.showError">{{ props.errorMessage }}</span>
  </label>
</template>
<script setup lang="ts">

const props = defineProps({
  errorMessage: {
    type: String,
    required: true,
  },
  showError: {
    type: Boolean,
    required: true,
  },
},)


</script>
<style lang="scss">
.form {
  &__label {
    position: relative;
    width: 100%;
  }

  &__error {
    position: absolute;
    bottom: -14px;
    right: 1px;
    font-size: 10px;
    line-height: 16px;
    color: #EB5757;

    &::before {
      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      background: url('@/assets/error-icon.svg') center no-repeat;
      top: -100%;
      right: 8px;
      z-index: 11x;
      transform: translateY(-50%);
    }
  }
}
</style>
