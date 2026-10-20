<script setup lang="ts">
// Define props passed to your OG image template
defineProps<{
  title?: string
  description?: string
  eyebrow?: string
}>()
</script>

<template>
  <div
    class="relative flex h-full w-full flex-col justify-between overflow-hidden bg-slate-950 p-16 text-white"
    style="font-family: 'DM Sans', sans-serif"
  >
    <!-- Background subtle gradient or design element -->
    <div
      class="bg-bright-blue-600/20 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl"
    ></div>

    <!-- Top / Eyebrow Section -->
    <div class="flex items-center space-x-3">
      <span
        v-if="eyebrow"
        class="text-bright-blue-400 text-lg font-semibold tracking-widest uppercase"
      >
        {{ eyebrow }}
      </span>
    </div>

    <!-- Big Logo -->
    <div class="h-40 w-auto shrink-0">
      <img src="logo.png" class="size-full object-contain object-left" alt="Logo" />
    </div>

    <!-- Center / Main Content: Big Logo + Title + Description -->
    <div class="flex items-center space-x-12">
      <!-- Title & Description -->
      <div class="flex flex-col gap-6">
        <h1 class="text-5xl leading-tight font-bold tracking-tight text-white">
          {{ title || 'Default Title' }}
        </h1>
        <p class="text-3xl leading-relaxed text-slate-300">
          {{ description || 'Default description goes here...' }}
        </p>
      </div>
    </div>
  </div>
</template>
