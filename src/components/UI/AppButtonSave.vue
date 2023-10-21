<template>
  <button
    class="button-save"
    :disabled="isLoader || disabled"
    :class="{ 'button-save_active': isLoader || disabled }"
  >
    <img
      src="@/assets/icons/save.svg"
      alt="save"
      class="button-save__image"
      v-if="!props.isLoader"
    />
    <img
      src="@/assets/icons/loader.svg"
      alt="loader"
      class="button-save__image button-save__image_loader"
      v-else
    />
    <span class="button-save__text">Сохранить</span>
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  isLoader: {
    type: Boolean,
    required: true,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss">
.button-save {
  box-sizing: border-box;
  min-height: 40px;
  padding: 12px 16px;
  display: flex;
  gap: 4px;
  border-radius: 4px;
  background: $yellow;
  color: $darkGrey;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 120%;
  outline: none;
  &_active {
    background: $darkYellow;
  }
  &:focus {
    outline: none;
    background: $darkYellow;
  }
  &:hover {
    background: $yellow;
  }
  &__image {
    &_loader {
      -webkit-animation-name: rotation;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      -moz-animation-name: rotation;
      -moz-animation-duration: 2s;
      -moz-animation-iteration-count: infinite;
      -moz-animation-timing-function: linear;
      -o-animation-name: rotation;
      -o-animation-duration: 2s;
      -o-animation-iteration-count: infinite;
      -o-animation-timing-function: linear;
      animation-name: rotation;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @-webkit-keyframes rotation {
      0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @-moz-keyframes rotation {
      0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @-o-keyframes rotation {
      0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes rotation {
      0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(720deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }

  &__text {
  }
}

.button-save {
}
</style>
