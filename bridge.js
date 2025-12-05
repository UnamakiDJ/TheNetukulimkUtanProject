import { LNU_LEXICON } from './lexicon.js';

function lookupLocalWord(word) {
  if (!word) return null;
  const target = word.trim().toLowerCase();
  if (!target) return null;
  return (
    LNU_LEXICON.find(
      (entry) => entry.surface?.toLowerCase() === target || entry.lemma?.toLowerCase() === target
    ) || null
  );
}

function explainWord(word) {
  const entry = lookupLocalWord(word);
  if (entry) {
    return {
      from: 'lexicon',
      word: entry.surface,
      gloss: entry.gloss,
      pos: entry.pos,
      animacy: entry.animacy,
      root: entry.root,
      morphology: entry.morphology,
      examples: entry.examples,
      worldview_notes: entry.worldview_notes,
      needsReview: entry.needsReview,
    };
  }

  return {
    from: 'unknown',
    word,
    message: 'Not in local lexicon yet. Ask a fluent speaker or elder and add it to lexicon.js.',
  };
}

function generateConceptCandidates(concept, purpose = '') {
  const text = `${concept || ''} ${purpose || ''}`.toLowerCase();
  const candidates = [];

  if (text.includes('refrigerator') || text.includes('keeps food cold') || text.includes('cold')) {
    candidates.push({
      word: 'Mesentaqtekekim',
      breakdown: [
        { piece: 'mesen-', gloss: 'keep / maintain' },
        { piece: 'taq-', gloss: 'inside / container-like space' },
        { piece: 'tekek', gloss: 'it is cold' },
        { piece: '-im', gloss: 'instrument / thing that does this' },
      ],
      explanation:
        'A prototype for “the thing that keeps the inside cold.” Aligns with the purpose of a refrigerator without claiming to be an established term.',
      caution: 'Prototype only – MUST be checked with fluent speakers / elders.',
    });
  } else {
    candidates.push({
      word: 'Apoqnmatultimik',
      breakdown: [
        { piece: 'apoqnmatulti-', gloss: 'to support / help / make easier' },
        { piece: '-m', gloss: 'instrument / tool (pattern)' },
        { piece: '-ik', gloss: 'nominal ending (pattern)' },
      ],
      explanation:
        'Pattern-only prototype suggesting “a helper tool.” Adapt pieces to fit the specific concept with fluent speakers.',
      caution: 'Prototype only – MUST be checked with fluent speakers / elders.',
    });
  }

  return candidates;
}

function renderMorphology(list) {
  if (!list || list.length === 0) return '<p class="muted">No breakdown provided.</p>';
  return `
    <ul class="morphology-list">
      ${list
        .map(
          (m) => `
            <li>
              <span class="morph-piece">${m.piece}</span>
              <span class="morph-gloss">${m.gloss || ''}</span>
            </li>
          `
        )
        .join('')}
    </ul>
  `;
}

function renderExamples(examples) {
  if (!examples || examples.length === 0) return '<p class="muted">No examples yet.</p>';
  return `
    <ul class="example-list">
      ${examples
        .map(
          (ex) => `
            <li>
              <span class="example-mikmaq">${ex.mikmaq}</span>
              <span class="example-english">${ex.english}</span>
            </li>
          `
        )
        .join('')}
    </ul>
  `;
}

function renderNotes(notes) {
  if (!notes || notes.length === 0) return '<p class="muted">No worldview notes yet.</p>';
  return `
    <ul class="notes-list">
      ${notes.map((n) => `<li>${n}</li>`).join('')}
    </ul>
  `;
}

function renderWordCard(result) {
  if (result.from === 'unknown') {
    return `
      <article class="result-card unknown-card">
        <h3>${result.word || 'Unknown word'}</h3>
        <p>${result.message}</p>
        <p class="caution">Always ask fluent speakers or Elders before using or publishing.</p>
      </article>
    `;
  }

  const reviewTag = result.needsReview
    ? '<span class="badge badge-warn">Needs elder review</span>'
    : '<span class="badge badge-trusted">Community sourced</span>';

  return `
    <article class="result-card lexicon-card">
      <div class="card-header">
        <h3>${result.word}</h3>
        ${reviewTag}
      </div>
      <p class="gloss">${result.gloss || ''}</p>
      <p class="pos-animacy">${result.pos || ''} ${result.animacy ? '• ' + result.animacy : ''}</p>
      <h4>Morphology</h4>
      ${renderMorphology(result.morphology)}
      <h4>Examples</h4>
      ${renderExamples(result.examples)}
      <h4>Worldview notes</h4>
      ${renderNotes(result.worldview_notes)}
    </article>
  `;
}

function renderConceptCandidates(concept, candidates) {
  return `
    <article class="result-card concept-card">
      <div class="card-header">
        <h3>${concept}</h3>
        <span class="badge badge-concept">Concept exploration</span>
      </div>
      <p class="gloss">Prototype candidates – verify with Elders before using.</p>
      ${candidates
        .map(
          (cand) => `
            <div class="candidate">
              <div class="candidate-word">${cand.word}</div>
              <div class="candidate-breakdown">${cand.breakdown
                .map((b) => `<span class="morph-piece">${b.piece}</span> ${b.gloss}`)
                .join(' • ')}</div>
              <p class="candidate-explanation">${cand.explanation}</p>
              <p class="caution">${cand.caution}</p>
            </div>
          `
        )
        .join('')}
    </article>
  `;
}

function renderResults(container, content) {
  container.innerHTML = content;
}

function handleExplain() {
  const mode = document.getElementById('mode-select').value;
  const mainInput = document.getElementById('main-input').value.trim();
  const purpose = document.getElementById('purpose-input').value.trim();
  const results = document.getElementById('results');

  if (!mainInput) {
    renderResults(results, '<p class="muted">Please enter a word or concept.</p>');
    return;
  }

  if (mode === 'mikmaq') {
    const explanation = explainWord(mainInput);
    renderResults(results, renderWordCard(explanation));
  } else {
    const candidates = generateConceptCandidates(mainInput, purpose);
    renderResults(results, renderConceptCandidates(mainInput, candidates));
  }
}

function wireUI() {
  const button = document.getElementById('explain-button');
  const input = document.getElementById('main-input');
  button.addEventListener('click', handleExplain);
  input.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      handleExplain();
    }
  });
}

wireUI();

export { lookupLocalWord, explainWord, generateConceptCandidates };
