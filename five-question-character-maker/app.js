const questions = [
  {
    id: "book",
    chapter: "第一頁 / 世界観を選ぶ",
    note: "ここで、キャラクターが生まれる世界の空気感と絵柄の方向が決まります。",
    text: "どんな世界の本に入りたい？",
    choices: [
      {
        label: "雨の装丁の本",
        hint: "雨の書庫都市。青黒い髪、静かな透明感。",
        data: {
          title: "雨頁の案内役",
          world: "雨が降り続く書庫都市",
          style: "フィルム写真風",
          mood: "ひんやりした透明感"
        }
      },
      {
        label: "白い余白の本",
        hint: "白い図書室。白髪、余白の多い水彩風。",
        data: {
          title: "余白の記録係",
          world: "白い余白でできた図書室",
          style: "水彩風",
          mood: "静かで読みやすい空気"
        }
      },
      {
        label: "夕焼け色の本",
        hint: "夕暮れの街。茶髪、あたたかい印刷風。",
        data: {
          title: "夕頁の灯り番",
          world: "夕暮れが終わらない街",
          style: "リソグラフ印刷風",
          mood: "あたたかいけれど控えめ"
        }
      }
    ]
  },
  {
    id: "entry",
    chapter: "第二頁 / 構図を選ぶ",
    note: "本へ入る場所によって、余白、光、カード化しやすさなどの構図が変わります。",
    text: "キャラクターをどんな構図で見せたい？",
    choices: [
      {
        label: "余白を大きく見せる",
        hint: "人物を右寄せ。静かな余白を主役にする。",
        data: {
          portal: "余白の端から物語へ入った",
          composition: "人物を右寄せ、左に大きな余白",
          outputTypeNote: "余白を活かした静かな構図"
        }
      },
      {
        label: "窓の光で見せる",
        hint: "背後に光。バストアップで雰囲気を出す。",
        data: {
          portal: "挿絵の窓から物語へ入った",
          composition: "窓の光を背にしたバストアップ",
          outputTypeNote: "光と影を静かに使う構図"
        }
      },
      {
        label: "カード風に見せる",
        hint: "上に余白。SNSやカード素材にしやすい。",
        data: {
          portal: "栞の影から物語へ入った",
          composition: "下部に人物、上部に余白",
          outputTypeNote: "カード化しやすい構図"
        }
      }
    ]
  },
  {
    id: "color",
    chapter: "第三頁 / 髪と目を選ぶ",
    note: "色を選ぶと、髪色、髪型、目、顔立ち、服の基本がまとまって決まります。",
    text: "どんな色のキャラクターにしたい？",
    choices: [
      {
        label: "青黒い髪と青い目",
        hint: "涼しげ。白シャツと長いコート。",
        data: {
          hair: "青みのある黒髪のセミロング",
          eyes: "静かな青い目",
          faceType: "涼しげな顔立ち",
          outfit: "白いシャツと長いコート"
        }
      },
      {
        label: "白髪と透き通った目",
        hint: "人形のよう。白い上衣と薄いニット。",
        data: {
          hair: "白髪のショートボブ",
          eyes: "透き通った目",
          faceType: "人形のような顔",
          outfit: "白い上衣と薄いニット"
        }
      },
      {
        label: "茶髪と琥珀色の目",
        hint: "やわらかい。大きめパーカーとワイドパンツ。",
        data: {
          hair: "茶髪のボブ",
          eyes: "琥珀色の目",
          faceType: "やわらかい顔",
          outfit: "大きめのパーカーとワイドパンツ"
        }
      }
    ]
  },
  {
    id: "gender",
    chapter: "第四頁 / 性別表現を選ぶ",
    note: "ここで、Promptに入る性別表現と体型の方向を決めます。中性的に固定されることはありません。",
    text: "どの性別表現で描きたい？",
    choices: [
      {
        label: "女性として描く",
        hint: "女性キャラクター。しなやかな体型。",
        data: {
          gender: "女性キャラクターとして描く",
          bodyType: "しなやかな体型"
        }
      },
      {
        label: "男性として描く",
        hint: "男性キャラクター。すらっとした体型。",
        data: {
          gender: "男性キャラクターとして描く",
          bodyType: "すらっとした体型"
        }
      },
      {
        label: "性別不明として描く",
        hint: "性別を断定しない。華奢な体型。",
        data: {
          gender: "性別不明のキャラクターとして描く",
          bodyType: "華奢な体型"
        }
      },
      {
        label: "中性的に描く",
        hint: "あえて中性的にしたいときだけ選ぶ。",
        data: {
          gender: "中性的なキャラクターとして描く",
          bodyType: "中性的な体型"
        }
      }
    ]
  },
  {
    id: "role",
    chapter: "第五頁 / 役割とポーズを選ぶ",
    note: "役割を選ぶと、キャラクターの性格、行動、立ち姿の方向が決まります。",
    text: "このキャラクターは何をする人？",
    choices: [
      {
        label: "迷子を案内する",
        hint: "案内役。少し振り返るポーズ。",
        data: {
          role: "迷子を出口へ送る案内役",
          personality: "人の気配を静かに探せる",
          action: "少し振り返っている"
        }
      },
      {
        label: "名前を記録する",
        hint: "書記。本を読むポーズ。",
        data: {
          role: "失くした名前を記録する書記",
          personality: "小さな違和感を覚えていられる",
          action: "本を読んでいる"
        }
      },
      {
        label: "灯りを守る",
        hint: "番人。窓の外を見るポーズ。",
        data: {
          role: "消えそうな灯りを守る番人",
          personality: "最後まで待つことができる",
          action: "窓の外を見ている"
        }
      }
    ]
  },
  {
    id: "pocket",
    chapter: "第六頁 / 小物と特徴を選ぶ",
    note: "持ち物を選ぶと、装飾アイテム、身体的な特徴、使える力が決まります。",
    text: "キャラクターに持たせたい小物は？",
    choices: [
      {
        label: "小さな鍵",
        hint: "腰に鍵束。閉じたページを開ける力。",
        data: {
          item: "腰に小さな鍵束",
          feature: "小さなほくろ",
          power: "閉じたページを一度だけ開ける"
        }
      },
      {
        label: "折りたたんだ地図",
        hint: "胸に地図のメモ。道を見つける力。",
        data: {
          item: "胸に古い地図のメモ",
          feature: "少し猫背",
          power: "まだ書かれていない道を見つける"
        }
      },
      {
        label: "透明な石",
        hint: "ペンダント。嘘のない光を映す力。",
        data: {
          item: "胸に小さな透明石のペンダント",
          feature: "長いまつげ",
          power: "嘘のない光だけを反射する"
        }
      }
    ]
  },
  {
    id: "place",
    chapter: "第七頁 / 背景を選ぶ",
    note: "ここで、画像の背景、周辺アイテム、最終的な場面の見え方が決まります。",
    text: "どこに立たせたい？",
    choices: [
      {
        label: "古い図書室",
        hint: "本、しおり、木の机。静かな室内。",
        data: {
          background: "古い図書室",
          action: "本を読んでいる",
          sceneItem: "本、細いしおり、木の机"
        }
      },
      {
        label: "夜の駅",
        hint: "駅の灯り、濡れた床。少し物語が動く。",
        data: {
          background: "夜の駅",
          action: "少し振り返っている",
          sceneItem: "駅の灯り、濡れた床、小さな影"
        }
      },
      {
        label: "白い部屋",
        hint: "白い椅子、薄いカーテン、自然光。",
        data: {
          background: "白い部屋",
          action: "窓の外を見ている",
          sceneItem: "白い椅子、薄いカーテン、自然光"
        }
      }
    ]
  },
  {
    id: "mark",
    chapter: "第八頁 / しるしと装飾を選ぶ",
    note: "しるしを選ぶと、身体に入る小さな特徴とアクセサリーが決まります。",
    text: "どんなしるしを入れたい？",
    choices: [
      {
        label: "細い月",
        hint: "手の甲に月。頭に薄いベール。",
        data: {
          mark: "手の甲に細い月のしるし",
          accessory: "頭に薄いベール"
        }
      },
      {
        label: "欠けた栞",
        hint: "手の甲に栞。胸に小さなブローチ。",
        data: {
          mark: "手の甲に欠けた栞のしるし",
          accessory: "胸に小さなブローチ"
        }
      },
      {
        label: "淡いインク跡",
        hint: "指先にインク。腕に細いリボン。",
        data: {
          mark: "指先に淡いインク跡",
          accessory: "腕に細いリボン"
        }
      }
    ]
  },
  {
    id: "sound",
    chapter: "第九頁 / 表情を選ぶ",
    note: "聞こえる音を選ぶと、表情と一言、出力タイプの方向が決まります。",
    text: "どんな表情にしたい？",
    choices: [
      {
        label: "遠くを見る表情",
        hint: "雨音。リアルポートレート寄り。",
        data: {
          expression: "遠くを見ている表情",
          line: "雨音だけが、少し近かった",
          outputMode: "リアルポートレートとして出力"
        }
      },
      {
        label: "静かな表情",
        hint: "紙をめくる音。キャラクターカード寄り。",
        data: {
          expression: "静かな表情",
          line: "物語はまだ閉じていなかった",
          outputMode: "キャラクターカードとして出力"
        }
      },
      {
        label: "少し笑っている",
        hint: "小さな鈴。一枚絵寄り。",
        data: {
          expression: "少し笑っている",
          line: "名前を呼ばれた気がした",
          outputMode: "一枚絵として出力"
        }
      }
    ]
  },
  {
    id: "memory",
    chapter: "第十頁 / 仕上げを選ぶ",
    note: "最後に、キャラクターの余韻、出力形式、線の濃さを決めます。",
    text: "最後にどんな余韻を残したい？",
    choices: [
      {
        label: "誰かを待っていた",
        hint: "静かなキャラクターカード。淡い細線。",
        data: {
          memory: "誰かを待っていた記憶だけが残っている",
          framing: "静かなキャラクターカードとして出力",
          outline: "細く淡い線"
        }
      },
      {
        label: "窓辺の光を覚えている",
        hint: "リアルポートレート。やわらかい薄線。",
        data: {
          memory: "窓辺の光を覚えている",
          framing: "リアルポートレートとして出力",
          outline: "やわらかい薄い線"
        }
      },
      {
        label: "名前を書きかけた",
        hint: "本の挿絵の一枚絵。普通の線。",
        data: {
          memory: "名前を書きかけた記憶がある",
          framing: "本の挿絵のような一枚絵として出力",
          outline: "普通の濃さの線"
        }
      }
    ]
  }
];

const form = document.querySelector("#quizForm");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copyButton");
const randomButton = document.querySelector("#randomButton");
const resetButton = document.querySelector("#resetButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const characterTitle = document.querySelector("#characterTitle");
const chapterTitle = document.querySelector("#chapterTitle");
const pageNote = document.querySelector("#pageNote");
const progress = document.querySelector("#progress");
const storyOutput = document.querySelector("#storyOutput");
const answers = {};
let currentIndex = 0;
const decorationPrompt = "古い魔導書の挿絵ページのように、羊皮紙の生成り、焦げ茶のインク、鈍い金の細い罫線、控えめな角飾りを入れる。派手な発光や強いゲームUI感は避け、静かな異世界ファンタジーとしてまとめる";

function sentence(value) {
  if (!value) return "";
  return /[。！？!?]$/.test(value) ? value : `${value}。`;
}

function mergeAnswerData() {
  return questions.reduce((data, question) => {
    const selected = question.choices.find((choice) => choice.label === answers[question.id]);
    return selected ? { ...data, ...selected.data } : data;
  }, {});
}

function answeredCount() {
  return questions.filter((question) => answers[question.id]).length;
}

function isComplete() {
  return answeredCount() === questions.length;
}

function buildStory(data) {
  if (!answeredCount()) {
    return "本はまだ閉じています。\nページを選ぶと、あなたの転生後の姿が少しずつ書き込まれます。";
  }

  const lines = [
    data.title ? `名前: ${data.title}` : "",
    data.world ? `世界: ${data.world}` : "",
    data.portal ? `入口: ${data.portal}` : "",
    data.gender ? `性別表現: ${data.gender}` : "",
    data.role ? `役目: ${data.role}` : "",
    data.power ? `力: ${data.power}` : "",
    data.memory ? `残った記憶: ${data.memory}` : ""
  ].filter(Boolean);

  return lines.join("\n");
}

function buildPrompt(data) {
  if (!isComplete()) return "";

  return [
    "以下の内容で、本の世界に迷い込んで転生したオリジナルキャラクターを画像として出力する。",
    "現代の人物ではなく、物語の中で新しい役目を得たキャラクターとして描く。",
    sentence(decorationPrompt),
    "",
    sentence(data.title),
    sentence(data.world),
    sentence(data.portal),
    sentence(data.gender),
    sentence(data.role),
    sentence(data.framing || data.outputMode),
    "",
    sentence(data.style),
    sentence(data.outline),
    "",
    "6頭身。",
    "年齢不詳。",
    sentence(data.bodyType),
    "",
    sentence(data.faceType),
    sentence(data.expression),
    sentence(data.feature),
    "",
    sentence(data.hair),
    sentence(data.eyes),
    "",
    sentence(data.outfit),
    sentence(data.item),
    sentence(data.accessory),
    sentence(data.mark),
    "",
    "斜め前を向いている。",
    "バストアップ。",
    sentence(data.composition),
    "",
    sentence(data.action),
    "",
    sentence(data.background),
    sentence(data.sceneItem),
    "",
    sentence(data.mood),
    sentence(data.personality),
    sentence(data.power),
    sentence(data.memory),
    sentence(data.outputTypeNote),
    "",
    `「${sentence(data.line)}」`
  ].join("\n");
}

function renderQuestion() {
  const question = questions[currentIndex];
  chapterTitle.textContent = question.chapter;
  pageNote.textContent = question.note;
  form.innerHTML = `
    <section class="question" aria-labelledby="${question.id}-title">
      <p id="${question.id}-title">${question.text}</p>
      <div class="choices">
        ${question.choices.map((choice) => (
          `<button class="choice${answers[question.id] === choice.label ? " is-active" : ""}" type="button" data-question="${question.id}" data-value="${choice.label}">
            <span class="choice-label">${choice.label}</span>
            <span class="choice-hint">${choice.hint}</span>
          </button>`
        )).join("")}
      </div>
    </section>
  `;
}

function render() {
  const data = mergeAnswerData();
  const prompt = buildPrompt(data);
  renderQuestion();
  storyOutput.textContent = buildStory(data);
  output.textContent = prompt;
  copyButton.disabled = !prompt;
  characterTitle.textContent = data.title || "まだ本は開かれていません。";
  progress.textContent = `${answeredCount()} / ${questions.length}`;
  prevButton.disabled = currentIndex === 0;
  nextButton.textContent = currentIndex === questions.length - 1 ? "最後のページ" : "次のページ";
}

function goNext() {
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    render();
  }
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    render();
  }
}

function copyFallback(text) {
  const source = document.createElement("textarea");
  source.value = text;
  source.setAttribute("readonly", "");
  source.style.position = "fixed";
  source.style.left = "-9999px";
  document.body.appendChild(source);
  source.focus();
  source.select();
  const copied = document.execCommand("copy");
  source.remove();
  return copied;
}

function copyPrompt() {
  const text = output.textContent;
  if (!text) return;

  if (copyFallback(text)) {
    copyButton.textContent = "コピー済み";
  } else {
    copyButton.textContent = "選択しました";
    const range = document.createRange();
    range.selectNodeContents(output);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  window.setTimeout(() => {
    copyButton.textContent = "コピー";
  }, 2000);
}

function randomize() {
  questions.forEach((question) => {
    const choice = question.choices[Math.floor(Math.random() * question.choices.length)];
    answers[question.id] = choice.label;
  });
  currentIndex = questions.length - 1;
  render();
}

function resetBook() {
  Object.keys(answers).forEach((key) => delete answers[key]);
  currentIndex = 0;
  render();
}

form.addEventListener("click", (event) => {
  const button = event.target.closest(".choice");
  if (!button) return;
  answers[button.dataset.question] = button.dataset.value;
  render();
});

copyButton.addEventListener("click", copyPrompt);
randomButton.addEventListener("click", randomize);
resetButton.addEventListener("click", resetBook);
prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);

render();
