// Wise Sayings를 표시할 div 요소
const wiseSayingDiv = document.querySelector(".wise_saying");

// 표시할 말들의 배열
const sayings = [
  "지금도 적들의 책장은 넘어가고 있다",
  "잠은 무덤에서 자도 충분하다",
  "죽을만큼 노력하라. 내일 넌 죽을만큼 웃을 수 있다",
  "합격자 명단에 귀하의 성명이 없습니다",
  "'하면 된다.'가 아니라 '해야 된다.'",
  "너의 라이벌은 너를 라이벌로 생각하지않는다",
  "신은 인간에게 '성공'이라는 선물을 주기 위해 '고통'이라는 포장지를 감싸준다",
  "내일 죽을 것처럼 살아가고, 영원히 살 것처럼 배워라.",
  "역사는 2등을 기억하지 않는다",
];

let currentSayingIndex = 0;

// 텍스트를 변경하고 애니메이션으로 새로운 말로 업데이트
function updateSaying() {
  // 텍스트 애니메이션을 적용
  gsap.to(wiseSayingDiv, {
    duration: 1,
    opacity: 0,
    onComplete: () => {
      // 애니메이션 완료 후 텍스트 업데이트
      wiseSayingDiv.textContent = sayings[currentSayingIndex];
      currentSayingIndex = (currentSayingIndex + 1) % sayings.length;
      // 새로운 텍스트에 대한 애니메이션 적용
      gsap.to(wiseSayingDiv, { duration: 1, opacity: 1 });
    },
  });
}

// 초기 텍스트 업데이트
updateSaying();

// 4초마다 텍스트 업데이트
setInterval(updateSaying, 4000);
