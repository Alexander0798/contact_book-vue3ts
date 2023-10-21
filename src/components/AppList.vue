<template>
  <ul class="list" v-if="props.transformContact">
    <li class="list__item description">
      <div class="description__contact">Контакт</div>
      <div class="description__connection">Телефон / E-mail</div>
      <div class="description__date">Создан</div>
    </li>
    <slot></slot>
  </ul>
  <ul class="list" v-else>
    <li class="list__item description">
      <div class="description__contact">Контакт</div>
      <div class="description__phone">Телефон</div>
      <div class="description__email">E-mail</div>
      <div class="description__date">Создан</div>
    </li>
    <slot></slot>
  </ul>
</template>
<script setup lang="ts">
const props = defineProps({
  transformContact: {
    type: Boolean,
    required: true,
  },
});
</script>
<style lang="scss">
.list {
  list-style: none;
  margin: 0;
  padding: 0 12px;
  max-width: 990px;
  margin: 0 auto;
}
.description {
  color: $darkGrey;
  font-size: 10px !important;
  font-weight: 400;
  line-height: 16px;
  text-transform: uppercase;
  border-bottom: none !important;
  &__date {
    text-align: end;
  }
}
@media (min-width: 768px) {
  .list {
    padding: 0 32px;
  }
}

@media (min-width: 1200px) {
  .list {
    padding: 0;
  }
}
</style>
