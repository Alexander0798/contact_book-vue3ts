<template>
    <button class="button__add">
        <img src="@/assets/plus.svg" alt="plus" class="button__img">
        <span class="button__text">{{ props.transformButton ? 'добавить' : 'добавить контакт' }}</span>
    </button>
</template>
  
<script setup lang="ts">
const props = defineProps({
    transformButton: {
        type: Boolean,
        required: true
    }
})
</script>
<style lang="scss">
.button__add {
    padding: 8px 16px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 4px;
    text-transform: uppercase;
    border-radius: 28px;
    border: 1px solid #2F80ED;
    color: #2F80ED;
    outline: none;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    margin-left: auto;

    &:focus {
        outline: none;
    }

}
</style>
  