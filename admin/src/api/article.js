import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
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

export function getArticleDetails(data) {
  return request({
    url: '/article/getArticleDetails',
    method: 'post',
    data
  })
}
export function updateArticle(data) {
  return request({
    url: '/article/updateArticle',
    method: 'post',
    data
  })
}
export function addArticle(data) {
  return request({
    url: '/article/addArticle',
    method: 'post',
    data
  })
}
export function queryArticleList(data) {
  return request({
    url: '/article/queryArticleList',
    method: 'post',
    data
  })
}
export function delArticle(data) {
  return request({
    url: '/article/delArticle',
    method: 'post',
    data
  })
}
