<template>
  <div class="min-h-screen overflow-x-clip font-sans antialiased">
    <AppHeader />

    <UMain class="bg-silver-50 text-matisse-950 w-full overflow-x-clip">
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
