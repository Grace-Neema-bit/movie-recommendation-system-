const catalog = [
  {
    id: "paddington-2", title: "Paddington 2", year: 2017, format: "movie", runtime: 104, rating: "PG", age: 7,
    genres: ["Comedy", "Adventure", "Family"], moods: ["cozy", "funny", "heartwarming"], color: "#b96142", symbol: "✿",
    description: "A marmalade-loving bear brings out the best in everyone he meets."
  },
  {
    id: "kiki", title: "Kiki's Delivery Service", year: 1989, format: "movie", runtime: 103, rating: "G", age: 0,
    genres: ["Animation", "Fantasy", "Adventure"], moods: ["cozy", "adventurous", "heartwarming"], color: "#476d83", symbol: "✦",
    description: "A young witch finds her feet, her friends, and a little confidence."
  },
  {
    id: "mitchells", title: "The Mitchells vs. the Machines", year: 2021, format: "movie", runtime: 114, rating: "PG", age: 7,
    genres: ["Animation", "Comedy", "Adventure", "Sci-Fi"], moods: ["funny", "adventurous", "heartwarming"], color: "#d57649", symbol: "⚡",
    description: "One gloriously chaotic family road trip meets a robot uprising."
  },
  {
    id: "princess-bride", title: "The Princess Bride", year: 1987, format: "movie", runtime: 98, rating: "PG", age: 7,
    genres: ["Adventure", "Fantasy", "Comedy", "Romance"], moods: ["cozy", "funny", "adventurous"], color: "#58745c", symbol: "♛",
    description: "A storybook quest full of sword fights, wit, and true love."
  },
  {
    id: "hidden-figures", title: "Hidden Figures", year: 2016, format: "movie", runtime: 127, rating: "PG", age: 10,
    genres: ["Drama", "History"], moods: ["heartwarming", "thoughtful", "adventurous"], color: "#526b85", symbol: "✧",
    description: "Three brilliant mathematicians help send NASA into orbit."
  },
  {
    id: "chef", title: "Chef", year: 2014, format: "movie", runtime: 115, rating: "R", age: 17,
    genres: ["Comedy", "Drama"], moods: ["cozy", "funny", "heartwarming"], color: "#bb7045", symbol: "✿",
    description: "A chef rediscovers his spark, one delicious road trip at a time."
  },
  {
    id: "martian", title: "The Martian", year: 2015, format: "movie", runtime: 144, rating: "PG-13", age: 13,
    genres: ["Sci-Fi", "Adventure", "Drama"], moods: ["adventurous", "thoughtful", "suspenseful"], color: "#b65e43", symbol: "◉",
    description: "A stranded astronaut gets resourceful on the red planet."
  },
  {
    id: "knives-out", title: "Knives Out", year: 2019, format: "movie", runtime: 130, rating: "PG-13", age: 13,
    genres: ["Mystery", "Comedy", "Drama"], moods: ["funny", "thoughtful", "suspenseful"], color: "#577067", symbol: "⌕",
    description: "A sharp-witted detective untangles a very tangled family mystery."
  },
  {
    id: "coco", title: "Coco", year: 2017, format: "movie", runtime: 105, rating: "PG", age: 7,
    genres: ["Animation", "Fantasy", "Family"], moods: ["heartwarming", "adventurous", "thoughtful"], color: "#bc7148", symbol: "♫",
    description: "A music-loving boy discovers the power of family and memory."
  },
  {
    id: "totoro", title: "My Neighbor Totoro", year: 1988, format: "movie", runtime: 86, rating: "G", age: 0,
    genres: ["Animation", "Fantasy", "Family"], moods: ["cozy", "heartwarming"], color: "#59735b", symbol: "❋",
    description: "Two sisters discover gentle forest magic in their new home."
  },
  {
    id: "soul", title: "Soul", year: 2020, format: "movie", runtime: 101, rating: "PG", age: 7,
    genres: ["Animation", "Fantasy", "Comedy"], moods: ["thoughtful", "heartwarming", "cozy"], color: "#47707b", symbol: "♫",
    description: "A jazz musician takes a soulful detour through life's big questions."
  },
  {
    id: "moana", title: "Moana", year: 2016, format: "movie", runtime: 107, rating: "PG", age: 7,
    genres: ["Animation", "Adventure", "Fantasy"], moods: ["adventurous", "heartwarming"], color: "#37838a", symbol: "≈",
    description: "A brave wayfinder sails beyond the reef to save her island."
  },
  {
    id: "zootopia", title: "Zootopia", year: 2016, format: "movie", runtime: 108, rating: "PG", age: 7,
    genres: ["Animation", "Comedy", "Mystery"], moods: ["funny", "adventurous", "suspenseful"], color: "#7b8252", symbol: "⌕",
    description: "A rookie bunny cop and a wily fox crack a citywide case."
  },
  {
    id: "inside-out-2", title: "Inside Out 2", year: 2024, format: "movie", runtime: 96, rating: "PG", age: 7,
    genres: ["Animation", "Comedy", "Family"], moods: ["funny", "thoughtful", "heartwarming"], color: "#667ab0", symbol: "☼",
    description: "New emotions arrive just as Riley's world starts to change."
  },
  {
    id: "wild-robot", title: "The Wild Robot", year: 2024, format: "movie", runtime: 102, rating: "PG", age: 7,
    genres: ["Animation", "Adventure", "Sci-Fi"], moods: ["heartwarming", "adventurous", "thoughtful"], color: "#567760", symbol: "✧",
    description: "A robot learns to care for a gosling on a wild island."
  },
  {
    id: "bluey", title: "Bluey", year: 2018, format: "tv", runtime: 8, rating: "TV-Y", age: 0,
    genres: ["Animation", "Comedy", "Family"], moods: ["cozy", "funny", "heartwarming"], color: "#5080aa", symbol: "🐾",
    description: "Small everyday adventures become big imaginative games."
  },
  {
    id: "avatar", title: "Avatar: The Last Airbender", year: 2005, format: "series", runtime: 24, rating: "TV-Y7", age: 7,
    genres: ["Animation", "Adventure", "Fantasy"], moods: ["adventurous", "funny", "heartwarming"], color: "#527c88", symbol: "❋",
    description: "A young hero and his friends set out to bring balance to the world."
  },
  {
    id: "bake-off", title: "The Great British Bake Off", year: 2010, format: "tv", runtime: 60, rating: "TV-PG", age: 7,
    genres: ["Reality", "Family"], moods: ["cozy", "funny", "heartwarming"], color: "#bc8b68", symbol: "♨",
    description: "Kind-hearted bakers, creative challenges, and lots of cake."
  },
  {
    id: "planet-earth", title: "Planet Earth II", year: 2016, format: "series", runtime: 50, rating: "TV-PG", age: 7,
    genres: ["Documentary", "Nature"], moods: ["cozy", "adventurous", "thoughtful"], color: "#4f7969", symbol: "❋",
    description: "A breathtaking journey through the world's most remarkable habitats."
  },
  {
    id: "anne", title: "Anne with an E", year: 2017, format: "series", runtime: 44, rating: "TV-PG", age: 10,
    genres: ["Drama", "Family"], moods: ["heartwarming", "thoughtful", "cozy"], color: "#9a684f", symbol: "✿",
    description: "An imaginative orphan finds her place and her people."
  },
  {
    id: "good-place", title: "The Good Place", year: 2016, format: "series", runtime: 22, rating: "TV-14", age: 13,
    genres: ["Comedy", "Fantasy"], moods: ["funny", "thoughtful"], color: "#5a7963", symbol: "✧",
    description: "A mismatched group tries to figure out what it means to be good."
  },
  {
    id: "brooklyn-99", title: "Brooklyn Nine-Nine", year: 2013, format: "series", runtime: 22, rating: "TV-14", age: 13,
    genres: ["Comedy", "Mystery"], moods: ["funny", "cozy"], color: "#527890", symbol: "✦",
    description: "A lovable detective squad solves cases and cracks each other up."
  },
  {
    id: "gravity-falls", title: "Gravity Falls", year: 2012, format: "series", runtime: 23, rating: "TV-Y7", age: 7,
    genres: ["Animation", "Comedy", "Mystery", "Fantasy"], moods: ["funny", "adventurous", "suspenseful"], color: "#8c7449", symbol: "⌕",
    description: "Twins uncover weird secrets in a town full of mysteries."
  },
  {
    id: "only-murders", title: "Only Murders in the Building", year: 2021, format: "series", runtime: 35, rating: "TV-MA", age: 17,
    genres: ["Comedy", "Mystery"], moods: ["funny", "thoughtful", "suspenseful"], color: "#6f7763", symbol: "⌕",
    description: "Three neighbors turn their true-crime obsession into a real investigation."
  },
  {
    id: "criminal-minds", title: "Criminal Minds", year: 2005, format: "series", runtime: 42, rating: "TV-14", age: 13,
    genres: ["Crime", "Drama", "Mystery", "Thriller", "Procedural"], moods: ["thoughtful", "suspenseful"], color: "#465563", symbol: "⌕",
    description: "An FBI profiling team studies behavioral clues to solve complex cases."
  },
  {
    id: "the-mentalist", title: "The Mentalist", year: 2008, format: "series", runtime: 43, rating: "TV-14", age: 13,
    genres: ["Crime", "Drama", "Mystery", "Procedural"], moods: ["thoughtful", "suspenseful"], color: "#81664d", symbol: "⌕",
    description: "An observant consultant helps a California team investigate serious crimes."
  },
  {
    id: "ncis", title: "NCIS", year: 2003, format: "series", runtime: 43, rating: "TV-14", age: 13,
    genres: ["Crime", "Drama", "Mystery", "Procedural"], moods: ["adventurous", "thoughtful", "suspenseful"], color: "#4c7080", symbol: "✦",
    description: "A close-knit federal team investigates crimes connected to the Navy."
  },
  {
    id: "bones", title: "Bones", year: 2005, format: "series", runtime: 43, rating: "TV-14", age: 13,
    genres: ["Crime", "Drama", "Mystery", "Procedural"], moods: ["funny", "thoughtful", "suspenseful"], color: "#71816d", symbol: "⌕",
    description: "A forensic anthropologist and an FBI agent work together on cases."
  },
  {
    id: "fbi", title: "FBI", year: 2018, format: "series", runtime: 43, rating: "TV-14", age: 13,
    genres: ["Crime", "Drama", "Mystery", "Procedural"], moods: ["adventurous", "thoughtful", "suspenseful"], color: "#506477", symbol: "✦",
    description: "New York agents work to protect the city from complex threats."
  },
  {
    id: "mindhunter", title: "Mindhunter", year: 2017, format: "series", runtime: 55, rating: "TV-MA", age: 17,
    genres: ["Crime", "Drama", "Thriller", "Procedural"], moods: ["thoughtful", "suspenseful"], color: "#5b4c4c", symbol: "◉",
    description: "FBI agents interview incarcerated killers to understand criminal behavior."
  },
  {
    id: "elementary", title: "Elementary", year: 2012, format: "series", runtime: 43, rating: "TV-14", age: 13,
    genres: ["Crime", "Drama", "Mystery", "Procedural"], moods: ["thoughtful", "suspenseful"], color: "#657a84", symbol: "⌕",
    description: "A modern Sherlock Holmes and Joan Watson solve cases in New York."
  },
  {
    id: "vampire-diaries", title: "The Vampire Diaries", year: 2009, format: "series", runtime: 43, rating: "TV-14", age: 13,
    genres: ["Drama", "Fantasy", "Horror", "Mystery", "Romance"], moods: ["thoughtful", "suspenseful"], color: "#6b4556", symbol: "☾", anime: false,
    related: ["vampire-supernatural", "teen-supernatural"], description: "A teenager's life changes when two vampire brothers arrive in town."
  },
  {
    id: "originals", title: "The Originals", year: 2013, format: "series", runtime: 43, rating: "TV-14", age: 13,
    genres: ["Drama", "Fantasy", "Horror", "Mystery", "Romance"], moods: ["thoughtful", "suspenseful"], color: "#624654", symbol: "☾",
    related: ["vampire-supernatural"], description: "The original vampire family returns to New Orleans and its supernatural politics."
  },
  {
    id: "legacies", title: "Legacies", year: 2018, format: "series", runtime: 42, rating: "TV-14", age: 13,
    genres: ["Drama", "Fantasy", "Horror", "Mystery"], moods: ["adventurous", "suspenseful"], color: "#755567", symbol: "✧",
    related: ["vampire-supernatural", "teen-supernatural"], description: "Young witches, vampires, and werewolves learn to handle their powers."
  },
  {
    id: "lucifer", title: "Lucifer", year: 2016, format: "series", runtime: 45, rating: "TV-14", age: 13,
    genres: ["Crime", "Drama", "Fantasy", "Mystery"], moods: ["funny", "thoughtful", "suspenseful"], color: "#596372", symbol: "♛",
    related: ["vampire-supernatural", "supernatural-mystery"], description: "The devil helps an LAPD detective solve crimes while questioning his own nature."
  },
  {
    id: "supernatural", title: "Supernatural", year: 2005, format: "series", runtime: 43, rating: "TV-14", age: 13,
    genres: ["Drama", "Fantasy", "Horror", "Mystery"], moods: ["adventurous", "suspenseful"], color: "#55504d", symbol: "☾",
    related: ["vampire-supernatural", "supernatural-mystery"], description: "Two brothers travel the country investigating supernatural threats."
  },
  {
    id: "teen-wolf", title: "Teen Wolf", year: 2011, format: "series", runtime: 42, rating: "TV-14", age: 13,
    genres: ["Drama", "Fantasy", "Horror", "Romance"], moods: ["adventurous", "suspenseful"], color: "#526577", symbol: "☾",
    related: ["teen-supernatural", "vampire-supernatural"], description: "A high-school student navigates friendship and life as a werewolf."
  },
  {
    id: "shadowhunters", title: "Shadowhunters", year: 2016, format: "series", runtime: 42, rating: "TV-14", age: 13,
    genres: ["Drama", "Fantasy", "Horror", "Romance"], moods: ["adventurous", "suspenseful"], color: "#624e66", symbol: "✧",
    related: ["teen-supernatural", "vampire-supernatural"], description: "A young woman discovers a hidden world of demon hunters and magic."
  },
  {
    id: "love-island-usa", title: "Love Island USA", year: 2019, format: "tv", runtime: 60, rating: "TV-MA", age: 17,
    genres: ["Reality", "Romance", "Competition"], moods: ["funny", "heartwarming"], color: "#d27468", symbol: "♡",
    related: ["love-island-franchise", "dating-reality"], description: "Singles couple up, test connections, and compete for a prize in the villa."
  },
  {
    id: "love-island-uk", title: "Love Island (UK)", year: 2015, format: "tv", runtime: 60, rating: "TV-MA", age: 17,
    genres: ["Reality", "Romance", "Competition"], moods: ["funny", "heartwarming"], color: "#d27468", symbol: "♡",
    related: ["love-island-franchise", "dating-reality"], description: "The original UK villa series, full of recouplings and summer romance."
  },
  {
    id: "love-island-australia", title: "Love Island Australia", year: 2018, format: "tv", runtime: 60, rating: "TV-MA", age: 17,
    genres: ["Reality", "Romance", "Competition"], moods: ["funny", "heartwarming"], color: "#d27468", symbol: "♡",
    related: ["love-island-franchise", "dating-reality"], description: "Australian singles meet, couple up, and compete in the villa."
  },
  {
    id: "love-island-games", title: "Love Island Games", year: 2023, format: "tv", runtime: 60, rating: "TV-MA", age: 17,
    genres: ["Reality", "Romance", "Competition"], moods: ["funny", "adventurous"], color: "#bc665b", symbol: "♡",
    related: ["love-island-franchise", "dating-reality"], description: "Familiar Islanders return for romance and new villa competitions."
  },
  {
    id: "love-is-blind", title: "Love Is Blind", year: 2020, format: "series", runtime: 60, rating: "TV-MA", age: 17,
    genres: ["Reality", "Romance"], moods: ["funny", "heartwarming"], color: "#92725f", symbol: "♡",
    related: ["dating-reality"], description: "Singles date without seeing each other and decide whether to get engaged."
  },
  {
    id: "too-hot-to-handle", title: "Too Hot to Handle", year: 2020, format: "series", runtime: 40, rating: "TV-MA", age: 17,
    genres: ["Reality", "Romance", "Competition"], moods: ["funny"], color: "#bf785d", symbol: "☼",
    related: ["dating-reality"], description: "Singles share a retreat and compete to build genuine connections."
  },
  {
    id: "spy-family", title: "Spy x Family", year: 2022, format: "series", runtime: 24, rating: "TV-14", age: 13, anime: true,
    genres: ["Animation", "Anime", "Action", "Comedy", "Family"], moods: ["funny", "adventurous", "heartwarming"], color: "#65736a", symbol: "✦",
    description: "A spy, an assassin, and a telepath form an unusual pretend family."
  },
  {
    id: "demon-slayer", title: "Demon Slayer: Kimetsu no Yaiba", year: 2019, format: "series", runtime: 24, rating: "TV-MA", age: 17, anime: true,
    genres: ["Animation", "Anime", "Action", "Adventure", "Fantasy"], moods: ["adventurous", "suspenseful"], color: "#54716e", symbol: "✧",
    description: "A young swordsman searches for a cure for his demon-transformed sister."
  },
  {
    id: "death-note", title: "Death Note", year: 2006, format: "series", runtime: 23, rating: "TV-14", age: 13, anime: true,
    genres: ["Animation", "Anime", "Crime", "Drama", "Mystery", "Thriller"], moods: ["thoughtful", "suspenseful"], color: "#544c59", symbol: "◉",
    description: "A gifted student and a determined detective face off over a supernatural notebook."
  },
  {
    id: "frieren", title: "Frieren: Beyond Journey's End", year: 2023, format: "series", runtime: 24, rating: "TV-14", age: 13, anime: true,
    genres: ["Animation", "Anime", "Adventure", "Drama", "Fantasy"], moods: ["cozy", "thoughtful", "heartwarming"], color: "#718e9c", symbol: "✧",
    description: "An elven mage reflects on friendship and time after a hero's journey."
  },
  {
    id: "your-name", title: "Your Name", year: 2016, format: "movie", runtime: 106, rating: "PG", age: 10, anime: true,
    genres: ["Animation", "Anime", "Drama", "Fantasy", "Romance"], moods: ["heartwarming", "thoughtful"], color: "#797aa2", symbol: "☼",
    description: "Two teenagers mysteriously begin waking up in each other's lives."
  },
  {
    id: "crash-landing", title: "Crash Landing on You", year: 2019, format: "series", runtime: 75, rating: "TV-14", age: 13, kdrama: true,
    genres: ["K-Drama", "Drama", "Romance", "Comedy"], moods: ["heartwarming", "funny", "adventurous"], color: "#71816f", symbol: "♡",
    description: "A paragliding mishap brings a South Korean businesswoman to a North Korean officer."
  },
  {
    id: "business-proposal", title: "Business Proposal", year: 2022, format: "series", runtime: 60, rating: "TV-14", age: 13, kdrama: true,
    genres: ["K-Drama", "Drama", "Romance", "Comedy"], moods: ["funny", "heartwarming"], color: "#b17c73", symbol: "♡",
    description: "A blind date mix-up turns into a lively office romance."
  },
  {
    id: "extraordinary-attorney-woo", title: "Extraordinary Attorney Woo", year: 2022, format: "series", runtime: 70, rating: "TV-14", age: 13, kdrama: true,
    genres: ["K-Drama", "Drama", "Comedy", "Legal"], moods: ["heartwarming", "thoughtful"], color: "#698b86", symbol: "✿",
    description: "A brilliant new attorney finds her way through cases and workplace life."
  },
  {
    id: "queen-of-tears", title: "Queen of Tears", year: 2024, format: "series", runtime: 75, rating: "TV-14", age: 13, kdrama: true,
    genres: ["K-Drama", "Drama", "Romance"], moods: ["heartwarming", "thoughtful"], color: "#8c6974", symbol: "♡",
    description: "A married couple faces a crisis and rediscovers their relationship."
  },
  {
    id: "squid-game", title: "Squid Game", year: 2021, format: "series", runtime: 55, rating: "TV-MA", age: 17, kdrama: true,
    genres: ["K-Drama", "Drama", "Thriller", "Mystery"], moods: ["thoughtful", "suspenseful"], color: "#657267", symbol: "◉",
    description: "Contestants in debt enter a dangerous competition for a life-changing prize."
  },
  {
    id: "spirited-away", title: "Spirited Away", year: 2001, format: "movie", runtime: 125, rating: "PG", age: 10, anime: true,
    genres: ["Animation", "Anime", "Adventure", "Fantasy"], moods: ["adventurous", "thoughtful"], color: "#78805c", symbol: "✧",
    description: "A girl enters a mysterious spirit world and searches for a way home."
  },
  {
    id: "howls-moving-castle", title: "Howl's Moving Castle", year: 2004, format: "movie", runtime: 119, rating: "PG", age: 10, anime: true,
    genres: ["Animation", "Anime", "Adventure", "Fantasy", "Romance"], moods: ["cozy", "adventurous", "heartwarming"], color: "#71878b", symbol: "✧",
    description: "A young woman finds magic, friendship, and courage in a moving castle."
  }
];

const form = document.querySelector("#preferences-form");
const results = document.querySelector("#results");
const recommendationGrid = document.querySelector("#recommendations");
const similarSection = document.querySelector("#similar-section");
const similarList = document.querySelector("#similar-list");
const similarIntro = document.querySelector("#similar-intro");
const resultsEyebrow = document.querySelector("#results-eyebrow");
const resultsTitle = document.querySelector("#results-title");
const resultsNote = document.querySelector("#rating-note");
let visibleRecommendations = [];

function formatLabel(format) {
  return format === "tv" ? "TV show" : format === "series" ? "Series" : "Movie";
}

function runtimeLabel(item) {
  return item.format === "movie" ? `${item.runtime} min` : `${item.runtime} min / ep`;
}

function getPreferences() {
  const data = new FormData(form);
  return {
    mood: data.get("mood"),
    age: Number(data.get("age")),
    format: data.get("format"),
    time: data.get("time"),
    genre: data.get("genre")
  };
}

function isWithinTime(item, time) {
  if (time === "any" || time === "long") return true;
  const limit = Number(time);
  return limit === 90 ? item.runtime <= 90 : item.runtime <= 120;
}

function matchesPreferences(item, preferences) {
  if (item.age > preferences.age && preferences.age !== 0) return false;
  if (preferences.age === 0 && item.age > 0) return false;
  if (preferences.format !== "any" && item.format !== preferences.format) return false;
  if (!isWithinTime(item, preferences.time)) return false;
  if (preferences.genre !== "any" && !item.genres.includes(preferences.genre)) return false;
  return true;
}

function scoreItem(item, preferences) {
  let score = item.moods.includes(preferences.mood) ? 5 : 0;
  if (preferences.genre !== "any" && item.genres.includes(preferences.genre)) score += 4;
  if (preferences.format !== "any" && item.format === preferences.format) score += 2;
  if (preferences.time !== "any" && preferences.time !== "long") score += 1;
  return score;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function cardMarkup(item, index, score) {
  const classifications = [
    ...item.genres,
    ...(item.anime ? ["Anime"] : []),
    ...(item.kdrama ? ["K-Drama"] : []),
    `Ages ${item.age}+`
  ];
  const genres = [...new Set(classifications)].map((genre) => `<span class="tag">${escapeHTML(genre)}</span>`).join("");
  return `
    <article class="movie-card${index === 0 ? " featured" : ""}">
      <div class="poster" style="--poster:${item.color}">
        <span class="poster-art" aria-hidden="true">${item.symbol}</span>
        <span class="poster-kicker">${formatLabel(item.format)} · ${item.year}</span>
        <p class="poster-title">${escapeHTML(item.title)}</p>
      </div>
      <div class="card-content">
        <div class="card-meta"><span>${runtimeLabel(item)}</span><span aria-hidden="true">·</span><span class="rating-chip">${item.rating}</span></div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <div class="tag-row">${genres}</div>
        <div class="card-actions">
          <span class="match-label"><strong>${escapeHTML(score)}</strong></span>
          <button class="similar-button" type="button" data-similar="${item.id}" aria-pressed="${index === 0}">Similar picks ↗</button>
        </div>
      </div>
    </article>`;
}

function recommendationList(preferences) {
  return catalog
    .filter((item) => matchesPreferences(item, preferences))
    .map((item) => ({ item, score: scoreItem(item, preferences) }))
    .sort((first, second) => second.score - first.score || first.item.title.localeCompare(second.item.title))
    .slice(0, 3);
}

function similarItems(selected, ignoreAge = false) {
  return catalog
    .filter((item) => item.id !== selected.id && (ignoreAge || item.age <= selected.age))
    .map((item) => {
      const sharedGenres = item.genres.filter((genre) => selected.genres.includes(genre)).length;
      const sharedMoods = item.moods.filter((mood) => selected.moods.includes(mood)).length;
      const sharedCollections = [selected.related, item.related].every(Array.isArray)
        ? selected.related.filter((collection) => item.related.includes(collection)).length
        : 0;
      const score = sharedCollections * 100 + sharedGenres * 3 + sharedMoods + (item.format === selected.format ? 1 : 0);
      return { item, score, sharedGenres, sharedCollections };
    })
    .filter((candidate) => candidate.sharedGenres > 0 || candidate.sharedCollections > 0)
    .sort((first, second) => second.score - first.score || first.item.title.localeCompare(second.item.title))
    .slice(0, 3);
}

function renderSimilar(selected, ignoreAge = false) {
  const similar = similarItems(selected, ignoreAge);
  similarIntro.textContent = `More watches in the same spirit as ${selected.title}.`;
  similarList.innerHTML = similar.map(({ item }) => `
    <article class="similar-card">
      <div class="mini-poster" style="--poster:${item.color}" aria-hidden="true">${item.symbol}</div>
      <div><h4>${escapeHTML(item.title)}</h4><p>${formatLabel(item.format)} · ${item.year} · ${runtimeLabel(item)} · ${escapeHTML(item.rating)}</p><div class="tag-row">${item.genres.map((genre) => `<span class="tag">${escapeHTML(genre)}</span>`).join("")}</div></div>
    </article>`).join("");
  similarSection.hidden = similar.length === 0;
}

function showResultsHeading(eyebrow, title, note, buttonText) {
  resultsEyebrow.innerHTML = `<span aria-hidden="true">✳</span> ${escapeHTML(eyebrow)}`;
  resultsTitle.textContent = title;
  resultsNote.textContent = note;
  document.querySelector("#try-again").innerHTML = `${escapeHTML(buttonText)} <span aria-hidden="true">↗</span>`;
}

function renderRecommendations() {
  const preferences = getPreferences();
  visibleRecommendations = recommendationList(preferences);
  showResultsHeading(
    "A FEW IDEAS FOR TONIGHT",
    "Your watchlist, curated.",
    "Age guidance is an editorial estimate, not an official rating. Please check your local rating and content details before watching.",
    "Change my picks"
  );
  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });

  if (visibleRecommendations.length === 0) {
    recommendationGrid.innerHTML = `
      <div class="empty-state">
        <h3>We couldn't find a match for that exact combo.</h3>
        <p>Try widening the age range, picking a different genre, or giving yourself a little more time. There are plenty of good nights in here.</p>
      </div>`;
    similarSection.hidden = true;
    return;
  }

  recommendationGrid.innerHTML = visibleRecommendations
    .map(({ item, score }, index) => cardMarkup(item, index, score))
    .join("");
  renderSimilar(visibleRecommendations[0].item);
}

function searchCatalog(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return catalog
    .map((item) => {
      const title = item.title.toLocaleLowerCase();
      const description = item.description.toLocaleLowerCase();
      const genres = item.genres.join(" ").toLocaleLowerCase();
      const score = title === normalizedQuery ? 100
        : title.startsWith(normalizedQuery) ? 80
          : title.includes(normalizedQuery) ? 60
            : description.includes(normalizedQuery) ? 20
              : genres.includes(normalizedQuery) ? 10 : 0;
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((first, second) => second.score - first.score || first.item.title.localeCompare(second.item.title))
    .slice(0, 3);
}

function renderSearchResults(query) {
  visibleRecommendations = searchCatalog(query).slice(0, 1);
  showResultsHeading(
    "SEARCH RESULTS",
    `Matches for “${query.trim()}”`,
    "Search does not apply the family-age filter. Similar picks may have mature content; check each title's rating and local content guidance.",
    "Search again"
  );
  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });

  if (visibleRecommendations.length === 0) {
    recommendationGrid.innerHTML = `
      <div class="empty-state">
        <h3>No titles found for “${escapeHTML(query.trim())}”.</h3>
        <p>Try a shorter title, or use the mood and genre filters to discover something from our starter catalog.</p>
      </div>`;
    similarSection.hidden = true;
    return;
  }

  recommendationGrid.innerHTML = visibleRecommendations
    .map(({ item }, index) => cardMarkup(item, index, "Title you searched"))
    .join("");
  renderSimilar(visibleRecommendations[0].item, true);
}

const browsePages = {
  movies: {
    title: "All movies",
    description: "Feature films across every genre.",
    filter: (item) => item.format === "movie"
  },
  series: {
    title: "All series & shows",
    description: "Scripted series, reality shows, and more.",
    filter: (item) => item.format !== "movie"
  },
  animation: {
    title: "All animation",
    description: "Animated movies and series for different ages.",
    filter: (item) => item.genres.includes("Animation")
  },
  anime: {
    title: "All anime",
    description: "Anime movies and series from the starter catalog.",
    filter: (item) => item.anime === true
  },
  kdrama: {
    title: "All K-dramas",
    description: "Korean drama series across romance, comedy, thriller, and more.",
    filter: (item) => item.kdrama === true
  }
};

function renderBrowsePage(page) {
  const definition = browsePages[page];
  if (!definition) return;
  const sort = document.querySelector("#browse-sort").value;
  const items = catalog.filter(definition.filter);
  items.sort((first, second) => sort === "year"
    ? second.year - first.year || first.title.localeCompare(second.title)
    : first.title.localeCompare(second.title));

  document.querySelector("#browse-title").textContent = definition.title;
  document.querySelector("#browse-description").textContent = `${definition.description} ${items.length} titles in this starter catalog.`;
  document.querySelector("#browse-grid").innerHTML = items
    .map((item, index) => cardMarkup(item, index, "Browse catalog"))
    .join("");
}

function navigateToPage(page) {
  const isHome = page === "home" || !browsePages[page];
  document.querySelector(".hero").hidden = !isHome;
  document.querySelector(".search-panel").hidden = !isHome;
  document.querySelector(".planner").hidden = !isHome;
  document.querySelector("#browse").hidden = isHome;
  if (isHome) {
    document.querySelector("#results").hidden = true;
  } else {
    renderBrowsePage(page);
    document.querySelector("#results").hidden = true;
  }
  document.querySelectorAll(".nav-link").forEach((link) => {
    const active = link.dataset.page === (isHome ? "home" : page);
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function showSimilarForItem(item) {
  visibleRecommendations = [{ item, score: 0 }];
  showResultsHeading(
    "YOU MIGHT ALSO LIKE",
    `Because you liked ${item.title}`,
    `Similar picks are ranked using shared titles/franchises, genres, and themes. Age guidance: ${item.age}+ (editorial estimate).`,
    "Back to browsing"
  );
  recommendationGrid.innerHTML = cardMarkup(item, 0, "Your selected title");
  renderSimilar(item, true);
  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderRecommendations();
});

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#title-search");
  const query = input.value.trim();
  if (!query) {
    input.focus();
    return;
  }
  renderSearchResults(query);
});

recommendationGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-similar]");
  if (!button) return;
  const selected = visibleRecommendations.find(({ item }) => item.id === button.dataset.similar);
  if (!selected) return;
  recommendationGrid.querySelectorAll("[data-similar]").forEach((candidate) => {
    candidate.setAttribute("aria-pressed", String(candidate === button));
    candidate.closest(".movie-card").classList.toggle("featured", candidate === button);
  });
  const isSearch = resultsEyebrow.textContent.includes("SEARCH RESULTS");
  renderSimilar(selected.item, isSearch);
});

document.querySelector("#browse-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-similar]");
  if (!button) return;
  const item = catalog.find((candidate) => candidate.id === button.dataset.similar);
  if (item) showSimilarForItem(item);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const page = link.dataset.page;
    window.history.pushState({ page }, "", page === "home" ? "#home" : `#${page}`);
    navigateToPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.querySelector("#browse-sort").addEventListener("change", () => {
  const page = window.location.hash.slice(1);
  if (browsePages[page]) renderBrowsePage(page);
});

window.addEventListener("popstate", () => {
  navigateToPage(window.location.hash.slice(1));
});

document.querySelector("#try-again").addEventListener("click", () => {
  if (window.location.hash !== "#home") {
    window.history.pushState({ page: "home" }, "", "#home");
    navigateToPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.querySelector("#planner-title").scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector('input[name="mood"]:checked').focus();
});

const initialPage = window.location.hash.slice(1);
if (browsePages[initialPage]) navigateToPage(initialPage);
