<template>
  <label class="form__label input__tel">
    <span class="form__value">{{ title }}</span>
      <span v-show="currentMask.id" class="flags-font">
        {{ currentMask.content }}
      </span>

      <input type="tel" class="form__input"
      v-mask="currentMask.mask"
      :placeholder="placeholder"
      v-model="dataValue"
      @focus="onFocus"
      @blur="onBlur"
      @change="findMask"
      @keydown="findMask"
      />
  </label>
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'BaseFormTel',
  props: ['title', 'placeholder', 'value'],
  directives: { mask },
  data() {
    return {
      focus: false,
      currentMask: {
        id: '',
        mask: '+############',
        placeholder: 'Номер телефона',
        pattern: /\d\d\d\d\d\d\d\d\d/,
      },
      defaultMask: {
        id: '',
        mask: '+############',
        placeholder: 'Номер телефона',
        pattern: /\d\d\d\d\d\d\d\d\d/,
      },
      maskData: [
        {
          id: 'ru',
          code: '+7',
          mask: '+7 (###) ###-##-##',
          placeholder: '+7 (952) 336-60-67',
          pattern: /\d\d\d\d\d\d\d\d\d\d\d/,
          code_pattern: /^\+7.*$/g,
          content: '🇷🇺',
        },
        {
          id: 'ua',
          code: '+38',
          mask: '+38 (###) ###-####',
          placeholder: '+38 (096) 894-99-27',
          pattern: /\d\d\d\d\d\d\d\d\d\d\d\d/,
          code_pattern: /^\+38.*$/g,
          content: '🇺🇦',
        },
        {
          id: 'by',
          code: '+375',
          mask: '+375 (##) ###-##-##',
          placeholder: '+375 (24) 602-24-25',
          pattern: /\d\d\d\d\d\d\d\d\d\d\d\d/,
          code_pattern: /^\+375.*$/g,
          content: '🇧🇾',
        },
        {
          id: 'isr',
          code: '+972',
          mask: '+972 (###) ###-##-##',
          placeholder: '+972 (052) 342-49-04',
          pattern: /\d\d\d\d\d\d\d\d\d\d\d\d/,
          code_pattern: /^\+972.*$/g,
          content: '🇮🇱',
        },
        {
          id: 'us',
          code: '+1',
          mask: '+1 (###) ###-##-##',
          placeholder: '+1 (212) 123-45-67',
          pattern: /\d\d\d\d\d\d\d\d\d\d/,
          code_pattern: /^\+1.*$/g,
          content: '🇺🇸',
        },
        {
          id: 'lv',
          code: '+371',
          mask: '+371 (###) ##-##',
          placeholder: '+371 (212) 45-67',
          pattern: /\d\d\d\d\d\d\d\d\d\d/,
          code_pattern: /^\+371.*$/g,
          content: '🇱🇻',
        },
      ],
    };
  },
  methods: {
    findMask() {
      if (this.dataValue) {
        const findMask = this.maskData
          .filter((item) => item.code_pattern.test(this.dataValue))[0];
        if (findMask) this.currentMask = findMask;
      } else {
        this.currentMask = this.defaultMask;
      }
    },
    onFocus() {
      this.focus = true;
    },
    onBlur() {
      this.focus = false;
      const numbers = this.dataValue.replace(/\D*/g, '');
      const { pattern } = this.currentMask;
      const test = pattern.test(numbers);
      if (!test) {
        this.$emit('input', '');
        this.currentMask = this.defaultMask;
      } else {
        this.$emit('input', numbers);
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
  .flags-font {
    font-family: 'BabelStoneFlagsDual';
    position: absolute;
    top: 0;
    right: 30px;
  }
</style>
