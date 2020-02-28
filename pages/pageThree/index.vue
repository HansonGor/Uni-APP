<template>
	<view class="pageThree"><web-view :src="filmVideoUrl"></web-view></view>
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
}
</style>
