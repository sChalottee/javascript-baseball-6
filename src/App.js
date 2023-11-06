import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const controller = new Controller();
    await controller.restart();
  }
}

class Game {
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

  async process(generator) {
    let answer = "";
    let strike = 0;
    let ball = 0;

    const number = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    if (number.length !== 3) {
      throw new Error("[ERROR]");
    }

    for (let i = 0; i < generator.length; i++) {
      if (generator[i] === Number(number[i])) {
        strike++;
      } else if (generator.includes(Number(number[i]))) {
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
  async restart() {
    const game = new Game();

    while (true) {
      const generator = game.generateNum();
      let answer = "";

      while (answer !== "3스트라이크") {
        answer = await game.process(generator);
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
      }
    }
  }
}

export default App;
