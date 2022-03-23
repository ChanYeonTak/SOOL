import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faPhone as freeFasFaPhone,
  faEnvelope as freeFasFaEnvelope,
  faSearch as freeFasFaSearch,
  faUser as freeFasFaUser
} from '@fortawesome/free-solid-svg-icons'

import {
  faInstagram as freeFabFaInstagram
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFasFaPhone,
  freeFasFaEnvelope,
  freeFasFaSearch,
  freeFasFaUser,
  freeFabFaInstagram
)

config.autoAddCss = false

Vue.component('faIcon', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
