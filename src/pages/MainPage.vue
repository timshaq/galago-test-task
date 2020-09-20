<template>
  <section id="app" class="run">
      <div class="run__col">
        <MainForm />
      </div>
      <div class="run__col">
        <MainUsersTable />
      </div>

  </section>
</template>

<script>
import MainUsersTable from '@/components/MainUsersTable.vue';
import MainForm from '@/components/MainForm.vue';

export default {
  name: 'MainPage',
  components: {
    MainUsersTable,
    MainForm,
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
