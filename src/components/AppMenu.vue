<template>
    <div class="menu">
        <div class="menu__wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.menu {
    &__wrapper {
        display: flex;
        padding: 8px 12px;
        max-width: 990px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    background: #F9FCFF;
    border: 1px solid #EAF2FD;
}
</style>