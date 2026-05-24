const fields = ["lpType", "audienceStage", "goal", "offerName", "mainOffer", "tone"];

const options = {
  lpType: ["商品LP", "予約LP", "登録LP", "アプリLP", "ブランドLP", "キャラ/IP LP", "イベントLP", "記事LP"],
  audienceStage: ["はじめて知る人", "比較している人", "すでに興味がある人", "ファンになりかけている人"],
  goal: ["買ってほしい", "予約してほしい", "登録してほしい", "問い合わせてほしい", "読んでほしい", "世界観を好きになってほしい", "参加してほしい"],
  tone: ["静かで信頼感がある", "やさしく親しみやすい", "高級感がある", "かわいい", "雑誌風", "ファンタジー寄り", "シンプルで実用的"]
};

const sample = {
  lpType: "予約LP",
  audienceStage: "はじめて知る人",
  goal: "予約してほしい",
  offerName: "小さな予約ページ",
  mainOffer: "安心して申し込めるサービス内容",
  tone: "静かで信頼感がある"
};

const lpTypeMap = {
  "商品LP": "販売型",
  "予約LP": "予約・申込型",
  "登録LP": "登録・リード獲得型",
  "アプリLP": "アプリ・SaaS型",
  "ブランドLP": "ブランド・世界観型",
  "キャラ/IP LP": "キャラクター・IP紹介型",
  "イベントLP": "イベント告知型",
  "記事LP": "記事・コンテンツ誘導型"
};

const goalMap = {
  "買ってほしい": { purpose: "購入につなげる", cta: "購入する" },
  "予約してほしい": { purpose: "予約につなげる", cta: "予約する" },
  "登録してほしい": { purpose: "登録につなげる", cta: "登録する" },
  "問い合わせてほしい": { purpose: "問い合わせにつなげる", cta: "問い合わせる" },
  "読んでほしい": { purpose: "読了につなげる", cta: "続きを読む" },
  "世界観を好きになってほしい": { purpose: "世界観の理解と好意につなげる", cta: "作品を見る" },
  "参加してほしい": { purpose: "参加申込につなげる", cta: "参加する" }
};

const typeDefaults = {
  "商品LP": { offerName: "商品紹介ページ", mainOffer: "買う理由が伝わる商品価値", tone: "シンプルで実用的" },
  "予約LP": { offerName: "予約ページ", mainOffer: "安心して申し込めるサービス内容", tone: "静かで信頼感がある" },
  "登録LP": { offerName: "無料受け取りページ", mainOffer: "登録すると受け取れる内容", tone: "やさしく親しみやすい" },
  "アプリLP": { offerName: "アプリ紹介ページ", mainOffer: "作業を楽にする機能", tone: "シンプルで実用的" },
  "ブランドLP": { offerName: "ブランド紹介ページ", mainOffer: "思想と世界観", tone: "雑誌風" },
  "キャラ/IP LP": { offerName: "キャラクター紹介ページ", mainOffer: "キャラクターの魅力と世界観", tone: "ファンタジー寄り" },
  "イベントLP": { offerName: "イベント告知ページ", mainOffer: "参加したくなる体験内容", tone: "やさしく親しみやすい" },
  "記事LP": { offerName: "記事紹介ページ", mainOffer: "読みたくなる見どころ", tone: "雑誌風" }
};

const audienceGuides = {
  "はじめて知る人": {
    entry: "最初に名前、対象、何ができるかを短く見せる。",
    trust: "不安を減らす説明と、流れを少し丁寧に置く。"
  },
  "比較している人": {
    entry: "違い、選ぶ理由、向いている人を早めに見せる。",
    trust: "価格、内容、判断材料を整理して迷いを減らす。"
  },
  "すでに興味がある人": {
    entry: "魅力の再確認と、すぐ行動できる導線を強める。",
    trust: "詳細よりも申し込み前の最後の不安を拾う。"
  },
  "ファンになりかけている人": {
    entry: "世界観や余韻を保ちながら、次に触れる場所を示す。",
    trust: "人柄、背景、制作意図を静かに見せる。"
  }
};

const templates = {
  "販売型": [
    ["ファーストビュー", "商品名、誰向けか、得られる変化をすぐ見せる。", ["商品メインビジュアル", "使用シーン画像"]],
    ["欲しい状態", "購入前の迷いや欲しい未来を整理する。", ["悩みを静かに示す背景", "比較しやすい図解"]],
    ["商品紹介", "内容物、特徴、使いどころを明確にする。", ["商品単体画像", "内容物の俯瞰画像"]],
    ["使い方", "購入後の使い方を具体的に見せる。", ["生活や作業の中で使う画像"]],
    ["価格・内容", "価格、内容、判断に必要な情報を整理する。", ["価格表背景", "特典イメージ"]],
    ["購入CTA", "迷わず購入へ進める最後の導線。", ["安心感のあるCTA背景"]]
  ],
  "予約・申込型": [
    ["ファーストビュー", "誰向けのサービスか、申し込む理由を静かに伝える。", ["信頼感のあるヒーロー画像", "やわらかい背景"]],
    ["こんな方へ", "対象者の状況を言語化する。", ["状況を示す小さなイラスト", "余白のある説明図"]],
    ["できること", "提供内容と範囲を明確にする。", ["サービス利用シーン", "手元や空間の写真"]],
    ["利用の流れ", "申し込み前の不安を減らす。", ["ステップ図", "受付から完了までの流れ"]],
    ["信頼要素", "こだわり、姿勢、安心材料を整理する。", ["静かな信頼感のある背景"]],
    ["予約CTA", "予約ボタンと補足文を置く。", ["予約前の安心感を出す画像"]]
  ],
  "登録・リード獲得型": [
    ["ファーストビュー", "無料で受け取れるものと価値を明確にする。", ["無料オファーの表紙画像", "受け取りイメージ"]],
    ["得られるもの", "登録後に手に入る内容を箇条書きで見せる。", ["内容物のモックアップ"]],
    ["対象者", "誰に向いているかを整理する。", ["やさしい説明図"]],
    ["内容紹介", "中身の一部を見せて安心感を作る。", ["ページ抜粋風画像", "チェックリスト画像"]],
    ["受け取り方法", "登録後の流れを簡潔に示す。", ["3ステップ図"]],
    ["登録CTA", "メール、LINE、フォームなどへ誘導する。", ["CTA用の軽い背景"]]
  ],
  "アプリ・SaaS型": [
    ["ファーストビュー", "何の課題を解くツールかを一瞬で伝える。", ["UIスクリーンショット風画像", "プロダクト画面"]],
    ["課題", "導入前の手間や混乱を整理する。", ["作業前の状態を示す図"]],
    ["解決提案", "アプリが何を楽にするかを示す。", ["使用中の画面", "フロー図"]],
    ["主な機能", "代表機能を3つ程度に絞って見せる。", ["機能カード画像", "UIパーツ"]],
    ["導入メリット", "時間、整理、再現性などの利点を示す。", ["比較図", "ダッシュボード風画像"]],
    ["登録CTA", "無料登録、デモ、問い合わせへ誘導する。", ["CTA背景", "画面モック"]]
  ],
  "ブランド・世界観型": [
    ["ファーストビュー", "世界観、名前、空気感を強く見せる。", ["世界観ヒーロー画像", "ブランドキービジュアル"]],
    ["コンセプト", "何を大切にしているブランドかを説明する。", ["象徴的なビジュアル", "静かな背景"]],
    ["価値観", "思想、姿勢、選ばれる理由を整理する。", ["余白のある編集的な画像"]],
    ["活動内容", "提供しているものや発信内容をまとめる。", ["活動カテゴリのビジュアル"]],
    ["導線", "読む、買う、予約する、フォローするなどへ分岐する。", ["導線カード背景"]]
  ],
  "キャラクター・IP紹介型": [
    ["ファーストビュー", "メインビジュアルとキャラクター名を見せる。", ["キャラクターメインビジュアル", "ロゴ風タイトル"]],
    ["キャラクターの一言", "印象に残る短いセリフを置く。", ["表情差分", "セリフ用余白"]],
    ["プロフィール", "性格、役割、見た目の特徴を整理する。", ["キャラカード画像", "設定資料"]],
    ["世界観", "所属する場所や物語の空気感を見せる。", ["背景ビジュアル", "世界観カット"]],
    ["ギャラリー", "立ち絵、表情、場面カットを並べる。", ["ギャラリー用サムネイル"]],
    ["フォローCTA", "SNS、作品ページ、購入先へ誘導する。", ["フォロー用CTA画像"]]
  ],
  "イベント告知型": [
    ["ファーストビュー", "イベント名、日時、場所、参加理由を見せる。", ["イベントキービジュアル", "告知バナー"]],
    ["内容", "何が行われるかを整理する。", ["内容紹介画像", "タイムテーブル背景"]],
    ["参加メリット", "参加すると何を得られるかを示す。", ["体験イメージ", "会場や配信画面"]],
    ["登壇者・作品", "人、作品、出展内容を紹介する。", ["プロフィール画像", "作品サムネイル"]],
    ["参加方法", "申し込み、視聴、来場の流れを示す。", ["参加ステップ図"]],
    ["申込CTA", "参加申込やチケット購入へ誘導する。", ["CTA用告知画像"]]
  ],
  "記事・コンテンツ誘導型": [
    ["ファーストビュー", "読みたくなる入口とタイトルを作る。", ["記事サムネイル", "note見出し画像"]],
    ["見どころ", "記事や漫画の面白い部分を整理する。", ["見どころカード", "抜粋画像"]],
    ["読むメリット", "読んだ後に得られる理解や感情を示す。", ["説明図", "静かな背景"]],
    ["一部紹介", "本文や漫画の一部を少しだけ見せる。", ["本文抜粋風画像", "漫画コマ風画像"]],
    ["著者・背景", "なぜ作ったか、誰が書いたかを伝える。", ["プロフィール画像", "制作背景画像"]],
    ["読むCTA", "記事、漫画、動画へ誘導する。", ["読むボタン周りの画像"]]
  ]
};

const storageKey = "lp-structure-maker";
const themeKey = "lp-structure-maker-theme";
const form = document.querySelector("#lpForm");
const output = document.querySelector("#structureOutput");
const copyButton = document.querySelector("#copyButton");
const sampleButton = document.querySelector("#sampleButton");
const modeButton = document.querySelector("#modeButton");

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function getValue(id) {
  return document.querySelector(`#${id}`).value;
}

function getDefault(field, lpType) {
  return typeDefaults[lpType]?.[field] || "";
}

function createChoiceButtons() {
  fields.forEach((field) => {
    const values = options[field] || [];
    const input = document.querySelector(`#${field}`);
    if (!values.length || !input) return;
    const choices = document.createElement("div");
    choices.className = "choices";
    choices.setAttribute("aria-label", `${input.labels[0].textContent}の候補`);
    choices.innerHTML = values.map((value) => `<button class="choice-button" type="button" data-target="${field}" data-value="${value}">${value}</button>`).join("");
    input.insertAdjacentElement("afterend", choices);
  });
}

function updateChoiceStates() {
  document.querySelectorAll(".choice-button").forEach((button) => {
    const input = document.querySelector(`#${button.dataset.target}`);
    button.classList.toggle("is-active", input && input.value === button.dataset.value);
  });
}

function buildSection([name, role, assets], index, guide) {
  const adjustedRole = index === 0 ? `${role}${guide.entry ? ` ${guide.entry}` : ""}` : role;
  return [
    `[${index + 1}. ${name}]`,
    `役割: ${adjustedRole}`,
    "見出し: ",
    "本文メモ: ",
    "必要素材:",
    ...assets.map((asset) => `- ${asset}`)
  ].join("\n");
}

function buildStructure() {
  const lpType = clean(getValue("lpType"));
  const audienceStage = clean(getValue("audienceStage"));
  const goal = clean(getValue("goal"));
  if (!lpType || !audienceStage || !goal) return "";

  const templateType = lpTypeMap[lpType] || lpType;
  const sections = templates[templateType] || templates["予約・申込型"];
  const goalData = goalMap[goal] || { purpose: goal, cta: goal };
  const guide = audienceGuides[audienceStage] || {};
  const offerName = clean(getValue("offerName")) || getDefault("offerName", lpType);
  const mainOffer = clean(getValue("mainOffer")) || getDefault("mainOffer", lpType);
  const tone = clean(getValue("tone")) || getDefault("tone", lpType);

  return [
    "[LPタイプ]",
    `${lpType} / ${templateType}`,
    "",
    "[名前]",
    offerName,
    "",
    "[見る人]",
    audienceStage,
    "",
    "[目的]",
    goalData.purpose,
    "",
    "[トーン]",
    tone,
    "",
    "[中心に見せるもの]",
    mainOffer,
    "",
    "[CTA]",
    goalData.cta,
    "",
    "[設計メモ]",
    guide.trust || "必要な情報を絞り、迷わず次の行動へ進める構成にする。",
    "",
    "[構成]",
    sections.map((section, index) => buildSection(section, index, guide)).join("\n\n")
  ].join("\n");
}

function saveState() {
  const data = {};
  fields.forEach((field) => {
    data[field] = getValue(field);
  });
  localStorage.setItem(storageKey, JSON.stringify(data));
}

function render() {
  const structure = buildStructure();
  output.textContent = structure;
  copyButton.disabled = !structure;
  updateChoiceStates();
  saveState();
}

function setValues(data) {
  fields.forEach((field) => {
    document.querySelector(`#${field}`).value = data[field] || "";
  });
  render();
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

function copyStructure() {
  const structure = buildStructure();
  if (!structure) return;
  const source = document.createElement("textarea");
  source.value = structure;
  source.setAttribute("readonly", "");
  source.style.position = "fixed";
  source.style.left = "-9999px";
  document.body.appendChild(source);
  source.select();
  const copied = document.execCommand("copy");
  source.remove();
  setCopyButtonLabel(copied ? "コピー済み" : "選択しました");
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

copyButton.addEventListener("click", copyStructure);
sampleButton.addEventListener("click", () => setValues(sample));
modeButton.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
});

createChoiceButtons();
loadTheme();
loadState();
