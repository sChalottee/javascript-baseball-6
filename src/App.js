import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.controller.restart();
  }
}

class Game {
  constructor() {
    this.generator = this.generateNum();
  }

  generateNum() {
    const generator = [];
    while (generator.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!generator.includes(number)) {
        generator.push(number);
      }
    }
    return generator;
  }

  async process() {
    let answer = "";
    let strike = 0;
    let ball = 0;

    const number = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    if (number.length !== 3) {
      throw new Error("[ERROR]");
    }

    for (let i = 0; i < this.generator.length; i++) {
      if (this.generator[i] === Number(number[i])) {
        strike++;
      } else if (this.generator.includes(Number(number[i]))) {
        ball++;
      }
    }

    if (strike > 0 && ball > 0) {
      answer = `${ball}볼 ${strike}스트라이크`;
    } else if (ball) {
      answer = `${ball}볼`;
    } else if (strike) {
      answer = `${strike}스트라이크`;
    } else {
      answer = "낫싱";
    }
    return answer;
  }
}

class Controller {
  constructor() {
    this.game = new Game();
  }

  async restart() {
    while (true) {
      let answer = "";

      while (answer !== "3스트라이크") {
        answer = await this.game.process();
        await MissionUtils.Console.print(answer);
      }

      await MissionUtils.Console.print(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );

      const finish = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (finish === "2") {
        await MissionUtils.Console.print("게임 종료");
        break;
      } else {
        this.game = new Game();
      }
    }
  }
}

export default App;
