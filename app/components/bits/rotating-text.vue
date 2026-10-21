<script setup lang="ts">
interface RotatingTextProps {
  texts: string[]
  rotationInterval?: number
  mainClassName?: string
}

const props = withDefaults(defineProps<RotatingTextProps>(), {
  rotationInterval: 4000,
  mainClassName: ''
})

const animationStyle = computed(() => ({
  '--rotation-duration': `${props.rotationInterval * props.texts.length}ms`,
  '--rotation-interval': `${props.rotationInterval}ms`
}))

const phrases = computed(() => props.texts.map(text => Array.from(text)))
</script>

<template>
  <span :class="['rotating-text', mainClassName]" :style="animationStyle">
    <span class="sr-only">{{ texts[0] }}</span>
    <span
      v-for="(characters, phraseIndex) in phrases"
      :key="texts[phraseIndex]"
      aria-hidden="true"
      class="rotating-text__item"
    >
      <span
        v-for="(character, characterIndex) in characters"
        :key="`${character}-${characterIndex}`"
        class="rotating-text__letter"
        :style="{
          animationDelay: `${
            phraseIndex * rotationInterval + (characters.length - characterIndex - 1) * 25
          }ms`
        }"
      >
        {{ character }}
      </span>
    </span>
  </span>
</template>

<style scoped>
.rotating-text {
  position: relative;
  display: block;
  min-block-size: 1.15em;
}

.rotating-text__item {
  position: absolute;
  inset-inline-start: 0;
  display: block;
  white-space: pre;
}

.rotating-text__letter {
  display: inline-block;
  opacity: 0;
  animation: rotate-letter var(--rotation-duration) cubic-bezier(0.22, 1, 0.36, 1) infinite both;
}

@keyframes rotate-letter {
  0% {
    opacity: 0;
    transform: translateY(105%);
  }
  7%,
  27% {
    opacity: 1;
    transform: translateY(0);
  }
  34%,
  100% {
    opacity: 0;
    transform: translateY(-105%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .rotating-text__letter {
    animation: none;
  }

  .rotating-text__item:not(:first-of-type) {
    display: none;
  }

  .rotating-text__item:first-of-type .rotating-text__letter {
    opacity: 1;
    transform: none;
  }
}
</style>
