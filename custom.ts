
/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

enum mqDirect{
    //% block="右まわり"
    Right,
    //% block="左まわり"
    Left
}
/**
 * カスタムブロック
 */
//% weight=150 color=#00ced1 icon="\f044"
namespace まくいーん {
    let orderFlag:boolean = false;
    /**
     * TODO: ここに関数を記述してください
     * @param n ここでパラメーターの説明をしてください。, eg: 5
     * @param s ここでパラメーターの説明をしてください。, eg: "Hello"
     * @param e ここでパラメーターの説明をしてください。
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: ここに関数を記述してください
     * @param value ここで値の説明をしてください。, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }

    /**
     * @param time 何秒間回るのか, eg:0.4
     */
    //% block
    export function 回転する(time:number ,direction: mqDirect):void{
        if(orderFlag == true){
            return;
        }
        else{
            orderFlag = true;
            if(direction == 0){
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 64)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            }   
            else if(direction == 1){
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 64)
            }
            basic.pause(time*1000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            orderFlag = false;
        }
    }
}
