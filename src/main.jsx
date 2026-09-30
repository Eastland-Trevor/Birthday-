import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Heart, ArrowDown, LockKeyhole, ImagePlus, Music2, Sparkles, Gift, MapPin } from "lucide-react";
import "./styles.css";

const cuteThings = [
  ["01", "Your goofy side", "I love how you can be completely unserious and somehow make everything more fun."],
  ["02", "Your kindness", "You have a softness in you that I genuinely admire."],
  ["03", "How considerate you are", "You notice the little things, and that says a lot about your heart."],
  ["04", "Your smile", "It has a way of making even an ordinary conversation feel special."],
  ["05", "Your gorgeous face", "I mean... let's not pretend I haven't noticed. You are ridiculously beautiful."],
  ["06", "Your personality", "There is something about the way you are that keeps pulling me closer."],
  ["07", "Your random moments", "The unexpected things you say and do are some of my favourite parts of you."],
  ["08", "How comfortable you make me feel", "Somehow talking to you can feel natural even when we're miles apart."],
  ["09", "Your little habits", "The tiny things you probably don't think twice about are the things I remember."],
  ["10", "Simply you", "After everything, I think my favourite thing is that you are just... Mama."],
];

const memories = [
  { title: "Add a favourite screenshot", hint: "Upload a chat, call, photo or anything that reminds you of her.", image: "" },
  { title: "Another little moment", hint: "You can replace this card with any photo you want.", image: "" },
  { title: "One more for the collection", hint: "Leave room for the moments only the two of you understand.", image: "" },
  { title: "Your favourite", hint: "Make this one the photo you know will make her smile.", image: "" },
];

function App() {
  const [started, setStarted] = useState(false);
  const [openCard, setOpenCard] = useState(null);
  const [musicOn, setMusicOn] = useState(false);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (!started) {
    return (
      <main className="landing">
        <div className="grain" />
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="landing-content">
          <div className="eyebrow"><Heart size={14} fill="currentColor" /> A little something for you</div>
          <h1>For <span>Mama</span>.</h1>
          <p className="landing-sub">
            I couldn't be there to celebrate with you the way I wanted to...
            so I made you a little corner of the internet instead.
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
        <div className="nav-logo">M<span>♥</span></div>
        <button className="music-btn" onClick={() => setMusicOn(!musicOn)}>
          <Music2 size={16} /> {musicOn ? "Playing in my head..." : "Our song"}
        </button>
      </nav>

      <section className="hero section">
        <div className="hero-copy reveal">
          <div className="eyebrow">21 • 10 • 2026</div>
          <h1>Happy birthday,<br /><em>Mama.</em></h1>
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
            <ImagePlus size={30} />
            <span>YOUR PHOTO HERE</span>
            <small>Replace this with her favourite picture</small>
          </div>
          <div className="photo-tag">birthday girl ♥</div>
        </div>
      </section>

      <section id="story" className="section story">
        <div className="section-heading">
          <span>01 / THE BEGINNING</span>
          <h2>Funny how we<br /><em>ended up here.</em></h2>
        </div>
        <div className="story-grid">
          <div className="story-line" />
          <article>
            <div className="dot" />
            <span>BACK THEN</span>
            <h3>Same school. Different worlds.</h3>
            <p>
              We attended the same secondary school, but we didn't exactly
              spend our days talking to each other. Life had other plans.
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
            <span>DECEMBER</span>
            <h3>And then there was us.</h3>
            <p>
              December changed the title of whatever we were into something
              much more meaningful. And I'm glad it did.
            </p>
          </article>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <blockquote>
          Somehow, someone I barely talked to in school became one of the
          people I most look forward to hearing from.
        </blockquote>
      </section>

      <section className="section qualities">
        <div className="section-heading centered">
          <span>02 / TEN LITTLE THINGS</span>
          <h2>Things I find<br /><em>cute about you.</em></h2>
          <p>Tap each one. I could have written more, but you'd start feeling too special.</p>
        </div>
        <div className="cards">
          {cuteThings.map(([num, title, text], i) => (
            <button className={`cute-card ${openCard === i ? "open" : ""}`} key={num} onClick={() => setOpenCard(openCard === i ? null : i)}>
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
          <span>03 / OUR LITTLE WORLD</span>
          <h2>Moments worth<br /><em>keeping.</em></h2>
          <p>I've left these spaces for you. Add your screenshots, photos and memories in the <code>memories</code> section of the code.</p>
        </div>
        <div className="memory-grid">
          {memories.map((m, i) => (
            <div className={`memory ${i % 2 ? "tilt" : ""}`} key={i}>
              <div className="memory-image">
                <ImagePlus size={24} />
                <span>{m.title}</span>
              </div>
              <p>{m.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="song-section">
        <div className="record">
          <div className="record-hole" />
        </div>
        <div className="song-copy">
          <span>04 / PRESS PLAY</span>
          <h2>Forever — <em>P-Square</em></h2>
          <p>
            Your favourite song. So obviously it had to have its own little
            moment here.
          </p>
          <button className="primary-btn small" onClick={() => setMusicOn(!musicOn)}>
            <Music2 size={17} /> {musicOn ? "Playing..." : "Play our song"}
          </button>
          <small className="music-note">
            Add the song legally through an embedded player or a link you control.
          </small>
        </div>
      </section>

      <section className="section distance">
        <div className="map-line"><span>🇳🇬</span><div /><span>🇬🇧</span></div>
        <div className="distance-content">
          <span>05 / UNTIL WE MEET</span>
          <h2>Two countries.<br /><em>One story.</em></h2>
          <p>
            We've shared conversations, jokes, late nights, little moments and
            pieces of our lives. There is just one chapter we haven't written yet.
          </p>
          <div className="meeting-card">
            <MapPin size={18} />
            <div>
              <strong>The first hello.</strong>
              <span>I don't know what it will look like yet. Maybe that's the fun part.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="letter-section">
        <div className="envelope"><Heart size={34} fill="currentColor" /></div>
        <span>06 / OPEN WHEN YOU'RE READY</span>
        <h2>A letter for<br /><em>Mama.</em></h2>
        <div className="letter">
          <p>Happy 20th birthday, Mama.</p>
          <p>
            I wish I could give you everything I would if distance and money
            weren't factors. A car. Money. Precious stones. Clothes. Bags.
            Shoes. Whatever you pointed at, I'd probably be trying to figure
            out how to get it for you.
          </p>
          <p>
            But for now, I wanted to give you something I can give you from
            anywhere: effort. I wanted you to have something made specifically
            for you, by me, because you deserve to feel special today.
          </p>
          <p>
            I love your personality. I love how goofy you can be. I love your
            kindness and the way you consider other people. And yes, you're
            gorgeous — very, very gorgeous.
          </p>
          <p>
            We haven't even met in person yet, and somehow you've become
            someone who matters so much to me. I don't know exactly what our
            first meeting will look like, but I know I'll remember it.
          </p>
          <p>
            So here's to 20. To everything you've already become, everything
            you're still becoming, and everything waiting for you ahead.
          </p>
          <p className="signature">Happy birthday, beautiful.<br />— Trevor ❤️</p>
        </div>
      </section>

      <section className="finale">
        <Sparkles className="spark" />
        <span>07 / ONE LAST THING</span>
        <h2>Happy birthday,<br /><em>Mama.</em></h2>
        <p>20 looks good on you.</p>
        <div className="final-heart"><Heart size={25} fill="currentColor" /></div>
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
