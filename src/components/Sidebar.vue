<template>
  <div class="p-2 w-full page-a4 flex flex-col justify-evenly text-white">
    <div class="flex justify-center p-2">
      <img v-show="false" class="border-double border-4 border-white rounded-full w-2/3" src="img/profile.png" alt="Profile Picture">
    </div>
    <div class="mt-4 flex flex-col text-center">
      <h1 class="font-light text-3xl">{{ info.name }}</h1>
      <h2 class="font-normal italic text-xl">{{ info.position }}</h2>
    </div>
    <div class="mt-4 mb-8 flex flex-col space-y-2">
      <div v-for="(p, index) in info.personal" :key="index">
        <fa-icon class="w-1/6 mr-2" :icon="p.icon" />
        <span class="w-5/6">{{ p.text }}</span>
      </div>
    </div>
    <div class="mt-4">
      <h2 class="font-bold text-lg">Skills</h2>
      <div class="mb-2" v-for="(skill, index) in info.skills" :key="index">
        <h3 class="text-lg">{{ skill.text }}</h3>
        <ul class="ml-6 list-disc" v-for="(tech, index) in skill.techs" :key="index">
          <li>{{ tech }}</li>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <h2 class="font-bold text-lg">Miscellaneous Skills</h2>
      <ul class="ml-6 list-disc" v-for="(miscSkill, index) in info.miscSkills" :key="index">
        <li>{{ miscSkill }}</li>
      </ul>
    </div>
    <div class="mt-4">
      <h2 class="font-bold text-lg">References</h2>
      <div class="ml-2">{{ info.references }}</div>
    </div>
    <div class="mt-4 text-xs text-center justify-self-end">
      <h6>Made by: Guido Pereira</h6>
      <h6>With Vue & Tailwind</h6>
    </div>
  </div>
</template>

<script>
import sidebarInfo from '../assets/sidebar';

export default {
  name: 'Sidebar',
  data() {
    return {
      info: sidebarInfo
    }
  }
}
</script>

<style scoped>
  .page-a4 {
    min-height: 100vh;
  }
</style>