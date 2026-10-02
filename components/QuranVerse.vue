<template>
  <section class="quran-section site-container" aria-labelledby="quran-reminder-title">
    <div class="verse-panel">
      <span class="verse-ornament" aria-hidden="true">✧</span>
      <p id="quran-reminder-title" class="eyebrow verse-kicker">A reminder from the Quran</p>
      <figure>
        <blockquote cite="https://quran.com/en/al-baqarah/110">
          <p class="verse-arabic" lang="ar" dir="rtl">وَمَا تُقَدِّمُواْ لِأَنفُسِكُم مِّنۡ خَيۡرٖ تَجِدُوهُ عِندَ ٱللَّهِۗ</p>
          <p class="verse-translation">“Whatever good you send forth for yourselves, you will ˹certainly˺ find ˹its reward˺ with Allah.”</p>
        </blockquote>
        <figcaption>
          <a href="https://quran.com/en/al-baqarah/110" target="_blank" rel="noopener noreferrer" aria-label="Read Surah Al-Baqarah, verse 110 on Quran.com (opens in a new tab)">Surah Al-Baqarah · 2:110 <span aria-hidden="true">↗</span></a>
          <span class="verse-excerpt">Verse excerpt · English translation</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.quran-section { padding-top:54px; }
.verse-panel { position:relative; overflow:hidden; padding:45px 50px 43px; border-radius:12px; background:var(--forest); color:#fafbf2; text-align:center; }
.verse-panel::before,.verse-panel::after { content:''; position:absolute; width:180px; height:180px; border:1px solid #b8ca8e24; transform:rotate(45deg); pointer-events:none; }
.verse-panel::before { left:-120px; top:calc(50% - 90px); }
.verse-panel::after { right:-120px; top:calc(50% - 90px); }
.verse-ornament { display:block; color:#c8d69b; font-size:28px; line-height:1; margin-bottom:17px; }
.verse-kicker { justify-content:center; color:#d0ddaf; font-size:9px; margin-bottom:23px; }
.verse-arabic { font-family:'Amiri','Noto Naskh Arabic','Traditional Arabic',serif; font-size:clamp(27px,3.2vw,39px); font-weight:400; line-height:2; max-width:940px; margin-inline:auto; }
.verse-translation { font:400 clamp(19px,2vw,25px)/1.65 Georgia,serif; max-width:740px; margin:17px auto 23px; color:#f3f5e8; text-wrap:pretty; }
figcaption>a { display:inline-flex; align-items:center; gap:9px; color:#d0ddaf; font-size:11px; padding-bottom:5px; border-bottom:1px solid #c8d69b70; }
figcaption>a:hover { color:white; border-color:white; }
.verse-excerpt { display:block; font-size:9px; color:#bccbbf; margin-top:10px; letter-spacing:.035em; }
@media(max-width:760px) { .quran-section { padding-top:35px; } .verse-panel { padding:32px 23px; border-radius:9px; } .verse-arabic { font-size:29px; line-height:1.95; } .verse-translation { font-size:20px; line-height:1.7; margin-top:18px; } .verse-kicker { font-size:8px; letter-spacing:.14em; } }
</style>
