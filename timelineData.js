// timelineData.js
// Core data for the Two-Eyed Seeing timeline.
// You can freely add, edit, or remove events from TIMELINE_EVENTS.

const TIMELINE_EVENTS = [
  {
    id: "debert-palaeo",
    sortKey: -11500, // for sorting; negative = "years ago"
    dateDisplay: "c. 13,500–11,000 years ago",
    era: "Pre-contact",
    type: "Archaeology",
    tags: ["Ice Age", "Kluskap science", "Migration"],
    title: "Mi’kmawey Debert – Camps at the Edge of the Ice",
    westernSummary:
      "Archaeological excavations at Debert and nearby sites have uncovered stone tools from some of the earliest known human occupations in northeastern North America, radiocarbon dated to roughly 13,500–11,000 years ago. These Palaeo-Indian camps sat near the retreating edge of the last Ice Age glaciers, on a changing landscape of tundra and emerging forest.",
    lnukSummary:
      "For L’nuk, Mi’kmawey Debert is not just an 'early site' but a place where Ancestors lived with the ice, the winds, the caribou, and the stones. Kluskap stories speak of shaping valleys, moving stones, and teaching people how to live with powerful changing forces. The land remembers those teachings in the shape of the hills, eskers, and drumlins.",
    twoEyedReflection:
      "Here, Western archaeology and Mi’kmaw story converge around deep time. One eye sees radiocarbon dates and lithic technology; the other eye sees teachings about humility before ice, wind, and animal nations. Both together remind us that Mi’kma’ki has been homeland since just after the ice began to leave.",
    people: []
  },
  {
    id: "membertou-baptism",
    sortKey: 1610,
    dateDisplay: "24 June 1610",
    era: "Early contact",
    type: "Diplomacy",
    tags: ["Alliance", "France", "Church"],
    title: "Grand Chief Membertou – Baptism and Alliance with the French",
    westernSummary:
      "At Port-Royal (Annapolis Royal), Grand Chief Membertou and members of his family were baptized by Abbé Jessé Fléché on June 24, 1610. This is often cited as the first recorded baptism of an Indigenous leader in what is now Canada, marking a formal alliance between Mi’kmaq and the French Crown and Church.",
    lnukSummary:
      "From a Mi’kmaw perspective, Membertou was already a spiritual leader, warrior, and diplomat long before any priest arrived. His baptism can be seen as a strategic act within Mi’kmaw diplomacy, using European symbols to secure trade, military partnership, and space for L’nuk to continue being L’nuk.",
    twoEyedReflection:
      "One eye sees a Christian sacrament and the 'first Native baptism in New France.' The other eye sees an L’nuk leader bending a new system to the survival of his people. Two-Eyed Seeing reminds us not to reduce him to either a convert or a romantic hero, but to read his choices in the full context of Mi’kmaw law and politics.",
    people: [
      {
        name: "Grand Chief Henri Membertou",
        role: "Saqmaw / Grand Chief of the Mi’kmaq",
        bio:
          "Warrior, shaman, and diplomat who led Mi’kmaw relations with the French in the early 1600s. He kept Port-Royal for years when the French left and helped shape the earliest colonial alliances in Mi’kma’ki."
      }
    ]
  },
  {
    id: "treaty-1752",
    sortKey: 1752,
    dateDisplay: "22 November 1752",
    era: "Peace and Friendship Treaties",
    type: "Treaty",
    tags: ["Treaty", "Peace and Friendship", "Shubenacadie"],
    title: "Treaty of 1752 – Peace and Friendship at Halifax",
    westernSummary:
      "On 22 November 1752, a treaty was signed at Halifax between Mi’kmaw leader Jean Baptiste Cope of Shubenacadie and Governor Peregrine Hopson. The treaty promised peace, trade, and protection of Mi’kmaw hunting and fishing, and referenced the earlier Peace and Friendship agreements of 1725–26.",
    lnukSummary:
      "For L’nuk, the Peace and Friendship treaties are nation-to-nation commitments. They do not surrender land. They are supposed to be covenants of shared space, where Mi’kmaw ways of life continue and newcomers agree to live as guests under those responsibilities.",
    twoEyedReflection:
      "One eye sees English treaty text, legal arguments about whether it was 'terminated,' and later court cases (like Simon). The other eye sees promises spoken before Creator and ancestors. Two-Eyed Seeing asks: if these are living, sacred agreements, how do we act as if they are still binding today?",
    people: [
      {
        name: "Kji Keptin Jean Baptiste Cope",
        role: "Mi’kmaw leader from Shubenacadie",
        bio:
          "Signed the 1752 Peace and Friendship Treaty with the British. His leadership is at the centre of later court cases that reaffirm Mi’kmaw treaty rights."
      }
    ]
  },
  {
    id: "burying-hatchet",
    sortKey: 1761,
    dateDisplay: "25 June 1761",
    era: "Peace and Friendship Treaties",
    type: "Ceremony",
    tags: ["Treaty", "Ceremony", "Halifax"],
    title: "Burying the Hatchet – Halifax Treaties 1760–61",
    westernSummary:
      "On June 25, 1761, a 'Burying the Hatchet' ceremony was held in Halifax, one of several events marking the Halifax Treaties of 1760–61. These treaties ended more than 75 years of intermittent warfare between the Mi’kmaq and the British and are often described as establishing a lasting peace and a commitment to the rule of British law.",
    lnukSummary:
      "In Mi’kmaw memory, burying the hatchet is not surrender. It is an agreement to set down open war and try to live in right relation. The treaties were meant to protect Mi’kmaw hunting, fishing, and movement, not to erase Mi’kmaw law or title.",
    twoEyedReflection:
      "Western historians debate whether these treaties mean 'surrender.' L’nuk scholars and elders emphasize that no such surrender was understood or intended. Two-Eyed Seeing holds these tensions and centres Mi’kmaw interpretations when asking what the treaties require today.",
    people: []
  },
  {
    id: "treaty-day-1986",
    sortKey: 1986,
    dateDisplay: "1 October 1986",
    era: "Modern resurgence",
    type: "Commemoration",
    tags: ["Treaty Day", "Education", "Unama’ki"],
    title: "Treaty Day – Proclaimed by Grand Chief Donald Marshall Sr.",
    westernSummary:
      "Following the 1985 Supreme Court decision in Simon v. The Queen, which affirmed that the 1752 Treaty still had legal force, Treaty Day was proclaimed in Nova Scotia on October 1, 1986 by Grand Chief Donald Marshall Sr. and the province. Since then, October 1 has marked the beginning of Mi’kmaq History Month in Nova Scotia.",
    lnukSummary:
      "Treaty Day is a modern way of saying: the treaties are not dusty documents; they are living relationships. It is a time for L’nuk to gather, honour ancestors, and remind the Crown and the public that 'we are all Treaty people.'",
    twoEyedReflection:
      "One eye sees a civic holiday, flags, and official ceremonies. The other eye sees a spiritual, legal, and emotional renewal of promises first made generations ago. Two-Eyed Seeing uses Treaty Day to teach that treaty rights are also treaty responsibilities.",
    people: [
      {
        name: "Grand Chief Donald Marshall Sr.",
        role: "Mi’kmaw Grand Chief",
        bio:
          "Grand Chief who proclaimed Treaty Day in 1986, helping to bring treaty relationships back into public and legal awareness after generations of attempted erasure."
      },
      {
        name: "Kji Keptin Alexander Denny",
        role: "Treaty advocate, UNSI leader",
        bio:
          "A leading treaty rights advocate and Kji Keptin of the Mi’kmaq Grand Council, central in research and organizing that led to Treaty Day and later treaty recognition."
      }
    ]
  },
  {
    id: "marshall-decision",
    sortKey: 1999,
    dateDisplay: "17 September 1999",
    era: "Modern rights & resistance",
    type: "Court case",
    tags: ["Treaty rights", "Moderate livelihood", "Fishing"],
    title: "R. v. Marshall – Moderate Livelihood Fishing Rights",
    westernSummary:
      "On 17 September 1999, the Supreme Court of Canada ruled in R. v. Marshall that Mi’kmaq have a constitutionally protected treaty right to fish and sell catch to earn a 'moderate livelihood,' based on the Peace and Friendship Treaties of 1760–61.",
    lnukSummary:
      "For many L’nuk, the case is about more than one man selling eels. It is about the right to live as L’nuk on L’nuk land and waters without being criminalized. The struggle since 1999 has been to make 'moderate livelihood' real on the water, not just words in a judgment.",
    twoEyedReflection:
      "One eye sees legal citations, paragraphs, and constitutional language. The other eye sees Donald Marshall Jr., wrongfully imprisoned once, and then back in court to force Canada to honour treaty promises. Two-Eyed Seeing reads the case as a tool L’nuk picked up to push back against the same system that harmed them.",
    people: [
      {
        name: "Donald Marshall Jr.",
        role: "Fisher, treaty-rights defender",
        bio:
          "Mi’kmaw man from Membertou whose wrongful murder conviction exposed racism in the justice system, and whose later fishing case led to recognition of treaty-protected moderate livelihood fishing rights."
      }
    ]
  }
];
