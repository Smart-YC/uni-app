import request from '@/common/request.js'

const api = {}
// 获取标签列表
api.tablist = params => request.globalRequest(`/tab/list`, 'GET')

export default api