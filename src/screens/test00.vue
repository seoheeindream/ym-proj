<template>
  <div
    class="min-h-screen w-full bg-cover bg-no-repeat bg-top flex flex-col items-center justify-center px-4 text-black font-bagel-fat-one"
    :style="{ backgroundImage: `url('./test-00.jpg')` }"
  >
    <div
      v-if="currentQuestion < questions.length"
      class="w-full max-w-xs text-center"
    >
      <div
        class="font-bagel-fat-one text-white text-[20px] mb-8 drop-shadow-lg"
      >
        {{ questions[currentQuestion].q }}
      </div>
      <div class="flex flex-col space-y-5">
        <button
          v-for="(opt, idx) in questions[currentQuestion].opts"
          :key="idx"
          class="font-bagel-fat-one bg-white text-[18px] py-4 px-6 rounded-[13px] shadow-md hover:scale-105 transition"
          @click="selectOption(opt[1])"
        >
          {{ opt[0] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const questions = [
  {
    q: "돈을 모으는 가장 큰 이유는?",
    opts: [
      ["가족이나 주변 사람들을 위해", "T1"],
      ["남들에게 멋져 보이고 싶어서", "T2"],
      ["갑작스러운 상황에 대비하기 위해", "T3"],
      ["자유롭게 살고 싶어서", "T4"],
    ],
  },
  {
    q: "월급이 들어오면 가장 먼저 하는 일은?",
    opts: [
      ["필요한 만큼만 쓰고 저축한다", "T7"],
      ["사고 싶던 물건부터 지른다", "T6"],
      ["부모님께 용돈을 드린다", "T1"],
      ["한턱 쏜다", "T10"],
    ],
  },
  {
    q: "투자에 대한 당신의 생각은?",
    opts: [
      ["기회가 되면 투자한다", "T9"],
      ["손실이 싫어 안 한다", "T3"],
      ["전문가 도움 받아 한다", "T7"],
      ["복잡해서 관심 없다", "T8"],
    ],
  },
  {
    q: "돈이 생기면 드는 생각은?",
    opts: [
      ["어디에 써야 효과적일까", "T7"],
      ["갖고 싶던 걸 살 수 있어!", "T6"],
      ["아껴둬야지", "T3"],
      ["목표에 다가갔다!", "T5"],
    ],
  },
  {
    q: "여유가 생기면 하고 싶은 일은?",
    opts: [
      ["세계 여행", "T4"],
      ["집과 차 구입", "T2"],
      ["가족과 시간 보내기", "T1"],
      ["자기계발", "T5"],
    ],
  },
  {
    q: "돈 얘기할 때 기분은?",
    opts: [
      ["불편하다", "T8"],
      ["자랑하고 싶다", "T2"],
      ["배울 점이 많다", "T7"],
      ["좋은 정보 나누고 싶다", "T10"],
    ],
  },
  {
    q: "재정 계획은 어떻게 세우나요?",
    opts: [
      ["연단위 예산 계획", "T7"],
      ["필요할 때 생각", "T8"],
      ["장기 투자 계획", "T9"],
      ["하고 싶은 일에 집중", "T4"],
    ],
  },
  {
    q: "소비 기준은?",
    opts: [
      ["의미 있는 소비인가", "T5"],
      ["인정받을 소비인가", "T2"],
      ["행복한 소비인가", "T6"],
      ["꼭 필요한가", "T3"],
    ],
  },
  {
    q: "돈을 잘 썼다고 느낄 때는?",
    opts: [
      ["사람들과 함께", "T10"],
      ["공부나 자기개발", "T5"],
      ["자산이 불어날 때", "T9"],
      ["삶의 기반 마련", "T3"],
    ],
  },
  {
    q: "돈이 없을 때 가장 두려운 건?",
    opts: [
      ["가족을 지킬 수 없음", "T1"],
      ["남에게 초라해 보일까봐", "T2"],
      ["하고 싶은 걸 못함", "T4"],
      ["갑작스런 사고 대처 불가", "T3"],
    ],
  },
];

const currentQuestion = ref(0);
const answers = ref([]);

function selectOption(type) {
  answers.value.push(type);
  if (currentQuestion.value + 1 < questions.length) {
    currentQuestion.value++;
  } else {
    goToResult();
  }
}

function goToResult() {
  const score = {};
  for (const type of answers.value) {
    score[type] = (score[type] || 0) + 1;
  }
  const top3 = Object.entries(score)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  // 쿼리 파라미터로 전달 (ex. ?r1=T1&r2=T3&r3=T7)
  router.push({
    name: "Result",
    query: {
      r1: top3[0][0],
      r2: top3[1]?.[0] || "",
      r3: top3[2]?.[0] || "",
    },
  });
}
</script>
