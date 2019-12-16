<template>
	<view class="content">
		<view class="tabs">
			<liuyuno-tabs :tabData="tabs" :defaultIndex="defaultIndex" />
		</view>
		<scroll-view scroll-y="true">
			<view class="container">
				<view class="card ">
					<image src="http://i2.tiimg.com/694610/cbd573a4f32869a7.jpg" mode="scaleToFill" lazy-load></image>
					<view class="wrap">
						<view class="title">不一样的北欧风，面积不大却很实用</view>
						<view class="section">
							做一个优雅安静的女人，要懂得没有无缘无故的爱，也没有无缘无故的恨，要相信爱情，知道，付出不一定有收获，不付出，就一定没有，凡事尽力就好，绝不奢望奇迹出现！
						</view>
					</view>
					<view class="footer">
						<view class="info">
							<image src="http://i2.tiimg.com/694610/81df69684288027f.jpg" mode="aspectFill"></image>
							<text>不动声色</text>
						</view>
						<view class="time">15分钟之前</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
export default {
	data() {
		return {
			title: 'main',
			tabs: [],
			defaultIndex: 0
		};
	},
	components: {
	        liuyunoTabs
	    },
	onLoad() {
		this.initTabs();
	},
	methods: {
		// 获取标签页
		initTabs() {
			const _this = this;
			_this.$api
				.tablist()
				.then(res => {
					// 获得数据
					if (+res.code === 1) {
						const { data } = res;
						data.map((item, index)=>{
							_this.tabs.push(item.title)
						})
					}
					console.log(res);
				})
				.catch(res => {
					console.log(res); // 失败进行的操作
				});
		}
	}
};
</script>

<style lang="scss">
.tabs {
	display: flex;
	justify-content: space-between;
	font-size: 28upx;
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
			}

			.section {
				font-size: 28upx;
				color: $uni-text-color;
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
	}
}
</style>
