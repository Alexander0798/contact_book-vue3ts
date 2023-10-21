<template >
    <header class="header">
        <img src="@/assets/icons/logo.svg" alt="logo" class="header__logo">
        <h1 class="header__title">книга контактов</h1>
    </header>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.header {
    background: $dark;
    min-height: 40px;
    display: flex;
    align-items: center;
    gap: 0 8px;
    padding: 0 12px;

    &__logo {
        width: 31px;
        height: 24px;
    }

    &__title {
        margin: 0;
        font-size: 14px;
        font-weight: 700;
        color: $yellow;
        text-transform: uppercase;
    }
}
@media (min-width: 992px) {
        .header {
            padding: 0 32px;
            gap: 0 16px;

            &__title {
                font-size: 18px;
            }
        }
    }

    @media (min-width: 1200px) {
        .header {
            padding: 0 48px;
        }
    }
</style>