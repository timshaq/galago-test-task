<template>
    <label>
      {{ title }}
      <the-mask type="text"
      mask="+7 (###) ###-##-##"
      :placeholder="placeholder"
      v-model="dataValue" />
    </label>
</template>

<script>
import { TheMask } from 'vue-the-mask';

export default {
  name: 'BaseFormDate',
  props: ['title', 'placeholder'],
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
