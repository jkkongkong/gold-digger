import request from '@/utils/request'

export function getCourseDetails(data) {
  return request({
    url: '/codeCourse/getCourseDetails',
    method: 'post',
    data
  })
}

export function updateCourse(data) {
  return request({
    url: '/codeCourse/updateCourse',
    method: 'post',
    data
  })
}
export function addCourse(data) {
  return request({
    url: '/codeCourse/addCourse',
    method: 'post',
    data
  })
}
export function delCourse(data) {
  return request({
    url: '/codeCourse/delCourse',
    method: 'post',
    data
  })
}
export function queryCourseList(data) {
  return request({
    url: '/codeCourse/queryCourseList',
    method: 'post',
    data
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
