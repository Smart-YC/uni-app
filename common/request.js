import urlConfig from './config.js'

const request = {}
const headers = {}
const PORT1 = '/baseinfo'

request.globalRequest = (url, method, data) => {

	return uni.request({
		url: urlConfig + url,
		method,
		data: data,
		dataType: 'json'
	}).then(res => {
		if (res[1].statusCode && res[1].statusCode == 200) {
			return res[1].data
		} else {
			throw res[1].data
		}
	}).catch(parmas => {
		switch (parmas.code) {
			case 401:
				uni.clearStorageSync()
				break
			default:
				// 请求成功
				return Promise.reject()
				break
		}
	})
}

export default request
