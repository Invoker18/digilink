<script setup lang="ts">
const { t } = useI18n()

const workflow = computed(() => [
  ['01', t('development.workflow.steps.0.title'), t('development.workflow.steps.0.text')],
  ['02', t('development.workflow.steps.1.title'), t('development.workflow.steps.1.text')],
  ['03', t('development.workflow.steps.2.title'), t('development.workflow.steps.2.text')],
  ['04', t('development.workflow.steps.3.title'), t('development.workflow.steps.3.text')]
])
</script>

<template>
  <section class="bg-matisse-950 relative overflow-hidden py-18 text-white sm:py-28">
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(32_178_255/10%)_1px,transparent_1px),linear-gradient(90deg,rgb(32_178_255/10%)_1px,transparent_1px)] mask-[linear-gradient(90deg,#000,transparent_78%)] bg-size-[64px_64px] opacity-25"
    />
    <div
      data-reveal
      class="relative z-10 mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-10 sm:w-[calc(100%-3rem)] lg:grid-cols-[.8fr_1.2fr] lg:gap-20"
    >
      <div data-reveal-item>
        <p class="text-bright-blue-400 text-[11px] font-bold tracking-[.16em] uppercase">
          {{ t('development.workflow.eyebrow') }}
        </p>
        <h2
          class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
        >
          {{ t('development.workflow.title') }}
        </h2>
        <p class="text-oslo-gray-200 mt-5 max-w-110 text-[15px] leading-7">
          {{ t('development.workflow.description') }}
        </p>
      </div>
      <ol data-reveal-item class="divide-y divide-white/10">
        <li
          v-for="step in workflow"
          :key="step[0]"
          class="grid gap-3 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-5"
        >
          <span class="text-bright-blue-400 text-xl font-bold">{{ step[0] }}</span
          ><span
            ><b class="text-[15px]">{{ step[1] }}</b>
            <p class="text-oslo-gray-300 mt-1 text-[13px] leading-6">{{ step[2] }}</p></span
          >
        </li>
      </ol>
    </div>
  </section>
</template>
