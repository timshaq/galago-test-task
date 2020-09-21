<template>
  <section id="app" class="run">

      <div class="run_row">
        <MainForm
        :add-user="this.addUserInTable"
        />
      </div>

      <div class="run__row">
        <MainUsersTable
        :users="usersForTable"
        :buttons-table="this.sortButtons"
        :sort-table="this.sortUsers"
        />
        <AppPagination v-if="this.countUsers > this.usersPerPage"
        v-model='page'
        :page="page"
        :count="countUsers"
        :perPage="usersPerPage"
        />
      </div>

  </section>
</template>

<script>
import MainUsersTable from '@/components/MainUsersTable.vue';
import AppPagination from '@/components/AppPagination.vue';
import MainForm from '@/components/MainForm.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MainPage',
  data() {
    return {
      page: 1,
      usersPerPage: 6,
    };
  },
  methods: {
    ...mapActions([
      'addUser',
      'updateSort',
      'sortUsers',
      'loadUsersFromStorage',
    ]),
    addUserInTable(user) {
      this.addUser(user);
      this.updateSort();
    },
  },
  computed: {
    ...mapState(['users', 'sortButtons']),
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
  created() {
    this.loadUsersFromStorage();
    this.updateSort();
  },
};
</script>
<style>

/* <NULL> */
/* *{
  padding: 0;
  margin: 0;
  border: 0;
}
*,*:before,*:after{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display: block;}
html,body{
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,button,textarea{font-family:inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;} */
/* </NULL> */

/* BASE */
html,body {
  /* overflow-x: hidden;
  overflow-y: hidden; */
}
.run {
}
</style>
