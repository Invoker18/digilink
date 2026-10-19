<script setup lang="ts">
import FloatingLines from '../bits/floating-lines.vue'
</script>
<template>
  <section class="bg-matisse-950 relative isolate overflow-hidden pt-29 text-white sm:pt-42">
    <div class="pointer-events-none absolute inset-0">
      <FloatingLines
        :lines-gradient="['#245473', '#006fd1', '#0095ff', '#7acbff']"
        :enabled-waves="['top', 'middle', 'bottom']"
        :line-count="[5, 3, 8]"
        :line-distance="[3, 20, 12]"
        :animation-speed="0.3"
        :bend-radius="10"
        :bend-strength="-0.25"
        :interactive="false"
        :parallax="false"
        mix-blend-mode="screen"
      />
    </div>
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(6_31_56/.72)_0%,rgb(16_62_99/.48)_48%,rgb(6_31_56/.74)_100%)] lg:hidden"
    />
    <div
      class="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgb(6_31_56/.76)_0%,rgb(16_62_99/.62)_32%,rgb(8_77_135/.30)_57%,rgb(6_31_56/.08)_100%)] lg:block"
    />

    <div
      class="relative z-10 mx-auto flex min-h-120 w-[calc(100%-2rem)] max-w-295 items-center pb-16 sm:min-h-132 sm:w-[calc(100%-3rem)] sm:pb-24"
    >
      <div class="w-full lg:w-[60%]">
        <p
          class="text-bright-blue-400 flex items-center gap-2.5 text-[10px] font-bold tracking-[.16em] uppercase"
        >
          <span
            class="bg-bright-blue-400 ring-bright-blue-400/10 size-1.5 rounded-full ring-5 motion-safe:animate-[ping_1.5s_infinite]"
          />
          Digilink Corporation · Technology delivery
        </p>
        <h1
          class="mt-5 max-w-155 text-[clamp(2.6rem,7vw,5rem)] leading-[1.02] font-bold tracking-tighter"
        >
          Software teams that
          <em class="text-bright-blue-400 not-italic">keep your roadmap moving.</em>
        </h1>
        <p class="text-oslo-gray-200 mt-6 max-w-130 text-[16px] leading-7 sm:text-[18px]">
          Add proven development talent to your organization, with the structure, visibility, and
          operational support to deliver meaningful work.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UButton
            to="#contact"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="bg-bright-blue-500 text-matisse-950 hover:bg-bright-blue-400 justify-center font-bold"
            >Build your development team</UButton
          >
          <UButton
            to="#capabilities"
            size="xl"
            variant="outline"
            color="neutral"
            class="justify-center border-white/25 bg-white/5 text-white hover:bg-white/10"
            >Explore capabilities</UButton
          >
        </div>
        <div class="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <span class="grid gap-1"
            ><b class="text-bright-blue-400 text-xl">Proven</b
            ><small class="text-oslo-gray-300 text-[10px]">Experience you can rely on</small></span
          >
          <span class="grid gap-1"
            ><b class="text-bright-blue-400 text-xl">Dedicated</b
            ><small class="text-oslo-gray-300 text-[10px]">Teams built around you</small></span
          >
          <span class="grid gap-1"
            ><b class="text-bright-blue-400 text-xl">Visible</b
            ><small class="text-oslo-gray-300 text-[10px]">Progress you can follow</small></span
          >
        </div>
      </div>
    </div>
  </section>
</template>
