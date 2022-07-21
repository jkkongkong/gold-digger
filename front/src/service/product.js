

import axios from '@/service/axios'

export function getArticleDetails(id) {
  return axios.get(`/product/articleDetails?id=${id}`);
}

export function getCourseDetails() {
  return axios.get('/product/courseDetails');
}

export function search(params) {
  return axios.get('/search', { params });
}

