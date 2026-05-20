const questions = [
  {
    id: "book",
    chapter: "第一頁 / 本が呼ぶ",
    note: "棚の奥で、あなたの名前を知らない本がひとりでに開きました。",
    text: "開いた本はどんな本？",
    choices: [
      {
        label: "雨の装丁の本",
        data: {
          title: "雨頁の案内役",
          world: "雨が降り続く書庫都市",
          style: "フィルム写真風",
          mood: "ひんやりした透明感"
        }
      },
      {
        label: "白い余白の本",
        data: {
          title: "余白の記録係",
          world: "白い余白でできた図書室",
          style: "水彩風",
          mood: "静かで読みやすい空気"
        }
      },
      {
        label: "夕焼け色の本",
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
    chapter: "第二頁 / 境目を越える",
    note: "文字のすきまが、水面みたいに揺れています。どこから入るかで、世界の質感が変わります。",
    text: "あなたはどこから本の中へ入る？",
    choices: [
      {
        label: "余白の端から",
        data: {
          portal: "余白の端から物語へ入った",
          composition: "人物を右寄せ、左に大きな余白",
          outputTypeNote: "余白を活かした静かな構図"
        }
      },
      {
        label: "挿絵の窓から",
        data: {
          portal: "挿絵の窓から物語へ入った",
          composition: "窓の光を背にしたバストアップ",
          outputTypeNote: "光と影を静かに使う構図"
        }
      },
      {
        label: "栞の影から",
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
    chapter: "第三頁 / 姿が決まる",
    note: "ページの中で最初に光った色が、髪と瞳に移ります。",
    text: "最初に光った色は？",
    choices: [
      {
        label: "雨上がりの青",
        data: {
          hair: "青みのある黒髪のセミロング",
          eyes: "静かな青い目",
          outfit: "白いシャツと長いコート"
        }
      },
      {
        label: "古い紙の白",
        data: {
          hair: "白髪のショートボブ",
          eyes: "透き通った目",
          outfit: "白い上衣と薄いニット"
        }
      },
      {
        label: "夕方の橙",
        data: {
          hair: "茶髪のボブ",
          eyes: "琥珀色の目",
          outfit: "大きめのパーカーとワイドパンツ"
        }
      }
    ]
  },
  {
    id: "role",
    chapter: "第四頁 / 役目を受け取る",
    note: "この世界では、名前より先に役目を渡されます。",
    text: "最初に与えられた役目は？",
    choices: [
      {
        label: "迷子を出口へ送る",
        data: {
          role: "迷子を出口へ送る案内役",
          personality: "人の気配を静かに探せる",
          action: "少し振り返っている"
        }
      },
      {
        label: "失くした名前を記録する",
        data: {
          role: "失くした名前を記録する書記",
          personality: "小さな違和感を覚えていられる",
          action: "本を読んでいる"
        }
      },
      {
        label: "消えそうな灯りを守る",
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
    chapter: "第五頁 / 持ち物を見つける",
    note: "転生した服のポケットに、ひとつだけ道具が入っています。",
    text: "入っていたものは？",
    choices: [
      {
        label: "小さな鍵",
        data: {
          item: "腰に小さな鍵束",
          feature: "小さなほくろ",
          power: "閉じたページを一度だけ開ける"
        }
      },
      {
        label: "折りたたんだ地図",
        data: {
          item: "胸に古い地図のメモ",
          feature: "少し猫背",
          power: "まだ書かれていない道を見つける"
        }
      },
      {
        label: "透明な石",
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
    chapter: "第六頁 / 最初の場所",
    note: "目を開けると、あなたはすでに物語のどこかに立っています。",
    text: "最初に立っていた場所は？",
    choices: [
      {
        label: "古い図書室",
        data: {
          background: "古い図書室",
          action: "本を読んでいる",
          sceneItem: "本、細いしおり、木の机"
        }
      },
      {
        label: "夜の駅",
        data: {
          background: "夜の駅",
          action: "少し振り返っている",
          sceneItem: "駅の灯り、濡れた床、小さな影"
        }
      },
      {
        label: "白い部屋",
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
    chapter: "第七頁 / しるしが浮かぶ",
    note: "この世界に来た証として、身体のどこかに小さなしるしが浮かびます。",
    text: "浮かんだしるしは？",
    choices: [
      {
        label: "細い月",
        data: {
          mark: "手の甲に細い月のしるし",
          accessory: "頭に薄いベール"
        }
      },
      {
        label: "欠けた栞",
        data: {
          mark: "手の甲に欠けた栞のしるし",
          accessory: "胸に小さなブローチ"
        }
      },
      {
        label: "淡いインク跡",
        data: {
          mark: "指先に淡いインク跡",
          accessory: "腕に細いリボン"
        }
      }
    ]
  },
  {
    id: "sound",
    chapter: "第八頁 / 奥から聞こえる",
    note: "物語の奥から、あなたを呼ぶ音がします。",
    text: "聞こえた音は？",
    choices: [
      {
        label: "雨音",
        data: {
          expression: "遠くを見ている表情",
          line: "雨音だけが、少し近かった",
          outputMode: "リアルポートレートとして出力"
        }
      },
      {
        label: "紙をめくる音",
        data: {
          expression: "静かな表情",
          line: "物語はまだ閉じていなかった",
          outputMode: "キャラクターカードとして出力"
        }
      },
      {
        label: "小さな鈴",
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
    chapter: "第九頁 / 残った記憶",
    note: "転生しても、ひとつだけ消えなかった記憶があります。",
    text: "残っていた記憶は？",
    choices: [
      {
        label: "誰かを待っていたこと",
        data: {
          memory: "誰かを待っていた記憶だけが残っている",
          framing: "静かなキャラクターカードとして出力",
          outline: "細く淡い線"
        }
      },
      {
        label: "窓辺の光",
        data: {
          memory: "窓辺の光を覚えている",
          framing: "リアルポートレートとして出力",
          outline: "やわらかい薄い線"
        }
      },
      {
        label: "名前を書きかけたこと",
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
    sentence(data.role),
    sentence(data.framing || data.outputMode),
    "",
    sentence(data.style),
    sentence(data.outline),
    "",
    "6頭身。",
    "年齢不詳。",
    "中性的な体型。",
    "",
    "中性的な顔。",
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
          `<button class="choice${answers[question.id] === choice.label ? " is-active" : ""}" type="button" data-question="${question.id}" data-value="${choice.label}">${choice.label}</button>`
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
