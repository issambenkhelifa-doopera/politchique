<script setup lang="ts">
type Theme =
  | "economie"
  | "immigration"
  | "ecologie"
  | "institutions"
  | "europe"
  | "securite"
  | "social";

type Candidate = {
  id: string;
  name: string;
  party: string;
  photo: string;
};

type Question = {
  id: string;
  theme: Theme;
  text: string;
  positions: Record<string, number>;
  sources: Record<string, { label: string; url: string }>;
};

const themes: Array<{ id: Theme; label: string }> = [
  { id: "economie", label: "Économie / fiscalité" },
  { id: "immigration", label: "Immigration / asile" },
  { id: "ecologie", label: "Écologie / énergie" },
  { id: "institutions", label: "Institutions" },
  { id: "europe", label: "Europe" },
  { id: "securite", label: "Sécurité / justice" },
  { id: "social", label: "Social / travail" },
];

const candidateIds = [
  "edouard-philippe",
  "david-lisnard",
  "gabriel-attal",
  "jerome-guedj",
  "jean-luc-melenchon",
  "marine-le-pen",
  "bruno-retailleau",
  "xavier-bertrand",
  "nicolas-dupont-aignan",
  "florian-philippot",
  "francois-asselineau",
  "nathalie-arthaud",
  "delphine-batho",
  "clementine-autain",
  "fabien-roussel",
  "yannick-jadot",
  "sandrine-rousseau",
  "dominique-de-villepin",
  "eric-zemmour",
  "karim-bouamrane",
] as const;

const candidateSources: Record<
  string,
  { label: string; url: string }
> = {
  "edouard-philippe": {
    label: "Horizons — Le Manifeste",
    url: "https://horizonsleparti.fr/le-manifeste/",
  },
  "david-lisnard": {
    label: "Nouvelle Énergie — Programme",
    url: "https://www.nouvelleenergie.fr/",
  },
  "gabriel-attal": {
    label: "Renaissance — Site officiel",
    url: "https://www.parti-renaissance.fr/",
  },
  "jerome-guedj": {
    label: "Parti socialiste — Projet",
    url: "https://ressources-militantes.parti-socialiste.fr/assets/pdf/PROJET_PS_V21avril-2.pdf",
  },
  "jean-luc-melenchon": {
    label: "LFI — Avenir en commun 2025",
    url: "https://melenchon2027.fr/programme2025/livre/",
  },
  "marine-le-pen": {
    label: "RN — 22 mesures",
    url: "https://rassemblementnational.fr/22-mesures",
  },
  "bruno-retailleau": {
    label: "Les Républicains — Nos propositions",
    url: "https://republicains.fr/qrtravail/",
  },
  "xavier-bertrand": {
    label: "Nous France — La vision",
    url: "https://www.nousfrance.fr/vision/",
  },
  "nicolas-dupont-aignan": {
    label: "Debout la France — Le projet",
    url: "https://www.debout-la-france.fr/notre-projet/",
  },
  "florian-philippot": {
    label: "Les Patriotes — Grandes orientations",
    url: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf",
  },
  "francois-asselineau": {
    label: "UPR — Programme 2022",
    url: "https://upr.fr/actualites/programme-presidentiel-2022",
  },
  "nathalie-arthaud": {
    label: "Lutte ouvrière — Portail",
    url: "https://www.lutte-ouvriere.org/",
  },
  "delphine-batho": {
    label: "Génération Écologie — Notre projet",
    url: "https://www.generationecologie.fr/a-propos/generation-ecologie/notre-projet/",
  },
  "clementine-autain": {
    label: "Clémentine Autain — Mon manifeste",
    url: "https://clementine-autain.fr/mon-manifeste/",
  },
  "fabien-roussel": {
    label: "Fabien Roussel — La France des Jours heureux",
    url: "https://www.fabienroussel2022.fr/le_programme",
  },
  "yannick-jadot": {
    label: "Yannick Jadot — Programme présidentiel 2022",
    url: "https://assets.nationbuilder.com/themes/6181b6eb4445ea720389b314/attachments/original/1643803625/programme_presidentiel_yannick_jadot.pdf?1643803625=",
  },
  "sandrine-rousseau": {
    label: "Sandrine Rousseau — Vivantes",
    url: "https://sandrinerousseau.fr/",
  },
  "dominique-de-villepin": {
    label: "La France humaniste — Site officiel",
    url: "https://lafrancehumaniste.fr/",
  },
  "eric-zemmour": {
    label: "Éric Zemmour — Programme 2022",
    url: "https://programme.ericzemmour.fr/",
  },
  "karim-bouamrane": {
    label: "Karim Bouamrane — La France Humaine et Forte",
    url: "https://www.lafrancehumaineetforte.fr/",
  },
};

function buildPositions(
  values: Partial<Record<(typeof candidateIds)[number], number>>,
): Record<string, number> {
  return Object.fromEntries(
    candidateIds.map((id) => [id, values[id] ?? 0]),
  );
}

const candidates: Candidate[] = [
  {
    id: "edouard-philippe",
    name: "Édouard Philippe",
    party: "Horizons",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Edouard_Philippe_en_2025.png/500px-Edouard_Philippe_en_2025.png",
  },
  {
    id: "david-lisnard",
    name: "David Lisnard",
    party: "Nouvelle Énergie",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/David_Lisnard_-_2013.jpg/500px-David_Lisnard_-_2013.jpg",
  },
  {
    id: "gabriel-attal",
    name: "Gabriel Attal",
    party: "Renaissance",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel%20Attal%202025%20%28cropped%29.jpg",
  },
  {
    id: "jerome-guedj",
    name: "Jérôme Guedj",
    party: "Parti socialiste",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/J%C3%A9r%C3%B4me%20Guedj%202010%20%28cropped%29.jpg",
  },
  {
    id: "jean-luc-melenchon",
    name: "Jean-Luc Mélenchon",
    party: "La France insoumise",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Luc%20M%C3%A9lenchon%20%28Place%20au%20Peuple%29%20001.jpg",
  },
  {
    id: "marine-le-pen",
    name: "Marine Le Pen",
    party: "Rassemblement National",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Marine_Le_Pen_2025_%28cropped%29.jpg",
  },
  {
    id: "bruno-retailleau",
    name: "Bruno Retailleau",
    party: "Les Républicains",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Bruno_Retailleau.png",
  },
  {
    id: "xavier-bertrand",
    name: "Xavier Bertrand",
    party: "Nous France",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Xavier%20Bertrand%20-%202025%20%28cropped%29.jpg",
  },
  {
    id: "nicolas-dupont-aignan",
    name: "Nicolas Dupont-Aignan",
    party: "Debout la France",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nicolas_Dupont-Aignan%2C_homme_politique_fran%C3%A7ais_%28cropped%29.jpg",
  },
  {
    id: "florian-philippot",
    name: "Florian Philippot",
    party: "Les Patriotes",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Florian_Philippot_%28A%29_%28cropped%29.JPG",
  },
  {
    id: "francois-asselineau",
    name: "François Asselineau",
    party: "Union populaire républicaine",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20ASSELINEAU.jpg",
  },
  {
    id: "nathalie-arthaud",
    name: "Nathalie Arthaud",
    party: "Lutte ouvrière",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nathalie%20Arthaud%20%28LO%29%2019-05-2024.jpg",
  },
  {
    id: "delphine-batho",
    name: "Delphine Batho",
    party: "Génération Écologie",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Delphine%20Batho%20%28cropped%29.png",
  },
  {
    id: "clementine-autain",
    name: "Clémentine Autain",
    party: "L'APRÈS",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cl%C3%A9mentine%20Autain%2C%202017%20%28cropped%29.jpg",
  },
  {
    id: "fabien-roussel",
    name: "Fabien Roussel",
    party: "Parti communiste français",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Roussel%20Fabien%201.jpg",
  },
  {
    id: "yannick-jadot",
    name: "Yannick Jadot",
    party: "Les Écologistes",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/20210819_jadot.yannick_5725.jpg",
  },
  {
    id: "sandrine-rousseau",
    name: "Sandrine Rousseau",
    party: "Les Écologistes",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sandrine%20Rousseau%2020210819%20%28cropped%29.jpg",
  },
  {
    id: "dominique-de-villepin",
    name: "Dominique de Villepin",
    party: "La France humaniste",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dominique%20de%20Villepin%20en%202026.jpg",
  },
  {
    id: "eric-zemmour",
    name: "Éric Zemmour",
    party: "Reconquête",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89ric%20Zemmour.jpg",
  },
  {
    id: "karim-bouamrane",
    name: "Karim Bouamrane",
    party: "La France Humaine et Forte",
    photo: "https://www.lafrancehumaineetforte.fr/kb_bleu_hero.jpeg",
  },
];

const questions: Question[] = [
  {
    id: "q1",
    theme: "economie",
    text: "Réduire la dette et la dépense publique doit primer sur de nouvelles dépenses sociales.",
    positions: buildPositions({
      "bruno-retailleau": 2,
      "edouard-philippe": 2,
      "gabriel-attal": 1,
      "david-lisnard": 1,
      "marine-le-pen": 1,
      "xavier-bertrand": 1,
      "nicolas-dupont-aignan": 1,
      "jerome-guedj": -1,
      "delphine-batho": -1,
      "jean-luc-melenchon": -2,
      "nathalie-arthaud": -2,
      "fabien-roussel": -2,
      "yannick-jadot": -2,
      "sandrine-rousseau": -2,
      "dominique-de-villepin": 1,
      "eric-zemmour": 1,
      "karim-bouamrane": 1,
    }),
    sources: {},
  },
  {
    id: "q2",
    theme: "social",
    text: "Les salaires les plus bas (SMIC et minima) doivent être fortement revalorisés.",
    positions: buildPositions({
      "nathalie-arthaud": 2,
      "jean-luc-melenchon": 2,
      "francois-asselineau": 2,
      "nicolas-dupont-aignan": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": 1,
      "eric-zemmour": 1,
      "karim-bouamrane": 2,
      "jerome-guedj": 1,
      "bruno-retailleau": 1,
      "marine-le-pen": 1,
      "xavier-bertrand": 1,
    }),
    sources: {},
  },
  {
    id: "q3",
    theme: "social",
    text: "La réforme des retraites à 64 ans doit être abrogée ou fortement assouplie.",
    positions: buildPositions({
      "nathalie-arthaud": 2,
      "jean-luc-melenchon": 2,
      "jerome-guedj": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": 0,
      "eric-zemmour": -2,
      "karim-bouamrane": 1,
      "delphine-batho": 1,
      "florian-philippot": 1,
      "francois-asselineau": 1,
      "gabriel-attal": -2,
      "edouard-philippe": -1,
      "bruno-retailleau": -2,
      "david-lisnard": -1,
    }),
    sources: {},
  },
  {
    id: "q4",
    theme: "immigration",
    text: "L'immigration doit être nettement plus restrictive (contrôles, conditions d'accès, regroupement familial).",
    positions: buildPositions({
      "marine-le-pen": 2,
      "bruno-retailleau": 2,
      "xavier-bertrand": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "david-lisnard": 1,
      "jean-luc-melenchon": -2,
      "fabien-roussel": -2,
      "yannick-jadot": -2,
      "sandrine-rousseau": -2,
      "dominique-de-villepin": 1,
      "eric-zemmour": 2,
      "karim-bouamrane": 1,
      "nathalie-arthaud": -1,
      "jerome-guedj": -1,
      "delphine-batho": -1,
    }),
    sources: {},
  },
  {
    id: "q5",
    theme: "securite",
    text: "Renforcer la sécurité, la justice et l'exécution des peines doit être une priorité absolue.",
    positions: buildPositions({
      "marine-le-pen": 2,
      "bruno-retailleau": 2,
      "xavier-bertrand": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "david-lisnard": 2,
      "edouard-philippe": 2,
      "gabriel-attal": 1,
      "francois-asselineau": 1,
      "jean-luc-melenchon": -1,
      "delphine-batho": -1,
      "nathalie-arthaud": -2,
      "fabien-roussel": -1,
      "yannick-jadot": -1,
      "sandrine-rousseau": -1,
      "dominique-de-villepin": 2,
      "eric-zemmour": 2,
      "karim-bouamrane": 2,
    }),
    sources: {},
  },
  {
    id: "q6",
    theme: "ecologie",
    text: "La priorité écologique doit être la sobriété et la décroissance plutôt que la croissance du PIB.",
    positions: buildPositions({
      "delphine-batho": 2,
      "jean-luc-melenchon": 1,
      "nathalie-arthaud": 1,
      "jerome-guedj": 1,
      "fabien-roussel": -1,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": -1,
      "eric-zemmour": -2,
      "karim-bouamrane": -1,
    }),
    sources: {},
  },
  {
    id: "q7",
    theme: "ecologie",
    text: "Le nucléaire doit rester au cœur de la stratégie énergétique française.",
    positions: buildPositions({
      "bruno-retailleau": 2,
      "marine-le-pen": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "fabien-roussel": 2,
      "edouard-philippe": 1,
      "gabriel-attal": 1,
      "david-lisnard": 1,
      "xavier-bertrand": 1,
      "delphine-batho": -1,
      "yannick-jadot": -2,
      "sandrine-rousseau": -2,
      "dominique-de-villepin": 1,
      "eric-zemmour": 2,
      "karim-bouamrane": 0,
      "jean-luc-melenchon": 0,
    }),
    sources: {},
  },
  {
    id: "q8",
    theme: "europe",
    text: "La France devrait sortir de l'Union européenne et/ou de l'euro (Frexit).",
    positions: buildPositions({
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "nicolas-dupont-aignan": 2,
      "marine-le-pen": 1,
      "jean-luc-melenchon": 1,
      "gabriel-attal": -2,
      "edouard-philippe": -2,
      "jerome-guedj": -2,
      "bruno-retailleau": -2,
      "xavier-bertrand": -1,
      "david-lisnard": -1,
      "delphine-batho": 0,
      "fabien-roussel": -1,
      "yannick-jadot": -1,
      "sandrine-rousseau": -1,
      "dominique-de-villepin": -2,
      "eric-zemmour": 0,
      "karim-bouamrane": -2,
    }),
    sources: {},
  },
  {
    id: "q9",
    theme: "europe",
    text: "L'intégration européenne doit être approfondie pour répondre aux crises (climat, sécurité, économie).",
    positions: buildPositions({
      "gabriel-attal": 2,
      "edouard-philippe": 2,
      "jerome-guedj": 2,
      "david-lisnard": 1,
      "delphine-batho": 1,
      "florian-philippot": -2,
      "francois-asselineau": -2,
      "nicolas-dupont-aignan": -2,
      "marine-le-pen": -2,
      "jean-luc-melenchon": -1,
      "bruno-retailleau": -1,
      "nathalie-arthaud": -1,
      "fabien-roussel": -1,
      "yannick-jadot": 1,
      "sandrine-rousseau": 1,
      "dominique-de-villepin": 1,
      "eric-zemmour": -2,
      "karim-bouamrane": 1,
    }),
    sources: {},
  },
  {
    id: "q10",
    theme: "institutions",
    text: "Le référendum d'initiative citoyenne (RIC) doit être inscrit dans la Constitution.",
    positions: buildPositions({
      "jean-luc-melenchon": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": -1,
      "eric-zemmour": -2,
      "karim-bouamrane": 0,
      "marine-le-pen": 1,
      "delphine-batho": 1,
      "jerome-guedj": 1,
      "gabriel-attal": -1,
    }),
    sources: {},
  },
  {
    id: "q11",
    theme: "institutions",
    text: "Le régime présidentiel actuel (Ve République) doit être profondément remanié ou remplacé.",
    positions: buildPositions({
      "jean-luc-melenchon": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": 1,
      "eric-zemmour": -1,
      "karim-bouamrane": 0,
      "delphine-batho": 1,
      "jerome-guedj": 1,
      "nathalie-arthaud": 1,
      "nicolas-dupont-aignan": 1,
      "florian-philippot": 1,
      "francois-asselineau": 1,
      "gabriel-attal": -2,
      "bruno-retailleau": -1,
    }),
    sources: {},
  },
  {
    id: "q12",
    theme: "economie",
    text: "Les très grandes fortunes et les revenus du capital doivent être davantage taxés pour financer les services publics.",
    positions: buildPositions({
      "nathalie-arthaud": 2,
      "jean-luc-melenchon": 2,
      "jerome-guedj": 2,
      "delphine-batho": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": 0,
      "eric-zemmour": -2,
      "karim-bouamrane": 1,
      "francois-asselineau": 1,
      "edouard-philippe": -1,
      "bruno-retailleau": -1,
      "xavier-bertrand": -1,
      "gabriel-attal": 0,
      "marine-le-pen": 0,
    }),
    sources: {},
  },
];

const likertOptions = [
  { value: -2, label: "Pas du tout d'accord" },
  { value: -1, label: "Plutôt pas d'accord" },
  { value: 0, label: "Neutre / je ne sais pas" },
  { value: 1, label: "Plutôt d'accord" },
  { value: 2, label: "Tout à fait d'accord" },
];

const getSourceForCandidate = (
  question: Question,
  candidateId: string,
) =>
  question.sources[candidateId] ??
  candidateSources[candidateId] ?? {
    label: "Fiche candidat",
    url: `/candidats/${candidateId}`,
  };

const selectedPriorityThemes = ref<Theme[]>([]);
const answers = reactive<Record<string, number>>({});
const currentIndex = ref(0);
const hasCalculated = ref(false);

const currentQuestion = computed(
  () => questions[currentIndex.value] ?? questions[0]!,
);
const answeredCount = computed(
  () => questions.filter((q) => typeof answers[q.id] === "number").length,
);
const progress = computed(() => (answeredCount.value / questions.length) * 100);
const allAnswered = computed(() => answeredCount.value === questions.length);

const isPriorityThemeDisabled = (theme: Theme) =>
  selectedPriorityThemes.value.length >= 3 &&
  !selectedPriorityThemes.value.includes(theme);

const togglePriorityTheme = (theme: Theme) => {
  if (selectedPriorityThemes.value.includes(theme)) {
    selectedPriorityThemes.value = selectedPriorityThemes.value.filter(
      (t) => t !== theme,
    );
    return;
  }
  if (selectedPriorityThemes.value.length < 3) {
    selectedPriorityThemes.value.push(theme);
  }
};

const getWeight = (theme: Theme) =>
  selectedPriorityThemes.value.includes(theme) ? 1.5 : 1;

const getLabelForValue = (value: number) =>
  likertOptions.find((o) => o.value === value)?.label ?? "Neutre";

const results = computed(() => {
  const computedResults = candidates.map((candidate) => {
    let weightedDistanceSum = 0;
    let weightedMaxDistance = 0;

    const perQuestion = questions.map((question) => {
      const userValue = answers[question.id] ?? 0;
      const candidateValue = question.positions[candidate.id] ?? 0;
      const weight = getWeight(question.theme);
      const distance = Math.abs(userValue - candidateValue);

      weightedDistanceSum += distance * weight;
      weightedMaxDistance += 4 * weight;

      return {
        question,
        userValue,
        candidateValue,
        distance,
        source: getSourceForCandidate(question, candidate.id),
      };
    });

    const proximity =
      weightedMaxDistance === 0
        ? 0
        : Math.round((1 - weightedDistanceSum / weightedMaxDistance) * 100);

    const bestMatches = [...perQuestion]
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);
    const divergences = [...perQuestion]
      .sort((a, b) => b.distance - a.distance)
      .slice(0, 3);

    return {
      candidate,
      proximity,
      bestMatches,
      divergences,
    };
  });

  return computedResults.sort((a, b) => b.proximity - a.proximity);
});

const topMatches = computed(() => results.value.slice(0, 3));

const userMarkedThemes = computed(() => {
  const byTheme = themes
    .map((theme) => {
      const themeQuestions = questions.filter((q) => q.theme === theme.id);
      const avg =
        themeQuestions.reduce(
          (acc, q) => acc + Math.abs(answers[q.id] ?? 0),
          0,
        ) / themeQuestions.length;

      return { theme, avg };
    })
    .sort((a, b) => b.avg - a.avg);

  return byTheme.slice(0, 3);
});

const nextQuestion = () => {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value += 1;
  }
};

const previousQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const calculateResults = () => {
  if (!allAnswered.value) {
    return;
  }
  hasCalculated.value = true;
};

const restartQuiz = () => {
  for (const question of questions) {
    delete answers[question.id];
  }
  selectedPriorityThemes.value = [];
  currentIndex.value = 0;
  hasCalculated.value = false;
};

useSeoMeta({
  title: "Pour qui voter ? Quiz de proximité politique",
  description:
    "Quiz de proximité politique : comparez vos réponses aux positions publiques de 20 candidats, avec méthode transparente et sources.",
});
</script>

<template>
  <UContainer class="py-10 space-y-8">
    <UCard>
      <template #header>
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-3">
            <UBadge color="primary" variant="soft">Boussole électorale</UBadge>
            <UButton
              to="/"
              icon="i-lucide-home"
              class="bg-blue-900 text-white hover:bg-blue-800"
            >
              Accueil
            </UButton>
          </div>
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
            Pour qui voter ? (quiz de proximité)
          </h1>
          <p class="text-sm text-muted">
            Ce quiz mesure une proximité avec les positions publiques de
            {{ candidates.length }} candidats et ne donne pas de consigne de vote.
          </p>
        </div>
      </template>

      <UAlert
        color="info"
        variant="soft"
        icon="i-lucide-shield-alert"
        title="Neutralité et transparence"
        description="Résultat = proximité avec des positions publiques sourcées. Ce quiz n'est pas un sondage d'intentions de vote."
      />
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">
          Étape 1 — Choisis jusqu'à 3 thèmes prioritaires
        </h2>
      </template>

      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <label
          v-for="theme in themes"
          :key="theme.id"
          class="flex items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm"
        >
          <input
            type="checkbox"
            class="accent-red-600"
            :checked="selectedPriorityThemes.includes(theme.id)"
            :disabled="isPriorityThemeDisabled(theme.id)"
            @change="togglePriorityTheme(theme.id)"
          />
          <span>{{ theme.label }}</span>
        </label>
      </div>

      <p class="mt-3 text-xs text-muted">
        Thèmes prioritaires sélectionnés : {{ selectedPriorityThemes.length }}/3
        (pondéré ×1,5)
      </p>
    </UCard>

    <UCard>
      <template #header>
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-lg font-semibold">
              Étape 2 — Réponds aux questions
            </h2>
            <UBadge color="neutral" variant="outline">
              {{ currentIndex + 1 }} / {{ questions.length }}
            </UBadge>
          </div>
          <UProgress :model-value="progress" />
        </div>
      </template>

      <div class="space-y-4">
        <p class="font-medium">
          {{ currentQuestion.text }}
        </p>
        <div class="space-y-2">
          <label
            v-for="option in likertOptions"
            :key="option.value"
            class="flex cursor-pointer items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm"
          >
            <input
              v-model.number="answers[currentQuestion.id]"
              type="radio"
              class="accent-red-600"
              :name="currentQuestion.id"
              :value="option.value"
            />
            <span>{{ option.label }}</span>
          </label>
        </div>
      </div>

      <template #footer>
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex gap-2">
            <UButton
              icon="i-lucide-arrow-left"
              variant="outline"
              :disabled="currentIndex === 0"
              @click="previousQuestion"
            >
              Précédent
            </UButton>
            <UButton
              icon="i-lucide-arrow-right"
              trailing
              variant="outline"
              :disabled="currentIndex === questions.length - 1"
              @click="nextQuestion"
            >
              Suivant
            </UButton>
          </div>

          <UButton
            icon="i-lucide-calculator"
            class="bg-blue-900 text-white hover:bg-blue-800"
            :disabled="!allAnswered"
            @click="calculateResults"
          >
            Calculer mon résultat
          </UButton>
        </div>
      </template>
    </UCard>

    <UCard v-if="hasCalculated">
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <h2 class="text-lg font-semibold">Résultats (proximité)</h2>
          <UButton
            icon="i-lucide-rotate-ccw"
            variant="outline"
            @click="restartQuiz"
          >
            Recommencer
          </UButton>
        </div>
      </template>

      <div class="space-y-6">
        <div>
          <h3 class="mb-3 font-semibold">Top proximités</h3>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <UCard v-for="entry in topMatches" :key="entry.candidate.id">
              <div class="flex items-center gap-3">
                <UAvatar
                  :src="entry.candidate.photo"
                  :alt="entry.candidate.name"
                  size="lg"
                />
                <div>
                  <p class="font-semibold">{{ entry.candidate.name }}</p>
                  <p class="text-xs text-muted">{{ entry.candidate.party }}</p>
                </div>
              </div>
              <p class="mt-3 text-sm">
                Proximité estimée :
                <strong>{{ entry.proximity }}%</strong>
              </p>
              <UButton
                :to="`/candidats/${entry.candidate.id}`"
                size="xs"
                variant="outline"
                class="mt-3"
                trailing-icon="i-lucide-arrow-right"
              >
                Voir la fiche
              </UButton>
            </UCard>
          </div>
        </div>

        <div>
          <h3 class="mb-2 font-semibold">
            Thèmes où tes réponses sont les plus marquées
          </h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="entry in userMarkedThemes"
              :key="entry.theme.id"
              color="neutral"
              variant="subtle"
            >
              {{ entry.theme.label }}
            </UBadge>
          </div>
        </div>

        <div v-if="results[0]">
          <h3 class="mb-2 font-semibold">
            Pourquoi tu matches avec {{ results[0].candidate.name }}
          </h3>
          <ul class="list-disc space-y-2 pl-5 text-sm">
            <li v-for="item in results[0].bestMatches" :key="item.question.id">
              {{ item.question.text }} (toi:
              {{ getLabelForValue(item.userValue) }},
              {{ results[0].candidate.name }}:
              {{ getLabelForValue(item.candidateValue) }}) -
              <a
                :href="item.source.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                source
              </a>
            </li>
          </ul>
        </div>

        <div v-if="results[0]">
          <h3 class="mb-2 font-semibold">Points de divergence principaux</h3>
          <ul class="list-disc space-y-2 pl-5 text-sm">
            <li v-for="item in results[0].divergences" :key="item.question.id">
              {{ item.question.text }}
            </li>
          </ul>
        </div>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Méthode et transparence</h2>
      </template>
      <ul class="list-disc space-y-2 pl-5 text-sm">
        <li>
          Questions formulees de facon symetrique, sans injonction de vote.
        </li>
        <li>
          Score basé sur la distance entre ta réponse et la position candidate
          (-2 à +2), pour {{ candidates.length }} candidats.
        </li>
        <li>Pondération ×1,5 pour tes thèmes prioritaires (max 3).</li>
        <li>Chaque position renvoie vers une source ou la fiche candidat.</li>
        <li>
          Le calcul est local au navigateur : aucune donnée identifiante n'est
          demandée.
        </li>
      </ul>
      <template #footer>
        <div class="space-y-2 text-sm">
          <p>Cadre utile (France) :</p>
          <ul class="list-disc space-y-1 pl-5">
            <li>
              <a
                href="https://www.commission-des-sondages.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commission des sondages
              </a>
            </li>
            <li>
              <a
                href="https://www.elections.interieur.gouv.fr/comprendre-elections/comment-sont-encadrees-campagnes-electorales/grands-principes-encadrant-campagne-electorale"
                target="_blank"
                rel="noopener noreferrer"
              >
                Encadrement des campagnes electorales
              </a>
            </li>
            <li>
              <a
                href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNIL - RGPD
              </a>
            </li>
          </ul>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
