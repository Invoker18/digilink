
<template>
  <div
    class="selection:bg-primary-400/30 flex min-h-screen w-full flex-col overflow-x-clip bg-linear-to-r font-sans antialiased"
  >

    <navbar />

    <UMain class="divide-dorado-400/30 mx-auto w-full flex-1 divide-y">
      <slot />
    </UMain>

    <!-- <Footer /> -->

    <!-- <CookieBanner /> -->
  </div>
</template>
