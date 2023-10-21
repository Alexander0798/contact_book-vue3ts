<template >
    <div class="popup__description">
        <img :src="props.imgUrl" alt="icon" class="popup__icon" v-if="props.imgUrl">
        <div class="popup__icon_text" v-if="props.iconText">{{ props.iconText }}</div>
        <div class="popup__text">{{ props.text }}</div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,

    },
    iconText: {
        type: String,

    }
})
console.log(props.imgUrl)
</script>
<style lang="scss">
.popup {
    &__description {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 4px;
        color: $grey;
    }

    &__icon {

        &_text {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 700;
            width: 20px;
            height: 20px;
            border-radius: 50px;
            background: $yellow;
            text-transform: uppercase;
            flex: 0 0 20px;
        }
    }

    &__text {}
}

@media (min-width: 992px) {
    .popup {
        &__description {}

        &__icon {

            &_text {
                width: 24px;
                height: 24px;
                flex: 0 0 24px;
            }
        }

        &__text {}
    }
}
</style>