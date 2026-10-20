<template>
  <span ref="el">{{ displayValue }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000 // duration in ms
  }
})

const current = ref(0)
const el = ref<HTMLElement | null>(null)

// Automatically detect decimal places (e.g., 99.9 -> 1 decimal, 24 -> 0 decimals)
const decimals = computed(() => (props.to % 1 !== 0 ? 1 : 0))
const displayValue = computed(() => current.value.toFixed(decimals.value))

function animate() {
  const startTime = performance.now()

  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)

    // Smooth Ease-Out formula
    const easeProgress = 1 - Math.pow(1 - progress, 3)
    current.value = easeProgress * props.to

    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      current.value = props.to
    }
  }

  requestAnimationFrame(update)
}

// Ensure execution only happens on client side after mount
onMounted(() => {
  animate()
})
</script>
