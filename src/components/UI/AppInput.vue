<template>
  <input :value="props.modelValue" @input="updateInput(($event.target as HTMLInputElement).value)" type="{{type}}"
    class="input" />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: [String, Number],
});
const emit = defineEmits(["update:modelValue"])
const updateInput = (value: String) => {
  emit("update:modelValue", value);
}
</script>

<style lang="scss">
.input {
  border-radius: 4px;
  border: 1px solid #DDD;
  background: #FFF;
  outline: none;
  padding: 8px;
  color: #545454;
  font-size: 12px;
  line-height: 160%;
  min-width: 228px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  &:focus {
    border: 1px solid #2F80ED;
  }
  &_error {
    border: 1px solid #EB5757;


    &::placeholder {
      color: #EB5757
    }
  }

}</style>
