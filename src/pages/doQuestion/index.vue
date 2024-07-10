<template>
  <view class="doQuestion">
    <div>{{ current }}/{{ totalNumberOfQuestions }}</div>
    <AtProgress :percent="schedule" />
    <view class="question-container">
      <view class="at-article__h1 title"
        >{{ current }}、{{ currentQuestion.title }}</view
      >
      <view class="radio-container">
        <AtRadio
          :options="radioOptions1"
          :value="currentAnswer"
          @click="handleRadioChange"
        />
      </view>
    </view>
    <view>
      <AtButton
        v-if="current < totalNumberOfQuestions"
        type="primary"
        size="normal"
        class="controlBtn"
        circle
        :disabled="!currentAnswer"
        @click="handleNext"
      >
        下一题
      </AtButton>
      <AtButton
        v-else
        type="primary"
        size="normal"
        class="controlBtn"
        circle
        :disabled="!currentAnswer"
        @click="handleResult"
      >
        查看结果
      </AtButton>
      <AtButton
        v-if="current > 1"
        size="normal"
        class="controlBtn"
        circle
        @click="handlePrevious"
      >
        上一题
      </AtButton>
    </view>
    <GlobalFooter />
  </view>
</template>

<script setup>
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter.vue";
import { AtProgress, AtRadio, AtButton } from "taro-ui-vue3";
import { ref, computed, reactive } from "vue";
import { useCounterStore } from "../../stores/counter";
import Taro from "@tarojs/taro";

const { questions,result,setResult } = useCounterStore();
//题目长度
const totalNumberOfQuestions = ref(questions.length);
// 当前题目序号
const current = ref(1);
// 当前题目
const currentQuestion = computed(() => {
  return questions[current.value - 1];
});

// 当前答案
const currentAnswer = ref("");
// 答案列表
const answerList = ref([]);
// 选项
const radioOptions1 = computed(() => {
  return currentQuestion.value.options.map((option) => {
    return {
      label: `${option.key}. ${option.value}`,
      value: option.key,
    };
  });
});

const handleNext = () => {
  current.value++;
  if (answerList.value[current.value - 1]) {
    currentAnswer.value = answerList.value[current.value - 1];
  } else {
    currentAnswer.value = "";
  }
   
};
const handlePrevious = () => {
  current.value--;
  currentAnswer.value = answerList.value[current.value - 1 ];
};

const handleResult = () => {
  setResult(answerList.value);
  console.log(answerList.value);
  Taro.navigateTo({
    url: '/pages/result/index',
  });
};

//记录答案
const handleRadioChange = (value) => {
  currentAnswer.value = value;
  if (answerList.value.length >= current.value) {
    answerList.value[current.value - 1] = currentAnswer.value;
  } else {
    answerList.value.push(currentAnswer.value);
  }
};

const schedule = computed(() => {
  return Math.round((current.value / totalNumberOfQuestions.value) * 100);
});
</script>
