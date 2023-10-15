<template >
    <div class="form__input-wrapper">
       <slot></slot> 
    </div>
</template>
<script lang="ts">
export default {
    name: "AppInputWrapper"
}
</script>
<style lang="scss">
    .form__input-wrapper {
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        gap: 16px 25px;
        align-items: center;
    }
</style>