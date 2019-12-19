<template>
	<view class="content">
		<view class="tabs">
			<view v-for="(item, index) in tabs" :key="item.id" :class="{ active: defaultIndex === index }" @click="switchTab(item.id)">{{ item.title }}</view>
		</view>
		<view class="container">
			<scroll-view scroll-y="true">
				<!-- start 首条信息  -->
				<view class="card " v-if="content.length > 0">
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
						<view class="time">{{ content[0].time | formDate }}</view>
					</view>
				</view>
				<!-- 无数据 -->
				<view class="no-data" v-else><text>暂无数据</text></view>
				<!-- end 首条信息  -->
				<!-- start 剩下信息 -->
				<view class="card " v-for="(item, index) in content" :key="item.id">
					<view v-if="content.length > 1 && index > 0">
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
							<view class="time">{{ item.time | formDate }}</view>
						</view>
					</view>
				</view>
				<!-- end 剩下信息 -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
import {dateDiff} from "../../../common/util.js"
export default {
	data() {
		return {
			tabs: [],
			content: [],
			defaultIndex: 0
		};
	},
	filters: {
		formDate(time) {
			return dateDiff(new Date(time).getTime());
		}
	},
	onLoad() {
		uni.startPullDownRefresh();
		this.initTabs(data => {
			// 默认第一个选项
			this.getContent(data[0].id);
		});
	},
	onPullDownRefresh() {},
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
						uni.stopPullDownRefresh();
					}
				})
				.catch(res => {
					console.log(res);
				});
		},
		switchTab(id) {
			if (id === this.defaultIndex) {
				// 已点中的再次点击不处理
				return;
			}
			this.defaultIndex = id;
			this.getContent(id);
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
	position: fixed;
	left: 0;
	top: 80upx;
	width: 100%;
	z-index: 100000000;
	background: #fff;
	.active {
		color: #007aff;
	}
}
.container {
	background: #f8f8f8;
	padding: 80upx 20upx 20upx 20upx;
	height: 100%;
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
	.no-data {
		height: 80%;
		display: flex;
		justify-content: center;
		font-size: 24upx;
		align-items: center;
		text-align: center;
		image {
			width: 200upx;
			height: 200upx;
		}
	}
}
</style>
