# api.py
#
# Small HTTP API around translator.py for The Living Treaty / NetukilmkUtanProject.
# bridge.js or any frontend can call these JSON endpoints.

from typing import List, Dict, Any

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from translator import get_translator

# ---------------------------------------------------------------------
# FastAPI setup
# ---------------------------------------------------------------------

app = FastAPI(
    title="Lnu Translator API",
    description=(
        "Mi'kmaw–English helper focused on polysynthesis, animacy, and "
        "Msit No'kmaq / Netukulimk worldview."
    ),
    version="0.1.0",
)

# Allow browser apps (GitHub Pages, local dev, etc.) to call this API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        # tighten later if you want
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

translator = get_translator()

# ---------------------------------------------------------------------
# Pydantic request models
# ---------------------------------------------------------------------

class ExplainWordRequest(BaseModel):
    word: str


class ExplainSentenceRequest(BaseModel):
    sentence: str


class GenerateTermRequest(BaseModel):
    concept: str
    purpose: str
    domain_tags: List[str] = []


# ---------------------------------------------------------------------
# Basic routes
# ---------------------------------------------------------------------

@app.get("/")
def root() -> Dict[str, Any]:
    """
    Simple health/info endpoint.
    """
    return {
        "ok": True,
        "message": "Lnu Translator API is running.",
        "endpoints": [
            "POST /explain-word",
            "POST /explain-sentence",
            "POST /generate-term",
        ],
    }


@app.post("/explain-word")
def explain_word(req: ExplainWordRequest) -> Dict[str, Any]:
    """
    Analyze a single Mi'kmaw word.

    Returns:
        {
          word: "kesalul",
          has_entry: true/false,
          entry: { ... full WordEntry ... } or null,
          guessed_morphemes: [ ... Morpheme ... ],
          animacy_guess: "animate"/"inanimate"/null,
          worldview_notes: [ "...", ... ]
        }
    """
    return translator.explain_word_for_api(req.word)


@app.post("/explain-sentence")
def explain_sentence(req: ExplainSentenceRequest) -> Dict[str, Any]:
    """
    Analyze each token in a Mi'kmaw sentence.

    Returns:
        {
          sentence: "...",
          tokens: ["...", "..."],
          analyses: [ <same structure as /explain-word>, ... ]
        }
    """
    return translator.explain_sentence_for_api(req.sentence)


@app.post("/generate-term")
def generate_term(req: GenerateTermRequest) -> Dict[str, Any]:
    """
    Propose Mi'kmaw-style words for a modern concept (e.g. refrigerator).

    NOTE: All results are **prototypes** and must be checked with
    fluent speakers and elders before real-world use.
    """
    payload = {
        "concept": req.concept,
        "purpose": req.purpose,
        "domain_tags": req.domain_tags,
    }
    return translator.generate_term_for_api(payload)


# ---------------------------------------------------------------------
# Local dev entry point (optional)
# ---------------------------------------------------------------------
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "api:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
    )
