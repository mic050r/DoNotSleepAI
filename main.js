// Wise Sayings를 표시할 div 요소
const wiseSayingDiv = document.querySelector(".wise_saying");

// 표시할 말들의 배열
const sayings = [
  "지금도 적들의 책장은 넘어가고 있다",
  "잠은 무덤에서 자도 충분하다",
  "죽을만큼 노력하라. 내일 넌 죽을만큼 웃을 수 있다",
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
