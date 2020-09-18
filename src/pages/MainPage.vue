<template>
  <div id="app">

    <h1>Charity Run</h1>

    <MainUsersTable />

  </div>
</template>

<script>
import MainUsersTable from '@/components/MainUsersTable.vue';

export default {
  name: 'MainPage',
  components: {
    MainUsersTable,
  },
};
</script>
