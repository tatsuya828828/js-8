$(".theTarget").skippr({
  // スライドショーの変化("fade"もしくは"slide")
  transition: 'fade',
  // 変化にかかる時間(ミリ秒)
  speed: 1000,
  // easingの種類
  easing: 'easeOutQuart',
  // ナビゲーションの形("block"もしくは"bubble")
  navType: 'block',
  // 子要素の種類("div"もしくは"img")
  childrenElementType: 'div',
  // ナビゲーション矢印の表示(trueで表示)
  arrows: true,
  // スライドショーの自動再生(falseで自動再生なし)
  autoPlay: true,
  // 自動再生時のスライド切替間隔(ミリ秒)
  autoPlayDuration: 3000,
  // キーボードの矢印キーによるスライド送りの設定(trueで有効)
  keyboardOnAlways: true,
  // 1枚目のスライド表示人戻る矢印を表示するかどうか
  hidePrevious: false
});
