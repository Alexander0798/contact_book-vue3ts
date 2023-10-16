<template>
  <div class="popup" ref="popup" v-if="props.show" @click.stop="hidePopup">
    <div @click.stop class="popup__wrapper">
      <div class="popup__description">
        <img src="../../assets/contact_add.svg" alt="contact-add" class="popup__icon">
        <div class="popup__text">Добавить контакт</div>
      </div>
      <button @click.stop="hidePopup" class="popup__button-close"></button>
    </div>
    <div @click.stop class="popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, onUpdated, ref } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  save: {
    type: Boolean,
    default: false,
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
  if (popup.value)
    window.addEventListener("keydown", hidePopupEsc);
})
onUnmounted(() => {
  window.removeEventListener("keydown", hidePopupEsc);
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
  background: #F9FCFF;

  &__wrapper {
    min-height: 40px;
    background: #282828;
    position: relative;
  }

  &__description {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 4px;
    color: #DDD
  }

  &__button-close {
    position: absolute;
    top: 50%;
    right: 17px;
    transform: translateY(-50%);
    background: url('../../assets/back.svg') center no-repeat;
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
