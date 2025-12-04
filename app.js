// app.js – wire LNU_DATA into the page with dynamic timeline & sections

function renderFigures() {
  const container = document.getElementById("figures-list");
  if (!container || !LNU_DATA.figures) return;

  Object.values(LNU_DATA.figures).forEach(fig => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${fig.name}</h3>
      <small>${fig.role} · ${fig.life_dates}</small>
      <p>${fig.bio}</p>
      <p><strong>Why they matter:</strong> ${fig.significance || ""}</p>
      ${
        fig.key_sources && fig.key_sources.length
          ? `<p><strong>Sources:</strong> ${fig.key_sources.join("; ")}</p>`
          : ""
      }
    `;

    container.appendChild(card);
  });
}

function renderWords() {
  const container = document.getElementById("words-list");
  if (!container || !LNU_DATA.words) return;

  Object.entries(LNU_DATA.words).forEach(([key, word]) => {
    const dialect = word.dialects.default || {};
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${word.english}</h3>
      <small>Key: ${key}</small>
      <p><span class="badge">S/F.O</span> ${dialect.sf_orthography || "—"}</p>
      <p><span class="badge">L.O</span> ${dialect.listuguj_orthography || "—"}</p>
      <p>${dialect.context || ""}</p>
      <p><strong>Two-Eyed Seeing:</strong> ${dialect.two_eyed_seeing || ""}</p>
    `;

    container.appendChild(card);
  });
}

// ---------- Timeline & filters ----------

function collectTimelineTags(events) {
  const tags = new Set();
  events.forEach(ev => {
    (ev.tags || []).forEach(t => tags.add(t));
  });
  return Array.from(tags).sort();
}

function populateFilters() {
  const eraSelect = document.getElementById("era-filter");
  const tagSelect = document.getElementById("tag-filter");
  if (!eraSelect || !tagSelect) return;

  (LNU_DATA.eras || []).forEach(era => {
    const opt = document.createElement("option");
    opt.value = era;
    opt.textContent = era;
    eraSelect.appendChild(opt);
  });

  const tags = collectTimelineTags(LNU_DATA.timeline_events || []);
  tags.forEach(tag => {
    const opt = document.createElement("option");
    opt.value = tag;
    opt.textContent = tag;
    tagSelect.appendChild(opt);
  });
}

function filterTimeline() {
  const eraSelect = document.getElementById("era-filter");
  const tagSelect = document.getElementById("tag-filter");
  const eraVal = eraSelect ? eraSelect.value : "all";
  const tagVal = tagSelect ? tagSelect.value : "all";

  const events = (LNU_DATA.timeline_events || []).filter(ev => {
    const eraMatch = eraVal === "all" || ev.era === eraVal;
    const tagMatch =
      tagVal === "all" ||
      (ev.tags && ev.tags.length && ev.tags.includes(tagVal));
    return eraMatch && tagMatch;
  });

  renderTimeline(events);
}

function renderTimeline(events) {
  const container = document.getElementById("timeline-list");
  if (!container) return;
  container.innerHTML = "";

  events.forEach(ev => {
    const item = document.createElement("article");
    item.className = "timeline-event";

    const years =
      ev.start === ev.end || !ev.end ? ev.start : `${ev.start}–${ev.end}`;

    item.innerHTML = `
      <h3>${ev.label}</h3>
      <div class="timeline-meta">
        <span class="badge">${years}</span>
        <span class="badge">${ev.era}</span>
        ${
          ev.region && ev.region.length
            ? `<span class="badge">${ev.region.join(" · ")}</span>`
            : ""
        }
        ${
          ev.tags && ev.tags.length
            ? ev.tags.map(t => `<span class="badge">${t}</span>`).join(" ")
            : ""
        }
      </div>
      <p><strong>Western lens:</strong> ${ev.western_lens_summary}</p>
      <p><strong>L’nuk lens:</strong> ${ev.lnuk_lens_summary}</p>
      <p><strong>Two-Eyed Seeing:</strong> ${ev.two_eyed_seeing}</p>
    `;

    container.appendChild(item);
  });

  if (!events.length) {
    const msg = document.createElement("p");
    msg.textContent = "No events match this filter yet.";
    container.appendChild(msg);
  }
}

// ---------- Kluskap + Science ----------

function renderKluskapLegends() {
  const container = document.getElementById("kluskap-list");
  if (!container || !LNU_DATA.legends) return;

  LNU_DATA.legends.forEach(legend => {
    const card = document.createElement("article");
    card.className = "card";

    const places = legend.places && legend.places.length
      ? `<p><span class="badge">Places</span> ${legend.places.join(" · ")}</p>`
      : "";

    const themes = legend.themes && legend.themes.length
      ? `<p>${legend.themes.map(t => `<span class="badge">${t}</span>`).join(" ")}</p>`
      : "";

    const science = (legend.science_links || [])
      .map(
        s => `
        <p>
          <strong>${s.field}:</strong> ${s.summary}
        </p>`
      )
      .join("");

    card.innerHTML = `
      <h3>${legend.title}</h3>
      ${places}
      ${themes}
      <p>${legend.summary}</p>
      <p><strong>Two-Eyed Seeing:</strong> ${legend.two_eyed_seeing}</p>
      ${science}
    `;

    container.appendChild(card);
  });
}

// ---------- Archaeology & Geology ----------

function renderArchaeology() {
  const container = document.getElementById("archaeology-list");
  if (!container || !LNU_DATA.archaeology) return;

  LNU_DATA.archaeology.forEach(site => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${site.site_name}</h3>
      <small>${site.region} · ${site.date_range}</small>
      <p><strong>Archaeology:</strong> ${site.archaeology_summary}</p>
      <p><strong>Geology:</strong> ${site.geology_link}</p>
      <p><strong>Two-Eyed Seeing:</strong> ${site.two_eyed_seeing}</p>
    `;

    container.appendChild(card);
  });
}

// ---------- Sources ----------

function renderSources() {
  const container = document.getElementById("sources-list");
  if (!container || !LNU_DATA.main_sources) return;

  LNU_DATA.main_sources.forEach(src => {
    const li = document.createElement("li");
    li.textContent = src;
    container.appendChild(li);
  });
}

// ---------- Init ----------

document.addEventListener("DOMContentLoaded", () => {
  populateFilters();
  filterTimeline();          // initial render with all events
  renderFigures();
  renderWords();
  renderKluskapLegends();
  renderArchaeology();
  renderSources();

  const eraSelect = document.getElementById("era-filter");
  const tagSelect = document.getElementById("tag-filter");
  if (eraSelect) eraSelect.addEventListener("change", filterTimeline);
  if (tagSelect) tagSelect.addEventListener("change", filterTimeline);
});


