<template>
  <div class="min-h-screen overflow-x-clip font-sans antialiased">
    <AppHeader />

    <UMain class="w-full overflow-x-clip bg-[#f4f8fb] text-[#071b31]">
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
