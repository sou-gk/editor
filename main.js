// main.js
var input = document.getElementById('input');
var output = document.getElementById('output');

// プレビュー表示の更新
function preview() {
  var html = input.value;
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, 'text/html');
  output.innerHTML = doc.documentElement.textContent;
}

// ローカルストレージに保存
function save() {
  var html = input.value;
  localStorage.setItem('html', html);
}

// 初期表示
(function init() {
  var html = localStorage.getItem('html');
  if (html) {
    input.value = html;
    preview();
  }
})();
