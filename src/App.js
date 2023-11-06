class App {
  async play() {}
}

const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
class Game {
  constructor() {
    answer = "";
    strike = 0:
    ball = 0;
    number = MissionUtils.Console.readLineAsync("숫자를 입력해주세요.")
  }

  match() {
    for (let i = 0; i < computer.length; i++) {
      computer[i] = number[i];
    }

    simpan() {
      if (strike === 3) {
        answer = `${strike}스트라이크 \n 3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      } else if (strike === 0 && ball === 0) {
        answer = "낫싱"
      } else if (strike !== 0 && ball === 0) {
        answer = `${strike}스트라이크`
      } else if (strike === 0 && ball !== 0) {
        answer = `${ball}볼`
      } else {
        answer = `${strike}스트라이크 ${ball}볼`
      }
    }
  }
}
class Controller {

}
export default App;
