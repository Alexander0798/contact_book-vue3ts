<template>
    <button class="button__add">
        <img src="../assets/plus.svg" alt="plus" class="button__img">
        <span class="button__text">{{ buttonText }}</span>
    </button>
</template>
  
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const buttonText = ref('')

const onResize = () => {
    if (document.documentElement.clientWidth > 570) {
        buttonText.value = 'добавить контакт'
    } else {
        buttonText.value = 'добавить'
    }

}
onMounted(() => {
    window.addEventListener("resize", onResize);
    onResize();
})
onBeforeUnmount(() => {
    window.removeEventListener("resize", onResize);
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
  