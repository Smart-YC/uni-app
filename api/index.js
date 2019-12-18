import request from '@/common/request.js'

const api = {}
// 获取标签列表
api.tablist = params => request.globalRequest(`/tab/list`, 'GET')
// 获取对应标签内容
api.tabForContent = params => request.globalRequest(`/content/list`, 'GET', params)
export default api