<template>
	<view class="pageTwo">
		<view :class="isShowMainOne ? 'main1' : 'main1 main1-move'">
			<swiper
				class="swiper"
				:indicator-dots="indicatorDots"
				:autoplay="autoplay"
				:interval="interval"
				:duration="duration"
				:circular="true"
				indicator-color="rgba(255,255,255,0.3)"
			>
				<swiper-item v-for="(item, index) in swiperImgs" :key="index"><image :src="item" class="swiper-item"></image></swiper-item>
			</swiper>
			<view class="films-recommand-title">为你推荐</view>
			<scroll-view scroll-x="true" class="films-recommand-list">
				<view class="films-recommand-item" :key="index" v-for="(item, index) in top9FilmsRecommand">
					<image :src="item.filmImg" class="films-recommand-image" @click="goPageThree(item.filmVideo)"></image>
					<view class="films-recommand-desc">评分：{{ item.filmGrade }}</view>
					<view class="films-recommand-desc films-recommand-desc2">{{ item.filmName }}</view>
				</view>
			</scroll-view>
		</view>
		<view class="films-recommand-title">热映</view>
		<scroll-view scroll-y="true" class="hot-show-films-wrapper" @scroll="handleMain1">
			<view class="hot-show-films" v-for="(item, index) in filmsList.films" :key="index">
				<view class="hot-film">
					<image class="hot-film-img" :src="item.filmImg" />
					<view class="hot-film-desc">
						<view class="hot-film-name">{{ item.filmName }}</view>
						<view class="hot-film-visitor">
							<text class="hot-film-visitor-num">{{ item.filmGrade }}</text>
							分
						</view>
						<view class="hot-film-type">类型：喜剧/悲剧</view>
						<view class="hot-film-actors">主演：周星驰</view>
					</view>
					<view class="hot-film-visit" @click="goPageThree(item.filmVideo)"><view class="hot-film-btn">想看</view></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts">
import swiperImgData1 from '../../static/data/swiperData1.ts';
import filmsData1, { FilmsData } from '../../static/data/filmsData1.ts';

interface MyData {
	swiperImgs: string[];
	filmsList: FilmsData;
	filmsList2: FilmsData;
	indicatorDots: boolean;
	autoplay: boolean;
	interval: number;
	duration: number;
	isShowMainOne: boolean;
}

export default {
	data(): MyData {
		return {
			swiperImgs: swiperImgData1,
			filmsList: filmsData1,
			filmsList2: filmsData1,
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			isShowMainOne: true
		};
	},
	computed: {
		top9FilmsRecommand: function(): object[] {
			// 类型断言方法一: as关键字
			// 进行深拷贝：新生成的数组与原数组不会共用同个堆
			const tempStoreArr: object[] = [...(this as any).filmsList.films];
			return tempStoreArr
				.sort((a: any, b: any) => {
					return b.filmGrade - a.filmGrade;
				})
				.slice(0, 9);
			// 类型断言方法二：
			// return (<any>this).filmsList.films.sort((a:any, b:any) => {
			// 	return b.filmGrade - a.filmGrade
			// }).slice(0, 9)
		}
	},
	methods: {
		handleMain1: function(e: any): void {
			if (e.detail.scrollTop > 20) {
				(this as any).isShowMainOne = false;
			} else {
				(this as any).isShowMainOne = true;
			}
		},
		goPageThree(filmVideoUrl: string): void {
			uni.navigateTo({
				url: '../pageThree/index?filmVideoUrl=' + filmVideoUrl
			});
		}
	}
};
</script>

<style lang="scss">
.pageTwo {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column; // 注意默认是横向布局
}

.main1 {
	transition: height 0.3s ease;
	overflow: hidden;
	height: 867upx;
}

.main1-move {
	height: 0;
}

.swiper {
	width: 100%;
	height: 400upx;

	.swiper-item {
		width: 100%;
		height: 100%;
		display: block;
	}
}

.films-recommand-title {
	line-height: 50upx;
	margin-left: 1%;
	color: white;
	font-weight: bold;
	font-size: 28upx;
	margin-bottom: 10upx;
}

.films-recommand-list {
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	.films-recommand-item {
		width: 33%;
		display: inline-block;

		.films-recommand-image {
			display: block;
			width: 90%;
			height: 300upx;
			margin: 10upx auto 0;
		}

		.films-recommand-desc {
			text-align: center;
			color: #939393;
			font-size: 24upx;
			margin-top: 8upx;
		}
		.films-recommand-desc2 {
			margin-bottom: 18upx;
		}
	}
}	interface MyData {
		filmVideoUrl: string
	}
.hot-show-films-wrapper {
	flex: 1;
	overflow: hidden;

	.hot-show-films {
		padding-left: 35upx;

		.hot-film {
			display: flex;
			padding: 30upx 0;
		}

		.hot-film-img {
			width: 135upx;
			height: 190upx;
		}

		.hot-film-desc {
			flex: 1;
			box-sizing: border-box;
			padding-left: 20upx;
			color: #cacaca;

			.hot-film-name {
				font-size: 40upx;
				font-weight: bold;
			}

			.hot-film-visitor {
				font-size: 30upx;
				line-height: 60upx;
			}

			.hot-film-visitor-num {
				color: #efb23d;
			}

			.hot-film-type,
			.hot-film-actors {
				font-size: 24upx;
				margin-bottom: 8upx;
			}
		}

		.hot-film-visit {
			width: 200upx;
			height: 190upx;
			position: relative;
		}

		.hot-film-btn {
			width: 110upx;
			line-height: 64upx;
			position: absolute;
			font-size: 30upx;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: #ffffff;
			text-align: center;
			background-color: #efb23d;
			border-radius: 40upx;
		}
	}
}
</style>
