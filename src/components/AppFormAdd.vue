<template>
  <AppForm name="form-add" @submit.prevent="onSubmit">
    <h2 class="form__title">Контакт</h2>
    <div class="form__wrapper">
      <div class="form__input-wrapper">
        <div class="form__description-input">Имя</div>
        <AppLabel
          :showError="v$.name.$error"
          :errorMessage="'Слишком короткое имя'"
        >
          <AppInput
            name="name"
            type="text"
            v-model="formValue.name"
            :class="{ input_error: v$.name.$error }"
            placeholder="Например «Андрей»..."
          />
        </AppLabel>
      </div>
      <div class="form__input-wrapper">
        <div class="form__description-input">Телефон</div>
        <AppLabel
          :showError="v$.phone.$error"
          :errorMessage="'Поле не может быть пустым'"
        >
          <AppInput
            name="phone"
            v-mask="'+7(###)###-##-##'"
            type="tel"
            v-model="formValue.phone"
            :class="{ input_error: v$.phone.$error }"
            placeholder="+7(___)-___-__-__"
          />
        </AppLabel>
      </div>
      <div class="form__input-wrapper">
        <div class="form__description-input">E-mail</div>
        <AppLabel
          :showError="v$.email.$error"
          :errorMessage="'Не корректный e-mail'"
        >
          <AppInput
            name="email"
            type="tel"
            v-model="formValue.email"
            :class="{ input_error: v$.email.$error }"
            placeholder="Например «pochta@domain.ru»..."
          />
        </AppLabel>
      </div>
      <div class="form__input-wrapper">
        <div class="form__description-input">Категория</div>
        <AppLabel
          :showError="v$.category.$error"
          :errorMessage="'Поле не может быть пустым'"
        >
          <AppDropDown
            :options="optionsForm"
            :selectedOption="selectedForm"
            :error="v$.category.$error"
            v-model="formValue.category"
          />
        </AppLabel>
      </div>
    </div>
    <div class="form__button-wrapper">
      <AppButtonSave :isLoader="isLoader" type="submit" />
    </div>
  </AppForm>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { ActionTypes } from "@/store/actions";
import { useStore } from "@/store/store";

import useValidator from "@vuelidate/core";
import dayjs from "dayjs";

import OptionDropDown from "@/types/OptionDropDown";
import AppForm from "@/components/UI/AppForm.vue";
import AppDropDown from "@/components/UI/AppDropDown.vue";
import AppInput from "@/components/UI/AppInput.vue";
import AppButtonSave from "@/components/UI/AppButtonSave.vue";
import AppLabel from "@/components/UI/AppLabel.vue";
import Contact from "@/types/Contact";

const store = useStore();
const isLoader = computed(() => store.state.loadingSave);
const optionsForm = ref<OptionDropDown[]>(store.state.dropDown.optionsForm);
const selectedForm = ref<OptionDropDown>(
  store.state.dropDown.defaultSelectedForm,
);
const formValue = ref<Contact>({
  name: "",
  phone: "",
  email: "",
  category: null,
  id: String(dayjs().unix()),
  date: String(dayjs().unix()),
});
const rules = computed(() => {
  return {
    name: { required, minLength: minLength(3) },
    phone: {
      required,
      requirement: helpers.withMessage(
        () => "Телефон не корректен",
        (value) =>
          /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(
            String(value),
          ),
      ),
    },
    email: { required, email },
    category: { required },
  };
});
const v$ = useValidator(rules, formValue);
const emit = defineEmits(["onSubmit"]);
const onSubmit = async () => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid) {
    store.dispatch(ActionTypes.CreateContact, formValue.value);
  }
};
</script>
<style lang="scss">
.form {
  &__title {
    margin: 0 0 24px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
  }

  &__input-wrapper {
    display: flex;
    gap: 0 12px;
    font-size: 12px;
    align-items: center;
  }

  &__description-input {
    font-weight: 700;
    min-width: 72px;
  }

  &__button-wrapper {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    gap: 0 24px;
  }
}
</style>
