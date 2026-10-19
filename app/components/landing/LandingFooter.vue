<script setup lang="ts">
import logo from '~/assets/images/logo-digilink.png'
</script>

<template>
  <footer class="bg-matisse-950 text-oslo-gray-300 py-14">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] sm:grid-cols-3"
    >
      <div>
        <img :src="logo" alt="Digilink Corporation" width="176" height="44" class="w-44" />
        <p class="mt-4 text-[11px] leading-5">
          Customer experience and technology,<br />powered by proven teams.
        </p>
      </div>
      <div class="grid content-start gap-2 text-[11px]">
        <b class="mb-2 text-white">Services</b>
        <a href="#services" class="hover:text-bright-blue-400">Call Center</a>
        <a href="#services" class="hover:text-bright-blue-400">Technical Support</a>
        <a href="#services" class="hover:text-bright-blue-400">Software Development</a>
      </div>
      <div class="grid content-start gap-2 text-[11px]">
        <b class="mb-2 text-white">Company</b>
        <a href="#facility" class="hover:text-bright-blue-400">Our Advantage</a>
        <a href="#infrastructure" class="hover:text-bright-blue-400">Infrastructure</a>
        <a href="#contact" class="hover:text-bright-blue-400">Contact</a>
      </div>
    </div>
  </footer>
</template>
