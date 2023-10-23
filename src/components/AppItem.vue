<template>
  <li class="list__item item" v-if="props.transformContact">
    <div class="item__contact">
      <span class="item__icon">{{ props.contact.name[0] }}</span
      ><span class="item__text">{{ props.contact.name }}</span>
    </div>
    <div class="item__connection">
      <span class="item__text">{{ props.contact.phone }}</span
      ><span class="item__text">{{ props.contact.email }}</span>
    </div>
    <div class="item__date item__text">
      {{ dayjs(Number(props.contact.date * 1000)).format("DD.MM.YY") }}
    </div>
  </li>
  <li class="list__item item" v-else>
    <div class="item__text item__contact">
      <span class="item__icon">{{ props.contact.name[0] }}</span
      ><span class="item__text">{{ props.contact.name }}</span>
    </div>
    <div class="item__text item__phone">{{ props.contact.phone }}</div>
    <div class="item__text item__email">{{ props.contact.email }}</div>
    <div class="item__text item__date">
      {{ dayjs(Number(props.contact.date * 1000)).format("DD.MM.YY") }}
    </div>
  </li>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
const props = defineProps({
  transformContact: {
    type: Boolean,
    required: true,
  },
  contact: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="scss">
.list {
  &__item {
    display: grid;
    grid-template-columns: repeat(2, 143px) 56px;
    min-height: 56px;
    gap: 0 4px;
    border-bottom: 1px solid $mediumBlue;
    align-items: center;
    justify-content: space-between;
  }
}

.item {
  cursor: pointer;
  font-size: 12px;

  &__text {
    overflow: hidden;
    word-wrap: break-word;
  }

  &__icon {
    display: none;
  }

  &__contact {
    display: flex;
    gap: 0 8px;
    align-items: center;
  }

  &__connection {
    display: flex;
    flex-direction: column;
  }

  &__date {
    justify-self: end;
    margin-left: auto;
  }
}

@media (min-width: 576px) {
  .list__item {
    grid-template-columns: 184px 240px 112px;
    gap: 0 8px;
  }

  .item {
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      width: 24px;
      height: 24px;
      border-radius: 50px;
      background: $yellow;
      text-transform: uppercase;
      flex: 0 0 24px;
    }
  }
}

@media (min-width: 768px) {
  .list__item {
    grid-template-columns: 240px 112px 216px 112px;
  }

  .item {
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      width: 24px;
      height: 24px;
      border-radius: 50px;
      background: $yellow;
      text-transform: uppercase;
    }

    &__contact {
      display: flex;
      gap: 0 8px;
      align-items: center;
    }
  }
}

@media (min-width: 992px) {
  .list__item {
    grid-template-columns: minmax(296px, 1fr) 112px minmax(208px, 0.896fr) 112px;
    gap: 0 66px;
  }

  .item {
    &__contact {
      font-size: 14px;
    }
  }
}

@media (min-width: 1200px) {
  .list__item {
    gap: 0 88px;
  }
}
</style>
