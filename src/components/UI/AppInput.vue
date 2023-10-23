<template>
  <input :value="props.modelValue" @input="updateInput(($event.target as HTMLInputElement).value)" type="{{type}}"
    class="input" />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: [String, Number],
});
const emit = defineEmits(["update:modelValue"]);
const updateInput = (value: String) => {
  emit("update:modelValue", value);
};
</script>

<style lang="scss">
.input {
  font-family: "Proxima Nova", system-ui, sans-serif;
  border-radius: 4px;
  border: 1px solid $grey;
  background: $white;
  outline: none;
  padding: 6px 8px;
  color: $darkGrey;
  font-size: 14px;
  line-height: 160%;
  min-width: 228px;
  min-height: 40px;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  &::placeholder,
  &::-webkit-input-placeholder,
  &::-webkit-input-placeholder,
  &:-ms-input-placeholder,
  &:-moz-placeholder,
  &::-moz-placeholder {
    font-family: inherit;
  }



  &:focus {
    border: 1px solid $blue;
  }

  &_error {
    border: 1px solid $error;

    &::placeholder {
      color: $error;

    }
  }
}
</style>
