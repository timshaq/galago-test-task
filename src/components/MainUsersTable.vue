<template>
  <div class="">

    <h2>Charity Run Table</h2>

    <div class="table">
      <div class="row">
        <TableButton
        class="item"
        v-for="btn in sortButtons"
        :key="btn.title"
        :param="btn"
        />
      </div>
      <div class="row"
      v-for="user in users" :key="user.id">
        <div class="item">
          {{ user.registration }}
        </div>
        <div class="item">
          {{ user.name }}
        </div>
        <div class="item">
          {{ user.date }}
        </div>
        <div class="item">
          {{ user.email }}
        </div>
        <div class="item">
          {{ user.phone }}
        </div>
        <div class="item">
          {{ user.distance }}
        </div>
        <div class="item">
          {{ user.payment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableButton from '@/components/MainUsersTableButton.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MainUsersTable',
  props: ['users'],
  components: {
    TableButton,
  },
  methods: {
    ...mapActions(['updateSort']),
  },
  computed: {
    ...mapState(['sortButtons']),
  },
  created() {
    this.updateSort();
  },
};
</script>

<style>
  h2 {
    text-align: center;
  }
  .row {
    display: flex;
  }
  .item {
    width: 15%;
    margin: 5px 10px;
  }
</style>
