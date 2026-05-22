const fields = [
  { id: "style", group: 0 },
  { id: "outline", group: 0 },
  { id: "outlineWeight", group: 0 },
  { id: "outputMode", group: 0 },
  { id: "proportion", group: 1 },
  { id: "age", group: 1 },
  { id: "gender", group: 1 },
  { id: "species", group: 1 },
  { id: "bodyType", group: 1 },
  { id: "faceType", group: 2 },
  { id: "expression", group: 2 },
  { id: "faceItem", group: 2 },
  { id: "hairColor", group: 3 },
  { id: "hairStyle", group: 3 },
  { id: "bangs", group: 3 },
  { id: "eyes", group: 3 },
  { id: "eyeShape", group: 3 },
  { id: "outerTop", group: 4 },
  { id: "inner", group: 4 },
  { id: "bottom", group: 4 },
  { id: "headItem", group: 5 },
  { id: "armItem", group: 5 },
  { id: "chestItem", group: 5 },
  { id: "shoes", group: 5 },
  { id: "direction", group: 6 },
  { id: "range", group: 6 },
  { id: "action", group: 6 },
  { id: "background", group: 7 },
  { id: "mood", group: 8 },
  { id: "line", group: 9, quote: true }
];

const sample = {
  style: "アニメ風",
  outline: "アウトラインあり",
  outlineWeight: "細く濃い線",
  outputMode: "キャラクターカードとして出力",
  proportion: "6頭身",
  age: "10代後半",
  gender: "女性キャラクター",
  species: "人間",
  bodyType: "すらっとした体型",
  faceType: "幼い顔",
  expression: "少し笑っている",
  faceItem: "そばかす",
  hairColor: "黒髪",
  hairStyle: "ショートヘア",
  bangs: "斜め前髪",
  eyes: "黒い目",
  eyeShape: "大きな目",
  outerTop: "セーラー襟の上着",
  inner: "白インナー",
  bottom: "ショートパンツ",
  headItem: "頭にヘッドホン",
  armItem: "腕にリストバンド",
  chestItem: "胸にエンブレム",
  shoes: "スニーカー",
  direction: "斜め前を向いている",
  range: "膝上まで",
  action: "手を伸ばしている",
  background: "淡い青背景",
  mood: "やわらかい朝",
  line: "名前を呼ばれた気がした"
};

const presets = {
  "アニメ主人公": sample,
  "少女漫画の吸血鬼": {
    ...sample,
    style: "少女漫画風",
    outlineWeight: "細く淡い線",
    outputMode: "ステータスカードとして出力",
    proportion: "7頭身",
    age: "20代前半",
    gender: "男性キャラクター",
    species: "吸血鬼",
    bodyType: "すらっとした体型",
    faceType: "大人っぽい顔",
    expression: "眠そうな表情",
    faceItem: "ピアス",
    hairColor: "黒髪",
    hairStyle: "ロングヘア",
    bangs: "長い前髪",
    eyes: "赤い目",
    eyeShape: "切れ長の目",
    outerTop: "長いコート",
    inner: "黒インナー",
    bottom: "細身のパンツ",
    chestItem: "胸にペンダント",
    shoes: "革靴",
    direction: "少し振り返っている",
    range: "腰上まで",
    action: "歩いている",
    background: "夕方の屋上",
    mood: "あたたかい夕暮れ"
  },
  "レトロ漫画の獣人": {
    ...sample,
    style: "レトロ漫画風",
    outlineWeight: "太くはっきりした線",
    proportion: "5頭身",
    age: "20代前半",
    gender: "男性キャラクター",
    species: "獣人",
    bodyType: "小柄",
    faceType: "幼い顔",
    expression: "少し笑っている",
    hairColor: "茶髪",
    hairStyle: "ウルフカット",
    eyes: "琥珀色の目",
    eyeShape: "猫のような目",
    outerTop: "大きめのパーカー",
    inner: "無地のシャツ",
    bottom: "ショートパンツ",
    headItem: "頭に小さな帽子",
    armItem: "腕にリストバンド",
    shoes: "スニーカー",
    direction: "少し振り返っている",
    action: "歩いている",
    background: "夜の駅",
    mood: "ひんやりした空気"
  },
  "漫画カードの魔法使い": {
    ...sample,
    style: "漫画風",
    outlineWeight: "普通の濃さの線",
    outputMode: "三面図キャラカードとして出力",
    proportion: "3頭身",
    age: "年齢不詳",
    gender: "中性的なキャラクター",
    species: "魔法使い",
    bodyType: "小柄",
    faceType: "幼い顔",
    expression: "困ったような表情",
    faceItem: "丸眼鏡",
    hairColor: "金髪",
    hairStyle: "お団子ヘア",
    bangs: "斜め前髪",
    eyes: "青い目",
    eyeShape: "丸い目",
    outerTop: "大きめのパーカー",
    inner: "無地のシャツ",
    bottom: "ショートパンツ",
    headItem: "頭に小さな帽子",
    armItem: "腕に袖飾り",
    chestItem: "胸にブローチ",
    shoes: "ショートブーツ",
    direction: "正面を向いている",
    range: "全身",
    action: "本を読んでいる",
    background: "古い図書室",
    mood: "少し不思議な空気"
  },
  "アニメ三面図": {
    ...sample,
    style: "アニメ風",
    outputMode: "三面図として出力",
    proportion: "6頭身",
    age: "20代前半",
    gender: "中性的なキャラクター",
    species: "人間",
    bodyType: "細身",
    faceType: "中性的な顔",
    expression: "静かな表情",
    hairColor: "青みのある黒髪",
    hairStyle: "ショートボブ",
    bangs: "センター分け",
    eyes: "黒い目",
    eyeShape: "切れ長の目",
    outerTop: "白いシャツ",
    inner: "黒インナー",
    bottom: "細身のパンツ",
    headItem: "",
    armItem: "",
    chestItem: "",
    shoes: "ショートブーツ",
    direction: "正面を向いている",
    range: "全身",
    action: "立っている",
    background: "白背景",
    mood: "設定資料のように静か"
  }
};

const options = {
  style: ["アニメ風", "漫画風", "少女漫画風", "レトロ漫画風"],
  outline: ["アウトラインあり", "アウトラインなし"],
  outlineWeight: ["細く淡い線", "細く濃い線", "普通の濃さの線", "太くはっきりした線"],
  outputMode: ["一枚絵として出力", "キャラクターカードとして出力", "ステータスカードとして出力", "三面図として出力", "三面図キャラカードとして出力", "SNS用アイコン素材として出力"],
  proportion: ["2頭身", "3頭身", "5頭身", "6頭身", "7頭身", "8頭身"],
  age: ["10代後半", "20代前半", "20代後半", "年齢不詳"],
  gender: ["女性キャラクター", "男性キャラクター", "中性的なキャラクター", "性別不明のキャラクター"],
  species: ["人間", "エルフ", "獣人", "妖精", "魔法使い", "アンドロイド", "吸血鬼"],
  bodyType: ["細身", "小柄", "華奢", "すらっとした体型", "中性的な体型"],
  faceType: ["中性的な顔", "幼い顔", "大人っぽい顔", "やわらかい顔", "無表情が似合う顔"],
  expression: ["静かな表情", "少し笑っている", "眠そうな表情", "困ったような表情", "遠くを見ている表情"],
  faceItem: ["眼帯", "丸眼鏡", "ピアス", "そばかす", "泣きぼくろ", "小さな傷"],
  hairColor: ["黒髪", "金髪", "銀髪", "白髪", "茶髪", "赤髪", "青髪", "ピンク髪", "淡い紫の髪", "青みのある黒髪"],
  hairStyle: ["ショートボブ", "ロングヘア", "ボブ", "ショートヘア", "ウルフカット", "セミロング", "ツインテール", "ポニーテール", "お団子ヘア"],
  bangs: ["斜め前髪", "ぱっつん前髪", "長い前髪", "センター分け", "目にかかる前髪", "前髪なし"],
  eyes: ["赤い目", "青い目", "黒い目", "琥珀色の目", "透き通った目"],
  eyeShape: ["丸い目", "切れ長の目", "つり目", "たれ目", "大きな目", "猫のような目", "伏し目がちな目"],
  outerTop: ["和装上衣", "黒いジャケット", "白いシャツ", "大きめのパーカー", "セーラー襟の上着", "長いコート"],
  inner: ["白インナー", "黒インナー", "ハイネック", "薄いニット", "無地のシャツ"],
  bottom: ["ミニスカート", "ロングスカート", "ショートパンツ", "細身のパンツ", "ワイドパンツ"],
  headItem: ["頭に狐面", "頭にリボン", "頭に小さな帽子", "頭にヘッドホン", "頭にベール"],
  armItem: ["腕に包帯", "腕にブレスレット", "腕に手袋", "腕にリストバンド", "腕に袖飾り"],
  chestItem: ["胸にエンブレム", "胸にブローチ", "胸にリボン", "胸にペンダント"],
  shoes: ["厚底ブーツ", "革靴", "スニーカー", "ローファー", "ショートブーツ"],
  direction: ["正面を向いている", "横を向いている", "少し振り返っている", "斜め前を向いている"],
  range: ["顔アップ", "バストアップ", "腰上まで", "膝上まで", "全身"],
  action: ["立っている", "歩いている", "踊っている", "座っている", "手を伸ばしている", "本を読んでいる"],
  background: ["透明背景", "白背景", "淡い青背景", "夜の駅", "古い図書室", "夕方の屋上"],
  mood: ["やわらかい朝", "ひんやりした空気", "少し不思議な空気", "あたたかい夕暮れ", "設定資料のように静か"],
  line: ["名前を呼ばれた気がした", "物語はまだ閉じていなかった", "まだ帰らなくていい", "小さな音だけが聞こえた"]
};

const storageKey = "anime-comic-maker";
const themeKey = "anime-comic-maker-theme";
const form = document.querySelector("#promptForm");
const output = document.querySelector("#promptOutput");
const copyButton = document.querySelector("#copyButton");
const sampleButton = document.querySelector("#sampleButton");
const randomButton = document.querySelector("#randomButton");
const poemButton = document.querySelector("#poemButton");
const modeButton = document.querySelector("#modeButton");
const presetActions = document.querySelector("#presetActions");

function clean(value) {
  return String(value || "").replace(/[「」]/g, "").replace(/\s+/g, " ").trim();
}

function hasPunctuation(value) {
  return /[。！？!?]$/.test(value);
}

function sentence(value) {
  const text = clean(value);
  if (!text) return "";
  return hasPunctuation(text) ? text : `${text}。`;
}

function quote(value) {
  const text = clean(value);
  if (!text) return "";
  return `「${hasPunctuation(text) ? text : `${text}。`}」`;
}

function getValue(id) {
  return document.querySelector(`#${id}`).value;
}

function buildPrompt() {
  const groups = [];
  fields.forEach((field) => {
    const line = field.quote ? quote(getValue(field.id)) : sentence(getValue(field.id));
    if (!line) return;
    if (!groups[field.group]) groups[field.group] = [];
    groups[field.group].push(line);
  });
  return groups.filter(Boolean).map((group) => group.join("\n")).join("\n\n");
}

function createChoiceButtons() {
  fields.forEach((field) => {
    const values = options[field.id] || [];
    const input = document.querySelector(`#${field.id}`);
    if (!values.length || !input) return;
    const choices = document.createElement("div");
    choices.className = "choices";
    choices.setAttribute("aria-label", `${input.labels[0].textContent}の候補`);
    choices.innerHTML = values.map((value) => `<button class="choice-button" type="button" data-target="${field.id}" data-value="${value}">${value}</button>`).join("");
    input.insertAdjacentElement("afterend", choices);
  });
}

function updateChoiceStates() {
  document.querySelectorAll(".choice-button").forEach((button) => {
    const input = document.querySelector(`#${button.dataset.target}`);
    button.classList.toggle("is-active", input && input.value === button.dataset.value);
  });
}

function saveState() {
  const data = {};
  fields.forEach((field) => {
    data[field.id] = getValue(field.id);
  });
  localStorage.setItem(storageKey, JSON.stringify(data));
}

function render() {
  const prompt = buildPrompt();
  output.textContent = prompt;
  copyButton.disabled = !prompt;
  updateChoiceStates();
  saveState();
}

function setValues(data) {
  fields.forEach((field) => {
    document.querySelector(`#${field.id}`).value = data[field.id] || "";
  });
  render();
}

function createPresetButtons() {
  presetActions.innerHTML = Object.keys(presets).map((name) => `<button class="preset-button" type="button" data-preset="${name}">${name}</button>`).join("");
}

function applyPreset(name) {
  const preset = presets[name];
  if (!preset) return;
  setValues(preset);
}

function loadState() {
  try {
    setValues(JSON.parse(localStorage.getItem(storageKey) || "{}"));
  } catch {
    render();
  }
}

function setCopyButtonLabel(text) {
  copyButton.textContent = text;
  window.setTimeout(() => {
    copyButton.textContent = "コピー";
  }, 2200);
}

function copyPrompt() {
  const prompt = buildPrompt();
  if (!prompt) return;
  const source = document.createElement("textarea");
  source.value = prompt;
  source.setAttribute("readonly", "");
  source.style.position = "fixed";
  source.style.left = "-9999px";
  document.body.appendChild(source);
  source.select();
  const copied = document.execCommand("copy");
  source.remove();
  setCopyButtonLabel(copied ? "コピー済み" : "選択しました");
}

function pickRandom(values) {
  return values[Math.floor(Math.random() * values.length)];
}

function setRandomValues() {
  const data = {};
  fields.forEach((field) => {
    const values = options[field.id] || [];
    data[field.id] = values.length ? pickRandom(values) : "";
  });
  setValues(data);
}

function generatePoemLine() {
  const lineInput = document.querySelector("#line");
  lineInput.value = pickRandom(options.line);
  lineInput.dispatchEvent(new Event("input", { bubbles: true }));
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  modeButton.textContent = theme === "dark" ? "明色" : "暗色";
  modeButton.setAttribute("aria-pressed", String(theme === "dark"));
  localStorage.setItem(themeKey, theme);
}

function loadTheme() {
  const stored = localStorage.getItem(themeKey);
  if (stored === "dark" || stored === "light") {
    applyTheme(stored);
    return;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  modeButton.textContent = prefersDark ? "明色" : "暗色";
  modeButton.setAttribute("aria-pressed", String(prefersDark));
}

form.addEventListener("input", render);
form.addEventListener("reset", () => window.setTimeout(render, 0));
form.addEventListener("click", (event) => {
  const button = event.target.closest(".choice-button");
  if (!button) return;
  const input = document.querySelector(`#${button.dataset.target}`);
  if (!input) return;
  input.value = button.dataset.value;
  input.dispatchEvent(new Event("input", { bubbles: true }));
});

presetActions.addEventListener("click", (event) => {
  const button = event.target.closest(".preset-button");
  if (button) applyPreset(button.dataset.preset);
});

copyButton.addEventListener("click", copyPrompt);
randomButton.addEventListener("click", setRandomValues);
sampleButton.addEventListener("click", () => setValues(sample));
poemButton.addEventListener("click", generatePoemLine);
modeButton.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
});

createPresetButtons();
createChoiceButtons();
loadTheme();
loadState();
