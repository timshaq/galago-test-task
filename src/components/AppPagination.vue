<template>
  <ul class="pagination">
    <li class="pagination__item">
      <button type="button" class=""
      :class="{'disabled': isClickablePrev}"
      aria-label="Предыдущая страница"
      @click.prevent="prevPage">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </button>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a href="#" class="pagination__link"
      :class="{'pagination__link_current': pageNumber === page}"
      @click.prevent="paginate(pageNumber)">
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <button class=""
      :class="{'pagination__link--disabled': isClickableNext}"
      aria-label="Следующая страница"
      @click.prevent="nextPage">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
    isClickablePrev() {
      if (!this.count) {
        return true;
      }

      return this.page === 1;
    },
    isClickableNext() {
      if (!this.count) {
        return true;
      }
      return this.page === this.pages;
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    prevPage() {
      if (!this.isClickablePrev) {
        this.$emit('paginate', this.page - 1);
      }
    },
    nextPage() {
      if (!this.isClickableNext) {
        this.$emit('paginate', this.page + 1);
      }
    },
  },
};
</script>

<style media="screen">
  .pagination {
    display: flex;
    justify-content: center;
    width: 100%;
    list-style: none;
  }
  .pagination__item {
    margin: 0 5px;
  }
  .pagination__link_current {
    background: rgba(0,128,0,.3);
  }
</style>
