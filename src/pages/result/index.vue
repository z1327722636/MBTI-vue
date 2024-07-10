<template>
  <view class="resultPage">
    <view class="at-article__h1 title"
      ><b class="personality">{{ highestScoreResult.resultName }}</b
      >型<b class="description">- 鉴赏家人格</b></view
    >
    <view class="pDescription inset-shadow"> {{highestScoreResult.resultDesc}} </view>
    <AtButton
      type="primary"
      size="normal"
      circle="true"
      class="enterBtn"
      @click="onEnter"
      >返回主页</AtButton
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
import { AtButton } from "taro-ui-vue3";
import Taro from "@tarojs/taro";
import GlobalFooter from "../../components/GlobalFooter.vue";
const { questions, result, setResult } = useCounterStore();
import { useCounterStore } from "../../stores/counter";
import { calculateHighestScoreResult } from "../../utils/bizUtils";

const highestScoreResult = calculateHighestScoreResult();

const onEnter = () => {
  //跳转到测试页面
  Taro.navigateTo({
    url: "/pages/index/index",
  });
};
</script>
