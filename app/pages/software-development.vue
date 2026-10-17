<script setup lang="ts">
import desk from '@/assets/images/desk.webp'
import SpotlightCard from '@/components/bits/spotlight-card.vue'

useSeoMeta({
  title: 'Software Development Teams | Digilink Corporation',
  description:
    'Extend your product team with proven software developers, QA specialists, and delivery support from Digilink.'
})

const capabilities = [
  {
    icon: 'i-lucide-monitor-smartphone',
    title: 'Web & product development',
    text: 'Customer-facing applications and internal tools designed around your product roadmap.'
  },
  {
    icon: 'i-lucide-plug-zap',
    title: 'Integrations & automation',
    text: 'Connected systems, APIs, and practical automations that remove friction from operations.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Quality engineering',
    text: 'Deliberate testing practices that help every release arrive with more confidence.'
  },
  {
    icon: 'i-lucide-chart-no-axes-combined',
    title: 'Product improvement',
    text: 'A reliable team for the enhancements, maintenance, and delivery momentum your product needs.'
  }
]

const workflow = [
  [
    '01',
    'Understand the work',
    'We align on your product, technical environment, workflows, and immediate delivery priorities.'
  ],
  [
    '02',
    'Assemble your team',
    'We match developers and specialists to the roles, seniority, and collaboration style you need.'
  ],
  [
    '03',
    'Establish the rhythm',
    'Your team joins your tools, ceremonies, documentation, and reporting cadence from day one.'
  ],
  [
    '04',
    'Deliver and evolve',
    'We maintain visible progress, iterate with your stakeholders, and scale deliberately as the roadmap grows.'
  ]
]

const engagementModels = [
  {
    title: 'Dedicated team',
    description: 'A long-term extension of your engineering organization.',
    points: ['Consistent product context', 'Flexible team composition', 'Integrated daily workflow']
  },
  {
    title: 'Project delivery',
    description: 'A focused team for a defined build, integration, or modernization initiative.',
    points: ['Clear scope and milestones', 'Delivery leadership', 'Transition-ready handoff']
  }
]
</script>

<template>
  <section
    :style="{ backgroundImage: `url(${desk})` }"
    class="bg-matisse-950 relative isolate overflow-hidden bg-cover bg-center pt-29 text-white sm:pt-42"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(6_31_56/.88)_0%,rgb(6_31_56/.72)_45%,rgb(6_31_56/.94)_100%)] lg:hidden"
    />
    <div
      class="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#061f38_0%,rgb(6_31_56/.94)_31%,rgb(6_31_56/.58)_58%,rgb(6_31_56/.22)_100%)] lg:block"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(134_199_255/10%)_1px,transparent_1px),linear-gradient(90deg,rgb(134_199_255/10%)_1px,transparent_1px)] mask-[linear-gradient(90deg,#000,transparent_75%)] bg-size-[64px_64px] opacity-30"
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
          >
            Build your development team
          </UButton
          >
          <UButton
            to="#capabilities"
            size="xl"
            variant="outline"
            color="neutral"
            class="justify-center border-white/25 bg-white/5 text-white hover:bg-white/10"
          >
            Explore capabilities
          </UButton
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

  <section id="capabilities" class="bg-silver-50 py-18 sm:py-28">
    <div class="mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
      <div class="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <p class="text-bright-blue-600 text-[11px] font-bold tracking-[.16em] uppercase">
            What we build
          </p>
          <h2
            class="text-matisse-950 mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
          >
            Useful technology, delivered with momentum.
          </h2>
        </div>
        <p class="text-oslo-gray-600 max-w-135 text-[15px] leading-7 lg:justify-self-end">
          From fresh product work to the systems that hold a business together, your dedicated team
          is equipped to take on the work that matters next.
        </p>
      </div>
      <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="capability in capabilities" :key="capability.title" class="min-h-66">
          <SpotlightCard
            spotlight-color="rgb(8 114 201 / 0.16)"
            class="group border-silver-200 hover:border-bright-blue-300 relative h-full rounded-lg border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span
              class="bg-bright-blue-50 text-bright-blue-600 relative grid size-11 place-items-center rounded-lg text-xl transition group-hover:scale-110"
            ><UIcon :name="capability.icon"
            /></span>
            <h3 class="text-matisse-950 relative mt-7 text-lg font-bold">
              {{ capability.title }}
            </h3>
            <p class="text-oslo-gray-600 relative mt-3 text-[13px] leading-6">
              {{ capability.text }}
            </p>
          </SpotlightCard>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-matisse-950 relative overflow-hidden py-18 text-white sm:py-28">
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(32_178_255/10%)_1px,transparent_1px),linear-gradient(90deg,rgb(32_178_255/10%)_1px,transparent_1px)] mask-[linear-gradient(90deg,#000,transparent_78%)] bg-size-[64px_64px] opacity-25"
    />
    <div
      class="relative z-10 mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-10 sm:w-[calc(100%-3rem)] lg:grid-cols-[.8fr_1.2fr] lg:gap-20"
    >
      <div>
        <p class="text-bright-blue-400 text-[11px] font-bold tracking-[.16em] uppercase">
          How delivery works
        </p>
        <h2
          class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
        >
          A team that feels like part of yours.
        </h2>
        <p class="text-oslo-gray-200 mt-5 max-w-110 text-[15px] leading-7">
          Strong delivery is more than filling seats. We create the conditions for your developers
          to contribute quickly and stay connected to the outcome.
        </p>
      </div>
      <ol class="divide-y divide-white/10">
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

  <section class="bg-white py-18 sm:py-28">
    <div class="mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
      <div class="text-center">
        <p class="text-bright-blue-600 text-[11px] font-bold tracking-[.16em] uppercase">
          Engagement models
        </p>
        <h2
          class="text-matisse-950 mt-3 text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-.04em]"
        >
          Start with the work in front of you.
        </h2>
      </div>
      <div class="mx-auto mt-10 grid max-w-210 gap-4 md:grid-cols-2">
        <article v-for="model in engagementModels" :key="model.title" class="min-h-full">
          <SpotlightCard
            spotlight-color="rgb(8 114 201 / 0.14)"
            class="border-silver-200 hover:border-bright-blue-300 relative h-full rounded-lg border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <UIcon name="i-lucide-users-round" class="text-bright-blue-600 relative size-6" />
            <h3 class="text-matisse-950 relative mt-5 text-xl font-bold">
              {{ model.title }}
            </h3>
            <p class="text-oslo-gray-600 relative mt-2 text-[14px] leading-6">
              {{ model.description }}
            </p>
            <ul class="border-silver-200 relative mt-6 grid gap-3 border-t pt-5">
              <li
                v-for="point in model.points"
                :key="point"
                class="text-matisse-800 flex items-center gap-2 text-[12px] font-medium"
              >
                <UIcon name="i-lucide-check" class="text-bright-blue-500 size-4" />{{ point }}
              </li>
            </ul>
          </SpotlightCard>
        </article>
      </div>
    </div>
  </section>

  <LandingContact variant="development" />
</template>
