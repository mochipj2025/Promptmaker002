const questions = [
  {
    id: "color",
    text: "朝、最初に目に入ったら少し安心する色は？",
    choices: [
      {
        label: "雨上がりの青",
        data: {
          title: "雨音を待つ案内役",
          style: "フィルム写真風",
          hair: "青みのある黒髪のセミロング",
          eyes: "静かな青い目",
          outfit: "白いシャツと長いコート",
          mood: "ひんやりした透明感"
        }
      },
      {
        label: "古い紙の白",
        data: {
          title: "余白に住む記録係",
          style: "水彩風",
          hair: "白髪のショートボブ",
          eyes: "透き通った目",
          outfit: "白い上衣と薄いニット",
          mood: "静かで読みやすい空気"
        }
      },
      {
        label: "夕方の橙",
        data: {
          title: "夕暮れの灯り番",
          style: "リソグラフ印刷風",
          hair: "茶髪のボブ",
          eyes: "琥珀色の目",
          outfit: "大きめのパーカーとワイドパンツ",
          mood: "あたたかいけれど控えめ"
        }
      }
    ]
  },
  {
    id: "pocket",
    text: "ポケットに入っていたらうれしいものは？",
    choices: [
      {
        label: "小さな鍵",
        data: {
          item: "腰に小さな鍵束",
          personality: "秘密を守るのが得意",
          feature: "小さなほくろ"
        }
      },
      {
        label: "折りたたんだ地図",
        data: {
          item: "胸に古い地図のメモ",
          personality: "知らない場所でも静かに進む",
          feature: "少し猫背"
        }
      },
      {
        label: "透明な石",
        data: {
          item: "胸に小さな透明石のペンダント",
          personality: "光の変化に気づきやすい",
          feature: "長いまつげ"
        }
      }
    ]
  },
  {
    id: "place",
    text: "知らない街で、つい入ってしまう場所は？",
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
    id: "sound",
    text: "遠くで聞こえたら、少し立ち止まる音は？",
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
    text: "最後に画面に残したい形は？",
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
  }
];

const form = document.querySelector("#quizForm");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copyButton");
const randomButton = document.querySelector("#randomButton");
const characterTitle = document.querySelector("#characterTitle");
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
    sentence(data.style),
    sentence(data.outline),
    sentence(data.outputMode),
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
    sentence(data.outputTypeNote),
    "",
    `「${sentence(data.line)}」`
  ].join("\n");
}

function render() {
  const data = mergeAnswerData();
  const prompt = buildPrompt(data);
  output.textContent = prompt;
  copyButton.disabled = !prompt;
  characterTitle.textContent = prompt ? data.title : "まだ質問を選んでいません。";

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
