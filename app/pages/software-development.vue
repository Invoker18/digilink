<script setup lang="ts">
import desk from '@/assets/images/desk.webp'

useSeoMeta({
  title: 'Software Development Teams | Digilink Corporation',
  description:
    'Extend your product team with dedicated nearshore software developers, QA specialists, and delivery support from Digilink.'
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

const submitted = ref(false)
</script>

<template>
  <section class="relative overflow-hidden bg-[#071b31] pt-29 text-white sm:pt-42">
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(121_181_214/10%)_1px,transparent_1px),linear-gradient(90deg,rgb(121_181_214/10%)_1px,transparent_1px)] mask-[linear-gradient(90deg,#000,transparent_75%)] bg-size-[64px_64px] opacity-30"
    />
    <div
      class="relative mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-10 pb-16 sm:w-[calc(100%-3rem)] sm:pb-24 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-20"
    >
      <div>
        <p
          class="flex items-center gap-2.5 text-[10px] font-bold tracking-[.16em] text-cyan-400 uppercase"
        >
          <span
            class="size-1.5 rounded-full bg-emerald-400 ring-5 ring-emerald-400/10 motion-safe:animate-[ping_1.5s_infinite]"
          />
          Digilink Corporation · Technology delivery
        </p>
        <h1
          class="mt-5 max-w-155 text-[clamp(2.6rem,7vw,5rem)] leading-[1.02] font-bold tracking-tighter"
        >
          Software teams that <em class="text-cyan-400 not-italic">keep your roadmap moving.</em>
        </h1>
        <p class="mt-6 max-w-130 text-[16px] leading-7 text-slate-300 sm:text-[18px]">
          Add proven nearshore development talent to your organization, with the structure,
          visibility, and operational support to deliver meaningful work.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UButton
            to="#contact"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="justify-center bg-cyan-400 font-bold text-[#03233d] hover:bg-cyan-300"
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
            ><b class="text-xl text-cyan-400">Nearshore</b
            ><small class="text-[10px] text-slate-400">EST-aligned collaboration</small></span
          >
          <span class="grid gap-1"
            ><b class="text-xl text-cyan-400">Dedicated</b
            ><small class="text-[10px] text-slate-400">Teams built around you</small></span
          >
          <span class="grid gap-1"
            ><b class="text-xl text-cyan-400">Visible</b
            ><small class="text-[10px] text-slate-400">Progress you can follow</small></span
          >
        </div>
      </div>
      <figure class="relative h-100 overflow-hidden rounded-lg border border-cyan-400/25 sm:h-125">
        <img
          :src="desk"
          alt="Software team collaborating at the Digilink delivery hub"
          class="size-full object-cover brightness-55 saturate-75"
        />
        <div
          class="absolute inset-0 bg-linear-to-tr from-[#071b31] via-[#071b31]/25 to-transparent"
        />
        <figcaption
          class="absolute right-5 bottom-5 left-5 border border-white/15 bg-[#041c30]/85 p-5 backdrop-blur"
        >
          <span class="text-[9px] font-bold tracking-[.15em] text-cyan-400 uppercase"
            >Your embedded delivery partner</span
          >
          <b class="mt-2 block text-xl leading-snug"
            >Engineering talent that fits into the way your team already works.</b
          >
        </figcaption>
      </figure>
    </div>
  </section>

  <section id="capabilities" class="bg-[#f4f8fb] py-18 sm:py-28">
    <div class="mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
      <div class="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <p class="text-[11px] font-bold tracking-[.16em] text-cyan-600 uppercase">
            What we build
          </p>
          <h2
            class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em] text-[#0c2947]"
          >
            Useful technology, delivered with momentum.
          </h2>
        </div>
        <p class="max-w-135 text-[15px] leading-7 text-[#688096] lg:justify-self-end">
          From fresh product work to the systems that hold a business together, your dedicated team
          is equipped to take on the work that matters next.
        </p>
      </div>
      <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="capability in capabilities"
          :key="capability.title"
          class="group min-h-66 border border-[#dce6ee] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
        >
          <span
            class="grid size-11 place-items-center rounded-lg bg-cyan-50 text-xl text-cyan-600 transition group-hover:scale-110"
            ><UIcon :name="capability.icon"
          /></span>
          <h3 class="mt-7 text-lg font-bold text-[#0c2947]">{{ capability.title }}</h3>
          <p class="mt-3 text-[13px] leading-6 text-[#688096]">{{ capability.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-[#0b2947] py-18 text-white sm:py-28">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-10 sm:w-[calc(100%-3rem)] lg:grid-cols-[.8fr_1.2fr] lg:gap-20"
    >
      <div>
        <p class="text-[11px] font-bold tracking-[.16em] text-cyan-400 uppercase">
          How delivery works
        </p>
        <h2
          class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
        >
          A team that feels like part of yours.
        </h2>
        <p class="mt-5 max-w-110 text-[15px] leading-7 text-slate-300">
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
          <span class="text-xl font-bold text-cyan-400">{{ step[0] }}</span
          ><span
            ><b class="text-[15px]">{{ step[1] }}</b>
            <p class="mt-1 text-[13px] leading-6 text-slate-400">{{ step[2] }}</p></span
          >
        </li>
      </ol>
    </div>
  </section>

  <section class="bg-white py-18 sm:py-28">
    <div class="mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
      <div class="text-center">
        <p class="text-[11px] font-bold tracking-[.16em] text-cyan-600 uppercase">
          Engagement models
        </p>
        <h2
          class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-.04em] text-[#0c2947]"
        >
          Start with the work in front of you.
        </h2>
      </div>
      <div class="mx-auto mt-10 grid max-w-210 gap-4 md:grid-cols-2">
        <article
          v-for="model in engagementModels"
          :key="model.title"
          class="border border-[#dce6ee] p-7"
        >
          <UIcon name="i-lucide-users-round" class="size-6 text-cyan-600" />
          <h3 class="mt-5 text-xl font-bold text-[#0c2947]">{{ model.title }}</h3>
          <p class="mt-2 text-[14px] leading-6 text-[#688096]">{{ model.description }}</p>
          <ul class="mt-6 grid gap-3 border-t border-[#e6edf2] pt-5">
            <li
              v-for="point in model.points"
              :key="point"
              class="flex items-center gap-2 text-[12px] font-medium text-[#294864]"
            >
              <UIcon name="i-lucide-check" class="size-4 text-emerald-500" />{{ point }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section id="contact" class="bg-[#05172b] py-18 text-white sm:py-28">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24"
    >
      <div>
        <p class="text-[11px] font-bold tracking-[.16em] text-cyan-400 uppercase">
          Build with Digilink
        </p>
        <h2
          class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
        >
          Let’s talk about your next release.
        </h2>
        <p class="mt-5 max-w-120 leading-7 text-slate-300">
          Tell us where you need capacity, capability, or delivery support. A technology specialist
          will follow up with a tailored approach.
        </p>
        <div class="mt-7 flex gap-3 text-cyan-400">
          <UIcon name="i-lucide-calendar-days" class="mt-0.5 size-5" /><span
            class="grid gap-1 text-[10px] tracking-widest text-slate-400 uppercase"
            >Start with a conversation<b class="text-[12px] tracking-normal text-white normal-case"
              >Schedule a 30-minute discovery call</b
            ></span
          >
        </div>
      </div>
      <div class="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur sm:p-8">
        <div
          v-if="submitted"
          class="grid min-h-80 place-content-center justify-items-center gap-3 text-center"
        >
          <UIcon
            name="i-lucide-check"
            class="size-14 rounded-full bg-emerald-400/10 p-3 text-emerald-400"
          />
          <h3 class="text-xl font-bold">Thank you. We’re on it.</h3>
          <p class="max-w-75 text-slate-300">
            A technology specialist will be in touch within one business day.
          </p>
          <UButton variant="outline" color="neutral" @click="submitted = false"
            >Send another inquiry</UButton
          >
        </div>
        <form v-else @submit.prevent="submitted = true">
          <div class="mb-5">
            <h3 class="text-lg font-bold">Tell us what you’re building</h3>
            <span class="text-[9px] text-emerald-300">Usually replies in under 4 hours</span>
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            <label class="grid gap-1.5 text-[11px] text-slate-300"
              >First name<input
                required
                placeholder="Alex"
                class="min-h-12 rounded-md border border-white/15 bg-[#010e1b]/60 px-3 text-base transition outline-none focus:border-cyan-400" /></label
            ><label class="grid gap-1.5 text-[11px] text-slate-300"
              >Work email<input
                required
                type="email"
                placeholder="alex@company.com"
                class="min-h-12 rounded-md border border-white/15 bg-[#010e1b]/60 px-3 text-base transition outline-none focus:border-cyan-400"
            /></label>
          </div>
          <label class="mt-3 grid gap-1.5 text-[11px] text-slate-300"
            >What do you need?<select
              required
              class="min-h-12 rounded-md border border-white/15 bg-[#010e1b]/60 px-3 text-base transition outline-none focus:border-cyan-400"
            >
              <option value="" disabled selected>Select a need</option>
              <option>Dedicated development team</option>
              <option>Project delivery</option>
              <option>QA and quality engineering</option>
              <option>Integration or automation</option>
            </select></label
          ><label class="mt-3 grid gap-1.5 text-[11px] text-slate-300"
            >Tell us about the work<textarea
              rows="3"
              placeholder="Team size, product, timeline, or technical priorities..."
              class="rounded-md border border-white/15 bg-[#010e1b]/60 px-3 py-2 text-base transition outline-none focus:border-cyan-400"
            /></label
          ><UButton
            type="submit"
            block
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="mt-4 bg-cyan-400 font-bold text-[#03233d] hover:bg-cyan-300"
            >Start the conversation</UButton
          >
        </form>
      </div>
    </div>
  </section>
</template>
