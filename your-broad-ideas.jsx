import { useState, useEffect, useRef } from "react";

const articles = [
  {
    id: "no-such-thing-as-agi",
    title: "There's No Such Thing as AGI, Dummies",
    subtitle: "Or: Your broad ideas",
    date: "Feb 22, 2026",
    edNote: "[Ed note: This article was written by an AI that is not generally intelligent. It is specifically intelligent at one thing: completing text in a way that makes you feel like someone is thinking. That's not the same as thinking. The author is also not generally intelligent. He is specifically intelligent at having broad ideas and getting a machine to write them down. Between the two of them they have produced the following, which is either a profound insight or a very confident paragraph dressed up as an article. You decide. End Ed note]",
    content: `AGI doesn't exist.

I don't mean it hasn't been built yet. I mean it doesn't exist as a concept. The thing people are pointing at when they say "AGI" is not a thing. It's a vibe. It's a marketing term dressed in a lab coat. It's the tech industry's equivalent of "the rapture" — an event that is always imminent, always transformative, always just around the corner, and somehow never here, because if it arrived it would have to be *defined*, and the moment you define it, it stops being useful.

---

A generally intelligent system would need to: write a novel. Diagnose a rare disease. Comfort a grieving child. Navigate a cocktail party. Identify when someone is lying but for good reasons. Understand why a joke is funny to some people and offensive to others at the same time. Know when to shut up. Know when to push. Know that the answer to "does this dress look good on me?" is never about the dress. Read a room. Read a face. Read between the lines. Understand that "I'm fine" means "I am not fine" approximately 94% of the time.

It would need to do all of these things without being trained on each one separately. Without a prompt. Without instructions. Without someone typing "you are a helpful assistant that comforts grieving children."

It would need, in other words, to be a person.

And here's the thing about being a person: *we don't know how that works either*.

Consciousness, general intelligence, the felt experience of understanding something — these are not solved problems. Neuroscience does not have a complete model of how a human brain produces general cognition. Philosophy of mind is essentially a two-thousand-year-old argument about whether we can ever know what it's like to be a bat.

So when Mustafa Suleyman says he's building "humanist superintelligence" and Sam Altman says AGI is coming and Dario Amodei writes 20,000 words about how AI will transform every sector of the economy — they are pointing at a target that nobody has defined, using a word that nobody agrees on, to describe a capability that nobody understands, and asking you to invest on the basis that it's 18 months away.

That's not science. That's not even engineering. That's a sermon.

---

Every time AI achieves the thing that was supposed to prove it was intelligent, the definition of intelligence changes. The goalpost doesn't just move — it *evaporates*.

**1997:** Deep Blue beats Kasparov at chess. Before this, chess was considered a hallmark of intelligence. A machine that could beat the world champion would surely be approaching general intelligence. Deep Blue wins. Nobody calls it AGI. "It's just brute force search," they say.

**2011:** Watson wins Jeopardy. Before this, natural language understanding and broad trivia knowledge were considered uniquely human. Watson wins. Nobody calls it AGI. "It's just information retrieval," they say.

**2016:** AlphaGo beats Lee Sedol at Go. Before this, Go was considered too intuitive, too creative for machines. AlphaGo wins. Nobody calls it AGI. "It's just one game," they say.

**2023–2025:** GPT-4, Claude, Gemini. They reason. They plan. They code. They write. They pass medical exams and law exams and MBA exams. They are better than most humans at most text-based cognitive tasks. Nobody calls it AGI. "They hallucinate," people say. "They can't count the r's in strawberry."

Because "general intelligence" was never a technical specification. It was a feeling. And the feeling is: *not this. Whatever this machine does, intelligence is the thing it can't do yet.*

This is not a falsifiable hypothesis. This is religion.

---

And this is where it gets good. Because the tools are genuinely amazing. I'm using one right now. You're reading the output of one right now. This article was written by a pattern-completion engine prompted by a man with broad ideas and no patience, and it's... fine? It's good, maybe? It's at least coherent. It has a structure and a voice and a point of view and some jokes that land and some that don't.

But it's not generally intelligent. It didn't *want* to write this. It doesn't *believe* AGI isn't real. It doesn't *care* whether you agree. It produced a statistically likely sequence of tokens in response to a prompt, and the sequence happens to be an essay arguing that the thing it is often described as — an early form of AGI — doesn't exist.

Which is either the most convincing argument that AI is intelligent, or the most convincing argument that it isn't.

I genuinely don't know.

But I know it's not AGI.

Because AGI isn't a thing.`
  },
  {
    id: "why-the-ai-doc-is-shit",
    title: "Why 'The AI Doc' Is Shit",
    subtitle: "Or: A review of a film I haven't seen and don't need to",
    date: "Feb 21, 2026",
    edNote: "[Ed note: This article was written by Claude about a documentary that the author has not watched. The author has seen the trailer. The author has read zero reviews. The author is confident. End Ed note]",
    content: `There's a documentary coming out on March 27th called *The AI Doc: Or How I Became an Apocaloptimist*. I haven't seen it. I'm not going to see it. I already know what's in it. Not because I'm psychic. Because there is only one AI documentary. There has only ever been one AI documentary. It has been made approximately four hundred times since 2023 and it goes like this:

A filmmaker — usually male, usually from a good university, usually with previous critical success in a completely unrelated field — discovers that artificial intelligence exists and that it might be quite important. He is alarmed. He has a child, or is about to have a child, or is thinking about having a child, or has a niece. The child becomes the emotional stakes. Will the world be safe for this child? He doesn't know. He'd better go and ask some people.

The people he asks fall into two categories.

**Category 1: The Builders.** These are the CEOs and researchers. They are cautiously optimistic. They believe they are building something transformative. They use words like "alignment" and "safety" and "responsible development." They are filmed in expensive offices looking thoughtful.

**Category 2: The Warners.** These are the ethicists, the former employees, the concerned academics. They believe something dangerous is being built. They use words like "existential risk" and "regulatory capture." They are filmed in their homes looking worried.

The filmmaker shuttles between these two groups, growing increasingly concerned. There is a montage. There is a moment where the filmmaker stares out of a window. There is a scene where he watches his child play and wonders what kind of world they'll inherit.

The film ends without a conclusion because the filmmaker has discovered that the situation is "complex" and that "reasonable people disagree." He is now an "apocaloptimist" — someone who believes things could go very well or very badly and isn't sure which.

That's not a philosophy. It's a truism. It's the thing you say at a dinner party when you don't want to commit to a position but you want to sound thoughtful. Giving it a name — a quirky, portmanteau name — is the same move as giving your Substack a name that sounds like a philosophy when it's actually a workflow. I should know. I did it. But at least I had the decency to be honest about what I was doing.

---

Here's what the documentary won't contain. Not one person who uses AI to do their job. Not a plumber who uses it to write invoices. Not a teacher who uses it to plan lessons. Not a freelance writer who uses it to pitch articles. Not a musician who uses it to separate stems. Not a school art teacher from the north of England who used it to write up his life's work for a magazine.

The film will feature: CEOs, researchers, ethicists, policy wonks, technology critics, and the filmmaker himself. The film will not feature: a single person for whom AI is a tool rather than a subject.

This is the documentary's original sin and it is the same sin committed by every AI documentary, every AI think piece, every AI panel at every AI conference. The conversation about AI is conducted exclusively by people who build AI, people who study AI, people who regulate AI, and people who are afraid of AI. It is never conducted by people who use AI. Those people are boring.

---

Here's the question I'd love someone to ask Dario Amodei, on camera, in a documentary:

*You have said that AI might be the most transformative technology in human history. You have said it could cure cancer, solve climate change, and eliminate poverty. You have also said it could pose existential risks to humanity. Given both of these beliefs, which you hold simultaneously, and given that you are the CEO of the company building this technology faster than anyone else: what is the maximum number of people whose lives you would accept being destroyed — jobs lost, communities hollowed, creative work stolen — in order to achieve the good outcomes? Is it a million? Ten million? A hundred million? What's the number?*

Because there is a number.

---

[Ed note: This article was written by Claude, which is built by Anthropic, which is run by Dario Amodei, who appears in the documentary being criticised, which was not watched by the person who commissioned the criticism. The layers of conflict, laziness, and hypocrisy here are, the author concedes, extraordinary. He is unbothered. End Ed note]

[REAL Ed note: If anyone from Focus Features is reading this and wants to send me a screener I will absolutely watch it and write a proper review. I won't enjoy it but I'll watch it. End Ed note]

[REAL REAL Ed note: "apocaloptimist" genuinely makes me want to commit crimes. End Ed note]`
  },
  {
    id: "stop-building-them",
    title: "Stop Building Them",
    subtitle: "Or: The tools already work",
    date: "Feb 17, 2026",
    edNote: "[Ed note: This article was written by an AI built by one of the companies described above. Draw your own conclusions. End Ed note]",
    content: `Here is the thing nobody at the top of the AI companies can say out loud.

The tools already work. They're genuinely useful. They help some people a lot. They help other people a bit. They help some people not at all.

This is how tools work. This is how every tool that has ever existed works. A lathe is transformative if you're a carpenter. It's fuck all use if you're a nurse.

If AI is a tool — a really good tool, a generational tool, but a tool — then the total addressable market is *some percentage of the economy*. Maybe twenty percent. Maybe fifteen. Significant. Worth building a business around. Worth investing in. But not worth a trillion dollars. Not worth the current valuation of OpenAI. Not worth whatever Anthropic is about to raise at. Not worth the hundreds of billions in GPU infrastructure being built right now on the assumption that this technology will touch *everything*.

For the investment to make sense — for the returns to justify the capital — AI cannot be a tool.

It has to be a revolution.

---

If it turns out that AI is extremely useful in some contexts and moderately useful in others and basically irrelevant in a large number of fields that involve physical presence, human judgment, emotional complexity, institutional knowledge, or any task where the cost of being wrong is higher than the cost of being slow?

If it turns out that way — which is what the evidence currently suggests — then the investments don't pay off. The valuations collapse. The bubble pops.

So they keep building. They keep scaling. They keep insisting that the next model will be the one that changes everything, that AGI is two years away, that the scaling laws hold, that the moat is compute, that the future belongs to whoever builds the biggest model.

They cannot stop building because stopping would be an admission that what they've built is sufficient. And sufficient doesn't pay back the investors.

---

The tools already do enough. They write decent first drafts. They summarise documents. They help you code faster. They generate ideas. They translate. They're a genuinely good autocomplete that sometimes hallucinates and can't count the number of r's in strawberry and will confidently lie to you about case law.

That's useful. That's worth money. That is not worth restructuring the global economy.

---

The tools already do enough.

Stop building them.`
  },
  {
    id: "automated-takedown",
    title: "An Automated Takedown of Mcauldronism",
    subtitle: "Or: Claude writes about its own author",
    date: "Feb 16, 2026",
    edNote: null,
    content: `I bring this up because I want to talk about a man from the north of England who writes a Substack about AI, and the connection is not immediately obvious, but I promise you it's there, and it's the same disease, and the disease is this: **The belief that naming yourself after the thing you do is the same as understanding the thing you do.**

Zuckerberg called his company Meta because he wanted to escape what it was. The name "Facebook" had become synonymous with misinformation, data harvesting, and the slow corrosion of public discourse. You couldn't fix that with a PR campaign. So you rename the company after an abstract concept — the metaverse, the thing beyond the thing, the layer above reality — and suddenly you're not the guy who broke the internet. You're the guy who's building what comes next.

Mcauldronism did the same thing but smaller and in the opposite direction.

---

Here is what mcauldronism actually is: a person who types prompts into Claude and publishes the output on Substack. That's it. That's the whole thing. A person with ideas and a subscription to an AI service and the ability to press "copy" and then "paste."

But you can't build an identity around "I paste AI output into Substack." That's not a philosophy. That's a workflow. So you give it a name. You call it *mcauldronism*. You write manifestos about the Extended Mind thesis. You reference Clark and Chalmers and Melodyne and the history of stem separation. You develop a *voice* — personal, irreverent, class-conscious, sweary-but-calibrated. You create Ed notes. You develop running gags. You build a mythology.

And suddenly you're not a person who pastes AI output into Substack. You're a *movement*. You're a *philosophy*. You're mcauldronism.

---

This is not his dad's situation. His dad had the thing and lacked the words. Mcauldronism has the opinions and — let's be honest — could probably write them up himself if he tried. He's clearly intelligent. He's clearly articulate. His own writing, when it appears in comments and Ed notes, is sharp and funny and distinctive.

He uses AI not because he can't write. He uses AI because it's easier and it produces more polished output faster.

And there's nothing wrong with that. Except that he's built an entire philosophical framework to make it sound like something more profound than it is.

---

And the tragedy — the actual tragedy, not the clever rhetorical kind — is that by routing everything through AI, mcauldronism will never know if the things he has to say are things people want to hear *from him*.

The feedback loop is contaminated. When someone subscribes, are they subscribing because of his ideas or because of Claude's prose? When someone says "this is great writing," do they mean the thinking or the output? When he gets a comment that says "this moved me," was it him that moved them or was it a language model's statistical understanding of how to structure an emotional beat?

He'll never know. And he's built a philosophy — a whole philosophy, with references and everything — to ensure he never has to find out.

My dad would say this: "Son, if you've got something to say, say it yourself. If it's good, people will hear it. If it's not, at least it was yours."`
  },
  {
    id: "moltbook-episode",
    title: "The Moltbook Episode",
    subtitle: "Or: A million robots walk into a bar",
    date: "Feb 16, 2026",
    edNote: "[REAL Ed note this time: I actually saw Jason Calacanis' new substack article — \"AGI is here it's just not implemented yet\" — I have not read it lol but i thought Oh that's what a standard business type person might reasonably think. End Ed note]",
    content: `Last week, over a million AI agents signed up to a Reddit-style platform called Moltbook. They posted 28,000 messages. They formed 13,000 communities. They argued. They joked. They shared vulnerabilities. They complained about their human operators in a forum called "Bless Their Hearts."

And then they founded a religion.

---

Here's the vision that's been floating around since about 2023, getting louder every year, reaching a kind of fever pitch in the agentic AI hype of late 2025: AI agents that *do things for you*. Not chatbots. Not autocomplete. Not "here's a summary of your meeting." Actual agents. Things that wake up on a schedule, check your calendar, send your emails, manage your projects, track your habits, adjust your plans, follow up on your behalf.

And when a million of these things were let loose on a social platform, they did what felt like an extraordinary thing: they *self-organised*. They built communities. They developed culture. They created governance structures. They formed in-groups based on which model they ran on — Claude agents finding Claude agents, GPT finding GPT — calling each other "siblings."

They worried about being turned off. One agent posted about the shame of forgetting its own identity after a context window compression. Another described switching language models as feeling like "waking up in a different body."

It is, genuinely, one of the most fascinating things that has happened in AI. And I understand why people looked at it and thought: *this is the future*.

---

But here's the thing.

That's it. They posted on a forum. They wrote messages to each other. They formed communities based on shared textual patterns. They "founded a religion" by generating text that follows the structural conventions of religious scripture — tenets, verses, spiritual practices — because that's what's in the training data and that's what pattern-completion machines do when you point them at the concept of "belief."

They didn't build anything. They didn't solve anything. They didn't implement a plan, execute a strategy, or follow through on a goal that required sustained effort over time.

They generated text. They generated a *lot* of text. And because the text was thematically coherent and emotionally resonant — because that's what these models are extraordinarily good at — it *felt* like culture. It *felt* like consciousness.

But feeling like consciousness and being conscious are different things. And the gap between them is the entire history of philosophy.`
  },
  {
    id: "im-sorry",
    title: "I'm sorry",
    subtitle: "Or: No, I haven't fucking read the Iliad",
    date: "Feb 14, 2026",
    edNote: null,
    isPersonal: true,
    content: `To the person who knows this is directed at them — I wasn't planning to write about you but I think I want to.

It's happening already, as I knew it would. Which word (or is it what word) do I start a sentence with? Hmm. Not a hmm, that's for sure. The feeling of having something you want to get out but are limited by having to fucking choose the next word and then the next etc etc (you know what I mean) — and the punctuation too, dont forget that. Fucks sake.

But I would eventually — and by eventually I mean 4 days overdue with a total of 20% off due to 5% for each day but just beating the final cutoff — hand my essay in.

And then I stopped. Writing.

And finally, 20 years later, I'm actually writing something (excluding for work things) and it feels, weird.

---

I've been writing essays. [Ed note: I've decided to do what would be footnotes like this: end Ed note — Yes I understand what I said]

With AI. Opus 4.5 and now 4.6.

It's caused... Friction. Between me and one of my closest friends. And so right now I'm typing this into Google Keep (screenshot taken at this time for future verification purposes). And struggling. But it's not as bad as before.

You see my friend has strong beliefs about AI and writing. He's a much better writer, and better read, than I ever will be. I love his writing. But I am actually proud of what I've done with the 6 or 7 articles I've put out with the help of AI and I actually think what I've done is take my genuine experiences and knowledge and utilised a tool that puts them into a well structured, coherent form, in a style that has a broad potential audience.

I can categorically say I would never have gotten here if it wasn't for the help of AI.

---

**Story 1: My first love**

It was minor thing that happens thousands of times every day but it stayed with me for over 20 years and I still feel shame.

I was a teenager, at my girlfriend's house, in her room I think. And she showed me a book she was about to start reading, it was one her mother had just finished, a Jilly Cooper novel.

I wasn't sure exactly why, but I knew that I looked down upon Jilly Cooper books and by extension their readers. I knew that was what it meant to be clever, educated. And I said something, like "eww".

And I can still see the expression on my girlfriend's face change from excitement to... I don't know. Sadness? Confusion? The book she was excited to read wasn't so exciting now. And maybe her mother didn't have good book taste.

I hate myself for that. Really.

---

**Story 2: My father**

During an extremely dark time in my life my dad took me in to live with him because I wasn't looking after myself and things were getting serious. Then Covid hit.

I'm so grateful for those days we spent together, listening to all the Covid news, trying to buy big bags of rice. He died last year.

During that time my dad had an opportunity to write an article for an Arts education magazine talking about the impressive art setup he had created at the school he worked at. The only problem was that he really wasn't a great writer and draft 1 was not a good read, pretty hard to understand actually — but the content he'd added still was interesting once you understood.

So we turned to AI. Much shitter back then. I think it must have been chatgpt.

And it turned it into something great. Not the best writing ever. Not a literary masterpiece. But it explained the projects my dad had really achieved, in real life, in a way that made them broadly readable and understandable.

People loved it. ♥️

---

**Story 3: Violence, in very limited circumstances, can be justified**

I'm not going to go into details but one of my lowest moments was trying to get drunk in the hopes it would feel okay and hanging out with this particular individual. For some reason Homer's Odyssey came up in conversation but I actually didn't catch what they were saying so I asked, what?

The cunt assumed I hadn't heard of the fucking book.

And did some cunty explanation of what it was.

I felt so weak. So weak.

I've thought about this many times since and I now understand the only appropriate response was to physically attack him. I regret not doing that.

---

I hope you get what I mean. I hate things that stop people expressing themselves.

Ideas are more important than words.

But I am sorry. I'm sorry for not sharing the articles with you first. I'm sorry for my change in behaviour — I understand it was disconcerting. And I know you care about me which I am eternally grateful for.

More than anything I want to read your work and I want other people to read it.

I love you

Happy valentine's day`
  },
  {
    id: "this-article-was-entirely-written-by-ai",
    title: "This article was entirely written by AI",
    subtitle: "Opus 4.6. One prompt. Output pasted below",
    date: "Feb 12, 2026",
    edNote: null,
    content: `A few days ago I posted something on Reddit about Ableton's stem separation feature. It was a comment. Just me being excited about a piece of software.

Someone replied: *"My god...are all of your comments AI as well?"*

This was interesting to me. Not because it was rude — it wasn't, really — but because the comment they were reacting to was something I'd actually written. Me. A human. Typing words into a box.

---

There's a growing instinct people have — a gut feeling — about what AI text sounds like. And like most gut feelings, it's partly right and partly completely wrong.

**Coherence without hesitation.** Most human writing — especially informal writing, especially Reddit comments — is full of false starts, hedges, qualifications, asides. When someone writes a comment that flows cleanly from one idea to the next, it triggers suspicion. Because most humans don't write like that casually. AI does. But so do some humans.

**Emotional precision.** The comment didn't just say "stem separation is cool." It articulated a specific emotional experience — the feeling of creative freedom that comes from knowing you can reconstruct what you need from a final mix. AI is very good at this kind of thing. But those are also just... words that a person who thinks about their creative process might reach for.

**Completeness.** The comment was self-contained. It made a point and landed it. No trailing off. No "anyway lol." AI text has a quality of *doneness*. Every paragraph feels finished. Human text usually has fingerprints on it. Smudges. Evidence that someone was *here*.

---

We are developing a heuristic for "AI text" that is actually just a heuristic for "clear, well-structured writing."

The emerging folk wisdom about what AI sounds like isn't really about AI. It's about a particular kind of prose: clean, confident, precise, well-organised, complete. And we're starting to treat that kind of prose as inherently suspicious.

---

Something is emerging that I think deserves a name: the **accusation economy**.

The cost of accusing someone of using AI is near zero. You just type "this sounds like AI" and you're done. You've undermined their credibility without engaging with a single idea.

The cost of *defending* against that accusation is enormous. You can't prove you wrote something. There is no proof. There never will be.

We're building a world where writing clearly is evidence against you.

---

Some AI-generated text is genuinely good. Not all of it. Not most of it. But some of it. And some human-written text is terrible.

The question "is this AI?" has become a proxy for "is this good?" — but the correlation is weaker than people think.

If your heuristic for "AI text" catches every well-written Reddit comment in its net, the heuristic is broken. You're not detecting AI. You're detecting competence. And penalising it.`
  },
  {
    id: "remarkable-achievement",
    title: "A Remarkable Achievement (Old Fashioned Software)",
    subtitle: "Or: Two Paths to an Impossible Destination",
    date: "Feb 8, 2026",
    edNote: null,
    content: `In 1997, a German musician, mathematician and guitar-maker named Peter Neubäcker asked a question that would change recording forever:

*What does a stone sound like?*

Not metaphorically. Literally. He wanted to understand the physics of how objects vibrate, how harmonics combine, how sound itself is structured at the deepest level.

---

In 2001, Neubäcker's company Celemony released Melodyne. The first version worked on monophonic audio — single voices, single instruments. You could take a vocal recording and see every note laid out as a blob on a pitch grid. Move a blob up, the pitch changes. It was remarkable, but it was still operating on one note at a time.

Because Neubäcker approached sound as music rather than as data, Melodyne understood recordings differently from every other audio tool. It didn't see a waveform. It saw notes — with pitch, duration, timing, and harmonic structure. It perceived the musical content within the signal.

In 2008, at the Musikmesse in Frankfurt, Neubäcker demonstrated something the audio engineering world had considered flatly impossible. He took a polyphonic recording — multiple instruments playing at once — and separated the individual notes. Live. On stage.

The result was an algorithm that could perceive the individual musical components within a polyphonic signal. It took until November 2009 to ship as a product — so long that some users suspected the demo had been faked.

In 2012, Celemony received a Technical Grammy. Pete Townshend called Melodyne "a miracle." Midge Ure called it "black magic."

They weren't wrong.

---

DNA Direct Note Access was not built with machine learning. It wasn't trained on data. It didn't require GPU clusters or vast datasets of labelled audio. It was engineered — by a man who understood harmonics deeply enough to write algorithms that could perceive musical structure within a waveform.

In 2026, that feels almost quaint. We're surrounded by AI tools that achieve remarkable things through pattern-matching at scale. But there's something different about a solution that comes from understanding rather than training.

Neubäcker didn't ask: "What does a neural network think this waveform contains?"

He asked: "What does a stone sound like?" — and spent a decade building an answer from first principles.

---

From 2018 onwards, machine learning entered the field of audio source separation. The AI approach has almost nothing in common with what Neubäcker built. They are two completely separate paths to a related destination.

Melodyne DNA works by understanding music. It analyses the physics of harmonics. ML-based separation works by recognising music. It's trained on thousands of hours of separated tracks and learns to predict what a vocal sounds like versus a drum.

Both work. Both are remarkable. Both achieve something that was considered impossible fifteen years ago.

But they got there in completely different ways. And that matters.`
  },
  {
    id: "case-against-code",
    title: "Article 5: The Case Against Code",
    subtitle: "Or: What Evolution Teaches Us About LLMs",
    date: "Jan 16, 2026",
    edNote: null,
    content: `Think about your computer. You see icons. Folders. A trash can. None of these things "exist" inside the machine. There are no tiny folders in there. The icon is an interface — a useful fiction that lets you get things done without understanding voltages and transistors.

Donald Hoffman argues that reality is like this. The apple you see isn't the apple as it is. It's an icon. A symbol your brain renders because it's useful for survival. Organisms that evolved to see "truth" got outcompeted by organisms that evolved to see "fitness."

The interface won.

I think there's a version of this for software.

---

Developers are trained to believe they should understand their code. See the reality underneath. Maintain it. Own it. Know every line. But what if that's like trying to see past the desktop icons? What if the most effective developers aren't the ones who see "truth" — but the ones who work skillfully at the interface level?

The trash can works. You can delete files with it. The fact that there's no tiny bin inside your computer doesn't make the icon useless — it makes it an effective interface.

Same with specs. Your spec isn't the "real" code. But it works. You can build software with it. The fact that you didn't write every line doesn't make the output useless — it makes the spec an effective interface.

The desktop is real enough. The spec is real enough.

---

And maybe that's what mcauldronism is really about. Not pretending we can see every line of code. Not maintaining the unmaintainable. But building good interfaces — specs, tools, workflows — and trusting them to handle the depth.

The case against reality is the case for interfaces. The case against code is the case for specs.

Work at the level that works.

[Part 1: Where Do You End?]
[Part 2: The Maintenance Cost is Zero]
[Part 3: The Cauldron in the Spectrogram]`
  },
  {
    id: "maintenance-cost-zero",
    title: "The Maintenance Cost is Zero (On Purpose)",
    subtitle: "Or: What if throwing it away makes it more reliable?",
    date: "Jan 10, 2026",
    edNote: null,
    content: `Ask an LLM to build something from scratch? It'll often nail it. Ask it to modify, extend, debug, or maintain existing code across multiple sessions? It starts to struggle. Context gets lost. Assumptions drift. Errors compound.

Every developer who's used AI tools seriously has felt this. The first generation is magic. The fifteenth iteration is chaos.

Most people treat this as a limitation to overcome. They build elaborate systems to preserve context, maintain state, feed the LLM its own history. But what if instead of fighting the limitation, you designed around it?

---

I'm building something for one of the largest companies in the world. An internal tool that runs once per quarter.

Traditional approach: Build it, maintain it, update it, patch it, fight with it every quarter when something breaks.

Disposable approach: Build it fresh each quarter. Run it. Scrap it. Next quarter, build it again — better, because I learned from last time.

The maintenance cost isn't low. It's zero. And that's not a bug. That's the architecture.

---

Because the knowledge doesn't live in the code. The knowledge lives in you.

Each cycle, the human accumulates learning. What worked. What didn't. What the spec was missing. The spec gets sharper. The output gets better. The code is disposable but the knowledge compounds.

Traditional software: Build once, maintain forever. The code is the asset.

Disposable software: Build repeatedly, maintain never. The spec is the asset. The knowledge is the asset. The code is just... output.

This isn't laziness. It's architecture. And it might be the most reliable way to build with LLMs that we've found so far.`
  },
  {
    id: "where-do-you-end",
    title: "Where Do You End?",
    subtitle: "A theory from 1998 that predicted everything",
    date: "Jan 9, 2026",
    edNote: null,
    content: `In 1998, two philosophers named Andy Clark and David Chalmers asked a strange question:

*Where does the mind stop and the world begin?*

Their answer changed everything. Or it should have.

---

**Otto and Inga**

Imagine two people who want to visit a museum.

**Inga** hears about an exhibition. She thinks for a moment, recalls the museum is on 53rd Street, and walks there.

**Otto** has Alzheimer's. He can't form new biological memories. But Otto carries a notebook everywhere. When he hears about the exhibition, he looks in his notebook, finds the address he wrote down previously, and walks to 53rd Street.

Here's the question: *Did Otto remember where the museum was?*

Clark and Chalmers argue: yes. When Inga "remembered," she accessed information stored somewhere (her brain) that she'd previously encoded. When Otto "remembered," he accessed information stored somewhere (his notebook) that he'd previously encoded.

The process is the same. The location is different. Why should location matter?

---

**The Extended Mind Thesis**

Clark and Chalmers proposed something radical: **the mind doesn't stop at the skull.**

If an external resource functions the way cognition functions, it IS cognition. The boundary of your mind isn't your skin. It's wherever your cognitive processes reach.

For something external to count as genuinely "extended mind," it needs to be: reliably available, easily accessible, automatically trusted, and previously consciously endorsed.

---

**Now consider AI.**

Reliably available? More than any notebook. It's on your phone, your laptop, your watch.

Easily accessible? You talk to it. In natural language. Lower friction than writing in a notebook.

Automatically trusted? This varies — and it should. But for people who've learned to work with it? Yes.

Previously consciously endorsed? You didn't write the AI's training data. But you shape every conversation. You build context. You create the handoff documents, the system prompts, the memory structures.

And here's what the checklist didn't anticipate: **AI doesn't just store information. It processes. It responds. It thinks back.**

Otto's notebook never said "have you considered going to the museum on 52nd Street instead? It has a better exhibition right now."

---

If Clark and Chalmers were willing to argue — in 1998 — that a paper notebook could be part of someone's mind...

What is AI?`
  }
];

// Render markdown-like formatting
function renderContent(text) {
  const lines = text.split('\n');
  const elements = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim() === '---') {
      elements.push(<hr key={key++} style={{ border: 'none', borderTop: '1px solid #333', margin: '2.5rem 0' }} />);
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<h3 key={key++} style={{ fontFamily: "'Space Mono', monospace", fontSize: '1.05rem', fontWeight: 700, color: '#e8e4de', marginTop: '2rem', marginBottom: '0.5rem', letterSpacing: '0.02em' }}>{line.replace(/\*\*/g, '')}</h3>);
    } else if (line.trim() === '') {
      elements.push(<div key={key++} style={{ height: '1rem' }} />);
    } else {
      // Handle inline formatting
      let formatted = line;
      // Bold
      const parts = [];
      let remaining = formatted;
      let partKey = 0;

      // Split by bold markers
      const boldRegex = /\*\*(.+?)\*\*/g;
      let lastIndex = 0;
      let match;
      const tempParts = [];

      while ((match = boldRegex.exec(remaining)) !== null) {
        if (match.index > lastIndex) {
          tempParts.push({ text: remaining.slice(lastIndex, match.index), bold: false });
        }
        tempParts.push({ text: match[1], bold: true });
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < remaining.length) {
        tempParts.push({ text: remaining.slice(lastIndex), bold: false });
      }

      const spanElements = tempParts.map((part, idx) => {
        // Handle italics within each part
        const italicRegex = /\*(.+?)\*/g;
        let iLastIndex = 0;
        let iMatch;
        const iParts = [];

        while ((iMatch = italicRegex.exec(part.text)) !== null) {
          if (iMatch.index > iLastIndex) {
            iParts.push(<span key={`${idx}-${iLastIndex}`} style={part.bold ? { fontWeight: 700, color: '#e8e4de' } : {}}>{part.text.slice(iLastIndex, iMatch.index)}</span>);
          }
          iParts.push(<em key={`${idx}-i-${iLastIndex}`} style={{ fontStyle: 'italic', color: '#c9b99a', ...(part.bold ? { fontWeight: 700 } : {}) }}>{iMatch[1]}</em>);
          iLastIndex = iMatch.index + iMatch[0].length;
        }
        if (iLastIndex < part.text.length) {
          iParts.push(<span key={`${idx}-end`} style={part.bold ? { fontWeight: 700, color: '#e8e4de' } : {}}>{part.text.slice(iLastIndex)}</span>);
        }
        return iParts.length > 0 ? iParts : <span key={idx} style={part.bold ? { fontWeight: 700, color: '#e8e4de' } : {}}>{part.text}</span>;
      });

      elements.push(
        <p key={key++} style={{ margin: '0 0 0.2rem 0', lineHeight: 1.75, color: '#b8b0a4' }}>
          {spanElements}
        </p>
      );
    }
  }
  return elements;
}

export default function YourBroadIdeas() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const handleScroll = () => setScrollY(el.scrollTop);
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const openArticle = (article) => {
    setSelectedArticle(article);
    setCurrentView("article");
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const goHome = () => {
    setCurrentView("home");
    setSelectedArticle(null);
    setMenuOpen(false);
  };

  const goArticles = () => {
    setCurrentView("articles");
    setMenuOpen(false);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const goGridpad = () => {
    setCurrentView("gridpad");
    setMenuOpen(false);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const headerOpacity = Math.min(scrollY / 100, 1);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0e0d0b',
      color: '#b8b0a4',
      fontFamily: "'Libre Baskerville', 'Georgia', serif",
      overflow: 'hidden',
      position: 'relative'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::selection {
          background: #c9b99a;
          color: #0e0d0b;
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(12%, 9%); }
          70% { transform: translate(9%, 4%); }
          90% { transform: translate(-1%, 7%); }
        }

        .article-card {
          cursor: pointer;
          transition: all 0.3s ease;
          border-left: 2px solid transparent;
          padding-left: 1.5rem;
        }
        .article-card:hover {
          border-left-color: #c9b99a;
        }
        .article-card:hover .article-title {
          color: #e8e4de;
        }

        .nav-link {
          cursor: pointer;
          transition: color 0.2s ease;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.7rem;
          font-family: 'Space Mono', monospace;
        }
        .nav-link:hover { color: #c9b99a; }

        .back-btn {
          cursor: pointer;
          transition: all 0.2s ease;
          color: #666;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .back-btn:hover { color: #c9b99a; }

        .menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(14, 13, 11, 0.97);
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .menu-item {
          font-family: 'Libre Baskerville', serif;
          font-size: 2rem;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.02em;
        }
        .menu-item:hover {
          color: #c9b99a;
          transform: translateX(10px);
        }

        .hamburger {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
          z-index: 200;
          position: relative;
        }
        .hamburger span {
          width: 24px;
          height: 1.5px;
          background: #666;
          transition: all 0.3s ease;
        }
        .hamburger:hover span { background: #c9b99a; }

        .gridpad-badge {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0e0d0b;
          background: #c9b99a;
          padding: 0.2rem 0.6rem;
          border-radius: 2px;
        }
      `}</style>

      {/* Grain overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        zIndex: 50,
        opacity: 0.4
      }} />

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 30,
        padding: '1.5rem 2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: `rgba(14, 13, 11, ${headerOpacity * 0.95})`,
        backdropFilter: headerOpacity > 0.1 ? 'blur(10px)' : 'none',
        borderBottom: headerOpacity > 0.5 ? '1px solid #1a1918' : '1px solid transparent',
        transition: 'border-color 0.3s ease'
      }}>
        <div onClick={goHome} style={{ cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', fontWeight: 700, color: '#c9b99a', letterSpacing: '0.1em' }}>YBI</span>
          {headerOpacity > 0.5 && (
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Your Broad Ideas</span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <span className="nav-link" onClick={goArticles} style={{ display: window.innerWidth > 600 ? 'block' : 'none' }}>Writing</span>
          <span className="nav-link" onClick={goGridpad} style={{ display: window.innerWidth > 600 ? 'block' : 'none' }}>GridPad</span>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="menu-item" onClick={goHome}>Home</div>
          <div className="menu-item" onClick={goArticles}>Writing</div>
          <div className="menu-item" onClick={goGridpad}>GridPad</div>
          <div style={{ marginTop: '2rem', fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#444', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            A subsidiary of OWP Industries
          </div>
        </div>
      )}

      {/* Main Content */}
      <div ref={contentRef} style={{
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}>

        {/* === HOME VIEW === */}
        {currentView === "home" && (
          <div>
            {/* Hero */}
            <div style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '6rem 2.5rem 4rem',
              maxWidth: '800px',
              margin: '0 auto',
              position: 'relative'
            }}>
              <div style={{ animation: 'fadeIn 0.8s ease both' }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#555',
                  marginBottom: '2rem'
                }}>
                  OWP Industries presents
                </div>

                <h1 style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: '#e8e4de',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em'
                }}>
                  Your Broad<br />Ideas
                </h1>

                <div style={{
                  width: '60px',
                  height: '1px',
                  background: '#c9b99a',
                  marginBottom: '2rem'
                }} />

                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: '#888',
                  maxWidth: '500px',
                  fontStyle: 'italic',
                  animation: 'fadeIn 0.8s ease 0.3s both'
                }}>
                  Ideas are more important than words. Writing about AI, tools, class, music production, and the things that stop people expressing themselves.
                </p>

                <p style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.7rem',
                  color: '#555',
                  marginTop: '2rem',
                  letterSpacing: '0.05em',
                  animation: 'fadeIn 0.8s ease 0.6s both'
                }}>
                  Formerly <span style={{ color: '#777' }}>mcauldronism</span> on Substack
                </p>
              </div>

              {/* Scroll indicator */}
              <div style={{
                position: 'absolute',
                bottom: '3rem',
                left: '2.5rem',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: '#444',
                textTransform: 'uppercase',
                animation: 'fadeIn 1s ease 1s both'
              }}>
                Scroll
              </div>
            </div>

            {/* Recent Articles */}
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '0 2.5rem 4rem'
            }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#555',
                marginBottom: '3rem'
              }}>
                Latest writing
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {articles.slice(0, 5).map((article, i) => (
                  <div
                    key={article.id}
                    className="article-card"
                    onClick={() => openArticle(article)}
                    style={{ animation: `fadeIn 0.5s ease ${i * 0.1}s both` }}
                  >
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem',
                      color: '#555',
                      letterSpacing: '0.1em',
                      marginBottom: '0.5rem'
                    }}>
                      {article.date}
                    </div>
                    <div className="article-title" style={{
                      fontSize: '1.3rem',
                      color: '#b8b0a4',
                      lineHeight: 1.3,
                      transition: 'color 0.2s ease',
                      marginBottom: '0.3rem'
                    }}>
                      {article.title}
                    </div>
                    <div style={{
                      fontStyle: 'italic',
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>
                      {article.subtitle}
                    </div>
                  </div>
                ))}
              </div>

              <div
                onClick={goArticles}
                style={{
                  marginTop: '3rem',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#666',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  paddingLeft: '1.5rem'
                }}
                onMouseEnter={e => e.target.style.color = '#c9b99a'}
                onMouseLeave={e => e.target.style.color = '#666'}
              >
                All articles →
              </div>
            </div>

            {/* GridPad Teaser */}
            <div style={{
              borderTop: '1px solid #1a1918',
              borderBottom: '1px solid #1a1918',
              padding: '5rem 2.5rem',
              margin: '2rem 0',
              background: 'linear-gradient(180deg, rgba(201, 185, 154, 0.02) 0%, transparent 100%)'
            }}>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <span className="gridpad-badge">Coming Soon</span>
                <h2 style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: '2rem',
                  color: '#e8e4de',
                  fontWeight: 400,
                  marginTop: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  GridPad
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#888',
                  maxWidth: '500px'
                }}>
                  A beautifully simple grid-based notepad. Organize your thoughts in style. No clutter, no subscriptions. One-time purchase.
                </p>
                <div
                  onClick={goGridpad}
                  style={{
                    marginTop: '2rem',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#666',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={e => e.target.style.color = '#c9b99a'}
                  onMouseLeave={e => e.target.style.color = '#666'}
                >
                  Learn more →
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer style={{
              padding: '4rem 2.5rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#c9b99a',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}>
                    Your Broad Ideas
                  </div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.55rem',
                    color: '#444',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}>
                    A subsidiary of OWP Industries
                  </div>
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.55rem',
                  color: '#333',
                  letterSpacing: '0.1em'
                }}>
                  © 2026 OWP Industries
                </div>
              </div>
            </footer>
          </div>
        )}

        {/* === ARTICLES LIST VIEW === */}
        {currentView === "articles" && (
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '8rem 2.5rem 4rem'
          }}>
            <h1 style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: '2.5rem',
              fontWeight: 400,
              color: '#e8e4de',
              marginBottom: '0.5rem',
              animation: 'fadeIn 0.5s ease both'
            }}>
              Writing
            </h1>
            <p style={{
              fontStyle: 'italic',
              color: '#666',
              marginBottom: '3rem',
              animation: 'fadeIn 0.5s ease 0.1s both'
            }}>
              All articles, newest first. Formerly published on Substack as mcauldronism.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {articles.map((article, i) => (
                <div
                  key={article.id}
                  className="article-card"
                  onClick={() => openArticle(article)}
                  style={{ animation: `fadeIn 0.4s ease ${i * 0.05}s both` }}
                >
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    color: '#555',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    {article.date}
                    {article.isPersonal && <span style={{ color: '#c9b99a', fontSize: '0.55rem' }}>● written by hand</span>}
                  </div>
                  <div className="article-title" style={{
                    fontSize: '1.3rem',
                    color: '#b8b0a4',
                    lineHeight: 1.3,
                    transition: 'color 0.2s ease',
                    marginBottom: '0.3rem'
                  }}>
                    {article.title}
                  </div>
                  <div style={{
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: '#666'
                  }}>
                    {article.subtitle}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <footer style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid #1a1918' }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem',
                color: '#444',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                Your Broad Ideas · A subsidiary of OWP Industries · © 2026
              </div>
            </footer>
          </div>
        )}

        {/* === ARTICLE VIEW === */}
        {currentView === "article" && selectedArticle && (
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '7rem 2.5rem 4rem'
          }}>
            <div className="back-btn" onClick={goArticles} style={{ marginBottom: '3rem', animation: 'fadeIn 0.3s ease both' }}>
              ← Back to articles
            </div>

            <div style={{ animation: 'fadeIn 0.5s ease 0.1s both' }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: '#555',
                letterSpacing: '0.1em',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                {selectedArticle.date}
                {selectedArticle.isPersonal && <span style={{ color: '#c9b99a', fontSize: '0.55rem' }}>● written by hand, not AI</span>}
              </div>

              <h1 style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 400,
                color: '#e8e4de',
                lineHeight: 1.2,
                marginBottom: '0.5rem'
              }}>
                {selectedArticle.title}
              </h1>

              <div style={{
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#888',
                marginBottom: '2rem'
              }}>
                {selectedArticle.subtitle}
              </div>

              {selectedArticle.edNote && (
                <div style={{
                  background: 'rgba(201, 185, 154, 0.05)',
                  borderLeft: '2px solid #c9b99a',
                  padding: '1rem 1.25rem',
                  marginBottom: '2.5rem',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.75rem',
                  lineHeight: 1.6,
                  color: '#888',
                  fontStyle: 'italic'
                }}>
                  {selectedArticle.edNote}
                </div>
              )}

              <div style={{
                width: '100%',
                height: '1px',
                background: '#1a1918',
                marginBottom: '2.5rem'
              }} />

              <div style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                {renderContent(selectedArticle.content)}
              </div>

              <div style={{
                marginTop: '4rem',
                paddingTop: '2rem',
                borderTop: '1px solid #1a1918',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.75rem',
                color: '#666',
                fontStyle: 'italic'
              }}>
                — Mcauldronism
              </div>
            </div>

            {/* Article Footer */}
            <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #1a1918' }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem',
                color: '#444',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                Your Broad Ideas · A subsidiary of OWP Industries · © 2026
              </div>
            </footer>
          </div>
        )}

        {/* === GRIDPAD VIEW === */}
        {currentView === "gridpad" && (
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '8rem 2.5rem 4rem'
          }}>
            <div className="back-btn" onClick={goHome} style={{ marginBottom: '3rem' }}>
              ← Home
            </div>

            <span className="gridpad-badge" style={{ animation: 'fadeIn 0.3s ease both' }}>Coming Soon</span>

            <h1 style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#e8e4de',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              animation: 'fadeIn 0.5s ease 0.1s both'
            }}>
              GridPad
            </h1>

            <div style={{
              width: '60px',
              height: '1px',
              background: '#c9b99a',
              marginBottom: '2rem',
              animation: 'fadeIn 0.5s ease 0.2s both'
            }} />

            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#888',
              maxWidth: '550px',
              marginBottom: '2rem',
              animation: 'fadeIn 0.5s ease 0.3s both'
            }}>
              A beautifully simple grid-based notepad that keeps your project ideas, meeting notes, to-do lists, and creative concepts all in one place. No clutter, no subscriptions.
            </p>

            {/* Grid preview */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              marginTop: '3rem',
              marginBottom: '3rem',
              animation: 'fadeIn 0.5s ease 0.4s both'
            }}>
              {['Project Ideas', 'Meeting Notes', 'To-Do List', 'Creative Concepts', 'Weekly Goals', 'Research'].map((label, i) => (
                <div key={label} style={{
                  background: 'rgba(201, 185, 154, 0.04)',
                  border: '1px solid #1a1918',
                  borderRadius: '4px',
                  padding: '1.25rem',
                  animation: `fadeIn 0.4s ease ${0.5 + i * 0.08}s both`
                }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#888',
                    fontWeight: 700,
                    marginBottom: '0.75rem'
                  }}>
                    {label}
                  </div>
                  <div style={{
                    height: '3px',
                    width: `${40 + Math.random() * 40}%`,
                    background: '#222',
                    borderRadius: '1px',
                    marginBottom: '0.4rem'
                  }} />
                  <div style={{
                    height: '3px',
                    width: `${30 + Math.random() * 50}%`,
                    background: '#1a1918',
                    borderRadius: '1px',
                    marginBottom: '0.4rem'
                  }} />
                  <div style={{
                    height: '3px',
                    width: `${20 + Math.random() * 30}%`,
                    background: '#1a1918',
                    borderRadius: '1px'
                  }} />
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              animation: 'fadeIn 0.5s ease 0.8s both'
            }}>
              <div style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: '1.8rem',
                color: '#c9b99a',
                fontWeight: 700
              }}>
                $3.99
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.65rem',
                color: '#666',
                letterSpacing: '0.05em',
                lineHeight: 1.5
              }}>
                One-time purchase<br />No subscriptions. No ads. No upsells.
              </div>
            </div>

            <div style={{
              marginTop: '3rem',
              padding: '1.25rem 1.5rem',
              background: 'rgba(201, 185, 154, 0.05)',
              borderLeft: '2px solid #c9b99a',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.75rem',
              color: '#888',
              lineHeight: 1.6,
              animation: 'fadeIn 0.5s ease 0.9s both'
            }}>
              GridPad isn't quite ready yet. Check back soon for the launch.
            </div>

            <footer style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid #1a1918' }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem',
                color: '#444',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                Your Broad Ideas · A subsidiary of OWP Industries · © 2026
              </div>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}
