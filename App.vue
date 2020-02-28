<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
page {
	// uniapp的根节点
	width: 100%;
	height: 100%;
	background-image: linear-gradient(#000000, #323232);
}
</style>
