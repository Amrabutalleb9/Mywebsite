export interface Article {
  slug: string
  title: string
  /** <title> tag and search result headline, about 60 characters */
  seoTitle: string
  /** meta description, about 155 characters */
  description: string
  excerpt: string
  /** display date of first publication, e.g. "Jan 2025" */
  date: string
  /** ISO dates for structured data and the sitemap */
  published: string
  updated: string
  tag: string
  keywords: string[]
  image?: string
  imageAlt?: string
  /** Paragraphs. A paragraph starting with "## " is a section heading; [text](/path) is a link. */
  content: string[]
}

export const articles: Article[] = [
  {
    slug: "using-ai-in-a-creative-team",
    title: "How I\u00a0use AI in\u00a0a\u00a0creative team without lowering the\u00a0bar.",
    seoTitle: "How to Use AI in a Creative Team Without Lowering Quality",
    description: "A creative director\u2019s rules for using AI in a design team: where it speeds the work up, where it never gets the final say, and how to keep standards high.",
    excerpt: "AI makes a\u00a0creative team faster. It doesn\u2019t make it\u00a0better on\u00a0its own. Here are the rules I\u00a0work\u00a0by.",
    date: "Oct 2026",
    published: "2026-10-09",
    updated: "2026-10-09",
    tag: "LEADERSHIP",
    keywords: ["AI in creative teams", "AI creative director", "AI design workflow", "creative leadership"],
    image: "/images/articles/using-ai-in-a-creative-team-cover-v1.webp",
    imageAlt: "Typographic cover: How I use AI in a creative team without lowering the bar",
    content: [
      "Every creative team I\u00a0know is\u00a0using AI now. The question isn\u2019t whether to\u00a0use it. The question is\u00a0whether your standards survive\u00a0it.",
      "I\u00a0use AI every day: to\u00a0explore directions, to\u00a0produce campaign assets, to\u00a0write voiceover, and to\u00a0build working prototypes in\u00a0code. It has changed how fast my teams move. It has not changed what good looks like, and that\u2019s the part a\u00a0creative director has\u00a0to\u00a0protect.",
      "## Where AI earns its place",
      "Exploration. At the start of\u00a0a\u00a0project, the expensive thing is\u00a0commitment. AI lets a\u00a0team look at\u00a0twenty directions before anyone falls in\u00a0love with one. Moodboards, rough compositions and copy angles that used to\u00a0take a\u00a0week now take an\u00a0afternoon, and the team argues about ideas instead of\u00a0about who has time to\u00a0make\u00a0them.",
      "Production. For campaign volume (variations for different markets, formats and placements) AI image and video tools can carry a\u00a0lot of\u00a0the repetitive work. AI voice tools turn a\u00a0script into a\u00a0usable draft read in\u00a0minutes. The art director\u2019s eye is\u00a0still on\u00a0every\u00a0frame.",
      "Prototyping. This is\u00a0the one that changed my work most. With AI as\u00a0my engineering team, I\u00a0can take an\u00a0idea from brief to\u00a0a\u00a0live staging build in\u00a0days, not sprints. I\u2019ve written about that separately in\u00a0[what changes when a\u00a0creative director can prototype\u00a0in\u00a0code](/articles/creative-director-who-prototypes).",
      "## Where AI never gets the final say",
      "Taste. AI produces options; it\u00a0doesn\u2019t choose between them. Every piece that ships is\u00a0reviewed against the brand system by\u00a0a\u00a0person who is\u00a0accountable for it. If no\u00a0one on\u00a0the team can explain why a\u00a0choice is\u00a0right, it\u00a0isn\u2019t\u00a0finished.",
      "The brief. A brief is\u00a0a\u00a0decision about what matters to\u00a0a\u00a0specific audience. I\u2019ve never seen a\u00a0model make that decision better than a\u00a0person who has spoken to\u00a0the customer. AI can help you research. It can\u2019t own the\u00a0insight.",
      "Typography. Generated images still break letterforms: doubled words, melted serifs, characters that look almost right. I\u00a0removed AI-generated images from my own articles for exactly that reason. Type is\u00a0set by\u00a0a\u00a0designer, in\u00a0the real typeface, every\u00a0time.",
      "Truth. No invented testimonials, no\u00a0fake customers, no\u00a0real people\u2019s faces or\u00a0names where they didn\u2019t give them. AI makes it\u00a0easy to\u00a0fake proof. A brand that gets caught doing it\u00a0loses far more than\u00a0it\u00a0saved.",
      "## How I set a team up",
      "I\u00a0treat AI like a\u00a0sketchbook, not a\u00a0crutch. Juniors use it\u00a0to\u00a0see more options, then have to\u00a0defend the one they choose without mentioning the tool. Seniors use it\u00a0to\u00a0remove the dull parts of\u00a0production so\u00a0they can spend the time\u00a0on\u00a0craft.",
      "Everything runs through the same system as\u00a0before: the type scale, the colour roles, the grid, the tone of\u00a0voice. AI work that doesn\u2019t fit the system gets the same feedback as\u00a0human work that doesn\u2019t fit the system. That one rule does more for quality than any prompt\u00a0guide.",
      "We also keep track of\u00a0what was generated, which tool made it\u00a0and whether we\u00a0have the right to\u00a0use it\u00a0commercially. Clients ask, and the answer should take seconds, not a\u00a0week\u00a0of\u00a0digging.",
      "## What to measure",
      "If AI is\u00a0working, two numbers move: the time to\u00a0a\u00a0first round the team is\u00a0proud of, and the number of\u00a0rounds to\u00a0approval. If the first number drops and the second rises, you\u2019re producing more noise faster. That\u2019s the signal to\u00a0slow down and go back to\u00a0the\u00a0brief.",
      "## The real job hasn\u2019t changed",
      "A creative director sets the bar, builds the system that holds it\u00a0and makes sure the work ships. AI changes the speed of\u00a0all three. It doesn\u2019t do\u00a0any of\u00a0them for\u00a0you.",
    ],
  },
  {
    slug: "creative-director-who-prototypes",
    title: "What changes when a\u00a0creative director can prototype\u00a0in\u00a0code.",
    seoTitle: "Creative Director Who Prototypes in Code: What Changes",
    description: "From brief to a live staging build in days, not sprints. How prototyping in code with AI changes pitches, testing and development costs for a creative team.",
    excerpt: "Creative direction that doesn\u2019t stop at\u00a0Figma: from brief to\u00a0a\u00a0live staging build in\u00a0days, not\u00a0sprints.",
    date: "Oct 2026",
    published: "2026-10-09",
    updated: "2026-10-09",
    tag: "LEADERSHIP",
    keywords: ["creative director prototyping", "design engineer", "prototype in code", "AI prototyping"],
    image: "/images/articles/creative-director-who-prototypes-cover-v1.webp",
    imageAlt: "Typographic cover: What changes when a creative director can prototype in code",
    content: [
      "Most creative work dies in\u00a0the handoff. The design is\u00a0approved in\u00a0Figma, it\u00a0goes to\u00a0development, and six weeks later something comes back that feels nothing like what everyone agreed on. Nobody did anything wrong. Static screens just can\u2019t carry timing, motion, real data or\u00a0the feel\u00a0of\u00a0a\u00a0scroll.",
      "I\u00a0trained as\u00a0a\u00a0mechatronics engineer before I\u00a0became a\u00a0designer. For most of\u00a0my career that meant I\u00a0could read a\u00a0development quote and talk to\u00a0engineers in\u00a0their language. Now, with AI as\u00a0my engineering team, it\u00a0means something bigger: I\u00a0can build the\u00a0thing.",
      "## From brief to a live staging build in days",
      "When a\u00a0concept needs proving, I\u00a0build it\u00a0in\u00a0code and put it\u00a0on\u00a0a\u00a0staging link. Real pages, real interactions, real content, deployed and clickable on\u00a0a\u00a0phone. It\u2019s a\u00a0prototype, not production, but it\u2019s close enough that a\u00a0client, a\u00a0team or\u00a0a\u00a0test user reacts to\u00a0the actual experience instead of\u00a0a\u00a0picture\u00a0of\u00a0it.",
      "This site is\u00a0an\u00a0example. I\u00a0designed it\u00a0and built it\u00a0myself, from the type system to\u00a0the scroll animations, in\u00a0Next.js, deployed\u00a0on\u00a0Cloudflare.",
      "## What it changes for a team",
      "Pitches. A working prototype wins rooms that a\u00a0slide deck doesn\u2019t. People stop discussing whether an\u00a0idea could work and start discussing how\u00a0it\u00a0should.",
      "Testing. You can put a\u00a0prototype in\u00a0front of\u00a0five real users this week. You learn which flow confuses people before an\u00a0engineering team has spent a\u00a0month building\u00a0it.",
      "Costs. When you know how things are built, you know what they should cost. On [SPLT](/work/split) I\u00a0took a\u00a0development quotation apart line by\u00a0line, rewrote the scope and won the contract before a\u00a0single wireframe\u00a0existed.",
      "Rescue. On [Dipa\u2019s art school site](/work/dipa), four freelancers had failed over three years. I\u00a0got the broken site working again with my own code first, then redesigned it. Trust came from the working site, not from the\u00a0mockups.",
      "## The risk, and how I manage it",
      "A creative director who can code is\u00a0tempted to\u00a0disappear into the code. That would be\u00a0a\u00a0bad trade: the team needs a\u00a0leader more than it\u00a0needs another\u00a0builder.",
      "So I\u00a0keep three rules. I\u00a0prototype to\u00a0decide, and engineers build to\u00a0last; a\u00a0prototype never quietly becomes production. I\u00a0prototype so\u00a0my designers don\u2019t have to\u00a0wait, not instead of\u00a0them doing the work. And I\u00a0hand over everything I\u00a0learned while building, so\u00a0the production team starts from evidence, not from\u00a0a\u00a0guess.",
      "## Why it matters to a hiring team",
      "Design teams are being asked to\u00a0move faster with fewer people. A creative director who can close the gap between the idea and a\u00a0working build makes the whole team faster without lowering the bar. That\u2019s creative direction that doesn\u2019t stop\u00a0at\u00a0Figma.",
    ],
  },
  {
    slug: "how-i-hire-and-review-designers",
    title: "How I\u00a0hire and review\u00a0designers.",
    seoTitle: "How I Hire and Review Designers as a Creative Director",
    description: "After hiring more than 50 people: the two things I look for first, why skills come second, and how I review work without it becoming about taste.",
    excerpt: "I\u2019ve hired more than 50 people. Skills can be\u00a0sharpened. Two other things are much harder\u00a0to\u00a0teach.",
    date: "Oct 2026",
    published: "2026-10-09",
    updated: "2026-10-09",
    tag: "LEADERSHIP",
    keywords: ["hiring designers", "design team leadership", "creative director hiring", "design reviews"],
    image: "/images/articles/how-i-hire-and-review-designers-cover-v1.webp",
    imageAlt: "Typographic cover: How I hire and review designers",
    content: [
      "Over my career I\u2019ve hired more than 50 people, mostly designers, across teams of\u00a0up\u00a0to\u00a025. The biggest lesson is\u00a0simple, and it\u00a0took me years to\u00a0trust it: skills can be\u00a0sharpened. Almost everything else is\u00a0harder\u00a0to\u00a0fix.",
      "## The two things I hire for first",
      "The will to\u00a0keep learning. Design changes every year: new tools, new platforms, now AI in\u00a0every part of\u00a0the workflow. A designer who stopped learning two years ago is\u00a0already behind, however good their portfolio looks. I\u00a0look for people who can tell me what they learned recently and what they got wrong while learning\u00a0it.",
      "Integrity. Do they own their mistakes? Do they tell me when a\u00a0deadline is\u00a0at\u00a0risk before it\u2019s missed? Do they credit the people who helped? A team runs on\u00a0trust. One person who hides problems costs more than a\u00a0skills gap ever\u00a0will.",
      "## Why skills come second",
      "I\u2019m not saying skills don\u2019t matter. A portfolio still has to\u00a0show taste and craft. But between a\u00a0strong designer who won\u2019t take feedback and a\u00a0slightly weaker one who will, the second one is\u00a0better within six months, and the gap keeps\u00a0growing.",
      "With juniors I\u00a0start with an\u00a0exercise I\u2019ve used for years: go wild first, add everything, then remove elements one by\u00a0one until the idea stops working. What\u2019s left is\u00a0the design. It teaches restraint faster than any lecture, and I\u00a0wrote about it\u00a0in\u00a0[the case for restraint in\u00a0brand\u00a0design](/articles/the-case-for-restraint-in-brand-design).",
      "## How I review work",
      "Work is\u00a0reviewed against the system, not against my taste. If the brand has a\u00a0type scale, colour roles, a\u00a0grid and a\u00a0tone of\u00a0voice, then feedback points to\u00a0those: this headline breaks the scale, this colour is\u00a0doing a\u00a0job it\u00a0wasn\u2019t given. Designers can predict that kind of\u00a0feedback and learn from it. They can\u2019t learn from \"I\u00a0don\u2019t like\u00a0it\".",
      "That\u2019s also why I\u00a0build the system first on\u00a0every project I\u00a0lead. On [Overpowered](/work/overpowered), a\u00a0team of\u00a025 across three markets worked from one set of\u00a0documented rules, so\u00a0reviews were about the work and not about whose opinion\u00a0won.",
      "## How I review products",
      "For products, the review isn\u2019t a\u00a0meeting. It\u2019s evidence. We compare new work against what is\u00a0already live with A/B tests, talk to\u00a0users one to\u00a0one, and run surveys when we\u00a0need numbers from more people. A design that wins in\u00a0a\u00a0meeting and loses with users\u00a0loses.",
      "## What a good team feels like",
      "People raise problems early, argue about ideas instead of\u00a0egos, and get better every quarter. My job is\u00a0to\u00a0hire for the right things, build the system they work within, and get out of\u00a0the\u00a0way.",
    ],
  },
  {
    slug: "directing-a-brand-across-three-markets",
    title: "What directing a\u00a0brand across three markets taught me about\u00a0consistency.",
    seoTitle: "Brand Consistency Across Markets: Lessons From Three Markets",
    description: "How I kept one agency brand consistent across the UK, Egypt and Dubai with a team of 25: one system, market-specific expressions, tested small first.",
    excerpt: "Same brand. Three markets. One system, flexible enough to\u00a0speak differently\u00a0in\u00a0each.",
    date: "Nov 2024",
    published: "2024-11-15",
    updated: "2026-10-09",
    tag: "STRATEGY",
    keywords: ["brand consistency", "multi-market branding", "brand system", "international brand strategy"],
    image: "/images/articles/directing-a-brand-across-three-markets-cover-v1.webp",
    imageAlt: "Typographic cover: What directing a brand across three markets taught me about consistency",
    content: [
      "When I\u00a0joined Overpowered as\u00a0Creative Director in\u00a0early 2025, the brief sounded simple. One agency brand, three markets: the UK, Egypt and\u00a0Dubai.",
      "The reality was a\u00a0mess.",
      "## The brief vs the reality",
      "The branding hadn\u2019t been finished. There were no\u00a0logo variations, no\u00a0pattern system and no\u00a0library of\u00a0graphic elements, so\u00a0designers created them from scratch for every piece. Rounded corners clashed with sharp ones. The logo itself wasn\u2019t balanced. And the brand used gun imagery, a\u00a0natural extension of\u00a0a\u00a0gaming-inspired name, that was a\u00a0liability for paid advertising in\u00a0Europe and the wrong signal for corporate clients\u00a0in\u00a0Dubai.",
      "There was a\u00a0tone of\u00a0voice, sort of, but it\u00a0spoke the same way to\u00a0everyone. The same language for a\u00a0startup founder in\u00a0London and a\u00a0marketing manager\u00a0in\u00a0Cairo.",
      "## Why good work didn\u2019t land",
      "The biggest lesson came from the team. Designers and copywriters in\u00a0Egypt produced work that made perfect sense for Cairo: clean, effective, well crafted. Then it\u00a0went to\u00a0the UK or\u00a0Dubai accounts and it\u00a0didn\u2019t\u00a0land.",
      "Not because the work was bad. Because the emotional target was wrong. What feels aspirational in\u00a0Dubai can feel cold in\u00a0Cairo. What feels bold in\u00a0London can read as\u00a0aggressive elsewhere in\u00a0Europe. Every market is\u00a0a\u00a0different audience, and every audience is\u00a0looking for a\u00a0different\u00a0feeling.",
      "## One system, three expressions",
      "The answer wasn\u2019t three brands. It was one system flexible enough to\u00a0breathe in\u00a0each market while staying unmistakably the same\u00a0brand.",
      "Some things never change: the logo, the type system and the colour palette. What changes is\u00a0the content strategy, the imagery and the emotional register. We built a\u00a0core pattern library, logo variations for every application and a\u00a0modular set of\u00a0graphic elements, and we\u00a0removed the gun imagery\u00a0immediately.",
      "## Test before you scale",
      "Rather than guess what would resonate, we\u00a0tested. Small A/B-tested campaigns on\u00a0Instagram in\u00a0each market, adding and removing visual elements and measuring the response. Every major design decision was backed by\u00a0how real audiences behaved, not by\u00a0who argued loudest in\u00a0the\u00a0room.",
      "## Leading a team of 25 from one rulebook",
      "I\u00a0documented every rule. Everyone, whether they sat in\u00a0London or\u00a0Cairo, worked from the same guidelines: quality benchmarks, art direction rules and a\u00a0shared language for feedback. Reviews became about the system, not about personal\u00a0taste.",
      "The Instagram account grew to\u00a020,000 followers under this system, and the design system was still in\u00a0use months after I\u00a0left. The full story is\u00a0in\u00a0the [Overpowered case\u00a0study](/work/overpowered).",
      "## What I\u2019d tell any team going multi-market",
      "Decide what never changes before you decide what can flex. Write it\u00a0down with examples. Test each market\u2019s expression small before you spend big. And remember that consistency isn\u2019t rigidity: it\u2019s a\u00a0system so\u00a0clear that anyone on\u00a0your team can use it\u00a0without losing the brand, even 4,000 kilometres away from\u00a0you.",
    ],
  },
  {
    slug: "your-logo-is-not-your-brand",
    title: "Your logo is\u00a0not your\u00a0brand.",
    seoTitle: "Your Logo Is Not Your Brand: Why Identity Systems Matter",
    description: "A logo does a fraction of the work. Why a brand identity system (type, colour, graphic elements, tone of voice) is what makes a brand recognisable.",
    excerpt: "Most companies get this backwards. A brand is\u00a0recognised by\u00a0its system, long before anyone sees the\u00a0mark.",
    date: "Jan 2025",
    published: "2025-01-15",
    updated: "2026-10-09",
    tag: "BRANDING",
    keywords: ["brand identity system", "logo vs brand", "brand guidelines", "visual identity"],
    image: "/images/articles/your-logo-is-not-your-brand-cover-v1.webp",
    imageAlt: "Typographic cover: Your logo is not your brand",
    content: [
      "I\u2019m going to\u00a0tell you something that might sting\u00a0a\u00a0little.",
      "Your logo is\u00a0not your brand. It never was. That mark you spent four months agonising over is\u00a0doing a\u00a0fraction of\u00a0the work you think it\u2019s\u00a0doing.",
      "I\u2019ve had this conversation many times in\u00a013 years of\u00a0creative direction. A client reaches out. They\u2019ve got a\u00a0logo. Sometimes it\u2019s genuinely good. And that\u2019s all they\u2019ve got: no\u00a0colour system, no\u00a0type hierarchy, no\u00a0graphic elements,\u00a0no\u00a0guidelines.",
      "Then they say: \"Let\u2019s\u00a0do\u00a0a\u00a0campaign.\"",
      "## What a brand identity system actually is",
      "A brand identity system is\u00a0the set of\u00a0rules that makes you recognisable when the logo isn\u2019t on\u00a0screen. It usually covers typography and a\u00a0type scale, a\u00a0colour language where every colour has a\u00a0job, graphic elements and patterns that repeat, photography and illustration direction, layout grids, a\u00a0tone of\u00a0voice, and logo versions for every size and\u00a0surface.",
      "You can spot an\u00a0Apple ad before the logo appears. You know a\u00a0Nike campaign before the swoosh. That\u2019s not the logo doing the work. That\u2019s the\u00a0system.",
      "## The two-sketch test",
      "Here\u2019s what I\u00a0do. I\u00a0show clients two rough versions. Version one: their campaign without a\u00a0system, a\u00a0logo floating in\u00a0the void, surrounded by\u00a0whatever the designer felt like doing that Tuesday. Version two: the same logo inside a\u00a0proper identity system, with a\u00a0type hierarchy, a\u00a0colour language and graphic elements that\u00a0repeat.",
      "They always pick version two.\u00a0Always.",
      "## Where the real time and money go",
      "The part that surprises them is\u00a0that building the system is\u00a0where the real work is. Not the logo. The research. The positioning. Understanding the competitors and where you sit on\u00a0the ladder. How you\u2019ll compete on\u00a0a\u00a0shelf, on\u00a0the App Store or\u00a0on\u00a0a\u00a0billboard. Finding the one emotion your audience is\u00a0actually looking for and wiring it\u00a0into every\u00a0touchpoint.",
      "That\u2019s the exhausting part, and it\u2019s the part that makes or\u00a0breaks everything. It\u2019s also the part most people skip, because they think they\u2019re done after the\u00a0logo.",
      "## When the logo is the smallest problem",
      "I\u00a0once worked with a\u00a0food delivery brand. The logo was a\u00a0spoon inside a\u00a0bowl. Sounds fine. Except the spoon was cut out in\u00a0a\u00a0way that made it\u00a0look like something anatomical, and the target markets were Turkey, Egypt and the wider Middle East. People were going to\u00a0notice\u00a0fast.",
      "We had to\u00a0start over, and not just the mark. The whole identity. Because a\u00a0brand system isn\u2019t a\u00a0logo with a\u00a0colour palette stapled\u00a0to\u00a0it.",
      "## Rebuilding a brand while the business keeps running",
      "At [Overpowered](/work/overpowered) the agency couldn\u2019t stop winning clients while we\u00a0fixed its brand. So we\u00a0built one system (a\u00a0pattern library, logo variations and modular graphic elements) and rolled it\u00a0out piece by\u00a0piece, testing as\u00a0we\u00a0went, across three\u00a0markets.",
      "## Five questions before you spend on a campaign",
      "Can someone recognise your brand with the logo covered? Do you have a\u00a0type scale your designers actually use? Does every colour have a\u00a0job? Do you have logo versions for a\u00a016-pixel favicon and a\u00a0six-metre banner? Is your tone of\u00a0voice written down, with\u00a0examples?",
      "If any answer is\u00a0no, the campaign will cost more and work less. Invest in\u00a0the system. The logo will follow. And get a\u00a0second pair of\u00a0eyes on\u00a0your\u00a0spoon.",
    ],
  },
  {
    slug: "typography-is-your-most-underused-design-weapon",
    title: "Typography is\u00a0your most underused design\u00a0weapon.",
    seoTitle: "Typography in Brand Design: Your Most Underused Tool",
    description: "Why typography should come before colour and layout: pairing typefaces, building a type system, and how type drove a 212-page book and a 12% sales lift.",
    excerpt: "Type is\u00a0the first thing people read and the last thing most designers think\u00a0about.",
    date: "Sep 2024",
    published: "2024-09-15",
    updated: "2026-10-09",
    tag: "DESIGN",
    keywords: ["typography in branding", "type system", "font pairing", "editorial design"],
    image: "/images/articles/typography-is-your-most-underused-design-weapon-cover-v1.webp",
    imageAlt: "Typographic cover: Typography is your most underused design weapon",
    content: [
      "Typography is\u00a0the first thing people read and the last thing most designers think\u00a0about.",
      "And I\u00a0can always tell.",
      "## The mistakes I see every week",
      "Lines that run 120 characters wide when they should stop around 70. Sentences that end a\u00a0line on\u00a0\"of\" or\u00a0\"and\". Widows hanging at\u00a0the bottom of\u00a0a\u00a0paragraph like someone gave up. And the font pairing. The font\u00a0pairing.",
      "## Why pairing typefaces is hard",
      "Matching two typefaces is\u00a0one of\u00a0the hardest things in\u00a0design. You need to\u00a0match the x-height, the contrast, the rhythm and the personality. Pairing two serifs is\u00a0extremely hard. Pairing two sans-serifs without it\u00a0looking like a\u00a0mistake is\u00a0close to\u00a0impossible. People do\u00a0it\u00a0every day like they\u2019re picking\u00a0socks.",
      "## Type first, then everything else",
      "I\u00a0treat typography as\u00a0my primary design tool. Before colour. Before layout. Before anything visual, I\u00a0build the type system. Which face for display? Which for body? How do\u00a0they talk to\u00a0each other? What\u2019s the scale? What\u2019s the\u00a0rhythm?",
      "Even on\u00a0this site, the type scale, the leading and the rules for where a\u00a0line may break are written down before a\u00a0single page\u00a0is\u00a0designed.",
      "## A 212-page book built on type",
      "I\u00a0designed and typeset [As Within, So Without](/highlights/steve-hodel) for Steve Hodel, a\u00a0retired LAPD homicide detective and New York Times bestselling author. For that book I\u00a0studied Man Ray\u2019s portraits and the typefaces used to\u00a0describe surrealism in\u00a0that era. I\u00a0chose Caslon, and the scale, the weight shifts and the layout rhythm were built from the same proportions Man Ray used in\u00a0his\u00a0compositions.",
      "There was imagery, but it\u00a0was minimal. The type did the storytelling. It set the pace and controlled how the reader moved through a\u00a0true crime investigation, like a\u00a0cinematographer controlling a\u00a0frame, except with\u00a0letterforms.",
      "## Typography that sells",
      "Another example: a\u00a0farm finance consultant in\u00a0Australia with a\u00a0simple brochure website. We turned it\u00a0into a\u00a0sales funnel, and the main lever wasn\u2019t colour or\u00a0graphics. It was typography. His audience needed to\u00a0read. When reading gets easier, the most important ideas get bigger and the eye flows naturally, everything converts better. [Agfin](/work/agfin) saw a\u00a012% sales increase in\u00a0the first month, with zero ad\u00a0spend.",
      "## No go-to font",
      "Do I\u00a0have a\u00a0go-to\u00a0font? No, and I\u2019d be\u00a0suspicious of\u00a0any designer who does. Bodoni when you need heritage. Caslon for Steve Hodel. Futura when you want early-80s energy. Helvetica when it\u00a0needs to\u00a0feel corporate, but never Helvetica in\u00a0a\u00a0textbook Swiss layout; that combination makes your work look like everyone else\u2019s. There needs to\u00a0be\u00a0some\u00a0tension.",
      "If you\u2019re still opening a\u00a0font menu and scrolling until something catches your eye, you\u2019re leaving your most powerful tool unused. Typography isn\u2019t decoration. It\u2019s the\u00a0design.",
    ],
  },
  {
    slug: "why-every-designer-should-think-like-a-business-owner",
    title: "Why every designer should think like a\u00a0business\u00a0owner.",
    seoTitle: "Why Designers Should Think Like Business Owners",
    description: "Designers who understand revenue, return on investment and testing get trusted with bigger decisions. How I pitch outcomes instead of aesthetics.",
    excerpt: "The designers who grow are the ones who understand revenue, positioning and user\u00a0behaviour.",
    date: "Jul 2024",
    published: "2024-07-15",
    updated: "2026-10-09",
    tag: "CAREER",
    keywords: ["design and business", "design ROI", "design leadership", "creative strategy"],
    image: "/images/articles/why-every-designer-should-think-like-a-business-owner-cover-v1.webp",
    imageAlt: "Typographic cover: Why every designer should think like a business owner",
    content: [
      "At ADRAW I\u00a0was responsible for design and marketing for a\u00a0software product sold in\u00a0the US and the UK. That\u2019s where\u00a0it\u00a0clicked.",
      "## The moment it clicked",
      "When you\u2019re an\u00a0employee, you think about the task. When you understand the product cycle (what things cost, where the money goes, what the return looks like) you think about the outcome. It\u2019s a\u00a0different\u00a0game.",
      "I\u00a0had to\u00a0know where every marketing dollar went and advise on\u00a0which campaigns would bring the highest return for the lowest spend. I\u00a0had to\u00a0think about return on\u00a0investment before I\u00a0thought about resolution. I\u00a0stopped designing things that looked good and started designing things that\u00a0worked.",
      "## Pitch the outcome, not the aesthetic",
      "Now, when I\u00a0propose a\u00a0campaign, I\u00a0don\u2019t only pitch the creative. I\u00a0say what return we\u00a0expect, why we\u2019re doing it\u00a0and how we\u2019ll test\u00a0it.",
      "Most designers present work in\u00a0terms of\u00a0taste: \"I\u00a0chose this colour because it\u00a0feels modern.\" That\u2019s fine for art school. In a\u00a0business, \"this direction tested higher with your target audience\" wins the\u00a0room.",
      "## Test small before you spend big",
      "Then I\u00a0suggest something that makes many designers uncomfortable: start with a\u00a0very low budget and two ideas. One is\u00a0safe. One is\u00a0the bold direction I\u00a0believe in. We test both at\u00a0small scale and look at\u00a0the\u00a0numbers.",
      "In my experience the bold direction wins far more often than it\u00a0loses, as\u00a0long as\u00a0it\u2019s built around the end user and not around the designer\u2019s ego. And the client doesn\u2019t have to\u00a0trust my taste. They can trust the data, and they never had to\u00a0bet the whole budget on\u00a0my\u00a0gut.",
      "## Speak the language of money",
      "Learn to\u00a0read a\u00a0profit and loss statement. Understand what conversion means. Know your client\u2019s KPIs before you open\u00a0Figma.",
      "It works on\u00a0the production side too. On [SPLT](/work/split) I\u00a0won the contract by\u00a0taking a\u00a0development quotation apart line by\u00a0line and rewriting the scope at\u00a0a\u00a0credible cost, before any design work started. Understanding money is\u00a0a\u00a0design\u00a0skill.",
      "That\u2019s how you stop being a\u00a0pair of\u00a0hands and become the person a\u00a0business can\u2019t afford\u00a0to\u00a0lose.",
    ],
  },
  {
    slug: "the-case-for-restraint-in-brand-design",
    title: "The case for restraint in\u00a0brand\u00a0design.",
    seoTitle: "The Case for Restraint in Brand Design",
    description: "More elements don\u2019t mean more impact. Why subtraction is the strongest design tool, and how a product redesign built on 100+ user interviews proved it.",
    excerpt: "More elements don\u2019t mean more impact. Subtraction is\u00a0the most powerful design tool there\u00a0is.",
    date: "May 2024",
    published: "2024-05-15",
    updated: "2026-10-09",
    tag: "DESIGN",
    keywords: ["minimalist brand design", "design restraint", "UX simplification", "user interviews"],
    image: "/images/articles/the-case-for-restraint-in-brand-design-cover-v1.webp",
    imageAlt: "Typographic cover: The case for restraint in brand design",
    content: [
      "Here\u2019s what I\u00a0tell every junior designer I\u00a0work with: go wild first. Add everything. Every effect, every gradient, every texture. Get it\u00a0all\u00a0out.",
      "Then remove things, one by\u00a0one, until the idea stops\u00a0working.",
      "Stop there. That\u2019s the\u00a0design.",
      "## Every element has to earn its place",
      "Every element that survived earned its place. Every element you removed was decoration, and decoration is\u00a0the enemy of\u00a0design that\u00a0performs.",
      "## The TapTools redesign",
      "I\u00a0learned this the hard way at\u00a0TapTools, where I\u00a0worked as\u00a0a\u00a0product designer. The team kept adding features. Not because users asked for them, but because competitors had them. They were copying other products feature by\u00a0feature without knowing whether anyone needed\u00a0them.",
      "I\u00a0pushed back. I\u00a0said we\u00a0needed to\u00a0go back to\u00a0basics: build our own design system and base decisions on\u00a0what real users wanted. They didn\u2019t love that\u00a0idea.",
      "So I\u00a0did something slightly mad. I\u2019d finished the original designs ahead of\u00a0schedule, so\u00a0I\u00a0offered to\u00a0build the alternative on\u00a0my own time and A/B test it, at\u00a0no\u00a0risk\u00a0to\u00a0them.",
      "For a\u00a0month I\u00a0worked six extra hours after every workday. I\u00a0redesigned the whole product and moved it\u00a0from XD, which was being discontinued, to\u00a0Figma. I\u00a0went back through more than a\u00a0hundred one-to-one user interviews, read every bug report, every Discord complaint and every thread on\u00a0X, and built the product around what people wanted instead of\u00a0what competitors were\u00a0doing.",
      "Subtraction won.",
      "## Why juniors over-decorate",
      "Junior designers are usually flashy: effects, videos, GIFs and animations stacked on\u00a0top of\u00a0each other. The eye doesn\u2019t know where to\u00a0go, so\u00a0it\u00a0scatters, and scattered attention is\u00a0the same\u00a0as\u00a0no\u00a0attention.",
      "The same applies to\u00a0words. On [Dipa\u2019s art school site](/work/dipa), the biggest improvement wasn\u2019t a\u00a0visual effect. It was turning walls of\u00a0text into short, scannable workshop\u00a0descriptions.",
      "## Restraint is clarity",
      "Good design isn\u2019t every ingredient in\u00a0the pantry on\u00a0one plate. It\u2019s small details, every decision intentional, every element earning its place. The best brands in\u00a0the world don\u2019t compete by\u00a0being the loudest. They compete by\u00a0being the\u00a0clearest.",
      "If your design needs a\u00a0lot of\u00a0explaining, it\u00a0isn\u2019t done yet. Keep subtracting until what\u2019s left feels\u00a0inevitable.",
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAdjacentArticles(slug: string) {
  const index = articles.findIndex((a) => a.slug === slug)
  const prev = index > 0 ? articles[index - 1] : null
  const next = index < articles.length - 1 ? articles[index + 1] : null
  return { prev, next }
}

export function getReadingTime(article: Article): string {
  const words = article.content.join(" ").split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 230))
  return `${minutes} min read`
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

/** "Oct 2026" for an ISO date */
export function formatMonth(iso: string): string {
  const [y, m] = iso.split("-")
  return `${MONTHS[Number(m) - 1]} ${y}`
}

/** True when the article was revised after it first went out */
export function wasUpdated(article: Article): boolean {
  return article.updated !== article.published
}
