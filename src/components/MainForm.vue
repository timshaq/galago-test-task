<template>
  <div class="run__form-container">
     <form class="run__form" @submit.prevent="sendForm">

       <input type="hidden" class="hidden" v-model="formData.registration">
       <div class="run__form-row">

         <label class="form__label">
          <span class="form__value">
           ФИО
          </span>
          <input class="form__input" placeholder="Ваше имя"
          v-model="formData.name"/>
         </label>

         <MainFormCalendar v-model="formData.date" title="Дата рождения"
         placeholder="11.03.1998" />

         <label class="form__label">
          <span class="form__value">
           Email
          </span>
          <span v-show="formError.email" class="form__error">❌</span>
          <input class="form__input" placeholder="Email"
          v-model="formData.email"/>
         </label>

       </div>

       <div class="run__form-row">

         <MainFormTelMask v-model="formData.phone" :error.sync="formError.phone" title="Телефон"
         placeholder="Номер телефона"/>

         <label class="form__label">
          <span class="form__value">
           Дистанция, км
          </span>
          <select class="form__input form__select" type="number" min="0"
          placeholder="Выберите дистанцию"
          v-model="formData.distance">
          <option disabled value="">Выберите дистанцию</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          </select>
         </label>

         <label class="form__label">
          <span class="form__value">
           Сумма взноса, руб.
          </span>
          <input class="form__input" type="number" min="0" placeholder="Сумма"
          v-model="formData.payment"/>
         </label>

       </div>

       <transition-group name="fade">
       <button class="form__submit" :key="1"
       :disabled="buttonIsDisabled" type="submit" name="button">Отправить заявку</button>

       <span v-show="userAdded" class="form__success" :key="2">
         Вы попали в список участников ✓
       </span>
       </transition-group>

     </form>
  </div>
</template>

<script>
import MainFormCalendar from '@/components/MainFormCalendar.vue';
import MainFormTelMask from '@/components/MainFormTelMask.vue';
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
      userAdded: false,
    };
  },
  props: ['addUser'],
  components: {
    MainFormCalendar,
    MainFormTelMask,
  },
  methods: {
    sendForm() {
      if (!this.formError.email) {
        const data = { ...this.formData };
        data.phone = `+${data.phone.replace(/\D*/g, '')}`;
        data.registration = new Date();
        this.addUser(data);
        const setFormData = new Promise((resolve) => {
          Object.keys(this.formData).forEach((key) => { this.formData[key] = ''; });
          resolve();
        });
        setFormData.then(() => { this.userAdded = true; });
        this.formError = {};
      }
    },
    checkMailValid() {
      this.formError.email = validMail(this.formData.email);
    },
  },
  computed: {
    buttonIsDisabled() {
      const nullItems = this.formDataItems.filter((item) => item.length === 0);
      return Boolean(nullItems.length || this.formError.email || this.formError.phone);
    },
    formDataItems() {
      return Object.keys(this.formData).map((key) => this.formData[key]);
    },
    formDataEmail() {
      return this.formData.email;
    },
  },
  watch: {
    formDataEmail() {
      if (this.formData.email) this.checkMailValid();
    },
    formDataItems() {
      this.userAdded = false;
    },
  },
};
</script>

<style>
  .run__form-container {
    width: 819px;
    height: 298.11px;
  }
  .run__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 50px;
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
    width: 30.333%;
    margin: 0 10px;
    position: relative;
  }
  .form__label.hidden {
    display: none;
  }
  .form__value {
    font-size: 18px;
    padding: 0 0 5px 30px;
    font-weight: 600;
  }
  .form__input {
    width: 100%;
    background: #e8f0fe;
    border-radius: 50px;
    padding: 15px 20px;
    font-size: 18px;
  }
  .form__input::placeholder {
    font-size: 18px;
  }
  .form__submit {
    padding: 15px 40px;
    background: #00AA4B;
    border-radius: 50px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0 0 0;
  }
  .form__submit:disabled {
    padding: 15px 40px;
    background: rgb(169,169,169);
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    cursor: not-allowed;
  }
  .form__success {
    color: #00AA4B;
    font-size: 16px;
    margin: 10px;
  }
  .form__error {
    position: absolute;
    top: 0;
    right: 30px;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(-120%);
    transition: all .8s;
    position: absolute;
  }
  .fade-leave-active {
    position: absolute;
    opacity: .2;
  }
</style>
