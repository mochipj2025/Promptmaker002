const questions = [
  {
    id: "book",
    text: "棚の奥で、ひとりでに開いた本は？",
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
    id: "color",
    text: "ページの中で、最初に光った色は？",
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
    text: "本の世界で、最初に与えられた役目は？",
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
    text: "転生した服のポケットに入っていたものは？",
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
    text: "ページの向こうで、最初に立っていた場所は？",
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
    text: "手の甲に浮かんだ小さなしるしは？",
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
    text: "物語の奥から聞こえた音は？",
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
    id: "shape",
    text: "挿絵として最後に残したい形は？",
    choices: [
      {
        label: "細い線",
        data: {
          outline: "細く淡い線",
          composition: "人物を右寄せ、左に大きな余白",
          outputTypeNote: "余白を活かした静かな構図"
        }
      },
      {
        label: "丸い光",
        data: {
          outline: "やわらかい薄い線",
          composition: "中央に人物、周囲にやわらかい光",
          outputTypeNote: "やわらかい光を添えた構図"
        }
      },
      {
        label: "四角い余白",
        data: {
          outline: "普通の濃さの線",
          composition: "下部に人物、上部に余白",
          outputTypeNote: "カード化しやすい構図"
        }
      }
    ]
  },
  {
    id: "memory",
    text: "転生前から、ひとつだけ残った記憶は？",
    choices: [
      {
        label: "誰かを待っていたこと",
        data: {
          memory: "誰かを待っていた記憶だけが残っている",
          framing: "静かなキャラクターカードとして出力"
        }
      },
      {
        label: "窓辺の光",
        data: {
          memory: "窓辺の光を覚えている",
          framing: "リアルポートレートとして出力"
        }
      },
      {
        label: "名前を書きかけたこと",
        data: {
          memory: "名前を書きかけた記憶がある",
          framing: "本の挿絵のような一枚絵として出力"
        }
      }
    ]
  }
];

const form = document.querySelector("#quizForm");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copyButton");
const randomButton = document.querySelector("#randomButton");
const characterTitle = document.querySelector("#characterTitle");
const progress = document.querySelector("#progress");
const answers = {};

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

function buildPrompt(data) {
  const required = questions.every((question) => answers[question.id]);
  if (!required) return "";

  return [
    "以下の内容で、本の世界に迷い込んで転生したオリジナルキャラクターを画像として出力する。",
    "現代の人物ではなく、物語の中で新しい役目を得たキャラクターとして描く。",
    "",
    sentence(data.title),
    sentence(data.world),
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

function render() {
  const data = mergeAnswerData();
  const prompt = buildPrompt(data);
  const answered = questions.filter((question) => answers[question.id]).length;
  output.textContent = prompt;
  copyButton.disabled = !prompt;
  characterTitle.textContent = prompt ? data.title : "まだ本は開かれていません。";
  progress.textContent = `${answered} / ${questions.length}`;

  document.querySelectorAll(".choice").forEach((button) => {
    button.classList.toggle("is-active", answers[button.dataset.question] === button.dataset.value);
  });
}

function createQuiz() {
  form.innerHTML = questions.map((question, index) => (
    `<section class="question" aria-labelledby="${question.id}-title">
      <p id="${question.id}-title">${index + 1}. ${question.text}</p>
      <div class="choices">
        ${question.choices.map((choice) => (
          `<button class="choice" type="button" data-question="${question.id}" data-value="${choice.label}">${choice.label}</button>`
        )).join("")}
      </div>
    </section>`
  )).join("");
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

createQuiz();
render();
