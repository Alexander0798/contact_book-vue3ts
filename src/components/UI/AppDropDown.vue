<template>
  <div class="dropdown" @click="toggleDropDown" ref="dropDown" :class="{ 'dropdown_width': props.textWeight }">
    <div class="dropdown__selected-options" tabindex="0" :class="{
      'dropdown__selected-options_active': isOpen && !props.textWeight,
      'dropdown__selected-options_weight-active': isOpen && props.textWeight,
      'dropdown__selected-options_weight': props.textWeight,
      'dropdown__selected-options_error': props.error,
    }">
      {{ !error ? selectedOption?.name : "Выбирете катигорию..." }}
    </div>
    <Transition name="translate-options-list">
      <ul class="dropdown__list" v-if="isOpen">
        <li class="dropdown__item" :class="{
          'dropdown__item_weight': props.textWeight,
          'dropdown__item_checked': Boolean(selectedOption?.id === option.id)
        }" tabindex="0"
          v-for="(option, index) in props.options" :key="index" @click="toggleSelected(option)">
          {{ option.name }}
        </li>
      </ul>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { PropType, ref, onBeforeUpdate, onUnmounted } from "vue";
import OptionDropDown from "@/types/OptionDropDown";

const props = defineProps({
  options: {
    type: Array as PropType<OptionDropDown[]>,
    required: true,
  },
  selectedOption: {
    type: null as unknown as PropType<OptionDropDown | null>,
    required: true,
  },
  textWeight: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
});
const selectedOption = ref(props.selectedOption);

const isOpen = ref<boolean>(false);
const dropDown = ref<any>(null);
const emit = defineEmits(["update:modelValue"]);

const toggleSelected = (option: OptionDropDown) => {
  selectedOption.value = option;
  emit("update:modelValue", option);
};

const closeDropDown = (evt: Event) => {
  const el = evt.target as HTMLInputElement;
  if (!dropDown.value.contains(el)) {
    isOpen.value = false;
  }
};
const toggleDropDown = () => {
  isOpen.value = !isOpen.value;
};
const closeKeyboard = (evt: KeyboardEvent) => {
  if (evt.key === "Escape") {
    closeDropDown(evt);
  }
};

onBeforeUpdate(() => {
  if (isOpen.value) {
    window.addEventListener("mousedown", closeDropDown);
    window.addEventListener("keydown", closeKeyboard);
  } else {
    window.removeEventListener("mousedown", closeDropDown);
    window.removeEventListener("keydown", closeKeyboard);
  }
});
onUnmounted(() => {
  window.removeEventListener("mousedown", closeDropDown);
  window.removeEventListener("keydown", closeKeyboard);
});
</script>
<style lang="scss">
.dropdown {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: relative;
  box-sizing: border-box;
 

  &_width {
    width: 219px;
  }

  &__list {
    background: $white;
    position: absolute;
    width: 100%;
    left: 0;
    top: 50px;
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 4px;
    z-index: 10;
    box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);
  }

  &__item {
    padding: 10px 8px 10px 16px;
    cursor: pointer;

    &_weight {
      text-transform: uppercase;
    }
    &_checked {
      position: relative;
      font-weight: 700;

      &::before {
        content: "";
        position: absolute;
        right: 12px;
        top: 50%;
        background: url("@/assets/icons/checked.svg") center no-repeat;
        width: 16px;
        height: 16px;
        transform: translateY(-50%);
      }
    }

    &:focus {
      outline: none;
      background-color: $mediumBlue;
    }

    &:hover {
      background-color: $mediumBlue;
    }
  }

  &__selected-options {
    box-sizing: border-box;
    border: 1px solid $grey;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 6px 8px;
    background: $white;
    transition: all linear 0.3s;
    cursor: pointer;
    font-weight: 400;
    position: relative;
    min-height: 40px;
    &_error {
      color: $error;
      border: 1px solid $error;
    }

    &_weight {
      font-weight: 700;
      text-transform: uppercase;
      transition: all linear .5s;

      &:hover {
        font-weight: 400;
      }

      &-list {
        text-transform: uppercase;
      }

      &-active {
        border: 1px solid $blue;
        font-weight: 700;

        &:hover {
          font-weight: 700;
        }

        &::before {
          transform: rotate(180deg) scaleX(-1) translateY(50%);
        }
      }
    }

    &:hover {
      border: 1px solid $blue;
    }

    &::before {
      content: "";
      position: absolute;
      right: 8px;
      top: 50%;
      background: url("@/assets/icons/arrow_icon.svg") center no-repeat;
      width: 16px;
      height: 16px;
      transition: all linear 0.3s;
      transform: translateY(-50%);
    }

    &:focus {
      outline: none;
      border: 1px solid $blue;
    }

    &_active {
      border: 1px solid $blue;

      &::before {
        transform: rotate(180deg) scaleX(-1) translateY(50%);
      }
    }
  }
}

@media (min-width: 576px) {
  .dropdown_width {
    width: 235px;
  }
}

.translate-options-list-enter-active,
.translate-options-list-leave-active {
  transition: all 0.5s ease;
}

.translate-options-list-enter-from,
.translate-options-list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
