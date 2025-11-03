/* ============================
App State & Elements
   ============================ */
let currentLang = "EN";
let QUESTIONS = [];
const langSection = document.getElementById("language");
const englishBtn = document.getElementById("english-btn");
const indonesiaBtn = document.getElementById("indonesia-btn");
const restartBtn = document.getElementById("restart-btn");
const homeSection = document.getElementById("home");
const title = document.getElementById("home-title");
const subtitle = document.getElementById("home-subtitle");
const startBtn = document.getElementById("start-btn");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");
const storyPart = document.getElementById("story-text");
const qText = document.getElementById("q-text");
const qImage = document.getElementById("question-img");
const optionsWrap = document.getElementById("options-wrap");
const progBar = document.getElementById("progress");
const resultTitle = document.getElementById("result-title");
const resultImg = document.getElementById("result-img");
const resultDesc = document.getElementById("result-desc");
let state = {
  current: 0,
  score: { supreme: 0, shadow: 0, mielle: 0, mimo: 0 },
};
function updateHomeText() {
  if (currentLang === "EN") {
    title.textContent = "Snack Your Personality😸✨";
    subtitle.textContent = "Discover your Cosmic Cat!";
    startBtn.textContent = "Start";
  } else if (currentLang === "ID") {
    title.textContent = "Snack Your Personality😸✨";
    subtitle.textContent = "Temukan Kucing Kosmikmu!";
    startBtn.textContent = "Mulai";
  }
}
englishBtn.addEventListener("click", () => {
  currentLang = "EN";
  QUESTIONS = questionEN;
  updateHomeText();
  state = { current: 0, score: { supreme: 0, shadow: 0, mielle: 0, mimo: 0 } };
  langSection.classList.remove("active");
  langSection.classList.add("hidden");
  homeSection.classList.remove("hidden");
  homeSection.classList.add("active");
});
indonesiaBtn.addEventListener("click", () => {
  currentLang = "ID";
  QUESTIONS = questionID;
  updateHomeText();
  state = { current: 0, score: { supreme: 0, shadow: 0, mielle: 0, mimo: 0 } };
  langSection.classList.remove("active");
  langSection.classList.add("hidden");
  homeSection.classList.remove("hidden");
  homeSection.classList.add("active");
});
window.addEventListener("DOMContentLoaded", () => {
  startBtn.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    homeSection.classList.remove("active");
    quizSection.classList.add("active");
    quizSection.classList.remove("hidden");
    showQuestion();
  });
});
/* ============================
   Questions (you can edit!)
   ============================ */
const questionEN = [
  {
    text: "It’s Friday afternoon, and your group chat is buzzing.Everyone’s throwing out ideas for the weekend. <br>What sounds the most fun?",
    img: "image/q1.png",
    options: [
      { text: "“Let’s go outside and do something exciting!”", key: "supreme" },
      { text: "“Let’s just hang out in our usual place.”", key: "shadow" },
      { text: "“How about exploring new cafés?”", key: "mielle" },
      { text: "“Maybe we can watch a movie or series?”", key: "mimo" },
    ],
  },
  {
    text: "After a hundred messages,finally everyone agrees to have sleepover!!<br>What are you bringing to the sleepover?",
    img: "image/q2.png",
    options: [
      { text: "A board games/video games.", key: "supreme" },
      { text: "A speaker, music playlist or a movie.", key: "shadow" },
      { text: "A camera and face mask.", key: "mielle" },
      { text: "Bring a snack and food", key: "mimo" },
    ],
  },
  {
    text: "After the laughter and late-night talks, you all step outside for some fresh air.Suddenly, a meteor shower lights up the night sky!<br>How do you react?",
    img: "image/q3.png",
    options: [
      { text: "Jump up and start counting meteors out loud!", key: "supreme" },
      { text: "Lean back and quietly enjoy the view.", key: "shadow" },
      { text: "Pull out your phone to capture the moment.", key: "mielle" },
      { text: "Close your eyes and make a wish.", key: "mimo" },
    ],
  },
  {
    text: "A soft glow appears nearby.When you look closer, a tiny meteor has landed with a glowing key inside!<br>What do you do?",
    img: "image/q4.png",
    options: [
      { text: "Grab it right away.", key: "supreme" },
      { text: "Let the others pick it up", key: "shadow" },
      { text: "Take a photo first", key: "mielle" },
      { text: "Wondering where it came from.", key: "mimo" },
    ],
  },
  {
    text: "The key floats up and unlocks a door made of starlight.It shimmers softly, inviting you in.<br>What do you do?",
    img: "image/q5.png",
    options: [
      { text: "“Adventure time!” and step forward first.", key: "supreme" },
      { text: "Nods and follows calmly.", key: "shadow" },
      { text: "“Wait, this looks amazing—let’s record it!”", key: "mielle" },
      {
        text: "“Hold on.. what if its dangerous.” but follow them in the back.",
        key: "mimo",
      },
    ],
  },
  {
    text: "You step through and find yourself in a dreamy world.Cotton candy skies, jelly rivers, mochi-shaped clouds.<br>What’s the first thing you do?",
    img: "image/q6.png",
    options: [
      { text: "Run off to explore every corner. “lets go!”", key: "supreme" },
      { text: "Find a cozy spot to relax. “chill out guys!”", key: "shadow" },
      {
        text: "Snap a ton of photos. “ this place is perfect!”",
        key: "mielle",
      },
      { text: "Looks around and wonder.", key: "mimo" },
    ],
  },
  {
    text: "Out of nowhere, a big fluffy bear appears, arms crossed.“Hey! No cats allowed in dreamland!”Everyone yelps, scrambles..<br>and suddenly poof!",
    img: "image/q7.png",
    options: [],
  },
  {
    text: "You wake up back under the stars, safe and sound.<br>What’s your first thought?",
    img: "image/q8.png",
    options: [
      { text: "“That was awesome! Let’s do it again!”", key: "supreme" },
      { text: "“Weird dream… but kinda cool.”", key: "shadow" },
      { text: "“What its just a dream,I wish it was real.”", key: "mielle" },
      { text: "“At least we’re all okay.”", key: "mimo" },
    ],
  },
];

const questionID = [
  {
    text: "Pada Jumat sore, grup chat kalian rame banget.Semua lagi kasih ide buat ngisi akhir pekan.<br>Kegiatan apa yang menurutmu paling seru?",
    img: "image/q1.png",
    options: [
      {
        text: "“Ayo keluar dan lakukan sesuatu yang menyenangkan!”",
        key: "supreme",
      },
      { text: "“Kita nongkrong aja di tempat biasa.”", key: "shadow" },
      { text: "“Gimana kalau coba kafe baru?”", key: "mielle" },
      {
        text: "“Mending nonton film atau series di rumah aja deh.”",
        key: "mimo",
      },
    ],
  },
  {
    text: "Setelah ratusan chat dan debat kecil,akhirnya semua sepakat sleepover!<br>Kamu bawa apa ke acara menginap ini?",
    img: "image/q2.png",
    options: [
      { text: "Board game atau video game biar makin seru!", key: "supreme" },
      {
        text: "Speaker, playlist lagu, dan list film biar suasananya dapet banget.",
        key: "shadow",
      },
      {
        text: "Kamera dan masker wajah sekalian quality time + foto-foto.",
        key: "mielle",
      },
      { text: "Snack dan makanan, jelas dong! Prioritas utama.", key: "mimo" },
    ],
  },
  {
    text: "Setelah ketawa dan ngobrol sampai larut, kalian keluar buat cari udara segar.Tiba-tiba, hujan meteor muncul di langit!<br>Reaksimu gimana?",
    img: "image/q3.png",
    options: [
      {
        text: "Langsung lompat dan hitung meteornya satu-satu!",
        key: "supreme",
      },
      { text: "Bersandar santai sambil nikmatin pemandangan.", key: "shadow" },
      { text: "Cepet-cepet ambil HP buat rekam momen itu.", key: "mielle" },
      { text: "Tutup mata dan buat satu permintaan.", key: "mimo" },
    ],
  },
  {
    text: "Ada cahaya lembut muncul nggak jauh dari situ.Pas dilihat lebih dekat, ternyata ada meteor kecil dan di dalamnya ada kunci yang bersinar!<br>Apa yang kamu lakukan?",
    img: "image/q4.png",
    options: [
      { text: "Langsung ambil, waktunya petualangan!” ", key: "supreme" },
      { text: "Nunggu teman lain buat ambil duluan.", key: "shadow" },
      { text: "Foto dulu sebelum disentuh.", key: "mielle" },
      { text: "Lihat sambil mikir, “Ini dari mana ya?”", key: "mimo" },
    ],
  },
  {
    text: "Tiba-tiba, kunci itu melayang dan membuka pintu bercahaya yang berkilau indah di depan kalian.<br>Kamu bakal ngapain?",
    img: "image/q5.png",
    options: [
      { text: "“Gas! Kita masuk duluan!”", key: "supreme" },
      {
        text: "Jalan santai dan ikut di belakang dengan tenang.",
        key: "shadow",
      },
      { text: "“Tunggu, ini keren banget harus direkam nih!”", key: "mielle" },
      {
        text: "“Eh, jangan jauh-jauh. Bahaya!” tapi tetap ikut liat pelan-pelan.",
        key: "mimo",
      },
    ],
  },
  {
    text: "Begitu masuk, kalian ada di dunia ajaib.<br>Langit warna warni seperti permen kapas, ada sungai jeli, dan awan berbentuk mochi!<br>Apa yang kamu lakukan pertama kali?",
    img: "image/q6.png",
    options: [
      { text: "Lari-lari keliling, mau eksplor semuanya!", key: "supreme" },
      {
        text: "Cari tempat nyaman buat duduk santai. “Tenang aja, nikmatin dulu.”",
        key: "shadow",
      },
      { text: "Langsung foto-foto, “Tempat ini lucu banget!”", key: "mielle" },
      { text: "Cuma diam dan ngeliat sekeliling, masih kagum.", key: "mimo" },
    ],
  },
  {
    text: "Tiba-tiba muncul beruang besar berbulu halus dengan tangan bersedekap datang menghampiri kalian.“Hei! Kucing nggak boleh masuk ke dunia mimpi!”<br>Semua panik dan kabur, lalu poof!",
    img: "image/q7.png",
    options: [],
  },
  {
    text: "Kamu terbangun di bawah langit malam, semuanya aman.<br>Apa yang pertama kali kamu pikirkan?",
    img: "image/q8.png",
    options: [
      { text: "“Gila, seru banget! Harus diulang lagi!”", key: "supreme" },
      { text: "“Aneh sih… tapi keren juga.”", key: "shadow" },
      { text: "“Serius itu mimpi? Andai nyata.”", key: "mielle" },
      { text: "“Yang penting semua baik-baik aja.”", key: "mimo" },
    ],
  },
];
/* ============================
   Functions
   ============================ */
function showQuestion() {
  const q = QUESTIONS[state.current];
  if (!q) {
    finishQuiz();
    return;
  }

  qText.style.opacity = 0;
  storyPart.style.opacity = 0;
  qImage.style.opacity = 0;

  setTimeout(() => {
    const parts = q.text.split(/<br>/i);
    const story = parts[0] || "";
    const question = parts[1] || q.text;

    storyPart.innerHTML = story;
    qText.innerHTML = question;
    qImage.src = q.img;

    storyPart.style.opacity = 1;
    qText.style.opacity = 1;
    qImage.style.opacity = 1;
  }, 200);

  optionsWrap.innerHTML = "";

  // check if this question has options
  if (q.options && q.options.length > 0) {
    // Shuffle the answers each time
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.classList.add("glow-btn");
      btn.addEventListener("click", () => selectAnswer(opt.key));
      optionsWrap.appendChild(btn);
    });
  } else {
    // 🪄 no options → show Continue button
    const contBtn = document.createElement("button");
    contBtn.textContent = currentLang === "EN" ? "Continue" : "Lanjut";
    contBtn.classList.add("glow-btn");
    contBtn.addEventListener("click", () => {
      state.current++;
      showQuestion();
    });
    optionsWrap.appendChild(contBtn);
  }

  // update progress bar
  const pct = Math.round((state.current / QUESTIONS.length) * 100);
  progBar.style.width = pct + "%";

  function selectAnswer(key) {
    if (key) state.score[key] = (state.score[key] || 0) + 1;
    state.current++;
    if (state.current < QUESTIONS.length) {
      showQuestion();
    } else {
      finishQuiz();
    }
  }
  function finishQuiz() {
    quizSection.classList.add("hidden");
    quizSection.classList.remove("active");
    resultSection.classList.add("active");
    resultSection.classList.remove("hidden");
    progBar.style.width = "100%";
    const top = Object.entries(state.score).sort((a, b) => b[1] - a[1])[0][0];
    const lang = currentLang;

    const RESULTS = {
      supreme: {
        title: "Supreme",
        imgEN: "image/supremeEN.png",
        imgID: "image/supremeID.png",
        descEN: "Energetic and sporty — full of life!",
        descID: "Penuh energi dan semangat — hidupmu nggak pernah sepi!",
      },
      shadow: {
        title: "Shadow",
        imgEN: "image/shadowEN.png",
        imgID: "image/shadowID.png",
        descEN: "Cool and calm — mysterious but kind.",
        descID: "Tenang dan keren — misterius tapi lembut hatinya.",
      },
      mielle: {
        title: "Mielle",
        imgEN: "image/mielleEN.png",
        imgID: "image/mielleID.png",
        descEN: "Trendy and social — the star of every scene!",
        descID: "Modis dan supel — bintang di setiap suasana!",
      },
      mimo: {
        title: "Mimo",
        imgEN: "image/mimoEN.png",
        imgID: "image/mimoID.png",
        descEN: "Quiet and creative — a dreamer at heart.",
        descID: "Lembut dan kreatif — si pemimpi sejati.",
      },
    };
    const r = RESULTS[top];
    const imgPath = lang === "ID" ? r.imgID : r.imgEN;
    const descText = lang === "ID" ? r.descID : r.descEN;
    console.log("Selected language:", lang);
    console.log("Selected result:", top);
    console.log("Image path:", imgPath);
    resultTitle.textContent = r.title;
    resultImg.src = imgPath;
    resultDesc.textContent = descText;
  }
  restartBtn.addEventListener("click", () => {
    resultSection.classList.add("hidden");
    resultSection.classList.remove("active");
    langSection.classList.remove("hidden");
    langSection.classList.add("active");
    state = {
      current: 0,
      score: { supreme: 0, shadow: 0, mielle: 0, mimo: 0 },
    };
    progBar.style.width = "0%";
    window.scrollTo(0, 0);
  });
}
