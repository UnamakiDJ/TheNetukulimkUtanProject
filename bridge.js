// bridge.js
// Simple Mi'kmaw <-> English "Two-Eyed" bridge for the Language page

// Small starter lexicon – expand this over time.
const LEXICON = [
  {
    key: "amu",
    english: "bee",
    sfo: "amu",
    lo: "amu",
    context: "Bee as a pollinator, medicine helper, and kin in the ecosystem.",
    twoEyed:
      "Relationally, 'amu' is a small relative whose work feeds berries and medicines. Analytically, bees are key pollinators in agriculture and biodiversity."
  },
  {
    key: "amu_jij",
    english: "little bee / baby bee",
    sfo: "amuji'j",
    lo: "amuji'j",
    context: "Diminutive form of 'amu' built with -ji'j (little, child).",
    twoEyed:
      "Shows how Mi’kmaw uses -ji'j to mark smallness or child-form, not just size but affection and relationship."
  },
  {
    key: "tpuk",
    english: "late last night",
    sfo: "tpuk",
    lo: "tpuk",
    context: "Refers to the time late last night, close to midnight or after.",
    twoEyed:
      "Connects time to narrative: when you say 'tpuk', you place the story in a precise part of the night, not just clock time."
  },
  {
    key: "awnasiey",
    english: "I am nervous",
    sfo: "awnasiey",
    lo: "awnasiey",
    context: "Describes a feeling state inside a person.",
    twoEyed:
      "Names emotion as a living state, not just a clinical label. In Western terms, it might be linked to anxiety; in L’nuk terms, it might call for support, grounding, or ceremony."
  },
  {
    key: "netukulimk",
    english: "Netukulimk (living in balance with the land)",
    sfo: "Netukulimk",
    lo: "Netukulimk",
    context:
      "A practice and principle: taking from the land only what you need, in ways that ensure land, waters, and beings continue to thrive.",
    twoEyed:
      "In Relational Tongue, Netukulimk is law, ethics, and spirituality. In Power Tongue, it overlaps with sustainability, conservation, and ecological management."
  },
  {
    key: "msit_nokmaq",
    english: "Msit No'kmaq (all my relations)",
    sfo: "Msit No'kmaq",
    lo: "Msit No'kmaq",
    context:
      "Statement that all beings are related: humans, animals, plants, waters, winds, ancestors, future generations.",
    twoEyed:
      "Challenges Western individualism. In science language, it echoes ecosystems and interdependence; in L’nuk language, it is a lived prayer."
  }
];

// Find entry by Mi'kmaw spelling or English gloss
function findEntry(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  let entry =
    LEXICON.find(e => (e.sfo || "").toLowerCase() === q) ||
    LEXICON.find(e => (e.lo || "").toLowerCase() === q) ||
    LEXICON.find(e => (e.english || "").toLowerCase() === q);

  if (!entry) {
    entry = LEXICON.find(e =>
      (e.english || "").toLowerCase().includes(q)
    );
  }

  return entry || null;
}

function renderResult(entry) {
  const container = document.getElementById("bridge-results");
  if (!container) return;

  if (!entry) {
    container.innerHTML =
      "<p>No match yet in this small prototype basket of words. Try another form or gloss.</p>";
    return;
  }

  const sfo = entry.sfo || "–";
  const lo = entry.lo || "–";

  container.innerHTML = `
    <div class="translator-result-card">
      <div class="result-label">English:</div>
      <div>${entry.english}</div>

      <div class="result-label">Mi’kmaw (S/F.O):</div>
      <div>${sfo}</div>

      <div class="result-label">Mi’gmaq (Listuguj):</div>
      <div>${lo}</div>

      <div class="result-label">Context:</div>
      <div>${entry.context}</div>

      <div class="result-label">Two-Eyed Seeing note:</div>
      <div>${entry.twoEyed}</div>
    </div>
  `;
}

function setupBridge() {
  const input = document.getElementById("bridge-input");
  const button = document.getElementById("bridge-button");
  const results = document.getElementById("bridge-results");

  if (!input || !button || !results) return;

  button.addEventListener("click", () => {
    const q = input.value;
    const entry = findEntry(q);
    renderResult(entry);
  });

  input.addEventListener("keydown", ev => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      const q = input.value;
      const entry = findEntry(q);
      renderResult(entry);
    }
  });
}

document.addEventListener("DOMContentLoaded", setupBridge);
