import { useCounterStore } from "../stores/counter";

function calculateHighestScoreResult() {
  const { questions, result, question_results } = useCounterStore();

  // 初始化一个对象来存储每个结果的得分
  const scores = question_results.reduce((acc, curr) => {
    acc[curr.resultName] = 0;
    return acc;
  }, {});

  // 遍历用户的答案
  result.forEach((answer, index) => {
    // 获取当前问题的选项
    const questionOptions = questions[index].options;

    // 找到匹配用户答案的选项
    const selectedOption = questionOptions.find(
      (option) => option.key === answer
    );

    if (selectedOption) {
      // 获取选项对应的结果属性
      const resultProp = selectedOption.result;

      // 增加与该结果属性匹配的题目评分结果的得分
      question_results.forEach((questionResult) => {
        if (questionResult.resultProp.includes(resultProp)) {
          scores[questionResult.resultName]++;
        }
      });
    }
  });

  // 找到得分最高的结果
  let highestScore = -1;
  let highestScoreResult = 0;

  for (const [resultName, score] of Object.entries(scores)) {
    if (score > highestScore) {
      highestScore = score;
      highestScoreResult = question_results.find(
        (result) => result.resultName === resultName
      );
    }
  }

  return highestScoreResult;
}

// 示例调用
const highestScoreResult = calculateHighestScoreResult();
console.log(highestScoreResult);

export { calculateHighestScoreResult };
