import request from '@/utils/request'

export function initComment(data) {
  return request({
    url: '/comment/initComment',
    method: 'post',
    data
  })
}
export function clearComment() {
  return request({
    url: '/comment/clearComment',
    method: 'post'
  })
}
export function addComment(data) {
  return request({
    url: '/comment/addComment',
    method: 'post',
    data
  })
}
