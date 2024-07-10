// https://pinia.esm.dev/introduction.html
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const questions = ref([
  {
    title: "你通常更喜欢",
    options: [
      {
        result: "I",
        value: "独自工作",
        key: "A",
      },
      {
        result: "E",
        value: "与他人合作",
        key: "B",
      },
    ],
  },
  {
    title: "对于日常安排",
    options: [
      {
        result: "S",
        value: "喜欢有结构和常规",
        key: "A",
      },
      {
        result: "N",
        value: "喜欢自由和灵活性",
        key: "B",
      },
    ],
  },
  {
    title: "当遇到问题时",
    options: [
      {
        result: "P",
        value: "首先考虑可能性",
        key: "A",
      },
      {
        result: "J",
        value: "首先考虑后果",
        key: "B",
      },
    ],
  },
  {
    title: "你如何看待时间",
    options: [
      {
        result: "T",
        value: "时间是一种宝贵的资源",
        key: "A",
      },
      {
        result: "F",
        value: "时间是相对灵活的概念",
        key: "B",
      },
    ],
  },
]);

  const question_results = [
    {
      resultProp: ["I", "S", "T", "J"],
      resultDesc: "忠诚可靠，被公认为务实，注重细节。",
      resultPicture: "icon_url_istj",
      resultName: "ISTJ",
    },
    {
      resultProp: ["I", "S", "F", "J"],
      resultDesc: "善良贴心，以同情心和责任为特点。",
      resultPicture: "icon_url_isfj",
      resultName: "ISFJ",
    },
  ];

  const result = ref(["B","B","B","A"]);

  const setResult = (value: []) => {
    result.value = value;
  };
  return { questions, result, question_results, setResult };
});
