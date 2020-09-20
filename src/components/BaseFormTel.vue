<template>
    <label>
      {{ title }}
      <the-mask type="text"
      mask="+7 (###) ###-##-##"
      :placeholder="placeholder"
      v-model="dataValue" />
      <span v-if="error" class="form__error">
        {{ error }}
      </span>
    </label>
</template>

<script>
import { TheMask } from 'vue-the-mask';

export default {
  name: 'BaseFormDate',
  props: ['title', 'placeholder', 'error'],
  components: { TheMask },
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
