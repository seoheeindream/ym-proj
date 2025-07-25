<template>
  <div
    ref="captureArea"
    id="capture"
    class="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/result.jpg')] text-black font-bagel-fat-one relative overflow-hidden"
  >
    <!-- 제목 -->
    <div class="pt-10 text-center text-white text-xl">
      당신의 금전감각 결과는....?
    </div>

    <!-- 결과1 -->
    <div
      class="absolute top-[90px] left-1/2 transform -translate-x-1/2 w-[250px]"
    >
      <img src="/Vector.png" alt="result1" class="w-full" />
      <div
        class="absolute top-[35%] left-[10%] right-[10%] text-center leading-snug text-black text-[30px]"
      >
        {{ typeName[r1] }}
      </div>
    </div>

    <!-- 설명1 -->
    <div class="absolute top-[250px] left-[30px] w-[250px]">
      <div class="relative w-full">
        <img src="/Vector 2.png" alt="desc1" class="w-full" />
        <div class="absolute top-[25%] text-[25px] leading-snug text-center">
          {{ typeDesc[r1] }}
        </div>
      </div>
    </div>

    <!-- 설명2 -->
    <div class="absolute top-[430px] right-[30px] w-[250px]">
      <div class="relative w-full">
        <img src="/Vector 3.png" alt="desc2" class="w-full" />
        <div class="absolute top-[35%] text-[25px] leading-snug text-center">
          {{ typeDesc2[r1] }}
        </div>
      </div>
    </div>

    <!-- 버튼 영역 -->
    <div class="absolute bottom-[80px] w-full flex justify-center gap-3">
      <img
        src="/share.png"
        @click="captureAndDownload"
        alt="공유하기"
        class="h-auto w-[100px]"
      />
      <img
        src="/retry.png"
        @click="retry"
        alt="재시작"
        class="h-auto w-[100px]"
      />
      <img src="/tip.png" @click="goToTip" alt="팁" class="h-auto w-[100px]" />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import html2canvas from "html2canvas";

const route = useRoute();
const router = useRouter();

const r1 = route.query.r1;

const typeName = {
  T1: "T1 책임형",
  T2: "T2 인정욕구형",
  T3: "T3 안정추구형",
  T4: "T4 자유추구형",
  T5: "T5 성취동기형",
  T6: "T6 소비즐김형",
  T7: "T7 전략관리형",
  T8: "T8 회피형",
  T9: "T9 모험투자형",
  T10: "T10 관계지향형",
};
const typeDesc = {
  T1: "가족이나 주변 사람들을 책임지고 싶은 마음이 커요. 나보다는 남을 먼저 생각하는 당신은 든든한 서포터입니다.",
  T2: "남들에게 멋져 보이고 싶고, 성취를 통해 인정받고 싶은 마음이 커요. 사회적 이미지도 재정의 큰 기준이에요.",
  T3: "불안감을 피하고 안정적인 삶을 지향해요. 저축과 보험, 안전한 투자가 당신의 우선순위입니다.",
  T4: "돈을 모으는 이유는 자유롭게 살기 위해서예요. 시간과 공간, 타인에게 얽매이지 않길 바라요.",
  T5: "목표를 이루고 자기계발을 하는 데 돈을 쓰는 걸 좋아해요. 성장과 발전에 대한 욕구가 큽니다.",
  T6: "소비 자체에서 기쁨과 즐거움을 느껴요. 지금의 행복을 중시하며, 순간의 만족도 중요해요.",
  T7: "계획적이고 체계적인 성향이에요. 예산을 세우고 소비를 컨트롤하며 돈을 효율적으로 사용하려 해요.",
  T8: "돈에 대한 관심이 적거나, 이야기 자체를 불편해해요. 자산 관리에 자신이 없거나 회피하고 싶어해요.",
  T9: "리스크가 있어도 도전하고 싶어요. 높은 수익을 기대하며 투자와 자산 증식에 적극적입니다.",
  T10: "돈은 인간관계를 위한 수단이라고 생각해요. 함께 쓰고 나누는 데에 큰 만족을 느껴요.",
};
const typeDesc2 = {
  T1: "신뢰를 중요하게 여기며, 주변 사람들의 안정을 위해 희생도 마다하지 않아요.",
  T2: "칭찬과 인정은 당신에게 큰 원동력이 돼요. 존재감을 느끼는 소비가 많아요.",
  T3: "예상치 못한 일에 휘둘리지 않으려는 실용적인 태도가 돋보입니다.",
  T4: "얽매임 없는 삶을 위해 경제적 자립을 꿈꾸는 자유주의자예요.",
  T5: "도전적인 상황에서도 스스로 동기를 부여하며 목표를 향해 나아가요.",
  T6: "스트레스를 해소하기 위한 소비는 당신에게 일종의 활력소예요.",
  T7: "장기적인 시야로 미래를 설계하는 능력자예요.",
  T8: "돈 이야기는 복잡하고 무겁게 느껴져 거리두고 싶어하는 성향이에요.",
  T9: "실패를 겪더라도 다시 일어서는 추진력이 있어요.",
  T10: "돈은 감정을 나누는 수단이라 생각해요. 따뜻한 마음의 소유자예요.",
};

// 🎯 화면 캡처 후 하단 100px 잘라내고 저장
async function captureAndDownload() {
  const target = document.getElementById("capture");
  if (!target) return;

  try {
    const canvas = await html2canvas(target, { useCORS: true, scale: 2 });
    const ctx = canvas.getContext("2d");

    const cropHeight = canvas.height - 100;
    const croppedCanvas = document.createElement("canvas");
    croppedCanvas.width = canvas.width;
    croppedCanvas.height = cropHeight;

    const croppedCtx = croppedCanvas.getContext("2d");
    croppedCtx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      cropHeight,
      0,
      0,
      canvas.width,
      cropHeight
    );

    const dataUrl = croppedCanvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "money_result_cropped.png";
    link.click();
  } catch (e) {
    alert("이미지 저장에 실패했어요 😢");
    console.error(e);
  }
}

function retry() {
  router.push("/test00");
}

function goToTip() {
  alert("돈 관리 꿀팁은 준비 중이에요 💡");
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&display=swap");
</style>
