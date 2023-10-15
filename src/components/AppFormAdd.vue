<template>
    <AppForm>
        <h2 class="form__title">Контакт</h2>
        <AppInputWrapper>
            <div class="form__description-input">Имя</div>
            <AppInput placeholder="Например «Андрей»..." />
            <div class="form__description-input">Телефон</div>
            <AppInput placeholder="+7(___)-___-__-__" />
            <div class="form__description-input">E-mail</div>
            <AppInput placeholder="Например «pochta@domain.ru»..." />
            <div class="form__description-input">Категория</div>
            <AppDropDown :options="props.optionsForm" :selectedOption="props.selectedForm" v-model="formValue.dropDownValue" />
        </AppInputWrapper>
        {{ formValue.dropDownValue }}
        <div class="form__button-wrapper">
            <AppButtonSave :isLoader="false" />
        </div>
    </AppForm>
</template>
<script setup lang="ts">

import { PropType, defineProps, ref } from 'vue';
import OptionDropDown from '../types/OptionDropDown'
import AppDropDown from './UI/AppDropDown.vue';
const props = defineProps({
    optionsForm: {
        type: Array as PropType<OptionDropDown[]>,
        required: true
    },
    selectedForm: {
        type: null as unknown as PropType<null | OptionDropDown>,
        required: true
    },  
})

const formValue = ref<any>({
    dropDownValue: props.selectedForm
})

</script>
<style lang="scss">
.form {
    padding: 32px 20px 48px;

    &__title {
        margin: 0 0 24px;
    }

    &__description-input {
        font-weight: 700;
    }

    &__button-wrapper {
        margin-top: 32px;
        display: flex;
        justify-content: center;
        gap: 0 24px
    }
}
</style>