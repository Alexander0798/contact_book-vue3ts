<template>
  <input
    :value="modelValue"
    @input="updateInput(($event.target as HTMLInputElement).value)"
    type="{{type}}"
    class="input"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(value: String) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>

<style lang="scss">
.input {
  border: 1px solid #cccc;
  outline: none;
  padding: 6px;
  &_error {
    border: 1px solid rgb(218, 0, 0);
  }
  &_valid {
    border: 1px solid rgb(21, 179, 0);
  }
}
</style>
