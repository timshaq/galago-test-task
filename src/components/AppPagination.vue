<template>
  <ul class="pagination">
    <li class="pagination__item">
      <button type="button" class=""
      :class="{'disabled': isClickablePrev}"
      aria-label="Предыдущая страница"
      @click.prevent="prevPage">
      <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.646447 3.64645C0.451185 3.84171 0.451185 4.15829 0.646447 4.35355L3.82843
      7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553
      6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027
      0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM2 3.5H1V4.5H2V3.5Z"
      fill="black"/>
      </svg>

      </button>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <button type="button" class="pagination__link"
      :class="{'pagination__link_current': pageNumber === page}"
      @click.prevent="paginate(pageNumber)">
        {{ pageNumber }}
      </button>
    </li>
    <li class="pagination__item">
      <button class=""
      :class="{'pagination__link--disabled': isClickableNext}"
      aria-label="Следующая страница"
      @click.prevent="nextPage">
      <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.35355 3.64645C4.54882 3.84171 4.54882 4.15829 4.35355 4.35355L1.17157
      7.53553C0.976311 7.7308 0.659728 7.7308 0.464466 7.53553C0.269204 7.34027 0.269204
      7.02369 0.464466 6.82843L3.29289 4L0.464466 1.17157C0.269204 0.976311 0.269204 0.659728
      0.464466 0.464466C0.659728 0.269204 0.976311 0.269204 1.17157 0.464466L4.35355 3.64645ZM3
      3.5H4V4.5H3V3.5Z" fill="black"/>
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
    padding: 30px 0 17px 0;
  }
  .pagination__item {
    margin: 0 5px;
    font-size: 18px;
  }
  .pagination__link_current {
    color: #0086F8;
  }
</style>
