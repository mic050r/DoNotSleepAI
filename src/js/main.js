const URL = "./my_model/";

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
// 이미지 모델을 로드하고 웹캠을 설정하는 함수
async function init() {
  // 모델 및 메타데이터 파일의 URL
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // 모델과 메타데이터 로드
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses(); // 예측할 수 있는 클래스(레이블) 수

  // 웹캠 설정을 위한 편의 함수 호출
  const flip = true; // 웹캠 영상을 좌우로 뒤집을지 여부
  webcam = new tmImage.Webcam(300, 300, flip); // 웹캠 객체 생성 (너비, 높이, 뒤집기)
  await webcam.setup(); // 웹캠 사용 권한 요청
  await webcam.play(); // 웹캠 영상 시작
  window.requestAnimationFrame(loop); // 애니메이션 프레임 요청

  // DOM에 요소 추가
  document.getElementById("webcam-container").appendChild(webcam.canvas);
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    // 클래스 레이블을 표시할 div 요소를 생성하여 추가
    labelContainer.appendChild(document.createElement("div"));
  }
}

// 웹캠 영상을 지속적으로 업데이트하고 예측 함수를 호출하는 함수
async function loop() {
  webcam.update(); // 웹캠 프레임 업데이트
  await predict(); // 예측 함수 호출
  window.requestAnimationFrame(loop); // 다음 애니메이션 프레임 요청
}

// 웹캠 이미지를 이미지 모델을 통해 예측하는 함수
async function predict() {
  // 예측은 이미지, 비디오 또는 캔버스 HTML 요소를 입력으로 받을 수 있음
  const prediction = await model.predict(webcam.canvas); // 웹캠 캔버스를 입력으로 예측 수행
  for (let i = 0; i < maxPredictions; i++) {
    // 클래스 예측 결과를 확률과 함께 표시
    const classPrediction =
      prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    labelContainer.childNodes[i].innerHTML = classPrediction;
  }
}
