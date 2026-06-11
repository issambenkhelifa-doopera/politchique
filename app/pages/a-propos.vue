<script setup lang="ts">
useSeoMeta({
  title: "A propos | Presidentielle francaise 2027",
  description:
    "Informations de transparence : impartialite editoriale, donnees, hebergement et outils utilises.",
});
</script>

<template>
  <UContainer class="py-10 space-y-6">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
            A propos
          </h1>
          <UButton
            to="/"
            icon="i-lucide-home"
            class="bg-blue-900 text-white hover:bg-blue-800"
          >
            Accueil
          </UButton>
        </div>
      </template>

      <p class="text-sm text-muted">
        Cette page presente les principes de fonctionnement et de transparence
        du site.
      </p>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Protection des donnees</h2>
      </template>
      <p class="text-sm">
        Aucune donnee personnelle nominative n'est conservee par le quiz de
        proximite. Les reponses sont calculees localement dans le navigateur.
      </p>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Impartialite editoriale</h2>
      </template>
      <p class="text-sm">
        Le but du site est de rassembler les programmes des candidats et de les
        comparer. Et au passage de voir les casseroles des candidats.
      </p>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">A propos de moi</h2>
      </template>
      <p class="text-sm">
        Je m'appelle Maxime, je ne m'estime pas trop politisé même j'ai
        forcément des positions. L'origine de ce site est le suivant : J'en ai
        marre de voir des gens au pouvoir avec un casier judiciaire long comme
        le bras décider du sort de 70 millions de personnes (alors qu'on a exigé
        à ma mère, ancienne femme de ménage d'avoir un casier vierge pour faire
        son travail)
      </p>
    </UCard>
  </UContainer>
</template>
