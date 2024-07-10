<template>
  <view class="indexPage">
    <!-- <Counter /> -->
    <view class="at-article__h1 title">MBTI 性格测试</view>
    <view class="at-article__h2 subTitle"
      >只需 2 分钟，就能非常准确地描述出你是谁，以及你的性格特点</view
    >
    <AtButton
      type="primary"
      size="normal"
      circle="true"
      class="enterBtn"
      @click="onEnter"
      >开始测试</AtButton
    >
    <button
      class="enterBtn at-button--primary at-button at-button--circle"
      open-type="share"
    >
      分享
    </button>
    <GlobalFooter />
  </view>
</template>

<script setup>
import "./index.scss";
import Taro from "@tarojs/taro";
import GlobalFooter from "../../components/GlobalFooter.vue";
import { AtButton, Image } from "taro-ui-vue3";
import { ref } from "vue";
// const mbtiImage = ref('../../assets/images/MBTI.png')

const onEnter = () => {
  //跳转到测试页面
  Taro.navigateTo({
    url: "/pages/doQuestion/index",
  });
};


</script>
