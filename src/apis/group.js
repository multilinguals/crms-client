import request from '@/plugins/request'

export function getGroup() {
  return request({
    url: `/get-profile-of-self-mr-group`,
    method: 'get'
  })
}


export function addGroup(data) {
  return request({
    url: `/create-mr-group`,
    method: 'post',
    data
  })
}

export function getGroupDetail(id) {
  return request({
    url: `/get-details-of-mr-group/${id}`,
    method: 'get'
  })
}

export function getGroupMembers(id) {
  return request({
    url: `/get-members-of-mr-group/${id}`,
    method: 'get'
  })
}

export function addGroupMember(id, data) {
  return request({
    url: `/add-members-to-mr-group/${id}`,
    method: 'post',
    data
  })
}

