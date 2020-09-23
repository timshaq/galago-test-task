<template>
    <button
    class="header__btn-sort"
    type="button"
    name="button"
    v-if="this.sortId"
    @click.prevent="sortTable(sortId)"
    :class="{ smallest: this.isSmallest, largest: this.isLargest }">
      {{ this.title }}
    </button>

    <span v-else>
      {{ this.title }}
    </span>
</template>

<script>

export default {
  name: 'MainUsersTableButton',
  props: ['param', 'sortTable'],
  computed: {
    title() {
      return this.param.title;
    },
    sortId() {
      return this.param.sortId;
    },
    default() {
      return this.param.default;
    },
    isSmallest() {
      return this.param.smallest;
    },
    isLargest() {
      return this.param.largest;
    },
  },
};
</script>
