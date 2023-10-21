<template>
  <div class="popup__description">
    <div  alt="icon" class="popup__icon" v-if="!props.iconText"></div>
    <div class="popup__icon_text" v-else>
      {{ props.iconText }}
    </div>
    <div class="popup__text">{{ props.text }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  iconText: {
    type: String,
  },
});
</script>
<style lang="scss">
.popup {
  &__description {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 4px;
    color: $grey;
  }

  &__icon {
    background-image: url("@/assets/icons/contact_add.svg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;

    &_text {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 700;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      background: $yellow;
      text-transform: uppercase;
      flex: 0 0 20px;
    }
  }

  &__text {
    font-size: 14px;
    font-weight: 700;
  }
}

@media (min-width: 992px) {
  .popup {
    &__description {}

    &__icon {
      width: 24px;
      height: 24px;


      &_text {
        width: 24px;
        height: 24px;
        flex: 0 0 24px;
        font-size: 12px;
      }
    }

    &__text {
      font-size: 20px;
    }
  }
}
</style>
