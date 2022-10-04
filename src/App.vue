<template>
  <div class="container mx-auto">
    <div class="flex flex-row flex-wrap">
      <aside class="w-1/3 px-2 sidebar-color">
        <Sidebar />
      </aside>
      <main role="main" class="w-2/3 pt-1 px-2">
        <Curriculum />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Curriculum from './components/Curriculum.vue';

export default {
  name: 'Curriculum Vitae',
  components: {
    Sidebar,
    Curriculum
  }
}
</script>

<style scoped>
  .sidebar-color {
    background-color: #616161;
  }
</style>
