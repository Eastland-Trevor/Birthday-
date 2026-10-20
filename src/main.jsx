import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Heart,
  ArrowDown,
  LockKeyhole,
  ImagePlus,
  Music2,
  Sparkles,
  Gift,
  MapPin,
} from "lucide-react";
import "./styles.css";

const cuteThings = [
  [
    "01",
    "Your goofy side",
    "I love how you can be completely unserious, I was once blamed for infecting you, but you built this shit, brick by brick.",
  ],
  [
    "02",
    "Your kindness",
    "You have a softness in you that I genuinely admire.",
  ],
  [
    "03",
    "How considerate you are",
    "You notice the little things, and that says a lot about your heart.",
  ],
  [
    "04",
    "Your drive",
    "Your work so hard for the things you want to achieve, it's attractive.",
  ],
  [
    "05",
    "Your gorgeous face",
    "I mean... let's not pretend I haven't noticed. You are ridiculously beautiful.",
  ],
  [
    "06",
    "Your personality",
    "There is something about the way you are that keeps pulling me closer.",
  ],
  [
    "07",
    "Your random moments",
    "The unexpected things you say and do are some of my favourite memories of you.",
  ],
  [
    "08",
    "How comfortable you make me feel",
    "You don't make me feel like there's anything I can't tell you.",
  ],
  [
    "09",
    "Your little habits",
    "The tiny things you probably don't think twice about are the things I remember.",
  ],
  [
    "10",
    "Simply you",
    "After everything, I think my favourite thing is that you are just... Mama.",
  ],
];

const memories = [
  {
    title: "If beauty were a person",
    hint: "If beauty were a person.",
    image: "/images/WhatsApp%20Image%202026-10-19%20at%2016.33.31%20(1).jpeg",
  },
  {
    title: "I love how aesthetic this is",
    hint: "I love how aesthetic this is.",
    image: "/images/WhatsApp%20Image%202026-10-19%20at%2016.33.31%20(2).jpeg",
  },
  {
    title: "A moment to remember",
    hint: "You just fine anyhow, tufiakwa.",
    image: "/images/WhatsApp%20Image%202026-10-19%20at%2016.44.48%20(2).jpeg",
  },
  {
    title: "My goofy babyyyyy",
    hint: "My goofy babyyyyy😂.",
    image: "/images/WhatsApp%20Image%202026-10-19%20at%2016.44.48%20(1).jpeg",
    mobileFit: true,
  },
];

const heroImage = "/images/WhatsApp%20Image%202026-10-19%20at%2016.33.31.jpeg";

function App() {
  const [started, setStarted] = useState(false);
  const [openCard, setOpenCard] = useState(null);
  const [musicOn, setMusicOn] = useState(false);
  const [musicError, setMusicError] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [letterOpened, setLetterOpened] = useState(false);
  const [letterAnimationKey, setLetterAnimationKey] = useState(0);
  const audioRef = useRef(null);
  const letterRef = useRef(null);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setMusicError(false);
      } catch {
        setMusicError(true);
      }
    } else {
      audio.pause();
    }
  };

  useEffect(() => {
    if (!started || !letterRef.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setLetterVisible(true);
      setLetterAnimationKey((key) => key + 1);
      return;
    }

    let wasIntersecting = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasIntersecting) {
          wasIntersecting = true;
          setLetterVisible(true);
          setLetterAnimationKey((key) => key + 1);
        } else if (!entry.isIntersecting) {
          wasIntersecting = false;
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(letterRef.current);
    return () => observer.disconnect();
  }, [started]);

  if (!started) {
    return (
      <main className="landing">
        <div className="grain" />
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="landing-content">
          <div className="eyebrow">
            <Heart size={14} fill="currentColor" /> A little something for you
          </div>
          <h1>
            For <span>Mama</span>.
          </h1>
          <p className="landing-sub">
            I couldn't be there to celebrate with you the way I wanted to... so
            I made you a little corner of the internet instead.
          </p>
          <button className="primary-btn" onClick={() => setStarted(true)}>
            Open it <Heart size={18} fill="currentColor" />
          </button>
          <p className="tiny">Made with love • Nigeria → UK</p>
        </div>
      </main>
    );
  }

  return (
    <div className="site">
      <nav>
        <div className="nav-logo">
          M<span>♥</span>
        </div>
      </nav>

      <section className="hero section">
        <div className="hero-copy reveal">
          <div className="eyebrow">21 • 10 • 2026</div>
          <h1>
            Happy birthday,
            <br />
            <em>Mama.</em>
          </h1>
          <p>
            Twenty looks good on you already. And although I wish I could
            celebrate you from a little closer, I wanted to give you something
            that came directly from me.
          </p>
          <button className="text-btn" onClick={() => scrollTo("story")}>
            Start the story <ArrowDown size={18} />
          </button>
        </div>
        <div className="hero-card">
          <div className="photo-placeholder">
            {heroImage ? (
              <img
                className="photo-image"
                src={heroImage}
                alt="A favourite photo of Mama"
              />
            ) : (
              <>
                <ImagePlus size={30} />
                <span>YOUR PHOTO HERE</span>
                <small>
                  Add a photo in public/images and set heroImage in src/main.jsx
                </small>
              </>
            )}
          </div>
          <div className="photo-tag">birthday girl ♥</div>
        </div>
      </section>

      <section id="story" className="section story">
        <div className="section-heading">
          <span>01 / THE BEGINNING</span>
          <h2>
            Funny how we
            <br />
            <em>ended up here.</em>
          </h2>
        </div>
        <div className="story-grid">
          <div className="story-line" />
          <article>
            <div className="dot" />
            <span>BACK THEN</span>
            <h3>Same school. Different worlds.</h3>
            <p>
              We attended the same secondary school, but we didn't exactly spend
              our days talking to each other. Life had other plans.
            </p>
          </article>
          <article>
            <div className="dot" />
            <span>THEN</span>
            <h3>School ended. The conversations started.</h3>
            <p>
              Somehow, after school, we started texting. And those conversations
              became something I didn't expect.
            </p>
          </article>
          <article>
            <div className="dot" />
            <span>DECEMBER 2025</span>
            <h3>And then there was us.</h3>
            <p>
              The last month of 2025 got us confessing feelings and changed the
              title of the great friendship we had into something much more
              meaningful. And I'm glad it did.
            </p>
          </article>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <blockquote>
          Somehow, I can't picture my life without you in it. I don't know what
          the future holds, but I do know that I need you in it.
        </blockquote>
      </section>

      <section className="section qualities">
        <div className="section-heading centered">
          <span>02 / TEN LITTLE THINGS</span>
          <h2>
            Things I find
            <br />
            <em>cute about you.</em>
          </h2>
          <p>
            Tap each one. I could have written more, but you'd start feeling too
            special.
          </p>
        </div>
        <div className="cards">
          {cuteThings.map(([num, title, text], i) => (
            <button
              className={`cute-card ${openCard === i ? "open" : ""}`}
              key={num}
              onClick={() => setOpenCard(openCard === i ? null : i)}
            >
              <span>{num}</span>
              <strong>{title}</strong>
              {openCard === i && <p>{text}</p>}
              <small>{openCard === i ? "tap to close" : "tap to open"}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="section gallery">
        <div className="section-heading">
          <span>03 / SIMPLY YOU</span>
          <h2>
            Few of the many pictures of you I find
            <br />
            <em>Appealing.</em>
          </h2>
          <p>And cute😂</p>
        </div>
        <div className="memory-grid">
          {memories.map((m, i) => (
            <div
              className={`memory ${i % 2 ? "tilt" : ""} ${m.mobileFit ? "mobile-fit" : ""}`}
              key={i}
            >
              <div className="memory-image">
                {m.image ? (
                  <img className="memory-photo" src={m.image} alt={m.title} />
                ) : (
                  <>
                    <ImagePlus size={24} />
                    <span>{m.title}</span>
                  </>
                )}
              </div>
              <p>{m.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="song" className="song-section">
        <div className={`record ${musicOn ? "playing" : ""}`}>
          <div className="record-hole" />
        </div>
        <div className="song-copy">
          <span>04 / PRESS PLAY</span>
          <h2>
            Forever — <em>P-Square</em>
          </h2>
          <p>
            Your favourite song. So obviously it had to have its own little
            moment here.
          </p>
          <button className="primary-btn small" onClick={toggleMusic}>
            <Music2 size={17} /> {musicOn ? "Pause our song" : "Play our song"}
          </button>
          <small className="music-note">
            {musicError
              ? "The audio could not be played. Check that the file is a supported format."
              : "Tap to play or pause the song."}
          </small>
        </div>
        <audio
          ref={audioRef}
          src="/audio/Psquare_-_Forever_Naijapals_(mp3.pm)%20(2).mp3"
          preload="none"
          onPlay={() => setMusicOn(true)}
          onPause={() => setMusicOn(false)}
          onEnded={() => setMusicOn(false)}
          onError={() => setMusicError(true)}
        />
      </section>

      <section className="section distance">
        <div className="map-line">
          <span>🇳🇬</span>
          <div />
          <span>🇬🇧</span>
        </div>
        <div className="distance-content">
          <span>05 / UNTIL WE MEET</span>
          <h2>
            Two countries.
            <br />
            <em>One story.</em>
          </h2>
          <p>
            We've shared conversations, jokes, late nights, little moments and
            pieces of our lives. There is just one chapter we haven't written
            yet.
          </p>
          <div className="meeting-card">
            <MapPin size={18} />
            <div>
              <strong>When we meet</strong>
              <span>
                I don't know what it will look like yet. Maybe that's the fun
                part.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={letterRef}
        className={`letter-section ${letterVisible ? "is-visible" : ""}`}
      >
        <div className="letter-reveal" key={letterAnimationKey}>
          <span className="letter-kicker">06 / A LETTER FOR MY GIRL</span>
          <h2>
            A letter for
            <br />
            <em>Mama.</em>
          </h2>
          <button
            className={`envelope-trigger ${letterOpened ? "is-open" : ""}`}
            type="button"
            aria-expanded={letterOpened}
            onClick={() => {
              setLetterOpened((opened) => !opened);
              setLetterAnimationKey((key) => key + 1);
            }}
          >
            <span className="envelope-graphic" aria-hidden="true">
              <span className="envelope-back" />
              <span className="envelope-paper" />
              <span className="envelope-front" />
              <span className="envelope-flap" />
              <span className="envelope-seal">
                <Heart size={20} fill="currentColor" />
              </span>
            </span>
            <span className="envelope-label">
              {letterOpened ? "Close the letter" : "Open when you're ready"}
            </span>
          </button>
          {letterOpened && (
            <div className="letter">
              <p>Happy 20th birthday, My babyyyyy.</p>
              <p>
                Welcome to the twentiess!!😂....I genuinely don't even know
                where to start mama. you've been everything to me this past
                year, you have seen me at my worst and you have chosen to stick
                with me. You have helped me through my most difficult times,
                times when I was facing challenges that only you noticed and
                helped me out without me having to ask. You have been more than
                a blessing to me, I owe you a lot, damn.{" "}
              </p>
              <p>
                I know I can be excess sometimes, I can be so annoying that you
                would literally feel like strangling me(your words not mine
                btw😂) but you have been patient with me, you have been
                understanding and you have been loving. I am grateful for you
                mama, I really am.
              </p>
              <p>
                I can't overstate how much I love you, I can't overstate how
                much I appreciate you, I can't overstate how much I need you, I
                can't overstate how much I want you. I can't overstate how much
                I want to be with you, I can't overstate how much I want to hold
                you and kiss you and cuddle with you. I can't overstate how much
                I want to build a future with you, I can't overstate how much I
                want to be your husband and your best friend.
              </p>
              <p>
                I can't wait to do everything we've planned together, I can't
                wait to see and feel for myself what I always ask you to show
                me, I can't wait to spend those little intimate moments with you
                my darling. We will grow old together and have a lot of things
                to be grateful to God for.
              </p>
              <p>
                I wish I could give you everything, I would if distance and
                money weren't factors. A car. Money. Precious stones. Clothes.
                Bags. Shoes. Whatever you pointed at, I'd probably be trying to
                figure out how to get it for you.
              </p>
              <p>
                But for now, I wanted to give you something I can give you from
                anywhere: effort. I wanted you to have something made
                specifically for you, by me, because you deserve to feel special
                today.
              </p>
              <p>
                So here's to 20. To everything you've already become, everything
                you're still becoming, and everything waiting for you ahead.
              </p>
              <p className="signature">
                Happy birthday, beautiful.
                <br />— Trevor ❤️
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="finale">
        <Sparkles className="spark" />
        <span>07 / ONE LAST THING</span>
        <h2>
          Happy birthday,
          <br />
          <em>Mama.</em>
        </h2>
        <p>20 looks good on you.</p>
        <div className="final-heart">
          <Heart size={25} fill="currentColor" />
        </div>
        <small>Until the day I get to say all of this to you in person.</small>
      </section>

      <footer>
        <span>Made for Mama</span>
        <span>🇳🇬 → 🇬🇧</span>
        <span>2026</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
