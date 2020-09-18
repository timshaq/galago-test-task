<template>
    <button class="btn-sort" type="button" name="button"
    v-if="this.sortId"
    @click.prevent="getSort()"
    :class="{ smallest: this.isSmallest, largest: this.isLargest }">
      {{ this.title }}
    </button>

    <button v-else type="button" name="button">
      {{ this.title }}
    </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MainUsersTableButton',
  props: ['param'],
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
  methods: {
    ...mapActions(['sortData']),
    getSort() {
      this.sortData(this.sortId);
    },
  },
  created() {
    if (this.default) this.getSort();
  },
};
</script>

<style>
  .btn-sort {
    background: transparent;
  }
  .smallest {
    background: rgba(0,128,0,.3);
  }
  .largest {
    background: rgba(0,191,255,.3);
  }
</style>
