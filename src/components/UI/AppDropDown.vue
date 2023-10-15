<template >
    <div class="dropdown" @click="toggleDropDown" ref="dropDown">
        <div class="dropdown__selected-options" :class="{
            'dropdown__selected-options_active': isOpen && !props.textWeight,
            'dropdown__selected-options_weight-active': isOpen && props.textWeight,
            'dropdown__selected-options_weight': props.textWeight
        }">{{
    selectedOption?.name }}</div>

        <ul class="dropdown__list" v-if="isOpen">
            <li class="dropdown__item" v-for="(   option, index   ) in    props.options   "
                :class="{ 'dropdown__item_checked': selectedOption?.id === option.id }" :key="index"
                @click="toggleSelected(option)">
                {{ option.name }}
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">

import { defineProps, PropType, ref, onBeforeUpdate } from 'vue';
import OptionDropDown from "../../types/OptionDropDown"


const props = defineProps({
    options: {
        type: Array as PropType<OptionDropDown[]>,
        required: true
    },
    selectedOption: {
        type: null as unknown as PropType<null | OptionDropDown>,

    },
    textWeight: {
        type: Boolean,
        default: false
    }
})
const selectedOption = ref(props.selectedOption)

const isOpen = ref<boolean>(false)
const dropDown = ref<any>(null)
const emit = defineEmits(['update:modelValue'])

const toggleSelected = (option: OptionDropDown) => {
    selectedOption.value = option
    emit('update:modelValue', option)
}

const closeDropDown = (evt: Event) => {
    const el = evt.target as HTMLInputElement
    if (!dropDown.value.contains(el)) {
        isOpen.value = false
    }

}
const toggleDropDown = () => {
    isOpen.value = !isOpen.value
}
const closeKeyboard = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
        closeDropDown(evt)
    }
}

onBeforeUpdate(() => {
    if (isOpen.value) {
        window.addEventListener('click', closeDropDown)
        window.addEventListener("keydown", closeKeyboard)
    } else {
        window.removeEventListener('click', closeDropDown)
        window.removeEventListener("keydown", closeKeyboard)
    }
})

</script>
<style lang="scss">
.dropdown {
    min-width: 219px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    position: relative;
    box-sizing: border-box;

    &__selected-options {
        border: 1px solid #DDD;
        border-radius: 4px;
        padding: 6px 8px;
        background: #FFF;
        transition: all linear 0.3s;
        cursor: pointer;
        font-weight: 400;
        position: relative;

        &_weight {
            font-weight: 700;
            text-transform: uppercase;
            &:hover {
                font-weight: 400;
            }

            &-active {
                border: 1px solid #2F80ED;
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
            border: 1px solid #2F80ED;
        }

        &::before {
            content: '';
            position: absolute;
            right: 8px;
            top: 50%;
            background: url('../../assets/arrow_icon.svg') center no-repeat;
            width: 16px;
            height: 16px;
            transition: all linear 0.3s;
            transform: translateY(-50%);

        }

        &_active {
            border: 1px solid #2F80ED;

            &::before {
                transform: rotate(180deg) scaleX(-1) translateY(50%);
            }
        }
    }

    &__list {
        background: #FFF;
        position: absolute;
        min-width: 219px;
        left: 0;
        top: 40px;
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

        &_checked {
            position: relative;
            font-weight: 700;
            &::before {
                content: '';
                position: absolute;
                right: 12px;
                top: 50%;
                background: url('../../assets/checked.svg') center no-repeat;
                width: 16px;
                height: 16px;
                transform: translateY(-50%);
            }
        }

        &:hover {
            background-color: #EAF2FD;
        }
    }
}

@media (min-width: 576px) {
    .dropdown {
        min-width: 235px;

        &__list {
            min-width: 235px;



        }
    }
}
</style>