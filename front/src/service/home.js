

import axios from '@/service/axios'

export function getHome() {
  return axios.get('/index-infos');
}

