<template>
	<view class="pageThree"><web-view :src="filmVideoUrl" class="webview"></web-view></view>
</template>

<script lang="ts">
interface MyData {
	filmVideoUrl: string;
}
export default {
	data(): MyData {
		return {
			filmVideoUrl: ''
		};
	},
	onLoad: function(option: any): void {
		(this as any).filmVideoUrl = option.filmVideoUrl;
	},
	methods: {}
};
</script>

<style>
.pageThree {
	color: white;
	width: 100%;
	height: 100%;
}
.webview{
	width: 100%;
	height: 100%;
}
</style>
