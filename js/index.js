// スクロールした時にナビゲーションバーの背景色を変更する
const toggleNavBarColor = () => {
  document.addEventListener("scroll", function () {
    const navbar = document.querySelector("#mainNavbar");
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > navbar.offsetHeight);
    }
  });
};

// ロード時にイベントリスナー登録
document.addEventListener("DOMContentLoaded", function () {
  toggleNavBarColor();
});
