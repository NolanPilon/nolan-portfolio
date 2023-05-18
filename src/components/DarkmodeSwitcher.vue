<script setup>
import { useColorMode, useCycleList } from '@vueuse/core';
import { watchEffect } from 'vue-demi';
import DarkmodeAuto from '../icons/DarkmodeAuto.vue';
import DarkmodeDark from '../icons/DarkmodeDark.vue';
import DarkmodeLight from '../icons/DarkmodeLight.vue';
import DarkmodeCoffee from '../icons/DarkmodeCoffee.vue';

const mode = useColorMode({
  emitAuto: true,
  modes: {
    coffee: 'coffee',
  }
})

const { state, next } = useCycleList(['coffee', 'dark', 'light', 'auto'], { initialValue: mode })

watchEffect(() => mode.value = state.value)
</script>

<template>
    <button @click="next()" class="hover:brightness-50 transition-all duration-300" aria-label="darkmode switcher">
        <DarkmodeAuto v-if="mode=='auto'" class="h-6 w-6" />
        <DarkmodeDark v-else-if="mode=='dark'" class="h-6 w-6" />
        <DarkmodeLight v-else-if="mode=='light'" class="h-6 w-6" />
        <DarkmodeCoffee v-else-if="mode=='coffee'" class="h-6 w-6" />
    </button>
</template>