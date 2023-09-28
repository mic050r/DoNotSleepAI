// Wise Sayings를 표시할 div 요소
const wiseSayingDiv = document.querySelector(".wise_saying");

// 표시할 말들의 배열
const sayings = [
  "지금 잠을 자면 꿈을 꾸지만 잠을 자지 않으면 꿈을 이룬다",
  "지금도 적들의 책장은 넘어가고 있다",
  "잠은 무덤에서 자도 충분하다",
  "죽을만큼 노력하라. 내일 넌 죽을만큼 웃을 수 있다",
  "내가 지금 외우지 못하고 지나친 단어가 수능날 3점짜리 문제의 핵심단어가 될 수 있다",
  "'하면 된다.'가 아니라 '해야 된다.'",
  "나태함, 그 순간은 달콤하고 결과는 비참하다",
  "신은 인간에게 '성공'이라는 선물을 주기 위해 '고통'이라는 포장지를 감싸준다",
  "불가능이란 노력하지않는자의 변명이다",
  "희망은 절대로 당신을 버리지 않는다 단지 당신이 희망을 버릴 뿐이지",
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
