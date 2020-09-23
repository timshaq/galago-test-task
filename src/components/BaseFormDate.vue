<template>
    <div class="form__label">
      <span class="form__value">{{ title }}</span>

      <DatePicker  input-class="form__input"
      v-model="dataValue"
      :placeholder="placeholder"
      :language="ru"
      :disabled-dates="this.disabledDates"
      :open-date="this.openDate"
      >
      </DatePicker>
    </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import { ru } from 'vuejs-datepicker/dist/locale';

export default {
  name: 'BaseFormDate',
  props: ['title', 'placeholder', 'value'],
  components: { DatePicker },
  data() {
    return {
      ru,
    };
  },
  computed: {
    inputValue() {
      if (this.value) {
        return new Date(this.value).toLocaleDateString();
      }
      return '';
    },
    disabledDates() {
      const nowDate = new Date();
      const minDate = nowDate.setFullYear(nowDate.getFullYear() - 16);
      const from = new Date(minDate);
      return { from };
    },
    openDate() {
      const { from } = this.disabledDates;
      return new Date(from);
    },
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
