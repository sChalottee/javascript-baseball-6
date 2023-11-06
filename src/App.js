import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  controller;

  constructor() {
    this.controller = new Controller();
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.controller.restart();
  }
}

class Game {
  generator = [];

  constructor() {
    this.generateNum();
  }

  generateNum() {
    while (this.generator.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.generator.includes(number)) {
        this.generator.push(Number(number));
      }
    }
    console.log(this.generator);
    return this.generator;
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
    let answer = await this.game.process();
    MissionUtils.Console.print(answer);

    if (answer === "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const finish = await MissionUtils.Console.readLineAsync(
        "새 게임을 시작하려면 1을, 그만두려면 2를 입력하세요."
      );

      if (finish === "1") {
        this.game = new Game();
        await this.restart();
      } else if (finish === "2") {
        MissionUtils.Console.print("게임이 종료됩니다.");
      } else {
        throw new Error();
      }
    } else {
      await this.restart();
    }
  }
}

export default App;
