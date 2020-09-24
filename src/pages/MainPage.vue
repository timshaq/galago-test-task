<template>
  <section class="run">

    <div class="run__row">
      <div class="run__col col__left">
        <h1 class="run__title_h1">
          Марафон в поддержку детей
        </h1>

        <img src="@/assets/runners.png" alt="" class="run__title-img">
      </div>

      <div class="run__col col__right">
        <MainForm
        :add-user="this.addUserInTable"
        />
      </div>
    </div>

    <h2 class="run__title_h2" v-show="countUsers > 0">
      С нами уже {{ countUsers | usersDeclension }}
    </h2>
    <div class="run_row run__row-table">

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
        :limit="limitPagination"
        />
      </div>

  </section>
</template>

<script>
import MainUsersTable from '@/components/MainUsersTable.vue';
import AppPagination from '@/components/AppPagination.vue';
import MainForm from '@/components/MainForm.vue';
import { mapState, mapActions } from 'vuex';
import usersDeclension from '@/helpers/usersDeclension';

export default {
  name: 'MainPage',
  data() {
    return {
      page: 1,
      usersPerPage: 4,

      limitPagination: 10,
    };
  },
  filters: { usersDeclension },
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
    updateUsersPerPage() {
      // const vw = window.innerWidth;
      // switch (true) {
      //   case (vw >= 1920):
      //     this.usersPerPage = 4;
      //     console.log('1920+');
      //     break;
      //   default:
      //     console.log('<1920');
      //     this.usersPerPage = 2;
      //     break;
      // }
      // const vh = window.innerHeight;
      // switch (true) {
      //   case (vh >= 1080):
      //     this.usersPerPage = 4;
      //     break;
      //   case (vh <= 1000):
      //     this.usersPerPage = 3;
      //     break;
      //   default:
      //     break;
      // }
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
    this.updateUsersPerPage();
    window.addEventListener('resize', this.updateUsersPerPage);
  },
};
</script>
<style>
.run-wrapper {
  background: #FFFFFF;
  box-shadow: 0px 20px 20px 15px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  width: 90%;
  overflow: hidden;
  width: 1732px;
  height: 974px;
}
.run {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 45px 0 0 0;
}
.run__title_h1 {
  font-size: 36px;
  line-height: 43px;
  font-weight: 600;
}
.run__row {
  display: flex;
}
.run__row-table {
  background: #F5F5F5;
  height: 524px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 35px;
}
.run__col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.col__left {
  width: 35%;
  padding: 0 0 0 95px;
}
.col__right {
  width: 65%;
}
.run__title-img {
  margin: 20px 0 0 0;
}
.run__title_h2 {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  text-align: right;
  padding: 10px 70px;
}
@media (max-height: 1040px) {
  .run-wrapper {
    height: 88%;
  }
  .run__title-img {
    width: 350px;
  }
}
@media (max-width: 1919px), (max-height: 1079px) {
  .run {
    padding: 15px 0 0 0;
  }
  .run-wrapper {
    width: 95%;
    height: 95%;
  }
  .col__left {
    padding: 0 0 0 40px;
  }
  .run__title_h1 {
    font-size: 25px;
  }
  .run__row {
    flex-direction: column;
  }
  .col__left, .col__right {
    width: 100%;
  }
  .run__form {
    padding: 30px 0 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .run__form-row {
    width: 50%;
  }
  .run__title-img {
    display: none;
  }
  .run__form-container {
    width: 100%;
    height: fit-content;
  }
  .form__value, .form__input, .form__submit, .form__submit:disabled {
    font-size: 16px;
  }
  .form__submit, .form__submit:disabled {
    margin-top: 15px;
  }
  .run__title_h2 {
    font-size: 18px;
  }
  .header__btn-sort:before, .header__btn-sort:after {
    right: 0;
  }
  .row__item, .headers__item {
    font-size: 16px;
  }
  .table__row {
    padding: 10px 0;
  }
  .run__row-table {
    height: fit-content;
    padding-bottom: 18px;
  }
}
</style>
