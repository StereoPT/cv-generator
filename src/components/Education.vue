<template>
  <div>
    <h2 class="font-bold text-lg">Education</h2>
    <div class="mt-2 flex flex-col" v-for="(edu, index) in educations" :key="index">
      <div class="flex justify-between text-sm">
        <h3 class="font-bold">{{ edu.name }}</h3>
        <h3>{{ edu.length }}</h3>
      </div>
      <h4 class="text-xs italic">{{ edu.from }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  props: {
    educations: Array
  }
}
</script>

<style scoped> </style>