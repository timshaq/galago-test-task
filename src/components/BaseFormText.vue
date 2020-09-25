<template>
    <BaseFormField :title="title" :error="error">
      <input class="form__input"
      v-model="dataValue"
      :type="type"
      :placeholder="placeholder"
      :min="min">
    </BaseFormField>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  props: {
    type: {
      default: 'text',
    },
    min: {
      default: '',
    },
  },
  mixins: [formFieldMixin],
};
</script>
