<template>
  <view class="pageOne" :style="{backgroundImage:`url(${coverImg}`}">
    <view class="status-bar">
      <!-- 这里是自定义状态栏 -->
    </view>
    <view class="welcome-btn" @click="goPageTwo">
      <text class="welcome-text">点击进</text>
      <text class="welcome-text welcome-text2">入</text>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data() {
    return {};
  },
  computed:{
	  coverImg: function (): string {
		  const  num:number = 1
		  // const  num:number = (parseInt as any)(Math.random() * 4 + 1)
		  return `http://120.24.170.202:88/image/cover${num}.jpg`
	  }
  },
  methods: {
    goPageTwo (): void {
      // uni.switchTab({
      //   url: '../pageTwo/index'
      // })
	  uni.navigateTo({
	    url: '../pageTwo/index'
	  })
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/animation.scss";

.status-bar{
	height: var(--status-bar-height); // 配置自定义系统栏导航条
}

.pageOne {
  width: 100%;
  height: 100%;
  // background-image: url("http://120.24.170.202:88/image/pageOneCover.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}

.welcome-btn {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 6upx 44upx;
  border-radius: 20upx;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 27.5%;
  bottom: 18.55%;
  animation: $scale-animation;
}

.welcome-text {
  color: white;
  font-weight: 800;
  letter-spacing: 15upx;
  font-size: 50upx;
}
.welcome-text2 {
  letter-spacing: 0;
}
</style>
