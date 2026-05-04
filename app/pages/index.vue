<script setup lang="ts">
const candidats = [
  {
    nom: "Édouard Philippe",
    parti: "Horizons",
    partiIcone: "i-lucide-compass",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Edouard_Philippe_en_2025.png/500px-Edouard_Philippe_en_2025.png",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre du Manifeste d'Horizons, avec principaux axes programmatiques, sources et positions publiques.",
    to: "/candidats/edouard-philippe",
  },
  {
    nom: "David Lisnard",
    parti: "Nouvelle Énergie",
    partiIcone: "i-lucide-bolt",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/David_Lisnard_-_2013.jpg/500px-David_Lisnard_-_2013.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de David Lisnard et de Nouvelle Énergie, avec sources et état des procédures.",
    to: "/candidats/david-lisnard",
  },
  {
    nom: "Gabriel Attal",
    parti: "Renaissance",
    partiIcone: "i-lucide-sun",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel%20Attal%202025%20%28cropped%29.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Gabriel Attal et de Renaissance, avec sources et état des procédures.",
    to: "/candidats/gabriel-attal",
  },
  {
    nom: "Jean-Luc Mélenchon",
    parti: "La France insoumise",
    partiIcone: "i-lucide-megaphone",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Luc%20M%C3%A9lenchon%20%28Place%20au%20Peuple%29%20001.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Jean-Luc Mélenchon et de La France insoumise, avec sources et état des procédures.",
    to: "/candidats/jean-luc-melenchon",
  },
];

function melangerCandidats<T>(liste: T[]): T[] {
  const copie = [...liste];

  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const valeurI = copie[i]!;
    copie[i] = copie[j]!;
    copie[j] = valeurI;
  }

  return copie;
}

const candidatsAleatoires = useState("candidats-aleatoires", () =>
  melangerCandidats(candidats),
);

useSeoMeta({
  title: "Présidentielle française 2027 : candidats et programmes",
  description:
    "Comparez les candidats à la présidentielle française et consultez des synthèses neutres de leurs programmes, sources et procédures.",
});

function remelangerCandidats() {
  candidatsAleatoires.value = melangerCandidats(candidats);
}
</script>

<template>
  <UContainer class="py-12 space-y-8">
    <UCard>
      <template #header>
        <div class="space-y-3">
          <UBadge
            color="primary"
            variant="soft"
            class="bg-red-500 text-white hover:bg-red-600"
          >
            Présidentielle française
          </UBadge>
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
            Candidats et programmes
          </h1>
          <p class="text-sm text-muted">
            Cette application présente les candidats à la future élection
            présidentielle et synthétise leurs positions de manière claire, en
            français.
          </p>
        </div>
      </template>

      <UAlert
        color="info"
        variant="soft"
        icon="i-lucide-triangle-alert"
        description=""
      >
        <template #description>
          Votez pour un candidat, pour le meilleur et pour le pire, vous serez
          déçu quoi qu'il arrive 😎<br />Cliquez sur la fiche d'un candidat pour
          voir son programme (ou ce qui s'en approche), les procédures et
          potentielles condamnations.
        </template>
      </UAlert>

      <div class="mt-4">
        <UButton to="/pour-qui-voter" icon="i-lucide-compass" variant="outline">
          Voir la page "Pour qui voter ?"
        </UButton>
      </div>
    </UCard>

    <section class="space-y-4">
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-semibold">Liste des candidats</h2>
          <UButton
            size="xs"
            variant="subtle"
            icon="i-lucide-shuffle"
            class="bg-red-500 text-white hover:bg-red-600"
            @click="remelangerCandidats"
          >
            Mélanger
          </UButton>
        </div>
        <UBadge color="neutral" variant="outline">
          {{ candidatsAleatoires.length }} candidat{{
            candidatsAleatoires.length > 1 ? "s" : ""
          }}
        </UBadge>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="candidat in candidatsAleatoires"
          :key="candidat.to"
          :ui="{ body: 'space-y-4' }"
        >
          <div class="space-y-2">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <UAvatar :src="candidat.photo" :alt="candidat.nom" size="lg" />
                <h3 class="text-lg font-semibold">
                  {{ candidat.nom }}
                </h3>
              </div>
              <UBadge color="neutral" variant="subtle">
                <UIcon :name="candidat.partiIcone" class="mr-1" />
                {{ candidat.parti }}
              </UBadge>
            </div>
            <p class="text-sm text-muted">
              {{ candidat.resume }}
            </p>
          </div>

          <div class="flex items-center justify-between gap-3">
            <UButton
              :to="candidat.to"
              class="bg-blue-900 text-white hover:bg-blue-800"
              trailing-icon="i-lucide-arrow-right"
            >
              Ouvrir la fiche
            </UButton>
          </div>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>
