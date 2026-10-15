<script setup lang="ts">
const submitted = ref(false)
</script>

<template>
  <section id="contact" class="bg-[#05172b] py-18 text-white sm:py-28">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24"
    >
      <div>
        <p class="text-[11px] font-bold tracking-[.16em] text-cyan-400 uppercase">
          Let's build together
        </p>
        <h2
          class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
        >
          Your next great team starts here.
        </h2>
        <p class="mt-5 max-w-120 leading-7 text-slate-300">
          Tell us what you're solving. We'll reply with a tailored staffing plan and transparent
          estimate within one business day.
        </p>
        <div class="mt-7 flex gap-3 text-cyan-400">
          <UIcon name="i-lucide-phone" class="mt-0.5 size-5" />
          <span class="grid gap-1 text-[10px] tracking-widest text-slate-400 uppercase">
            Prefer to talk?
            <b class="text-[12px] tracking-normal text-white normal-case">
              Schedule a 30-minute discovery call
            </b>
          </span>
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
          <h3 class="text-xl font-bold">Thank you. We're on it.</h3>
          <p class="max-w-75 text-slate-300">
            A solutions specialist will be in touch within one business day.
          </p>
          <UButton variant="outline" color="neutral" @click="submitted = false">
            Send another inquiry
          </UButton>
        </div>
        <form v-else @submit.prevent="submitted = true">
          <div class="mb-5 grid gap-1 sm:flex sm:items-center sm:justify-between">
            <h3 class="text-lg font-bold">Start the conversation</h3>
            <span class="text-[9px] text-emerald-300">Usually replies in under 4 hours</span>
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            <label class="grid gap-1.5 text-[11px] text-slate-300">
              First name
              <input
                required
                placeholder="Alex"
                class="min-h-12 rounded-md border border-white/15 bg-[#010e1b]/60 px-3 text-base transition outline-none focus:border-cyan-400"
              />
            </label>
            <label class="grid gap-1.5 text-[11px] text-slate-300">
              Last name
              <input
                required
                placeholder="Morgan"
                class="min-h-12 rounded-md border border-white/15 bg-[#010e1b]/60 px-3 text-base transition outline-none focus:border-cyan-400"
              />
            </label>
          </div>
          <label class="mt-3 grid gap-1.5 text-[11px] text-slate-300">
            Work email
            <input
              required
              type="email"
              placeholder="alex@company.com"
              class="min-h-12 rounded-md border border-white/15 bg-[#010e1b]/60 px-3 text-base transition outline-none focus:border-cyan-400"
            />
          </label>
          <label class="mt-3 grid gap-1.5 text-[11px] text-slate-300">
            What can we help you with?
            <select
              required
              class="min-h-12 rounded-md border border-white/15 bg-[#010e1b]/60 px-3 text-base transition outline-none focus:border-cyan-400"
            >
              <option value="" disabled selected>Select a service</option>
              <option>Customer Experience</option>
              <option>Technical Helpdesk</option>
              <option>Revenue Operations</option>
              <option>Back Office</option>
            </select>
          </label>
          <label class="mt-3 grid gap-1.5 text-[11px] text-slate-300">
            Tell us about your needs
            <textarea
              rows="3"
              placeholder="Team size, channels, launch timeline..."
              class="rounded-md border border-white/15 bg-[#010e1b]/60 px-3 py-2 text-base transition outline-none focus:border-cyan-400"
            />
          </label>
          <UButton
            type="submit"
            block
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="mt-4 bg-cyan-400 font-bold text-[#03233d] hover:bg-cyan-300"
          >
            Request a tailored quote
          </UButton>
        </form>
      </div>
    </div>
  </section>
</template>
