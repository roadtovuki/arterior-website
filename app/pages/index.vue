<template>
  <h1>{{ $t('homePageTitle') }}</h1>
  <NuxtLink :to="$localePath('about')">{{ $t('aboutPageLink') }}</NuxtLink>
</template>
