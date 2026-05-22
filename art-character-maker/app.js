const fields = [
  { id: "style", group: 0 },
  { id: "materialTexture", group: 0 },
  { id: "outputMode", group: 0 },
  { id: "proportion", group: 1 },
  { id: "age", group: 1 },
  { id: "gender", group: 1 },
  { id: "species", group: 1 },
  { id: "skinTone", group: 1 },
  { id: "bodyType", group: 1 },
  { id: "faceType", group: 2 },
  { id: "expression", group: 2 },
  { id: "hairColor", group: 3 },
  { id: "hairStyle", group: 3 },
  { id: "bangs", group: 3 },
  { id: "eyes", group: 3 },
  { id: "outerTop", group: 4 },
  { id: "inner", group: 4 },
  { id: "bottom", group: 4 },
  { id: "symbolItem", group: 5 },
  { id: "composition", group: 6 },
  { id: "background", group: 6 },
  { id: "mood", group: 7 },
  { id: "line", group: 8, quote: true }
];

const sample = {
  style: "水彩風",
  materialTexture: "淡いにじみと紙の質感",
  outputMode: "一枚絵として出力",
  proportion: "5頭身",
  age: "年齢不詳",
  gender: "性別不明のキャラクター",
  species: "精霊",
  skinTone: "透明感のある肌",
  bodyType: "華奢",
  faceType: "やわらかい顔",
  expression: "静かな表情",
  hairColor: "白髪",
  hairStyle: "セミロング",
  bangs: "目にかかる前髪",
  eyes: "透き通った目",
  outerTop: "白いシャツ",
  inner: "薄いニット",
  bottom: "ロングスカート",
  symbolItem: "胸に小さな花",
  composition: "余白を大きく残した構図",
  background: "古い図書室",
  mood: "透明感のある静けさ",
  line: "光は静かにそこへ落ちた"
};

const presets = {
  "水彩の精霊": sample,
  "絵本の案内人": {
    ...sample,
    style: "絵本風",
    materialTexture: "やわらかい紙の質感",
    proportion: "3頭身",
    gender: "中性的なキャラクター",
    species: "小さな相棒種族",
    skinTone: "あたたかみのある肌",
    bodyType: "小柄",
    faceType: "幼い顔",
    expression: "少し笑っている",
    hairColor: "茶髪",
    hairStyle: "ボブ",
    bangs: "ぱっつん前髪",
    eyes: "琥珀色の目",
    outerTop: "大きめのパーカー",
    inner: "無地のシャツ",
    bottom: "ワイドパンツ",
    symbolItem: "腰に小さな本",
    composition: "中央に小さく立つ構図",
    background: "森の小道",
    mood: "やわらかい朝"
  },
  "版画の旅人": {
    ...sample,
    style: "版画風",
    materialTexture: "少しかすれたインクの質感",
    proportion: "6頭身",
    age: "20代後半",
    gender: "女性キャラクター",
    species: "人間",
    skinTone: "褐色の肌",
    bodyType: "すらっとした体型",
    faceType: "大人っぽい顔",
    expression: "遠くを見ている表情",
    hairColor: "赤髪",
    hairStyle: "ポニーテール",
    bangs: "前髪なし",
    eyes: "琥珀色の目",
    outerTop: "黒いジャケット",
    inner: "白インナー",
    bottom: "ワイドパンツ",
    symbolItem: "腰に鍵束",
    composition: "人物を右寄せにした構図",
    background: "夕方の屋上",
    mood: "あたたかい夕暮れ"
  },
  "切り絵の魔法使い": {
    ...sample,
    style: "切り絵風",
    materialTexture: "紙を重ねた平面的な質感",
    proportion: "5頭身",
    gender: "中性的なキャラクター",
    species: "魔法使い",
    skinTone: "明るい肌",
    bodyType: "小柄",
    faceType: "人形のような顔",
    expression: "困ったような表情",
    hairColor: "金髪",
    hairStyle: "お団子ヘア",
    bangs: "斜め前髪",
    eyes: "青い目",
    outerTop: "長いコート",
    inner: "ハイネック",
    bottom: "ショートパンツ",
    symbolItem: "頭に小さな帽子",
    composition: "正面から見た静かな構図",
    background: "淡い青背景",
    mood: "少し不思議な空気"
  },
  "油彩の吸血鬼": {
    ...sample,
    style: "油絵風",
    materialTexture: "厚みのある筆あと",
    outputMode: "キャラクターカードとして出力",
    proportion: "7頭身",
    age: "20代前半",
    gender: "男性キャラクター",
    species: "吸血鬼",
    skinTone: "青白い肌",
    bodyType: "すらっとした体型",
    faceType: "大人っぽい顔",
    expression: "眠そうな表情",
    hairColor: "黒髪",
    hairStyle: "ロングヘア",
    bangs: "長い前髪",
    eyes: "赤い目",
    outerTop: "長いコート",
    inner: "黒インナー",
    bottom: "細身のパンツ",
    symbolItem: "胸にペンダント",
    composition: "暗い余白を残したバストアップ",
    background: "夕方の屋上",
    mood: "落ち着いた編集感"
  }
};

const options = {
  style: ["水彩風", "絵本風", "児童書挿絵風", "版画風", "リソグラフ印刷風", "切り絵風", "貼り絵風", "色鉛筆画風", "パステル画風", "油絵風", "墨絵風"],
  materialTexture: ["淡いにじみと紙の質感", "やわらかい紙の質感", "少しかすれたインクの質感", "紙を重ねた平面的な質感", "厚みのある筆あと", "色鉛筆の細かい質感", "マットな印刷の質感"],
  outputMode: ["一枚絵として出力", "キャラクターカードとして出力", "雑誌ページの挿絵として出力", "絵本の挿絵として出力"],
  proportion: ["3頭身", "5頭身", "6頭身", "7頭身", "年齢不詳のバランス"],
  age: ["10代後半", "20代前半", "20代後半", "年齢不詳", "大人びた雰囲気"],
  gender: ["女性キャラクター", "男性キャラクター", "中性的なキャラクター", "性別不明のキャラクター"],
  species: ["人間", "エルフ", "妖精", "精霊", "魔法使い", "ドール", "吸血鬼", "小さな相棒種族"],
  skinTone: ["明るい肌", "自然な肌色", "あたたかみのある肌", "褐色の肌", "白い肌", "透明感のある肌", "青白い肌"],
  bodyType: ["細身", "小柄", "華奢", "すらっとした体型", "丸みのある体型"],
  faceType: ["やわらかい顔", "幼い顔", "大人っぽい顔", "人形のような顔", "透明感のある顔"],
  expression: ["静かな表情", "少し笑っている", "遠くを見ている表情", "眠そうな表情", "困ったような表情"],
  hairColor: ["黒髪", "茶髪", "金髪", "白髪", "銀髪", "赤髪", "淡い紫の髪"],
  hairStyle: ["ショートボブ", "ボブ", "セミロング", "ロングヘア", "ポニーテール", "お団子ヘア", "ゆるい三つ編み"],
  bangs: ["斜め前髪", "ぱっつん前髪", "長い前髪", "センター分け", "目にかかる前髪", "前髪なし"],
  eyes: ["黒い目", "青い目", "琥珀色の目", "赤い目", "透き通った目"],
  outerTop: ["白いシャツ", "長いコート", "大きめのパーカー", "和装上衣", "黒いジャケット"],
  inner: ["薄いニット", "白インナー", "黒インナー", "ハイネック", "無地のシャツ"],
  bottom: ["ロングスカート", "ワイドパンツ", "細身のパンツ", "ショートパンツ", "袴風スカート"],
  symbolItem: ["胸に小さな花", "腰に小さな本", "腰に鍵束", "頭に小さな帽子", "胸にペンダント", "背中に小さな羽"],
  composition: ["余白を大きく残した構図", "中央に小さく立つ構図", "人物を右寄せにした構図", "正面から見た静かな構図", "暗い余白を残したバストアップ"],
  background: ["白背景", "淡い青背景", "古い図書室", "森の小道", "夕方の屋上", "白い部屋"],
  mood: ["透明感のある静けさ", "やわらかい朝", "あたたかい夕暮れ", "少し不思議な空気", "落ち着いた編集感"],
  line: ["光は静かにそこへ落ちた", "物語はまだ閉じていなかった", "小さな秘密だけが残っていた", "ページの外で、風が待っていた"]
};

const storageKey = "art-character-maker";
const themeKey = "art-character-maker-theme";
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
