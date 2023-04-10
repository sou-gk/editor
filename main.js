// main.js
let input = document.getElementById('input');
let output = document.getElementById('output');

// プレビュー表示の更新
function preview() {
  let html = input.value;
  let parser = new DOMParser();
  ;et doc = parser.parseFromString(html, 'text/html');
  output.innerHTML = doc.documentElement.textContent;
}

// ローカルストレージに保存
function save() {
  let html = input.value;
  localStorage.setItem('html', html);
}

// 初期表示
(function init() {
  let html = localStorage.getItem('html');
  if (html) {
    input.value = html;
    preview();
  }
})();
