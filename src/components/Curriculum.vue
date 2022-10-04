<template>
  <div class="p-2 w-full">
    <div class="mx-auto p-2 text-center">
      <h2 class="font-bold text-lg">Summary</h2>
      <h3 class="mt-2 font-light text-lg">{{ cv.summary }}</h3>
    </div>
    <Education class="mx-auto p-2" :educations="cv.education" />
    
    <div class="mx-auto p-2">
      <h2 class="font-bold text-lg">Experience</h2>
      <div class="mt-4 flex flex-col" v-for="(exp, index) in cv.experience" :key="index">
        <div class="flex justify-between">
          <h3 class="font-bold">{{ exp.position }}</h3>
          <h3 class="text-sm">{{ exp.length }}</h3>
        </div>
        <h4 class="text-sm italic">{{ exp.company }}</h4>
        <div class="mt-2 ml-2 text-sm">
          <h3>{{ exp.description.text }}</h3>
          <ul class="mt-2 ml-4 list-disc" v-if="exp.description.topics != 0">
            <li v-for="(desc, index) in exp.description.topics" :key="index">{{ desc }}</li>
          </ul>
        </div>
        <div class="mt-2 ml-2 text-xs" v-if="exp.skills.length != 0">
          <span class="font-bold">Skills: </span>
          <span>{{ exp.skills.join(', ') }}</span>
        </div>
      </div>
    </div>
    <div class="mx-auto p-2">
      <h2 class="font-bold text-lg">Projects</h2>
      <div class="mt-2 flex flex-col" v-for="(project, index) in cv.projects" :key="index">
        <h3 class="font-bold">{{ project.name }}</h3>
        <div class="mt-2 ml-2 text-sm">
          <h3>{{ project.description.text }}</h3>
          <ul class="mt-2 ml-4 list-disc" v-if="project.description.topics != 0">
            <li v-for="(desc, index) in project.description.topics" :key="index">{{ desc }}</li>
          </ul>
        </div>
        <div class="mt-2 ml-2 text-xs" v-if="project.skills != 0">
          <span class="font-bold">Skills: </span>
          <span>{{ project.skills.join(', ') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import curriculum from '../assets/curriculum.js';

import Education from './Education.vue';

export default {
  name: 'Curriculum',
  components: {
    Education
  },
  data() {
    return {
      cv: curriculum
    }
  }
}
</script>