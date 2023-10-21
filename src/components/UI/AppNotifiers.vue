<template >
    <div class="notifiers">
        <img src="@/assets/icons/ok.svg" alt="ok" class="notifiers__img">
        <div class="notifiers__text">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.notifiers {
    position: absolute;
    z-index: 20;
    top: 64px;
    left: 50%;
    margin-left: -68.5px;
    min-width: 137px;
    border-radius: 40px;
    background: $darkGrey;
    box-shadow: 0px 0px 20px 0px rgba(176, 197, 222, 0.50);
    display: flex;
    gap: 0 2px;
    align-items: center;
    min-height: 44px;
    padding: 2px;
    justify-content: center;
    box-sizing: border-box;

    &__img {
        width: 16px;
        height: 16px;
    }

    &__text {
        font-size: 12px;
        line-height: 160%;
        color: white;
    }
}

@media (min-width: 768px) {
    .notifiers {
        margin: 0;
        border-radius: 4px;
        background: $white;
        box-shadow: 0px 0px 16px 0px rgba(176, 197, 222, 0.50);
        min-width: 125px;
        top: auto;
        left: 32px;
        bottom: 48px;
        
        &__text {
            color: $darkGrey;
        }
    }
}
@media (min-width: 1920px) {
    .notifiers {
        min-width: 147px;
        min-height: 56px;
        &__text {
            font-size: 14px; 
        }
    }
}
</style>