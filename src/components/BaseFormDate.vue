<template>
    <label for="bornDate">
      {{ title }}
      <input type="text" name="bornDate" :value="$attrs.value" disabled >
      <DatePicker  class="form__input"
      v-model="dataValue"
      :placeholder="placeholder"
      :inline="true"
      :language="ru">
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
    maxDate() {
      const nowDate = new Date();
      nowDate.setFullYear(nowDate.getFullYear() - 16);
      return nowDate;
    },
    minDate() {
      const nowDate = new Date();
      nowDate.setFullYear(nowDate.getFullYear() - 150);
      return nowDate;
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
