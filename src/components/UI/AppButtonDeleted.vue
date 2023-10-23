<template>
  <button class="button-deleted" :disabled="disabled || isLoader">
    <img
      src="@/assets/icons/deleted.svg"
      alt="save"
      class="button-deleted__image"
      v-if="!props.isLoader"
    />
    <img
      src="../../assets/icons/loader-blue.svg"
      alt="loader"
      class="button-deleted__image button-deleted__image_loader"
      v-else
    />

    <span class="button-deleted__text">Удалить контакт</span>
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
.button-deleted {
  color: $blue;
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 0 2px;
  &:focus {
    outline: none;
  }

  &__image {
    width: 10px;
    height: 10px;
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
</style>
