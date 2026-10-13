import { useEffect, useMemo, useState } from 'react'
import './App.css'

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
]

const relationshipProfiles = {
  'Best friend': {
    mood: 'Playful',
    visual: 'Confetti and scrapbook glow',
    sectionTitle: 'Friendship Appreciation',
    line: {
      en: 'Another year of our legendary chaos, laughter, and memories.',
      ur: 'Hamari dosti ka ek aur rangeen saal mubarak ho.',
      roman: 'Hamari dosti ka aik aur rangeen saal mubarak ho.',
      mix: 'Happy birthday bestie! Hamari dosti hamesha top-tier rahe.',
    },
  },
  'Close friend': {
    mood: 'Warm and sincere',
    visual: 'Bright gradients and floating memories',
    sectionTitle: 'Gratitude for Your Friendship',
    line: {
      en: 'You make ordinary days brighter just by being you.',
      ur: 'Aap ki dosti zindagi ko roshan banati hai.',
      roman: 'Aap ki dosti zindagi ko roshan banati hai.',
      mix: 'You are a gem dost, thank you for always being there.',
    },
  },
  Girlfriend: {
    mood: 'Romantic and intimate',
    visual: 'Rose petals and soft cinematic hearts',
    sectionTitle: 'A Letter of Love',
    line: {
      en: 'You are my calm, my smile, and my favorite story.',
      ur: 'Aap meri muskurahat aur meri sab se khoobsurat kahani hain.',
      roman: 'Aap meri muskurahat aur meri sab se khoobsurat kahani hain.',
      mix: 'You are my forever vibe, dil se happy birthday.',
    },
  },
  Boyfriend: {
    mood: 'Romantic and heartfelt',
    visual: 'Dreamy lights and elegant hearts',
    sectionTitle: 'A Letter of Love',
    line: {
      en: 'With you, every moment feels magical and safe.',
      ur: 'Aap ke saath har lamha khoobsurat lagta hai.',
      roman: 'Aap ke saath har lamha khoobsurat lagta hai.',
      mix: 'You are my safe place, happy birthday meri jaan.',
    },
  },
  Wife: {
    mood: 'Mature and deeply emotional',
    visual: 'Gold accents with warm cinematic light',
    sectionTitle: 'Relationship Appreciation',
    line: {
      en: 'Thank you for filling our life with grace, warmth, and love.',
      ur: 'Aap ne hamari zindagi ko mohabbat aur sukoon se bhar diya hai.',
      roman: 'Aap ne hamari zindagi ko mohabbat aur sukoon se bhar diya hai.',
      mix: 'You are my home and heart, happy birthday meri humsafar.',
    },
  },
  Husband: {
    mood: 'Mature and heartfelt',
    visual: 'Refined gold light and soft glow',
    sectionTitle: 'Relationship Appreciation',
    line: {
      en: 'You make life feel secure, meaningful, and beautiful.',
      ur: 'Aap meri taqat aur meri khushi ka sabab hain.',
      roman: 'Aap meri taqat aur meri khushi ka sabab hain.',
      mix: 'Happy birthday, you are my strongest comfort and best partner.',
    },
  },
  Crush: {
    mood: 'Sweet and subtle',
    visual: 'Dreamy gradients and floating sparkles',
    sectionTitle: 'A Sweet Birthday Note',
    line: {
      en: 'Wishing you a day as lovely and bright as your smile.',
      ur: 'Aap ko janam din ki dil se pyari si mubarakbad.',
      roman: 'Aap ko janam din ki dil se pyari si mubarakbad.',
      mix: 'Just a soft wish: may your birthday be amazing and bright.',
    },
  },
  Mother: {
    mood: 'Respectful, loving, and grateful',
    visual: 'Floral warmth and golden family light',
    sectionTitle: 'A Thank You from the Heart',
    line: {
      en: 'Your prayers, love, and strength are my greatest blessings.',
      ur: 'Ammi, aap ki dua aur mohabbat meri sab se bari daulat hai.',
      roman: 'Ammi, aap ki dua aur mohabbat meri sab se bari daulat hai.',
      mix: 'Happy birthday Ammi, your love is my biggest blessing.',
    },
  },
  Father: {
    mood: 'Respectful and appreciative',
    visual: 'Warm light and legacy-inspired elegance',
    sectionTitle: 'A Tribute of Gratitude',
    line: {
      en: 'Your wisdom and sacrifices shaped my world with love.',
      ur: 'Abbu, aap ki mehnat aur rehnumai meri zindagi ka sahara hai.',
      roman: 'Abbu, aap ki mehnat aur rehnumai meri zindagi ka sahara hai.',
      mix: 'Happy birthday Abbu, your strength is my lifelong inspiration.',
    },
  },
  Sister: {
    mood: 'Affectionate with sibling humor',
    visual: 'Playful scrapbook cards and stars',
    sectionTitle: 'Sibling Appreciation',
    line: {
      en: 'You are equal parts troublemaker, protector, and best friend.',
      ur: 'Tum meri pyari behen ho, ghar ki khushi ho.',
      roman: 'Tum meri pyari behen ho, ghar ki khushi ho.',
      mix: 'Happy birthday sis, tumhare bina ghar adhoora hai.',
    },
  },
  Brother: {
    mood: 'Affectionate with teasing',
    visual: 'Bold motion cards and confetti sparks',
    sectionTitle: 'Sibling Appreciation',
    line: {
      en: 'You bring chaos, laughter, and endless strength to our family.',
      ur: 'Tum mere bhai ho, meri himmat aur meri khushi ho.',
      roman: 'Tum mere bhai ho, meri himmat aur meri khushi ho.',
      mix: 'Happy birthday bro, tumhare jokes bhi aur support bhi best hain.',
    },
  },
  Cousin: {
    mood: 'Playful and family-oriented',
    visual: 'Family collage and lively particles',
    sectionTitle: 'Family Memories',
    line: {
      en: 'You are family by blood and friend by heart.',
      ur: 'Aap ke saath bachpan ki yaadein hamesha taza rehti hain.',
      roman: 'Aap ke saath bachpan ki yaadein hamesha taza rehti hain.',
      mix: 'Happy birthday cuz, you make every family memory better.',
    },
  },
  Son: {
    mood: 'Proud and affectionate',
    visual: 'Warm celebration lights and family glow',
    sectionTitle: 'Proud of You',
    line: {
      en: 'Watching you grow is the most beautiful gift of life.',
      ur: 'Beta, tum par hamein fakhar hai. Janam din mubarak.',
      roman: 'Beta, tum par hamein fakhar hai. Janam din mubarak.',
      mix: 'Happy birthday beta, you are our pride and joy.',
    },
  },
  Daughter: {
    mood: 'Tender and proud',
    visual: 'Soft sparkles and graceful floral accents',
    sectionTitle: 'Proud of You',
    line: {
      en: 'Your smile fills our world with wonder and light.',
      ur: 'Beti, tum hamari zindagi ki roshni ho. Janam din mubarak.',
      roman: 'Beti, tum hamari zindagi ki roshni ho. Janam din mubarak.',
      mix: 'Happy birthday beti, you are our sweetest blessing.',
    },
  },
  Other: {
    mood: 'Adaptable and thoughtful',
    visual: 'Elegant blended gradients and subtle motion',
    sectionTitle: 'A Personalized Birthday Tribute',
    line: {
      en: 'Wishing you joy, growth, and unforgettable happiness.',
      ur: 'Aap ke liye khushiyon bhara janam din aur khoobsurat saal.',
      roman: 'Aap ke liye khushiyon bhara janam din aur khoobsurat saal.',
      mix: 'Wishing you happiness always, happy birthday with warm regards.',
    },
  },
}

const themeOptions = ['Midnight Luxe', 'Rose Glow', 'Royal Gold', 'Ocean Dream', 'Sunset Bloom']
const experienceOptions = ['Short Greeting', 'Emotional Letter', 'Full Cinematic Experience']
const toneOptions = ['Emotional', 'Funny', 'Romantic', 'Elegant', 'Playful']
const languageOptions = ['English', 'Urdu', 'Roman Urdu', 'Mixed']

const initialData = {
  recipientName: '',
  age: '',
  senderName: '',
  relationship: '',
  note: '',
  personality: '',
  memoryText: '',
  language: 'English',
  tone: 'Emotional',
  theme: 'Midnight Luxe',
  experience: 'Full Cinematic Experience',
}

function App() {
  const [started, setStarted] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(initialData)
  const [photos, setPhotos] = useState([])
  const [created, setCreated] = useState(false)

  useEffect(
    () => () => {
      photos.forEach((photo) => URL.revokeObjectURL(photo.url))
    },
    [photos],
  )

  const profile = useMemo(
    () => relationshipProfiles[formData.relationship] ?? relationshipProfiles.Other,
    [formData.relationship],
  )

  const celebrationLine = useMemo(() => {
    const languageMap = {
      English: 'en',
      Urdu: 'ur',
      'Roman Urdu': 'roman',
      Mixed: 'mix',
    }

    return profile.line[languageMap[formData.language] ?? 'en']
  }, [formData.language, profile])

  const coverPhoto = photos.find((photo) => photo.isCover) ?? photos[0]
  const progress = (step / 4) * 100

  const updateField = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateCurrentStep = () => {
    if (step === 1) {
      return formData.recipientName && formData.age && formData.relationship
    }

    if (step === 2) {
      return formData.note.trim().length > 0
    }

    if (step === 4) {
      return formData.theme && formData.experience
    }

    return true
  }

  const nextStep = () => {
    if (!validateCurrentStep()) {
      return
    }

    setStep((prev) => Math.min(4, prev + 1))
  }

  const previousStep = () => {
    setStep((prev) => Math.max(1, prev - 1))
  }

  const handlePhotos = (event) => {
    const selectedFiles = Array.from(event.target.files ?? [])

    if (!selectedFiles.length) {
      return
    }

    setPhotos((prev) => {
      const mapped = selectedFiles.map((file) => ({
        id: `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(16).slice(2)}`,
        file,
        url: URL.createObjectURL(file),
        caption: '',
        isCover: false,
      }))

      if (!prev.length && mapped[0]) {
        mapped[0].isCover = true
      }

      return [...prev, ...mapped]
    })

    event.target.value = ''
  }

  const removePhoto = (id) => {
    setPhotos((prev) => {
      const found = prev.find((photo) => photo.id === id)
      if (found) {
        URL.revokeObjectURL(found.url)
      }

      const remaining = prev.filter((photo) => photo.id !== id)
      if (remaining.length > 0 && !remaining.some((photo) => photo.isCover)) {
        remaining[0] = { ...remaining[0], isCover: true }
      }

      return remaining
    })
  }

  const movePhoto = (index, direction) => {
    setPhotos((prev) => {
      const target = index + direction
      if (target < 0 || target >= prev.length) {
        return prev
      }

      const updated = [...prev]
      ;[updated[index], updated[target]] = [updated[target], updated[index]]
      return updated
    })
  }

  const setCover = (id) => {
    setPhotos((prev) => prev.map((photo) => ({ ...photo, isCover: photo.id === id })))
  }

  const updateCaption = (id, caption) => {
    setPhotos((prev) => prev.map((photo) => (photo.id === id ? { ...photo, caption } : photo)))
  }

  const createWish = () => {
    if (!validateCurrentStep()) {
      return
    }

    setCreated(true)
  }

  const restart = () => {
    setCreated(false)
    setStarted(false)
    setStep(1)
    setFormData(initialData)
    photos.forEach((photo) => URL.revokeObjectURL(photo.url))
    setPhotos([])
  }

  return (
    <div className={`app theme-${formData.theme.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="background-orbs" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {!started && (
        <section className="landing glass-panel">
          <p className="badge">Wishora</p>
          <h1>Make Their Birthday Unforgettable.</h1>
          <p className="subtitle">
            Turn your favorite memories into a birthday experience they&apos;ll never forget.
          </p>
          <button className="primary-btn" onClick={() => setStarted(true)} type="button">
            Create a Birthday Wish
          </button>
          <div className="preview-grid">
            <article>
              <h3>Friendship Pop</h3>
              <p>Playful memories, confetti bursts, and inside-joke energy.</p>
            </article>
            <article>
              <h3>Romantic Aura</h3>
              <p>Soft glow letters, dreamy transitions, and heartfelt words.</p>
            </article>
            <article>
              <h3>Family Grace</h3>
              <p>Warm tributes, floral accents, and sincere appreciation.</p>
            </article>
          </div>
        </section>
      )}

      {started && !created && (
        <section className="wizard glass-panel">
          <header>
            <h2>Create Wishora Experience</h2>
            <p>Step {step} of 4</p>
            <div className="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={progress}>
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </header>

          {step === 1 && (
            <div className="step-content">
              <h3>The Person</h3>
              <label>
                Recipient Name
                <input name="recipientName" value={formData.recipientName} onChange={updateField} placeholder="Ayesha Khan" />
              </label>
              <label>
                Upcoming Age
                <input name="age" type="number" min="1" value={formData.age} onChange={updateField} placeholder="25" />
              </label>
              <label>
                Sender Name (optional)
                <input name="senderName" value={formData.senderName} onChange={updateField} placeholder="From Ali" />
              </label>
              <p className="label">Relationship</p>
              <div className="relationship-grid">
                {relationships.map((item) => (
                  <button
                    className={formData.relationship === item ? 'relationship-card active' : 'relationship-card'}
                    key={item}
                    onClick={() => setFormData((prev) => ({ ...prev, relationship: item }))}
                    type="button"
                  >
                    <strong>{item}</strong>
                    <span>{relationshipProfiles[item].mood}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-content">
              <h3>The Message</h3>
              <label>
                Personal Birthday Note
                <textarea
                  name="note"
                  rows="4"
                  value={formData.note}
                  onChange={updateField}
                  placeholder="Tell them why they matter..."
                ></textarea>
              </label>
              <label>
                Personality Details (optional)
                <input name="personality" value={formData.personality} onChange={updateField} placeholder="Kind, funny, artistic..." />
              </label>
              <label>
                Favorite Memory / Inside Joke (optional)
                <input name="memoryText" value={formData.memoryText} onChange={updateField} placeholder="That road trip in Murree..." />
              </label>
              <div className="dual-grid">
                <label>
                  Preferred Language
                  <select name="language" value={formData.language} onChange={updateField}>
                    {languageOptions.map((language) => (
                      <option key={language} value={language}>
                        {language}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Tone Selector
                  <select name="tone" value={formData.tone} onChange={updateField}>
                    {toneOptions.map((tone) => (
                      <option key={tone} value={tone}>
                        {tone}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-content">
              <h3>Memories</h3>
              <label className="upload-box">
                Upload Memory Photos (optional)
                <input accept="image/*" multiple onChange={handlePhotos} type="file" />
              </label>

              {!photos.length && (
                <p className="empty-state">No photos yet. You can skip this step and continue.</p>
              )}

              {photos.length > 0 && (
                <div className="photo-list">
                  {photos.map((photo, index) => (
                    <article className="photo-card" key={photo.id}>
                      <img src={photo.url} alt="Uploaded birthday memory" />
                      <label>
                        Caption
                        <input
                          value={photo.caption}
                          onChange={(event) => updateCaption(photo.id, event.target.value)}
                          placeholder="Write a memory..."
                        />
                      </label>
                      <div className="photo-actions">
                        <button onClick={() => movePhoto(index, -1)} type="button">
                          ↑
                        </button>
                        <button onClick={() => movePhoto(index, 1)} type="button">
                          ↓
                        </button>
                        <button onClick={() => setCover(photo.id)} type="button">
                          {photo.isCover ? 'Cover ✓' : 'Set Cover'}
                        </button>
                        <button onClick={() => removePhoto(photo.id)} type="button">
                          Remove
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="step-content">
              <h3>Choose the Experience</h3>
              <div className="dual-grid">
                <label>
                  Visual Theme
                  <select name="theme" value={formData.theme} onChange={updateField}>
                    {themeOptions.map((theme) => (
                      <option key={theme} value={theme}>
                        {theme}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Experience Type
                  <select name="experience" value={formData.experience} onChange={updateField}>
                    {experienceOptions.map((experience) => (
                      <option key={experience} value={experience}>
                        {experience}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="summary-card">
                <h4>Final Summary</h4>
                <p>
                  <strong>{formData.recipientName}</strong> is turning <strong>{formData.age}</strong>. Relationship:
                  <strong> {formData.relationship || 'Not selected'}</strong>
                </p>
                <p>Language: {formData.language} · Tone: {formData.tone} · Theme: {formData.theme}</p>
                <p>Photos: {photos.length} uploaded</p>
              </div>
            </div>
          )}

          <footer className="wizard-nav">
            <button disabled={step === 1} onClick={previousStep} type="button">
              Back
            </button>
            {step < 4 ? (
              <button className="primary-btn" onClick={nextStep} type="button">
                Next
              </button>
            ) : (
              <button className="primary-btn" onClick={createWish} type="button">
                Generate Wishora Experience
              </button>
            )}
          </footer>
        </section>
      )}

      {created && (
        <section className="celebration glass-panel">
          <p className="badge">{formData.theme}</p>
          <h2>
            Happy {formData.age}th Birthday, {formData.recipientName}! 🎉
          </h2>
          <p className="subtitle">{celebrationLine}</p>
          <div className="celebration-grid">
            <article>
              <h3>{profile.sectionTitle}</h3>
              <p>{formData.note}</p>
            </article>
            <article>
              <h3>Tone & Visual Direction</h3>
              <p>
                {profile.mood} · {formData.tone} tone · {profile.visual}
              </p>
            </article>
            <article>
              <h3>Message From {formData.senderName || 'Your Loved One'}</h3>
              <p>{formData.personality || 'Every quality you carry makes life more beautiful.'}</p>
            </article>
          </div>

          {formData.memoryText && (
            <blockquote>
              “{formData.memoryText}”
            </blockquote>
          )}

          {coverPhoto && (
            <div className="cover-showcase">
              <h3>Cover Memory</h3>
              <img src={coverPhoto.url} alt="Selected cover birthday memory" />
              <p>{coverPhoto.caption || 'A memory worth celebrating forever.'}</p>
            </div>
          )}

          {photos.length > 1 && (
            <div className="gallery-row">
              {photos.map((photo) => (
                <figure key={photo.id}>
                  <img src={photo.url} alt="Birthday memory gallery photo" />
                  <figcaption>{photo.caption || 'Precious memory'}</figcaption>
                </figure>
              ))}
            </div>
          )}

          <button className="primary-btn" onClick={restart} type="button">
            Create Another Wish
          </button>
        </section>
      )}
    </div>
  )
}

export default App
