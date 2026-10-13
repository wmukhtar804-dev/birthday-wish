const relationships = [
  'Best friend',
  'Close friend',
  'Girlfriend',
  'Boyfriend',
  'Wife',
  'Husband',
  'Crush',
  'Mother',
  'Father',
  'Sister',
  'Brother',
  'Cousin',
  'Son',
  'Daughter',
  'Other',
];

const tones = ['emotional', 'funny', 'romantic', 'elegant', 'playful'];

const relationshipProfiles = {
  'Best friend': {
    theme: 'fun',
    vibe: 'Confetti Scrapbook',
    sectionTitle: 'Friendship Appreciation',
    letter: 'You are my chaos partner, my biggest support, and my favorite memory collector.',
    suggestions: 'Music vibe: upbeat pop, nostalgic friendship tracks',
  },
  'Close friend': {
    theme: 'fun',
    vibe: 'Color Splash Memory',
    sectionTitle: 'Friendship Appreciation',
    letter: 'Thank you for always showing up with kindness, laughter, and honesty.',
    suggestions: 'Music vibe: warm indie and friendship anthems',
  },
  Girlfriend: {
    theme: 'romantic',
    vibe: 'Starlight Romance',
    sectionTitle: 'Love Letter',
    letter: 'Every moment with you feels like poetry wrapped in light. Happy birthday to my heart.',
    suggestions: 'Music vibe: soft acoustic love songs, dreamy cinematic instrumentals',
  },
  Boyfriend: {
    theme: 'romantic',
    vibe: 'Moonlit Romance',
    sectionTitle: 'Love Letter',
    letter: 'Your presence is my comfort and courage. Today we celebrate you and your beautiful soul.',
    suggestions: 'Music vibe: soulful slow tracks and romantic cinematic tunes',
  },
  Wife: {
    theme: 'elegant',
    vibe: 'Golden Elegance',
    sectionTitle: 'Relationship Appreciation',
    letter: 'You make ordinary days extraordinary. Thank you for your love, strength, and grace.',
    suggestions: 'Music vibe: timeless romantic classics and elegant piano themes',
  },
  Husband: {
    theme: 'elegant',
    vibe: 'Royal Warmth',
    sectionTitle: 'Relationship Appreciation',
    letter: 'You are home, friendship, and love in one beautiful person. Happy birthday, always.',
    suggestions: 'Music vibe: warm ballads and heartfelt cinematic themes',
  },
  Crush: {
    theme: 'romantic',
    vibe: 'Dreamy Soft Glow',
    sectionTitle: 'A Sweet Note',
    letter: 'Wishing you the brightest birthday ever. You deserve joy, smiles, and beautiful moments.',
    suggestions: 'Music vibe: gentle lo-fi, mellow pop, soft dreamy ambience',
  },
  Mother: {
    theme: 'warm',
    vibe: 'Golden Family Tribute',
    sectionTitle: 'Gratitude Note',
    letter: 'Your love shaped my world. Thank you for every prayer, hug, and sacrifice.',
    suggestions: 'Music vibe: emotional family melodies and soft orchestral warmth',
  },
  Father: {
    theme: 'warm',
    vibe: 'Heritage Tribute',
    sectionTitle: 'Gratitude Note',
    letter: 'Your strength and guidance built the path I walk today. Thank you for everything.',
    suggestions: 'Music vibe: soulful instrumentals and respectful tribute pieces',
  },
  Sister: {
    theme: 'fun',
    vibe: 'Sibling Scrapbook',
    sectionTitle: 'Sibling Appreciation',
    letter: 'You are equal parts mischief and love, and life is brighter because of you.',
    suggestions: 'Music vibe: playful throwbacks and feel-good songs',
  },
  Brother: {
    theme: 'fun',
    vibe: 'Sibling Adventure',
    sectionTitle: 'Sibling Appreciation',
    letter: 'Thanks for all the laughs, fights, and unforgettable childhood memories.',
    suggestions: 'Music vibe: upbeat throwbacks and nostalgic tracks',
  },
  Cousin: {
    theme: 'fun',
    vibe: 'Family Fun Reel',
    sectionTitle: 'Family Bond Note',
    letter: 'From childhood memories to today, you have always brought joy into our family.',
    suggestions: 'Music vibe: happy family and celebration tracks',
  },
  Son: {
    theme: 'warm',
    vibe: 'Proud Parent Celebration',
    sectionTitle: 'Proud Note',
    letter: 'Watching you grow is the greatest gift. Keep shining and believing in yourself.',
    suggestions: 'Music vibe: uplifting and hopeful tunes',
  },
  Daughter: {
    theme: 'warm',
    vibe: 'Shining Star Celebration',
    sectionTitle: 'Proud Note',
    letter: 'You are loved beyond words. May your new year be full of confidence and happiness.',
    suggestions: 'Music vibe: heartfelt family songs and gentle inspiration',
  },
  Other: {
    theme: 'cinematic',
    vibe: 'Custom Celebration Story',
    sectionTitle: 'Special Note',
    letter: 'Today is about celebrating your beautiful journey, your smile, and your dreams.',
    suggestions: 'Music vibe: cinematic uplifting instrumentals',
  },
};

const languagePack = {
  english: {
    heading: (name) => `Happy Birthday, ${name}!`,
    blessing: 'May this year bring joy, growth, and unforgettable memories.',
    from: (name) => (name ? `With love, ${name}` : 'Made with love from Wishora'),
  },
  urdu: {
    heading: (name) => `${name} کو سالگرہ مبارک!`,
    blessing: 'اللہ کرے یہ سال خوشیوں، کامیابی اور محبت سے بھر جائے۔',
    from: (name) => (name ? `آپ کا، ${name}` : 'Wishora کی طرف سے محبت کے ساتھ'),
  },
  roman: {
    heading: (name) => `Happy Birthday ${name}!`,
    blessing: 'Dua hai yeh saal tumhare liye khushiyan aur kamyabi le kar aaye.',
    from: (name) => (name ? `Pyar ke sath, ${name}` : 'Wishora ki taraf se pyar ke sath'),
  },
  mix: {
    heading: (name) => `Happy Birthday, ${name}! سالگرہ مبارک`,
    blessing: 'May your year be magical, khushiyon se bhara hua, and full of barakah.',
    from: (name) => (name ? `With love / pyar ke sath, ${name}` : 'Wishora se pyar aur duaon ke sath'),
  },
};

const relationshipGrid = document.getElementById('relationship-grid');
const toneGrid = document.getElementById('tone-grid');
const steps = [...document.querySelectorAll('.step')];
const progressFill = document.getElementById('progress-fill');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const createBtn = document.getElementById('create-btn');
const form = document.getElementById('wish-form');
const summary = document.getElementById('final-summary');
const photoInput = document.getElementById('photo-input');
const photoList = document.getElementById('photo-list');
const experience = document.getElementById('experience');
const particleLayer = document.getElementById('landing-particles');

const state = {
  step: 1,
  photos: [],
};

function initChoices() {
  relationships.forEach((relationship) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'choice-card';
    card.dataset.value = relationship;
    card.textContent = relationship;
    card.addEventListener('click', () => selectChoice(card, 'relationship'));
    relationshipGrid.appendChild(card);
  });

  tones.forEach((tone) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'choice-card';
    card.dataset.value = tone;
    card.textContent = tone[0].toUpperCase() + tone.slice(1);
    card.addEventListener('click', () => selectChoice(card, 'tone'));
    toneGrid.appendChild(card);
  });
}

function selectChoice(card, key) {
  const container = key === 'relationship' ? relationshipGrid : toneGrid;
  [...container.querySelectorAll('.choice-card')].forEach((c) => c.classList.remove('active'));
  card.classList.add('active');
  document.getElementById(key).value = card.dataset.value;
}

function setStep(step) {
  state.step = Math.max(1, Math.min(4, step));
  steps.forEach((s) => s.classList.toggle('active', Number(s.dataset.step) === state.step));
  progressFill.style.width = `${(state.step / 4) * 100}%`;
  backBtn.classList.toggle('hidden', state.step === 1);
  nextBtn.classList.toggle('hidden', state.step === 4);
  createBtn.classList.toggle('hidden', state.step !== 4);
  if (state.step === 4) buildSummary();
}

function validateStep(step) {
  const current = document.querySelector(`.step[data-step="${step}"]`);
  const requiredFields = [...current.querySelectorAll('[required]')];
  for (const field of requiredFields) {
    if (!field.value) {
      field.reportValidity();
      return false;
    }
  }
  return true;
}

function buildSummary() {
  const formData = new FormData(form);
  summary.innerHTML = `
    <strong>Final Review</strong><br />
    Recipient: <b>${formData.get('recipientName') || '-'}</b> turning <b>${formData.get('age') || '-'}</b><br />
    Relationship: <b>${formData.get('relationship') || '-'}</b> | Tone: <b>${formData.get('tone') || '-'}</b><br />
    Language: <b>${formData.get('language') || '-'}</b> | Theme: <b>${formData.get('theme') || 'auto'}</b><br />
    Memories added: <b>${state.photos.length}</b>
  `;
}

function renderPhotos() {
  photoList.innerHTML = '';
  state.photos.forEach((photo, index) => {
    const item = document.createElement('article');
    item.className = 'photo-item';
    item.innerHTML = `
      <img src="${photo.url}" alt="Memory ${index + 1}" />
      <div>
        <label>Caption
          <input type="text" value="${photo.caption || ''}" data-action="caption" data-index="${index}" placeholder="Optional caption" />
        </label>
        <div class="photo-controls">
          <button type="button" data-action="cover" data-index="${index}">${photo.cover ? 'Cover Photo ✓' : 'Set Cover'}</button>
          <button type="button" data-action="up" data-index="${index}">Move Up</button>
          <button type="button" data-action="down" data-index="${index}">Move Down</button>
          <button type="button" data-action="remove" data-index="${index}">Remove</button>
        </div>
      </div>
    `;
    photoList.appendChild(item);
  });
}

photoInput.addEventListener('change', (event) => {
  const files = [...event.target.files];
  files.forEach((file) => {
    const url = URL.createObjectURL(file);
    state.photos.push({ file, url, caption: '', cover: state.photos.length === 0 });
  });
  renderPhotos();
  photoInput.value = '';
});

photoList.addEventListener('click', (event) => {
  const action = event.target.dataset.action;
  const index = Number(event.target.dataset.index);
  if (!action && action !== '') return;

  if (action === 'remove') {
    URL.revokeObjectURL(state.photos[index].url);
    state.photos.splice(index, 1);
    if (state.photos.length > 0 && !state.photos.some((p) => p.cover)) state.photos[0].cover = true;
  }

  if (action === 'cover') {
    state.photos.forEach((p) => (p.cover = false));
    if (state.photos[index]) state.photos[index].cover = true;
  }

  if (action === 'up' && index > 0) {
    [state.photos[index - 1], state.photos[index]] = [state.photos[index], state.photos[index - 1]];
  }

  if (action === 'down' && index < state.photos.length - 1) {
    [state.photos[index + 1], state.photos[index]] = [state.photos[index], state.photos[index + 1]];
  }

  renderPhotos();
});

photoList.addEventListener('input', (event) => {
  if (event.target.dataset.action === 'caption') {
    const index = Number(event.target.dataset.index);
    state.photos[index].caption = event.target.value;
  }
});

function resolveTheme(selection, relationship) {
  if (selection !== 'auto') return selection;
  return relationshipProfiles[relationship]?.theme || 'cinematic';
}

function celebrateBurst(target) {
  const total = 40;
  for (let i = 0; i < total; i += 1) {
    const spark = document.createElement('span');
    spark.className = 'particle';
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 100}%`;
    spark.style.background = `hsl(${Math.random() * 360} 90% 75%)`;
    spark.style.animationDuration = `${2 + Math.random() * 3}s`;
    target.appendChild(spark);
    setTimeout(() => spark.remove(), 4500);
  }
}

function renderExperience(data) {
  const profile = relationshipProfiles[data.relationship] || relationshipProfiles.Other;
  const language = languagePack[data.language] || languagePack.english;
  const theme = resolveTheme(data.theme, data.relationship);

  document.body.classList.remove('theme-romantic', 'theme-fun', 'theme-elegant', 'theme-warm', 'theme-cinematic');
  document.body.classList.add(`theme-${theme}`);

  const toneSentence = {
    emotional: 'This story is wrapped in gratitude, love, and heartfelt emotion.',
    funny: 'This birthday vibe is playful, smile-heavy, and full of laughter.',
    romantic: 'This celebration glows with gentle romance and meaningful affection.',
    elegant: 'This message is polished, sincere, and timelessly elegant.',
    playful: 'This birthday scene is cheerful, lively, and full of delight.',
  };

  const greetingStyle = {
    short: 'A beautiful short greeting crafted just for this birthday moment.',
    letter: 'A long-form letter style experience to express deep emotion and care.',
    cinematic: 'A full cinematic memory journey with visuals, feelings, and celebration energy.',
  };

  const cover = state.photos.find((photo) => photo.cover) || state.photos[0];

  const galleryHtml = state.photos.length
    ? `<h4>Memory Gallery</h4><div class="memory-gallery">${state.photos
        .map(
          (photo, index) => `
            <figure class="memory-card">
              <img src="${photo.url}" alt="Memory ${index + 1}" />
              <p>${photo.caption || 'A beautiful memory moment.'}${photo.cover ? ' ⭐ Cover' : ''}</p>
            </figure>
          `,
        )
        .join('')}</div>`
    : '<p class="small-note">No photos were uploaded, so Wishora focused on your words and emotions.</p>';

  experience.innerHTML = `
    <div class="experience-hero">
      <span class="theme-tag">${profile.vibe}</span>
      <h2>${language.heading(data.recipientName)}</h2>
      <p>Turning ${data.age} • ${data.relationship}</p>
      <p>${language.blessing}</p>
    </div>

    ${cover ? `<div class="section-block"><strong>Cover Memory:</strong><br/><img src="${cover.url}" alt="Cover memory" style="width:100%;max-height:290px;object-fit:cover;border-radius:0.85rem;margin-top:0.6rem;" /></div>` : ''}

    <div class="message-cards">
      <article class="message-card">
        <h4>Your Personal Message</h4>
        <p>${data.personalNote}</p>
      </article>
      <article class="message-card">
        <h4>Tone</h4>
        <p>${toneSentence[data.tone] || toneSentence.emotional}</p>
      </article>
      <article class="message-card">
        <h4>Experience Type</h4>
        <p>${greetingStyle[data.experienceType]}</p>
      </article>
      <article class="message-card">
        <h4>Music Suggestion</h4>
        <p>${profile.suggestions}</p>
      </article>
    </div>

    <section class="section-block">
      <h4>${profile.sectionTitle}</h4>
      <p>${profile.letter}</p>
      ${data.personality ? `<p><strong>Their Personality:</strong> ${data.personality}</p>` : ''}
      ${data.memory ? `<p><strong>Favorite Memory:</strong> ${data.memory}</p>` : ''}
      <p>${language.from(data.senderName)}</p>
    </section>

    <section class="section-block">
      ${galleryHtml}
    </section>
  `;

  if (data.favoriteColor) {
    experience.style.boxShadow = `0 20px 60px color-mix(in srgb, ${data.favoriteColor} 45%, rgba(0,0,0,.65))`;
    experience.style.borderColor = data.favoriteColor;
  } else {
    experience.style.boxShadow = '';
    experience.style.borderColor = '';
  }

  experience.classList.remove('hidden');
  experience.scrollIntoView({ behavior: 'smooth', block: 'start' });
  celebrateBurst(experience);
}

function createLandingParticles() {
  for (let i = 0; i < 70; i += 1) {
    const dot = document.createElement('span');
    dot.className = 'particle';
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.animationDuration = `${5 + Math.random() * 12}s`;
    dot.style.animationDelay = `${Math.random() * 8}s`;
    dot.style.opacity = `${0.2 + Math.random() * 0.5}`;
    particleLayer.appendChild(dot);
  }
}

nextBtn.addEventListener('click', () => {
  if (!validateStep(state.step)) return;
  setStep(state.step + 1);
});

backBtn.addEventListener('click', () => setStep(state.step - 1));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateStep(4)) return;
  const formData = Object.fromEntries(new FormData(form).entries());
  renderExperience(formData);
});

initChoices();
setStep(1);
createLandingParticles();
