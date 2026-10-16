<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui'
import SpotlightCard from '../bits/spotlight-card.vue'

type ContactVariant = 'general' | 'development'

const props = withDefaults(defineProps<{ variant?: ContactVariant }>(), {
  variant: 'general'
})

const submitted = ref(false)
const isSubmitting = ref(false)
const submissionError = ref('')

type ContactFormState = {
  firstName: string
  lastName: string
  email: string
  service: string
  message: string
}

const formState = reactive<ContactFormState>({
  firstName: '',
  lastName: '',
  email: '',
  service: '',
  message: ''
})

const serviceOptions = computed(() =>
  props.variant === 'development'
    ? [
        'Dedicated development team',
        'Project delivery',
        'QA and quality engineering',
        'Integration or automation'
      ]
    : ['Customer Experience', 'Technical Helpdesk', 'Revenue Operations', 'Back Office']
)

const copy = computed(() =>
  props.variant === 'development'
    ? {
        eyebrow: 'Build with Digilink',
        title: 'Let’s talk about your next release.',
        description:
          'Tell us where you need capacity, capability, or delivery support. A technology specialist will follow up with a tailored approach.',
        formTitle: 'Tell us what you’re building',
        serviceLabel: 'What do you need?',
        messageLabel: 'Tell us about the work',
        messagePlaceholder: 'Team size, product, timeline, or technical priorities...',
        submitLabel: 'Start the conversation',
        successMessage: 'A technology specialist will be in touch within one business day.'
      }
    : {
        eyebrow: "Let's build together",
        title: 'Your next great team starts here.',
        description:
          "Tell us what you're solving. We'll reply with a tailored staffing plan and transparent estimate within one business day.",
        formTitle: 'Start the conversation',
        serviceLabel: 'What can we help you with?',
        messageLabel: 'Tell us about your needs',
        messagePlaceholder: 'Team size, channels, launch timeline...',
        submitLabel: 'Request a tailored quote',
        successMessage: 'A solutions specialist will be in touch within one business day.'
      }
)

const formFieldUi = {
  label: 'text-oslo-gray-200',
  error: 'mt-1.5 text-bright-blue-300'
}

const darkControlUi = {
  base: 'bg-matisse-950/75 text-white placeholder:text-oslo-gray-400 ring-1 ring-inset ring-white/15 hover:bg-matisse-950/90 hover:ring-bright-blue-400/40 focus:bg-matisse-950/90 focus:ring-2 focus:ring-bright-blue-400/45 min-h-12'
}

const darkSelectUi = {
  ...darkControlUi,
  value: 'text-white',
  placeholder: 'text-oslo-gray-400',
  trailingIcon: 'text-bright-blue-400',
  content: 'border border-bright-blue-400/25 bg-matisse-900 shadow-2xl',
  item: 'text-oslo-gray-100 before:bg-transparent hover:before:bg-bright-blue-400/20 data-highlighted:not-data-disabled:text-white data-highlighted:not-data-disabled:before:bg-bright-blue-400/20',
  itemLabel: 'text-inherit'
}

const validate = (state: Partial<ContactFormState>): FormError[] => {
  const errors: FormError[] = []

  if (!state.firstName?.trim())
    errors.push({ name: 'firstName', message: 'Enter your first name.' })
  if (!state.lastName?.trim()) errors.push({ name: 'lastName', message: 'Enter your last name.' })
  if (!state.email?.trim()) {
    errors.push({ name: 'email', message: 'Enter your work email.' })
  } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
    errors.push({ name: 'email', message: 'Enter a valid email address.' })
  }
  if (!state.service) errors.push({ name: 'service', message: 'Choose a service.' })
  if (!state.message?.trim()) errors.push({ name: 'message', message: 'Tell us what you need.' })

  return errors
}

const onError = (event: FormErrorEvent) => {
  const firstErrorId = event.errors[0]?.id
  if (!firstErrorId) return

  document.getElementById(firstErrorId)?.focus()
}

const onSubmit = async (event: FormSubmitEvent<ContactFormState>) => {
  isSubmitting.value = true
  submissionError.value = ''

  try {
    await $fetch('/api/send', {
      method: 'POST',
      body: event.data
    })
    submitted.value = true
  } catch {
    submissionError.value =
      'We could not send your request. Please try again or contact us directly.'
  } finally {
    isSubmitting.value = false
  }
}

const nextSteps = [
  {
    icon: 'i-lucide-clipboard-pen-line',
    title: 'Share your priorities',
    text: 'Tell us about the work, timeline, and team you need.'
  },
  {
    icon: 'i-lucide-users-round',
    title: 'Meet a solutions lead',
    text: 'We will schedule a focused discovery conversation.'
  },
  {
    icon: 'i-lucide-file-check-2',
    title: 'Receive your plan',
    text: 'Get a clear staffing approach and next steps.'
  }
]
</script>

<template>
  <section id="contact" class="bg-matisse-950 relative overflow-hidden py-18 text-white sm:py-28">
    <div
      class="relative mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24"
    >
      <div>
        <p class="text-bright-blue-400 text-[11px] font-bold tracking-[.16em] uppercase">
          {{ copy.eyebrow }}
        </p>
        <h2
          class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
        >
          {{ copy.title }}
        </h2>
        <p class="text-oslo-gray-200 mt-5 max-w-120 leading-7">
          {{ copy.description }}
        </p>
        <div class="mt-8 border-t border-white/10 pt-5">
          <p class="text-bright-blue-400 text-[10px] font-bold tracking-[.14em] uppercase">
            What happens next
          </p>
          <div class="mt-4 grid gap-4">
            <div v-for="step in nextSteps" :key="step.title" class="flex gap-3">
              <span
                class="bg-bright-blue-400/18 text-bright-blue-400 ring-bright-blue-400/20 grid size-8 shrink-0 place-items-center rounded-md ring-1"
              >
                <UIcon :name="step.icon" class="size-4" />
              </span>
              <span class="grid gap-0.5 pt-0.5">
                <b class="text-[12px] text-white">{{ step.title }}</b>
                <small class="text-oslo-gray-300 text-[11px] leading-5">{{ step.text }}</small>
              </span>
            </div>
          </div>
          <div
            class="border-bright-blue-400/40 bg-bright-blue-400/10 mt-6 flex items-center gap-3 rounded-lg border px-4 py-3"
          >
            <span class="bg-bright-blue-400 ring-bright-blue-400/10 size-2 rounded-full ring-4" />
            <span class="grid gap-0.5">
              <b class="text-bright-blue-100 text-[10px]"
                >A thoughtful response, not an automated handoff.</b
              >
              <small class="text-bright-blue-100/60 text-[9px]"
                >Expect to hear from our team within one business day.</small
              >
            </span>
          </div>
        </div>
      </div>
      <SpotlightCard
        spotlight-color="rgb(32 178 255 / 0.2)"
        class="border-bright-blue-400/25 bg-matisse-900/55 relative rounded-xl border p-4 backdrop-blur sm:p-8"
      >
        <div
          v-if="submitted"
          class="border-bright-blue-400/30 bg-bright-blue-400/8 relative grid min-h-80 place-content-center justify-items-center gap-4 rounded-lg border p-6 text-center"
        >
          <UIcon
            name="i-lucide-check"
            class="bg-bright-blue-400 text-matisse-950 ring-bright-blue-300/30 size-14 rounded-full p-3 shadow-[0_0_28px_rgb(0_149_255/0.35)] ring-4"
          />
          <h3 class="text-xl font-bold">Thank you. We're on it.</h3>
          <p class="text-oslo-gray-200 max-w-75">
            {{ copy.successMessage }}
          </p>
          <UButton
            variant="outline"
            color="neutral"
            class="border-bright-blue-300/45 bg-matisse-950/50 hover:bg-matisse-950/75 text-white"
            @click="submitted = false"
          >
            Send another inquiry
          </UButton>
        </div>
        <UForm
          v-else
          :state="formState"
          :validate="validate"
          :disabled="isSubmitting"
          class="relative grid gap-3"
          @submit="onSubmit"
          @error="onError"
        >
          <div class="mb-5 grid gap-1 sm:flex sm:items-center sm:justify-between">
            <h3 class="text-lg font-bold">{{ copy.formTitle }}</h3>
            <span class="text-bright-blue-400 text-[9px]">Usually replies in under 4 hours</span>
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            <UFormField label="First name" name="firstName" :ui="formFieldUi" class="text-[11px]">
              <UInput
                v-model="formState.firstName"
                placeholder="Alex"
                variant="none"
                :ui="darkControlUi"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Last name" name="lastName" :ui="formFieldUi" class="text-[11px]">
              <UInput
                v-model="formState.lastName"
                placeholder="Morgan"
                variant="none"
                :ui="darkControlUi"
                class="w-full"
              />
            </UFormField>
          </div>
          <UFormField label="Work email" name="email" :ui="formFieldUi" class="text-[11px]">
            <UInput
              v-model="formState.email"
              type="email"
              placeholder="alex@company.com"
              variant="none"
              :ui="darkControlUi"
              class="w-full"
            />
          </UFormField>
          <UFormField
            :label="copy.serviceLabel"
            name="service"
            :ui="formFieldUi"
            class="text-[11px]"
          >
            <USelect
              v-model="formState.service"
              :items="serviceOptions"
              placeholder="Select a service"
              variant="none"
              :ui="darkSelectUi"
              class="w-full"
            />
          </UFormField>
          <UFormField
            :label="copy.messageLabel"
            name="message"
            :ui="formFieldUi"
            class="text-[11px]"
          >
            <UTextarea
              v-model="formState.message"
              :rows="3"
              :placeholder="copy.messagePlaceholder"
              variant="none"
              :ui="darkControlUi"
              class="w-full"
            />
          </UFormField>
          <p v-if="submissionError" class="text-bright-blue-300 text-[11px]" role="alert">
            {{ submissionError }}
          </p>
          <UButton
            type="submit"
            block
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            :loading="isSubmitting"
            class="bg-bright-blue-500 text-matisse-950 hover:bg-bright-blue-400 mt-4 font-semibold"
          >
            {{ copy.submitLabel }}
          </UButton>
        </UForm>
      </SpotlightCard>
    </div>
  </section>
</template>

<style scoped>
:deep(input:-webkit-autofill),
:deep(input:-webkit-autofill:hover),
:deep(input:-webkit-autofill:focus),
:deep(input:autofill) {
  -webkit-text-fill-color: var(--color-oslo-gray-50);
  caret-color: var(--color-oslo-gray-50);
  box-shadow: 0 0 0 1000px var(--color-matisse-950) inset;
  -webkit-box-shadow: 0 0 0 1000px var(--color-matisse-950) inset;
}
</style>
