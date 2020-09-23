<template>
    <BaseFormField :title="title" :error="error">
      <select v-model="dataValue" class="form__input form__select">
        <option disabled value="" >{{ placeholder }}</option>
        <option
        v-for="opt in options"
        :key="opt"
        :value="opt">
          {{ opt }}
        </option>
      </select>
    </BaseFormField>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  props: {
    options: {
      default: () => [1, 2, 3],
    },
  },
  mixins: [formFieldMixin],
};
</script>

<style>
  .form__select {
    -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
  }
</style>
