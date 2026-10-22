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

const phrases = computed(() => props.texts.map((text) => Array.from(text)))
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
