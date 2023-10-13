<template>
  <div
    class="popup"
    v-if="show"
    v-on:keyup.27="hidePopup"
    @click.stop="hidePopup"
  >
    <div @click.stop class="popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppPopup",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hidePopup() {
      this.$emit("update:show", false);
    },
    hidePopupEsc(evt: KeyboardEvent) {
      if (this.show && evt.key === "Escape") {
        this.hidePopup();
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.hidePopupEsc);
  },
  destroy() {
    window.removeEventListener("keydown", this.hidePopupEsc);
  },
});
</script>

<style lang="scss">
.popup {
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);

  &__content {
    margin: auto;
    background: white;
    border-radius: 20px;
    min-width: 320px;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
