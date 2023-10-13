<template>
    <AppForm>
        <h2 class="form__title">Контакт</h2>
        <AppInputWrapper>
            <div class="form__description-input">Имя</div>
            <AppInput placeholder="Например «Андрей»..." />
            <div class="form__description-input">Телефон</div>
            <AppInput v-phone placeholder="+7(___)-___-__-__" />
            <div class="form__description-input">E-mail</div>
            <AppInput placeholder="Например «pochta@domain.ru»..." />
            <div class="form__description-input">Категория</div>
            <AppInput placeholder="Например «Андрей»..." />
        </AppInputWrapper>
        <div class="form__button-wrapper">
            <AppButtonSave isLoader="false" />
        </div>
    </AppForm>
</template>
<script lang="ts">

export default {

}
</script>
<style lang="scss">
.form {
    padding: 32px 20px 48px;

    &__title {
        margin: 0 0 24px;
    }

    &__description-input {}

    &__button-wrapper {
        margin-top: 32px;
        display: flex;
        justify-content: center;
        gap: 0 24px
    }
}
</style>