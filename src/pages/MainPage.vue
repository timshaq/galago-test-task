<template>
  <section id="app" class="run">
      <div class="run__col">
        <MainForm />
      </div>
      <div class="run__col">
        <MainUsersTable :users="usersForTable" />
        <AppPagination v-model='page' :page="page" :count="countUsers" :perPage="usersPerPage" />
      </div>

  </section>
</template>

<script>
import MainUsersTable from '@/components/MainUsersTable.vue';
import AppPagination from '@/components/AppPagination.vue';
import MainForm from '@/components/MainForm.vue';
import { mapState } from 'vuex';

export default {
  name: 'MainPage',
  data() {
    return {
      page: 1,
      usersPerPage: 6,
    };
  },
  computed: {
    ...mapState(['users']),
    totalUsers() {
      return this.users.length;
    },
    countUsers() {
      return this.users ? this.totalUsers : 0;
    },
    usersForTable() {
      const end = this.usersPerPage * this.page;
      const start = end - this.usersPerPage;
      const usersArr = this.users
        .filter((usr) => this.users.indexOf(usr) < end && this.users.indexOf(usr) >= start);
      return usersArr;
    },
  },
  components: {
    MainUsersTable,
    MainForm,
    AppPagination,
  },
};
</script>
<style media="screen">
  .run {
    display: flex;
  }
  .run__col {
    width: 50%;
  }
</style>
