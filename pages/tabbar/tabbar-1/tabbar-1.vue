<template>
	<view class="content">
		<view class="tabs">
			<text v-for="item in tabs" :key="item.id">{{ item.title }}</text>
		</view>
		<scroll-view scroll-y="true">
			<view class="container">
				<!-- start 首条信息  -->
				<view class="card ">
					<image :src="content[0].thumb" mode="scaleToFill" lazy-load></image>
					<view class="wrap">
						<view class="title">{{ content[0].title }}</view>
						<view class="section">{{ content[0].content }}</view>
					</view>
					<view class="footer">
						<view class="info">
							<image :src="content[0].head_img" mode="aspectFill"></image>
							<text>{{ content[0].author }}</text>
						</view>
						<view class="time">{{ content[0].time | formDate}}</view>
					</view>
				</view>
				<!-- end 首条信息  -->
				<!-- start 剩下信息 -->
				<view class="card " v-for="item in content" :key="item.id">
					<view class="content-list">
						<view class="wrap left">
							<view class="title">{{ item.title }}</view>
							<view class="section">{{ item.content }}</view>
						</view>
						<view class="right"><image :src="item.thumb" mode="scaleToFill" lazy-load></image></view>
					</view>
					<view class="footer">
						<view class="info">
							<image :src="item.head_img" mode="aspectFill"></image>
							<text>{{ item.author }}</text>
						</view>
						<view class="time">{{ item.time | formDate}}</view>
					</view>
				</view>
				<!-- end 剩下信息 -->
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabs: [],
			content: []
		};
	},
	filters: {
		formDate(time){
			const d = new Date(time);
			const datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':0' + d.getMinutes() + ':0' + d.getSeconds();
			return datetime
		}
	},
	onLoad() {
		this.initTabs(data => {
			// 默认第一个选项
			this.getContent(data[0].id);
		});
	},
	methods: {
		// 获取标签页
		initTabs(callback) {
			const _this = this;
			_this.$api
				.tablist()
				.then(res => {
					if (+res.code === 1) {
						const { data } = res;
						_this.tabs = data;
						callback(data);
					}
				})
				.catch(res => {
					console.log(res);
				});
		},
		// 获取内容
		getContent(id) {
			const _this = this;
			_this.$api
				.tabForContent({ id: id })
				.then(res => {
					if (+res.code === 1) {
						const { data } = res;
						_this.content = data;
					}
				})
				.catch(res => {
					console.log(res);
				});
		}
	}
};
</script>

<style lang="scss">
.tabs {
	display: flex;
	justify-content: space-around;
	font-size: 28upx;
	padding: 16upx 0;
}
.container {
	background: #f8f8f8;
	padding: 20upx;
	.card {
		width: 100%;
		height: auto;
		background: #fff;
		border-radius: 5upx;
		margin-bottom: 20upx;

		image {
			width: 100%;
			border-top-left-radius: 5upx;
			border-top-right-radius: 5upx;
		}

		.wrap {
			padding: 30upx;
			.title {
				font-size: 32upx;
				margin-bottom: 30upx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.section {
				font-size: 28upx;
				color: $uni-text-color;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
		}

		.footer {
			display: flex;
			justify-content: space-between;
			padding: 0 30upx 30upx;
			font-size: 24upx;
			image {
				width: 40upx;
				height: 40upx;
				border-radius: 50%;
				display: inline-block;
				vertical-align: middle;
				margin-right: 10upx;
			}
			text {
				vertical-align: middle;
			}
		}
		.content-list {
			display: flex;
			justify-content: space-around;
			.left {
				flex: 2;
				overflow: hidden;
			}
			.right {
				flex: 1;
				overflow: hidden;
				padding: 30upx 30upx 0 0;
				image {
					height: 140upx;
					border-radius: 10upx;
				}
			}
		}
	}
}
</style>
