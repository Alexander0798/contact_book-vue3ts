<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.form {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: $white;
  max-width: 704px;
  padding: 32px 20px 48px;
  box-sizing: border-box;
}
@media (min-width: 576px) {
  .form {
    min-width: 552px;
    padding: 32px 48px 48px;
  }
}
@media (min-width: 768px) {
  .form {
    min-width: 704px;
    padding: 48px 64px 64px;
  }
}
</style>
