import BaseFormField from '@/components/BaseFormField.vue';

export default {
  components: { BaseFormField },
  props: ['title', 'error', 'placeholder', 'value', 'min'],
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
