<template>
  <label class="form__label input__tel">
    <span class="form__value">{{ title }}</span>
      <span v-show="this.error" class="form__error">❌</span>
      <input type="tel" class="form__input"
      v-mask="telMask.mask"
      :placeholder="placeholder"
      v-model="dataValue"
      @focus="onFocus"
      @blur="onBlur"
      />
  </label>
</template>

<script>
import { mask } from 'vue-the-mask';
import PNF from 'google-libphonenumber';

export default {
  name: 'BaseFormTel',
  props: ['title', 'placeholder', 'value', 'error'],
  directives: { mask },
  data() {
    return {
      focus: false,
      telMask: {
        id: '',
        mask: '+7 (###) ###-##-##',
        placeholder: 'Номер телефона',
        pattern: /\d\d\d\d\d\d\d\d\d/,
      },
    };
  },
  methods: {
    onFocus() {
      this.focus = true;
    },
    onBlur() {
      const phoneUtil = PNF.PhoneNumberUtil.getInstance();
      this.focus = false;
      const numbers = this.dataValue.replace(/\D*/g, '');
      const testGoogle = phoneUtil.isValidNumber(phoneUtil.parse(numbers, 'RU'));
      if (!testGoogle) {
        this.$emit('input', this.dataValue);
        this.$emit('update:error', true);
      } else {
        this.$emit('input', numbers);
        this.$emit('update:error', false);
      }
    },
  },
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
<style media="screen">
  .input__tel {
    position: relative;
  }
</style>
