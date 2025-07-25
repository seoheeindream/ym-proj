<template>
  <div
    class="w-full h-[917px] relative overflow-hidden bg-[url('/main.jpg')] bg-cover bg-no-repeat bg-top text-center text-white font-cafe24-pro-up"
  >
    <!-- 전체 중앙 정렬 wrapper -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <!-- 타이틀 -->
      <div
        class="text-[50px] font-bagel-fat-one text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f8822d,_#f22c29)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-4"
      >
        Bill Letter
      </div>

      <!-- 설명 -->
      <div
        class="font-bagel-fat-one text-ml font-light leading-relaxed text-shadow-sm mb-3"
      >
        <p class="m-0">돈에 대해서 어떻게 생각해?</p>
        <p class="m-0">테스트 해보고 돈 관리 팁 얻어보자!</p>
      </div>

      <!-- start 버튼 (router-link) -->
      <router-link to="/test00" class="inline-block">
        <div
          class="font-bagel-fat-one bg-white rounded-[15px] shadow-md w-[240px] h-[45px] flex items-center justify-center gap-2"
        >
          <span class="text-base text-lightseagreen font-bold-[20px]"
            >start</span
          >
          <img
            src="/Polygon 1.svg"
            alt="arrow"
            class="w-[20px] h-[20px] object-contain"
          />
        </div>
      </router-link>
    </div>
  </div>
</template>
