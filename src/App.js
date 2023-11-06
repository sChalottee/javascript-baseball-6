class App {
  async play() {}
}

class Game {
  constructor() {
    answer = "";
    strike = 0;
    ball = 0;
    number = MissionUtils.Console.readLineAsync("숫자를 입력해주세요.");
    // number = [123]
    computer = [];
  }

  if (number.length !== 3) {
  throw new Error("[ERROR]");
  }

  while (this.computer.length < 3) {
  let number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(Number(number))) {
    computer.push(Number(number));
  }
}
  match() {
    for (let i = 0; i < computer.length; i++) {
      if (computer[i] = Number(number[i])) {
        strike++;
      } else if (computer.includes(Number(number[i]))) {
        ball++;
      }
    }
  };
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

class Controller {
  restart() {
    const game = new Game();


  }

}
export default App;
