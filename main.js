// IE、Safari対応
// smoothscroll.js読み込み
// https://github.com/iamdustan/smoothscroll

// セレクタ名（.pagetop）に一致する要素を取得
const pagetop_btn = document.querySelector(".m_page-top_btn");

// .pagetopをクリックしたら
pagetop_btn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}

!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? "width=device-width,initial-scale=1"
        : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

// ハンバーガーメニュー
const hamburger = document.querySelector(".js_hamburger");
const nav = document.querySelector(".js_nav");
const navItems = document.querySelectorAll(".js_nav-item");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  body.classList.toggle("is-active");

  nav.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    body.classList.toggle("nis-active");
  });

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      hamburger.classList.remove("is-active");
      nav.classList.remove("is-active");
      body.classList.remove("is-active");
      event.stopPropagation(); //イベントの伝播をとめる
    });
  });
});

// 左から右
// 距離を測りたい要素を全て取得
const scrollAppears = document.querySelectorAll(".scroll_appear");

// 距離を表示させるspan要素を全て取得
const distance = document.querySelectorAll(".distance");

// 画面（ブラウザ）の高さを取得
const windowHeight = window.innerHeight;

for ( let index = 0; index < scrollAppears.length; index++ ) {
    // body要素の上端から要素までの距離をoffsetTopで測り、elementDistanceに格納
    const elementDistance = scrollAppears[index].offsetTop;

    // span要素のテキストに距離を代入
    distance[index].textContent = elementDistance;

    // スクロールイベントの設定
    window.addEventListener("scroll", () => {
        // 現在の縦方向のスクロール位置を変数 y に格納
        let y = window.scrollY;
        // offsetTopの数値からブラウザの高さ÷2を引いた値に達したら"active"のclassを追加
        if ( y >= elementDistance - ( windowHeight / 2  ) ) {
            scrollAppears[index].classList.add("active");
        }
    });
}
