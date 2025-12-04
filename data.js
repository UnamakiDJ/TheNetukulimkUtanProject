// LNU_DATA: A compact Two-Eyed Seeing dataset for the website.

const LNU_DATA = {
  eras: [
    "Deep Time & Creation",
    "Ancestors in Stone",
    "Treaty Era",
    "Wars & Expulsions",
    "Rights & Courts",
    "Land & Water Defenders",
    "20th Century Displacement & Resilience"
  ],

  figures: {
    membertou: {
      name: "Grand Chief Membertou (Henri Membertou)",
      role: "Grand Chief (Saqmaw), political and spiritual leader",
      life_dates: "c.1507–1611",
      bio:
        "Grand Chief of the Mi’kmaq near Port Royal in the early 1600s. " +
        "Renowned as a warrior, spiritual leader, and diplomat. Formed key alliances " +
        "with the French and was the first Indigenous leader in what is now Canada " +
        "to be baptized, in 1610.",
      significance:
        "Embodies early Mi’kmaw–French diplomacy. Walked between Mi’kmaw " +
        "spiritual-political leadership and French Christian diplomacy, showing that " +
        "L’nuk could adapt and negotiate without surrendering identity.",
      key_sources: [
        "Dictionary of Canadian Biography – Membertou",
        "Daniel N. Paul, We Were Not the Savages (early contact chapters)"
      ]
    },
    donald_marshall_jr: {
      name: "Donald Marshall Jr.",
      role: "Fisher, Treaty Rights Defender, Catalyst for Legal Change",
      life_dates: "1953–2009",
      bio:
        "Mi’kmaw man from Membertou who was wrongfully convicted of murder at 17. " +
        "His case exposed systemic racism in the justice system. Later, his fishing " +
        "case led to the 1999 Supreme Court decision affirming Mi’kmaw treaty rights " +
        "to fish and sell catch for a moderate livelihood.",
      significance:
        "Symbol of both the violence of colonial law and the power of Mi’kmaw " +
        "persistence. The Marshall decision is a cornerstone of modern struggles " +
        "over fisheries, treaties, and moderate livelihood.",
      key_sources: [
        "R. v. Marshall (1999), Supreme Court of Canada",
        "Royal Commission on the Donald Marshall Jr. Prosecution"
      ]
    },
    daniel_paul: {
      name: "Daniel N. Paul",
      role: "Author, Historian, Advocate",
      life_dates: "1938–2024",
      bio:
        "Mi’kmaw author of 'We Were Not the Savages', a foundational work that " +
        "reframes Mi’kmaw history from an Indigenous perspective.",
      significance:
        "One of the first to systematically challenge colonial history-writing " +
        "about the Mi’kmaq, documenting genocide, racism, and Mi’kmaw resistance, " +
        "and pushing for public recognition and change.",
      key_sources: ["Daniel N. Paul, We Were Not the Savages"]
    },
    albert_marshall: {
      name: "Elder Albert Marshall",
      role: "Elder, Co-developer of Two-Eyed Seeing (Etuaptmumk)",
      life_dates: "Eskasoni First Nation, contemporary",
      bio:
        "Respected Mi’kmaw Elder from Eskasoni who articulated the concept of " +
        "Two-Eyed Seeing (Etuaptmumk), encouraging people to use the strengths of " +
        "Indigenous and Western knowledges together.",
      significance:
        "His idea of Two-Eyed Seeing is at the heart of Mi’kmaw-led research, " +
        "education, and environmental projects, including this site.",
      key_sources: ["Interviews and writings on Etuaptmumk (Two-Eyed Seeing)"]
    }
  },

  words: {
    tupsi: {
      english: "alder tree",
      dialects: {
        default: {
          sf_orthography: "tupsi",
          listuguj_orthography: "tupsi",
          context:
            "Alder tree, important in riparian zones and used traditionally for " +
            "tools, poles, and sometimes medicine.",
          two_eyed_seeing:
            "Relational being in the riverbank ecosystem; also a useful material " +
            "for human tools. Holds banks, shades water, shelters species."
        }
      }
    },
    "gesig/kesik": {
      english: "winter / it is winter",
      dialects: {
        default: {
          sf_orthography: "gesig",
          listuguj_orthography: "kesik",
          context:
            "Refers to the winter season; used in describing cycles of the year.",
          two_eyed_seeing:
            "Winter as rest and reflection, a time of stories, teaching, and " +
            "careful use of resources. In science, a key period of ecological " +
            "stress and adaptation."
        }
      }
    }
  },

  legends: [
    {
      id: "creation_kluskap_mikmaq",
      title: "The Creation of Kluskap and the Mi’kmaq",
      places: ["Cape Blomidon", "Bay of Fundy", "Mi’kma’ki"],
      themes: ["creation", "ice", "landform", "ancestors", "identity"],
      summary:
        "Lightning strikes the earth and Kluskap is formed in a world still shaped " +
        "by ice and water. Over time, his actions help shape the land, call the " +
        "animals, and guide the first Mi’kmaq into being.",
      two_eyed_seeing:
        "From a Mi’kmaw eye, this is a sacred origin story. From a Western science " +
        "eye, it resonates with the retreat of glaciers and the emergence of new " +
        "landscapes and life in post-glacial Atlantic Canada.",
      science_links: [
        {
          field: "Geology / Glaciology",
          summary:
            "Glacial ice covered Mi’kma’ki until roughly 13,000–11,000 years ago. " +
            "As it retreated, post-glacial rebound and sea-level changes created " +
            "the coasts and river valleys we see today."
        }
      ]
    },
    {
      id: "fundy_tides",
      title: "Kluskap, Beaver, Whale, and the Tides of Fundy",
      places: ["Bay of Fundy", "Minas Basin", "Minas Channel"],
      themes: ["water", "power", "tides", "balance"],
      summary:
        "Kluskap asks Beaver to build a dam so he can bathe, blocking the bay. " +
        "When Beaver refuses to open it, Kluskap calls Whale, who smashes the " +
        "barrier with her tail. The waters begin to rush in and out, creating the " +
        "powerful tides of the Bay of Fundy.",
      two_eyed_seeing:
        "Teaches about proper use of power and sharing water. From science, it " +
        "parallels hypotheses about a natural barrier failing and the bay becoming " +
        "a resonant basin with extreme tides.",
      science_links: [
        {
          field: "Oceanography / Geomorphology",
          summary:
            "Fundy’s extreme tides are linked to its funnel shape and resonance. " +
            "Some scientists have proposed that earlier coastal barriers or " +
            "configurations changed over time, amplifying tidal range."
        }
      ]
    },
    {
      id: "giant_bullfrog",
      title: "Kluskap and the Giant Bullfrog",
      places: ["Unama’ki / Cape Breton"],
      themes: ["water", "greed", "restoration", "Netukulimk"],
      summary:
        "A giant bullfrog keeps all the community’s water in his belly, causing " +
        "drought and suffering. Kluskap confronts the frog; when he is squeezed, " +
        "the water spills out and returns to the land, restoring balance.",
      two_eyed_seeing:
        "Warns against hoarding and shows that water must flow freely for all " +
        "relations. From a science lens, it resembles lessons about watersheds, " +
        "dams, and the impacts of blocking river systems.",
      science_links: [
        {
          field: "Hydrology / Watershed Science",
          summary:
            "Healthy rivers and wetlands rely on unblocked flow and storage. " +
            "Large dams or diversions can create scarcity downstream, mirroring " +
            "the frog’s hoarding and the release that follows."
        }
      ]
    }
  ],

  timeline_events: [
    {
      id: "deglaciation",
      start: "-12000 BP",
      end: "-9000 BP",
      label: "Ice Leaves, Land Rises",
      era: "Deep Time & Creation",
      region: ["All Mi’kma’ki"],
      tags: ["geology", "ice age", "creation"],
      western_lens_summary:
        "Retreat of the Laurentide Ice Sheet from Atlantic Canada, post-glacial " +
        "rebound, changing coastlines, and new land for plants, animals, and humans.",
      lnuk_lens_summary:
        "Stories of a world of ice and water changing into a living land shaped by " +
        "beings such as Kluskap and Thunderbird, as the land becomes soft and new.",
      two_eyed_seeing:
        "Both lenses describe Mi’kma’ki in motion, becoming itself; one uses " +
        "glaciers and isostatic rebound, the other uses spiritual forces and transformers."
    },
    {
      id: "kejimkujik_petroglyphs",
      start: "c. 0–1800 CE",
      end: "",
      label: "Petroglyphs at Kejimkujik",
      era: "Ancestors in Stone",
      region: ["Kejimkujik"],
      tags: ["petroglyphs", "writing", "art"],
      western_lens_summary:
        "Over 500 petroglyphs incised on slate, including canoes, people, animals, " +
        "ships, crosses, and writing-like symbols. Earlier images likely pre-contact; " +
        "later ones record post-contact encounters and technology.",
      lnuk_lens_summary:
        "Stone images are conversations with ancestors: stories of travel, " +
        "ceremony, spirit beings, and changing times, linked to Komqwejwi’kasikl " +
        "and continuing ceremony.",
      two_eyed_seeing:
        "Archaeology sees a record of technology and contact; L’nuk see an archive " +
        "of relationships, law, and spirit."
    },
    {
      id: "peace_friendship_treaties",
      start: "1725",
      end: "1779",
      label: "Peace & Friendship Treaties",
      era: "Treaty Era",
      region: ["Mi’kma’ki", "Wulstukwik"],
      tags: ["treaties", "law"],
      western_lens_summary:
        "Britain signs a series of Peace and Friendship Treaties with Mi’kmaq, " +
        "Wolastoqiyik, Passamaquoddy and others. These treaties end formal hostilities " +
        "and regulate trade, but do not cede land.",
      lnuk_lens_summary:
        "Nation-to-nation agreements to live in right relationship: sharing land, " +
        "maintaining peace, and respecting Mi’kmaw harvesting and travel.",
      two_eyed_seeing:
        "Courts see legal contracts; Elders see sacred covenants. Both have force."
    },
    {
      id: "membertou_1915_relocation",
      start: 1915,
      end: 1915,
      label: "Resolution to Remove Mi’kmaq from King’s Road (Membertou)",
      era: "20th Century Displacement & Resilience",
      region: ["Unama’ki / Cape Breton", "Sydney"],
      tags: ["displacement", "urban policy", "Indian Act"],
      western_lens_summary:
        "On February 11, 1915, Sydney city council passed a resolution requesting " +
        "the federal government to remove the Mi’kmaq from their homes on King’s Road, " +
        "framed as an issue of land use, health, and development.",
      lnuk_lens_summary:
        "For the Mi’kmaq of Kun’tewiktuk (later Membertou), this meant forced " +
        "uprooting from a long-standing waterside community, breaking relationships " +
        "with land, burial grounds, and livelihoods.",
      two_eyed_seeing:
        "One eye sees 'urban planning'; the other sees dispossession and survival. " +
        "You can’t understand Membertou’s success without this history."
    },
    {
      id: "marshall_decision",
      start: 1999,
      end: 1999,
      label: "R. v. Marshall – Moderate Livelihood",
      era: "Rights & Courts",
      region: ["Mi’kma’ki"],
      tags: ["Supreme Court", "fishing rights", "treaties"],
      western_lens_summary:
        "The Supreme Court of Canada rules that Mi’kmaq, Maliseet, and Passamaquoddy " +
        "have a treaty right to hunt, fish, and gather in pursuit of a 'moderate livelihood'.",
      lnuk_lens_summary:
        "Seen by many Mi’kmaq not as a new right, but as the court finally " +
        "acknowledging what Mi’kmaw law and memory had always held.",
      two_eyed_seeing:
        "A moment when Power Tongue (courts) is forced to say out loud what " +
        "Relational Tongue (treaty and story) already knew."
    }
  ],

  archaeology: [
    {
      id: "debert_paleoindian",
      site_name: "Debert & Belmont Paleoindian Sites",
      date_range: "c. 11,000–10,000 years ago",
      region: "Debert, Nova Scotia",
      archaeology_summary:
        "Ancient campsites with stone tools showing some of the earliest known " +
        "human presence in Mi’kma’ki shortly after the ice retreated.",
      geology_link:
        "People living on a freshly deglaciated landscape, near glacial lakes, " +
        "rivers, and changing coastlines.",
      two_eyed_seeing:
        "Archaeology talks about Paleoindian hunters; L’nuk talk about ancestors " +
        "walking a soft, new land after ice, in the same time-space as Kluskap stories."
    },
    {
      id: "kejimkujik_petroglyphs_arch",
      site_name: "Kejimkujik Petroglyphs & Lakes",
      date_range: "c. 0–1800 CE",
      region: "Kejimkujik, Nova Scotia",
      archaeology_summary:
        "Rock carvings on slate near lakes and portage routes, showing canoes, " +
        "people, animals, ships, crosses, and writing-like signs.",
      geology_link:
        "Glacially carved lakes and outcrops became natural canvases and meeting places, " +
        "where water, stone, and story meet.",
      two_eyed_seeing:
        "The same rock that geology studies as slate and glacial erosion is, for L’nuk, " +
        "a page in a living stone library of law and memory."
    }
  ],

  main_sources: [
    "Daniel N. Paul – We Were Not the Savages",
    "Mi’kmawey Debert Cultural Centre",
    "Membertou Heritage Park",
    "Patterson – Eighteenth-Century Treaties",
    "Wicken – Mi’kmaq Treaties on Trial",
    "Whitehead – The Old Man Told Us; Stories from the Six Worlds",
    "Prins – The Mi’kmaq: Resistance, Accommodation and Cultural Survival",
    "Amnesty International on Indigenous rights in Atlantic Canada",
    "APTN News coverage of Mi’kmaw land and water defence"
  ]
};
