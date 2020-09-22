<template>
  <div class="run__form-container">
    <h2>Charity Run Form</h2>
     <div class="run__form-card">
       <form class="run__form" @submit.prevent="sendForm">

         <BaseFormText v-model="formData.registration" type="hidden" />

         <div class="run__form-row">

           <BaseFormText v-model="formData.name" title="ФИО"
           placeholder="Фамилия Имя Отчество" />

           <BaseFormDate v-model="formData.date" title="Дата рождения"
           placeholder="11.03.1998" />

           <BaseFormText v-model="formData.email" title="Email"
           :error="formError.email"
           placeholder="Email" />

         </div>

         <div class="run__form-row">

           <BaseFormTel v-model="formData.phone" title="Телефон" />

           <BaseFormSelect v-model="formData.distance" title="Дистанция, км"
           placeholder="Выберите дистанцию"
           :options="[3, 5, 10]" />

           <BaseFormText v-model="formData.payment" title="Сумма взноса, руб."
           type="number"
           placeholder="Сумма пожертвования" />

         </div>

         <button class="form__submit"
         :disabled="buttonIsDisabled" type="submit" name="button">Отправить заявку</button>

       </form>
     </div>
  </div>
</template>

<script>
import BaseFormText from '@/components/BaseFormText.vue';
import BaseFormSelect from '@/components/BaseFormSelect.vue';
import BaseFormDate from '@/components/BaseFormDate.vue';
import BaseFormTel from '@/components/BaseFormTel.vue';
import validMail from '@/helpers/validMail';

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
  props: ['addUser'],
  components: {
    BaseFormText,
    BaseFormSelect,
    BaseFormDate,
    BaseFormTel,
  },
  methods: {
    sendForm() {
      if (!this.formError.email) {
        const data = { ...this.formData };
        data.date = data.date.toLocaleDateString();
        data.phone = data.phone.replace(/\D*/g, '');
        data.registration = new Date().toLocaleDateString();
        this.addUser(data);
        Object.keys(this.formData).forEach((key) => { this.formData[key] = ''; });
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
  .run__form-container {

  }
  .run__form-card {
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    background: rgb(173,216,230);
  }
  .run__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 50px;
    border: solid 3px #FFFFFF;
  }
  .run__form-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  .form__label {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 33.333%;
    margin: 0 10px;
  }
  .form__input {
    width: 100%;
    padding: 0 0 0 20px;
    font-size: 16px;

  }
  .form__submit {
    padding: 15px 40px;
    background: rgb(65,105,225);
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
  }
  .form__submit:disabled {
    padding: 15px 40px;
    background: rgb(169,169,169);
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    cursor: not-allowed;
  }
</style>
