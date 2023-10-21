<template>
  <div class="popup" ref="popup" v-if="props.show" @click.stop="hidePopup">
    <div @click.stop class="popup__wrapper">
      <slot name="header"></slot>
      <button @click.stop="hidePopup" class="popup__button-close"></button>
    </div>
    <div @click.stop class="popup__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, ref } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
    required: true
  },
})
const popup = ref(null)
const emit = defineEmits(["update:show"])

const hidePopup = () => {
  emit("update:show", false);
}
const hidePopupEsc = (evt: KeyboardEvent) => {
  if (props.show && evt.key === "Escape") {
    hidePopup();
  }
}

onUpdated(() => {
  if (popup.value) {
    window.addEventListener("keydown", hidePopupEsc);
    window.removeEventListener("keydown", hidePopupEsc);
  }

})

</script>

<style lang="scss">
.popup {
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $lightBlue;

  &__wrapper {
    min-height: 40px;
    background: $dark;
    position: relative;
  }


  &__button-close {
    position: absolute;
    top: 50%;
    right: 17px;
    transform: translateY(-50%);
    background: url('@/assets/icons/back.svg') center no-repeat;
    width: 24px;
    height: 24px;
    padding: 0;
    outline: none;

    &:focus {
      outline: none;
    }
  }

  &__content {
    margin: 0 auto;
    width: auto;
    padding: 0 12px;
    flex-shrink: 0;
  }
}

@media (min-width: 768px) {
  .popup {
    &__button-close {
      right: 32px;
    }
  }
}
</style>
