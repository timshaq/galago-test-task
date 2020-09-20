<template>
  <div class="">
    <h2>Charity Run Form</h2>
    <form class="run__form" @submit.prevent="sendForm">
      <BaseFormText v-model="formData.registration"
      :error="formError.registration" type="hidden" />

      <BaseFormText v-model="formData.name" title="ФИО"
      :error="formError.name"
      placeholder="Фамилия Имя Отчество" />

      <BaseFormDate v-model="formData.date" title="Дата рождения"
      :error="formError.date" placeholder="11.03.1998" />

      <BaseFormText v-model="formData.email" title="Email"
      :error="formError.email"
      placeholder="Email" />

      <BaseFormTel v-model="formData.phone" title="Телефон"
      :error="formError.phone"
      placeholder="+7 (952) 336-60-76" />

      <BaseFormSelect v-model="formData.distance" title="Дистанция, км"
      :error="formError.distance"
      placeholder="Выберите дистанцию"
      :options="[3, 5, 10]" />

      <BaseFormText v-model="formData.payment" title="Сумма взноса, руб."
      :error="formError.payment"
      type="number"
      placeholder="Сумма пожертвования" />

      <button :disabled="buttonIsDisabled" type="submit" name="button">Отправить заявку</button>

    </form>
  </div>
</template>

<script>
import BaseFormText from '@/components/BaseFormText.vue';
import BaseFormSelect from '@/components/BaseFormSelect.vue';
import BaseFormDate from '@/components/BaseFormDate.vue';
import BaseFormTel from '@/components/BaseFormTel.vue';
import validMail from '@/helpers/validMail';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      formData: {
        date: '',
        name: '',
        email: '',
        phone: '',
        distance: '',
        payment: '',
      },
      formError: {},
    };
  },
  components: {
    BaseFormText,
    BaseFormSelect,
    BaseFormDate,
    BaseFormTel,
  },
  methods: {
    ...mapActions(['addUser', 'updateSort']),
    sendForm() {
      if (!this.formError.email) {
        this.formData.registration = new Date().toLocaleDateString();
        this.addUser(this.formData);
        this.updateSort();
        this.formData = {};
      }
    },
    checkMailValid() {
      this.formError.email = validMail(this.formData.email);
    },
  },
  computed: {
    buttonIsDisabled() {
      const formDataItems = Object.keys(this.formData).map((key) => this.formData[key]);
      const nullItems = formDataItems.filter((item) => item.length === 0);
      return Boolean(nullItems.length);
    },
    formDataEmail() {
      return this.formData.email;
    },
  },
  watch: {
    formDataEmail() {
      this.checkMailValid();
    },
  },
};
</script>

<style>
  .run__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
</style>
