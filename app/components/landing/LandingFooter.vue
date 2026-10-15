<script setup lang="ts">
import logo from '~/assets/images/logo-digilink.png'
</script>

<template>
  <footer class="bg-[#031220] py-14 text-slate-400">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] sm:grid-cols-3"
    >
      <div>
        <img :src="logo" alt="DigiLink Corporation" class="w-44" />
        <p class="mt-4 text-[11px] leading-5">
          Nearshore customer experience,<br />powered by island talent.
        </p>
      </div>
      <div class="grid content-start gap-2 text-[11px]">
        <b class="mb-2 text-white">Services</b>
        <a href="#services" class="hover:text-cyan-400">Customer Experience</a>
        <a href="#services" class="hover:text-cyan-400">Technical Support</a>
        <a href="#services" class="hover:text-cyan-400">Revenue Operations</a>
      </div>
      <div class="grid content-start gap-2 text-[11px]">
        <b class="mb-2 text-white">Company</b>
        <a href="#facility" class="hover:text-cyan-400">Our Facility</a>
        <a href="#infrastructure" class="hover:text-cyan-400">Infrastructure</a>
        <a href="#contact" class="hover:text-cyan-400">Contact</a>
      </div>
    </div>
  </footer>
</template>
