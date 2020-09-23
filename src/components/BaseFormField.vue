<template>
    <label class="form__label">
      <span class="form__value">{{ title }}</span>
      <slot />
      <span v-if="error" class="form__error">
        ❌
      </span>
    </label>
</template>

<script>
export default {
  props: ['title', 'error'],
};
</script>
