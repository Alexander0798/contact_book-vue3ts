<template>
  <input :value="modelValue" @input="updateInput(($event.target as HTMLInputElement).value)" type="{{type}}"
    class="input" />
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
  border-radius: 4px;
  border: 1px solid #DDD;
  background: #FFF;
  outline: none;
  padding: 8px;
  color: #545454;
  font-size: 12px;
  line-height: 160%;
  min-width: 228px;
  box-sizing: border-box;

  &_error {
    border: 1px solid rgb(218, 0, 0);
  }

  &_valid {
    border: 1px solid rgb(21, 179, 0);
  }
}
</style>
