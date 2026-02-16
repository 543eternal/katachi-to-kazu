let selectedShape = "";

const messages = {
  "circle-1": "もう始まっています。気づいていないだけです。",
  "circle-2": "受け取る準備はできています。力を抜いて。",
  "circle-3": "自然な広がりが、静かに続いています。",
  "circle-4": "今ある形は、ちゃんと意味を持っています。",
  "circle-5": "揺れは悪くありません。巡り直す合図です。",
  "circle-6": "やさしさが、場を整えています。",
  "circle-7": "静かな時間が、深くつながっています。",
  "circle-8": "無理をしなくても、力は流れています。",
  "circle-9": "ひとつの巡りが、穏やかに閉じています。",

  "triangle-1": "内側で、向きが定まりはじめています。",
  "triangle-2": "迷いは感受性です。感じ取っています。",
  "triangle-3": "伝えたい思いは、すでに形になりつつあります。",
  "triangle-4": "続けてきたことが、軸になっています。",
  "triangle-5": "変わろうとする力が、動いています。",
  "triangle-6": "周囲との調整が、次の一歩を導きます。",
  "triangle-7": "答えは、外ではなく内側にあります。",
  "triangle-8": "進む力はあります。あとは向きを決めるだけ。",
  "triangle-9": "一区切りが、次の成長を準備しています。",

  "square-1": "足元から、新しい流れが始まります。",
  "square-2": "小さな違和感に、意味があります。",
  "square-3": "現実の中で、広がりが生まれています。",
  "square-4": "積み重ねたものが、静かに支えています。",
  "square-5": "形を変えることで、安定が保たれます。",
  "square-6": "守ってきたものが、力になっています。",
  "square-7": "立ち止まることで、見えるものがあります。",
  "square-8": "実行する準備は、すでに整っています。",
  "square-9": "役目は果たされました。手を離しても大丈夫。"
};

function showStep(id) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

document.querySelectorAll(".shape").forEach(el => {
  el.addEventListener("click", () => {
    selectedShape = el.dataset.shape;
    showStep("step-number");
  });
});

document.querySelectorAll(".numbers button").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = `${selectedShape}-${btn.dataset.number}`;
    document.getElementById("result-text").textContent =
      messages[key] || "静かな流れが、そっとあります。";
    showStep("step-result");
  });
});

document.getElementById("retry").addEventListener("click", () => {
  showStep("step-shape");
});