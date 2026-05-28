<template>
  <UApp>
    <div class="min-h-screen flex flex-col">
      <NuxtRouteAnnouncer />
      <main class="flex-1">
        <NuxtPage />
      </main>
      <footer class="px-4 py-6 text-center text-sm">
        <p
          class="mb-2 text-base tracking-widest uppercase font-extrabold opacity-90"
        >
          <span class="fr-cocarde" />
        </p>
        <p class="opacity-80">
          <NuxtLink to="/a-propos">À propos</NuxtLink>
          ·
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          · La politique c'est chiant mais c'est important
        </p>
      </footer>
    </div>
  </UApp>
</template>
