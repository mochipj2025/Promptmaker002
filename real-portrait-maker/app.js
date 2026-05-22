const fields = [
  { id: "style", group: 0 },
  { id: "outputMode", group: 0 },
  { id: "age", group: 1 },
  { id: "ageImpression", group: 1 },
  { id: "gender", group: 1 },
  { id: "species", group: 1 },
  { id: "skinTone", group: 2 },
  { id: "skinTexture", group: 2 },
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
  { id: "chestItem", group: 4 },
  { id: "lighting", group: 5 },
  { id: "background", group: 5 },
  { id: "range", group: 5 },
  { id: "direction", group: 5 },
  { id: "mood", group: 6 },
  { id: "line", group: 7, quote: true }
];

const sample = {
  style: "フィルム写真風",
  outputMode: "リアルポートレートとして出力",
  age: "20代後半",
  ageImpression: "落ち着いた雰囲気",
  gender: "女性キャラクター",
  species: "人間",
  skinTone: "自然な肌色",
  skinTexture: "やわらかい肌",
  faceType: "やわらかい顔",
  expression: "静かな表情",
  faceItem: "小さなほくろ",
  hairColor: "青みのある黒髪",
  hairStyle: "セミロング",
  bangs: "センター分け",
  eyes: "黒い目",
  eyeShape: "伏し目がちな目",
  outerTop: "白いシャツ",
  inner: "薄いニット",
  chestItem: "胸にペンダント",
  lighting: "窓辺の自然光",
  background: "白い部屋",
  range: "バストアップ",
  direction: "斜め前を向いている",
  mood: "自然光の静かな空気",
  line: "光だけが残っていた"
};

const presets = {
  "静かな雑誌ポートレート": {
    ...sample,
    age: "20代前半",
    ageImpression: "透明感がある",
    gender: "中性的なキャラクター",
    skinTone: "明るい肌",
    skinTexture: "透明感のある肌",
    faceType: "端正な顔",
    expression: "遠くを見ている表情",
    hairStyle: "ショートボブ",
    bangs: "目にかかる前髪",
    lighting: "曇りの日のやわらかい光",
    background: "白背景",
    mood: "ひんやりした空気"
  },
  "自然光の部屋": {
    ...sample,
    age: "30代前半",
    ageImpression: "落ち着いた雰囲気",
    gender: "女性キャラクター",
    skinTone: "自然な肌色",
    skinTexture: "自然な肌",
    faceType: "やわらかい顔",
    expression: "少し笑っている",
    hairColor: "茶髪",
    hairStyle: "ロングヘア",
    bangs: "斜め前髪",
    eyes: "琥珀色の目",
    lighting: "窓辺の自然光",
    background: "白い部屋",
    mood: "自然光の静かな空気"
  },
  "夜の街灯": {
    ...sample,
    style: "シネマ風",
    age: "20代後半",
    ageImpression: "大人びた雰囲気",
    gender: "男性キャラクター",
    skinTone: "自然な肌色",
    skinTexture: "マットな肌",
    faceType: "大人っぽい顔",
    expression: "無表情",
    faceItem: "ピアス",
    hairColor: "黒髪",
    hairStyle: "ショートヘア",
    bangs: "前髪なし",
    eyes: "黒い目",
    eyeShape: "切れ長の目",
    outerTop: "黒いジャケット",
    inner: "黒インナー",
    lighting: "夜の街灯",
    background: "夜の駅",
    mood: "静かな雨の夜"
  },
  "雨路地のアンドロイド": {
    ...sample,
    style: "シネマ風",
    age: "年齢不詳",
    ageImpression: "生活感が少ない",
    gender: "中性的なキャラクター",
    species: "アンドロイド",
    skinTone: "淡い灰色の肌",
    skinTexture: "なめらかな肌",
    faceType: "無表情が似合う顔",
    expression: "遠くを見ている表情",
    faceItem: "小さな傷",
    hairColor: "青みのある黒髪",
    hairStyle: "ショートボブ",
    bangs: "センター分け",
    eyes: "青い目",
    eyeShape: "切れ長の目",
    outerTop: "黒いジャケット",
    inner: "黒インナー",
    lighting: "濡れた路面の反射光",
    background: "雨の路地裏",
    mood: "ひんやりした空気"
  },
  "40代の編集者": {
    ...sample,
    age: "40代前半",
    ageImpression: "生活感がある",
    gender: "女性キャラクター",
    skinTone: "自然な肌色",
    skinTexture: "自然な肌",
    faceType: "端正な顔",
    expression: "静かな表情",
    faceItem: "丸眼鏡",
    hairColor: "黒髪",
    hairStyle: "セミロング",
    bangs: "センター分け",
    outerTop: "長いコート",
    inner: "薄いニット",
    chestItem: "",
    lighting: "フィルム写真のやわらかい光",
    background: "白い部屋",
    range: "腰上まで",
    mood: "落ち着いた編集感"
  }
};

const options = {
  style: ["写真風", "フィルム写真風", "シネマ風"],
  outputMode: ["リアルポートレートとして出力", "雑誌ポートレートとして出力", "プロフィール写真として出力"],
  age: ["10代後半", "20代前半", "20代後半", "30代前半", "40代前半", "年齢不詳"],
  ageImpression: ["幼さが残る", "若々しい", "透明感がある", "落ち着いた雰囲気", "大人びた雰囲気", "生活感がある", "生活感が少ない"],
  gender: ["女性キャラクター", "男性キャラクター", "中性的なキャラクター", "性別不明のキャラクター"],
  species: ["人間", "アンドロイド", "ドール", "吸血鬼", "エルフ"],
  skinTone: ["明るい肌", "自然な肌色", "健康的な肌色", "褐色の肌", "日焼けした肌", "白い肌", "青白い肌", "淡い灰色の肌"],
  skinTexture: ["自然な肌", "透明感のある肌", "健康的な肌", "マットな肌", "やわらかい肌", "なめらかな肌"],
  faceType: ["やわらかい顔", "端正な顔", "中性的な顔", "大人っぽい顔", "透明感のある顔", "無表情が似合う顔"],
  expression: ["静かな表情", "少し笑っている", "遠くを見ている表情", "伏し目がちな表情", "無表情", "眠そうな表情"],
  faceItem: ["小さなほくろ", "泣きぼくろ", "丸眼鏡", "ピアス", "そばかす", "小さな傷"],
  hairColor: ["黒髪", "茶髪", "金髪", "白髪", "銀髪", "青みのある黒髪"],
  hairStyle: ["ショートヘア", "ショートボブ", "セミロング", "ロングヘア", "ゆるく結んだ髪"],
  bangs: ["斜め前髪", "ぱっつん前髪", "長い前髪", "センター分け", "目にかかる前髪", "前髪なし"],
  eyes: ["黒い目", "青い目", "琥珀色の目", "透き通った目", "静かな目"],
  eyeShape: ["伏し目がちな目", "切れ長の目", "たれ目", "大きな目", "細い目"],
  outerTop: ["白いシャツ", "黒いジャケット", "長いコート", "大きめのパーカー", "シンプルなワンピース"],
  inner: ["薄いニット", "白インナー", "黒インナー", "無地のシャツ", "ハイネック"],
  chestItem: ["胸にペンダント", "小さなブローチ", "細いネックレス", "何もつけない"],
  lighting: ["自然光", "窓辺の自然光", "曇りの日のやわらかい光", "夜の街灯", "フィルム写真のやわらかい光", "濡れた路面の反射光"],
  background: ["白背景", "白い部屋", "夜の駅", "雨の路地裏", "古い図書室", "淡いグレー背景"],
  range: ["顔アップ", "バストアップ", "腰上まで"],
  direction: ["正面を向いている", "斜め前を向いている", "少し振り返っている", "うつむいている"],
  mood: ["自然光の静かな空気", "ひんやりした空気", "静かな雨の夜", "落ち着いた編集感", "透明感のある静けさ"],
  line: ["光だけが残っていた", "朝の光が、そっと輪郭をなぞった", "まだ名前のない朝だった", "雨音だけが、少し近かった", "今日はここで待っている"]
};

const storageKey = "real-portrait-maker";
const themeKey = "real-portrait-maker-theme";
const form = document.querySelector("#promptForm");
const output = document.querySelector("#promptOutput");
const copyButton = document.querySelector("#copyButton");
const sampleButton = document.querySelector("#sampleButton");
const randomButton = document.querySelector("#randomButton");
const poemButton = document.querySelector("#poemButton");
const modeButton = document.querySelector("#modeButton");
const presetActions = document.querySelector("#presetActions");

function clean(value) {
  return String(value || "")
    .replace(/[「」]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function hasPunctuation(value) {
  return /[。！？!?]$/.test(value);
}

function sentence(value) {
  const text = clean(value);
  if (!text || text === "何もつけない") return "";
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
    choices.innerHTML = values.map((value) => (
      `<button class="choice-button" type="button" data-target="${field.id}" data-value="${value}">${value}</button>`
    )).join("");
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
  presetActions.innerHTML = Object.keys(presets).map((name) => (
    `<button class="preset-button" type="button" data-preset="${name}">${name}</button>`
  )).join("");
}

function applyPreset(name) {
  const preset = presets[name];
  if (!preset) return;
  setValues(preset);
  if (!preset.line) generatePoemLine();
}

function loadState() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
    setValues(data);
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

function copyWithFallback(text) {
  const copySource = document.createElement("textarea");
  copySource.value = text;
  copySource.setAttribute("readonly", "");
  copySource.style.position = "fixed";
  copySource.style.left = "-9999px";
  copySource.style.top = "0";
  document.body.appendChild(copySource);
  copySource.focus();
  copySource.select();
  copySource.setSelectionRange(0, copySource.value.length);
  const copied = document.execCommand("copy");
  copySource.remove();
  return copied;
}

function selectOutputText() {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(output);
  selection.removeAllRanges();
  selection.addRange(range);
}

function copyPrompt() {
  const prompt = buildPrompt();
  if (!prompt) return;
  if (copyWithFallback(prompt)) {
    setCopyButtonLabel("コピー済み");
    return;
  }
  selectOutputText();
  setCopyButtonLabel("選択しました");
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
  generatePoemLine();
}

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

function moodSeed() {
  const source = [
    getValue("ageImpression"),
    getValue("skinTexture"),
    getValue("expression"),
    getValue("lighting"),
    getValue("background"),
    getValue("mood")
  ].join(" ");

  if (includesAny(source, ["雨", "夜", "街灯", "路地", "駅"])) {
    return ["雨音だけが、少し近かった", "夜の光が、輪郭だけを残した", "帰り道は、まだ決まっていない"];
  }
  if (includesAny(source, ["朝", "自然光", "窓辺", "透明"])) {
    return ["朝の光が、そっと輪郭をなぞった", "光だけが残っていた", "まだ名前のない朝だった"];
  }
  if (includesAny(source, ["生活感", "落ち着いた", "編集"])) {
    return ["今日はここで待っている", "静かな時間だけが残っていた", "言葉にするには少し早かった"];
  }
  return options.line;
}

function generatePoemLine() {
  const lineInput = document.querySelector("#line");
  const seeds = moodSeed();
  lineInput.value = pickRandom(seeds);
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
form.addEventListener("reset", () => {
  window.setTimeout(render, 0);
});

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
  if (!button) return;
  applyPreset(button.dataset.preset);
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
