import { createApp } from 'vue';
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(
  faLocationDot,
  faEnvelope,
  faPhone,
  faLinkedin,
  faGithub
);

import './style.css';

const app = createApp(App);

app.component('fa-icon', FontAwesomeIcon);

app.mount('#app');
