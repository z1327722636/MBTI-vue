// src/utils/utils.ts
import { useCounterStore } from "../stores/counter";
const { questions, result, question_results } = useCounterStore();
export function calculateSum(a: number, b: number): number {
  console.log(questions);
  console.log(result);
  
  return a + b;
}
