import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    pickNumberArray;
    choice;

    constructor() {
        this.pickNumberArray = [];
        this.choice = 0;
    }

    async play() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        //랜덤 숫자 생성 함수
        this.generateNum();
        //숫자 입력
        this.pickNumberArray = (
            await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")
        ).split(""); //[1,2,3]
        //입력숫자 유효성검사
        for (let yosu of this.pickNumberArray) {
            if (isNaN(Number(yosu))) {
                throw new Error("[ERROR]");
            }
        }
        if (this.pickNumberArray.length !== 3) {
            throw new Error("[ERROR]");
        }

        //스트 볼 판정 함수
        this.strikeOrBall(this.pickNumberArray, this.generateN);
        // MissionUtils.Console.print("1볼 1스트라이크");
        this.choice = Number(
            await MissionUtils.Console.readLineAsync(
                "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
            )
        );
        //선택에 따라 재시작 or 끝
    }

    //랜덤숫자 생성 함수
    generateNum() {
        let generateN = [];
        while (generateN.length < 3) {
            let number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!generateN.includes(number)) {
                generateN.push(number);
            }
        }
        return generateN; //[1,2,3]
    }
    strikeOrBall(pickNumberArray, generateN) {
        // pickNumberArray + generateN = [];
    }
}

export default App;
