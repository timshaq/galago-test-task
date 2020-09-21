<template>
    <label for="bornDate">
      {{ title }}
      <input type="text" name="bornDate" :value="$attrs.value" disabled >
      <DatePicker  class="form__input"
      v-model="dataValue"
      :placeholder="placeholder"
      :language="ru"
      :disabled-dates="this.disabledDates"
      :open-date="this.openDate"
      >
      </DatePicker>
    </label>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import { ru } from 'vuejs-datepicker/dist/locale';

export default {
  name: 'BaseFormDate',
  props: ['title', 'placeholder'],
  components: { DatePicker },
  data() {
    return {
      ru,
    };
  },
  computed: {
    disabledDates() {
      const nowDate = new Date();
      const minDate = nowDate.setFullYear(nowDate.getFullYear() - 16);
      const from = new Date(minDate);
      return { from };
    },
    openDate() {
      const { from } = this.disabledDates;
      // const open = new Date(from).setDate(new Date(from).getDate() - 1);
      return new Date(from);
    },
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value.toLocaleDateString());
      },
    },
  },
};
</script>
