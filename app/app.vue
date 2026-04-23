<template>
  <UApp>
    <div class="min-h-screen bg-gray-100 flex flex-col">
      <NuxtRouteAnnouncer />
      <main class="flex-1">
        <NuxtPage />
      </main>
      <footer
        class="border-t border-gray-200 px-4 py-4 text-center text-sm text-muted"
      >
        <NuxtLink to="/a-propos">A propos</NuxtLink>
        -
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        - La politique c'est chiant mais c'est important
      </footer>
    </div>
  </UApp>
</template>
