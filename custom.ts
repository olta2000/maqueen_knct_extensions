
/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */


enum mqDirect{
    //% block="右まわり"
    Right = 0,
    //% block="左まわり"
    Left = 1
}
/**
 * カスタムブロック
 */
//% weight=10 color=#00008b icon="\uf2db"
namespace まくいーん {
    let orderFlag:boolean = false;

    /**
     * @param time 何秒間回るのか, eg:0.1
     */
    //% block="%time| 秒間 |%direction| に回転する"
    export function 回転する(time:number ,direction: mqDirect):void{
        if(orderFlag == true){
            return;
        }
        else{
            orderFlag = true;
            if(direction == 0){
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 64)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 64)
            }   
            else if(direction == 1){
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 64)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 64)
            }
            basic.pause(time*1000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            orderFlag = false;
        }
    }

    //% block="%time|秒間|%speed|の速さで後退する"
    //% speed.min=0 speed.max=255
    export function 後退(time:number,speed:number):void{
        if(orderFlag == true){
            return;
        }
        else {
            if(0 > speed || 255 < speed){
                return;
            }
            orderFlag = true;
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
            basic.pause(time*1000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            orderFlag = false;
        }
    }
    //% block="%time|秒間|%speed|の速さで直進する"
    //% speed.min=0 speed.max=255
    export function 直進(time:number,speed:number):void{
        if(orderFlag == true){
            return;
        }
        else{
            if( 0 > speed || 255 < speed){
                return;
            }
            orderFlag = true;
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
            basic.pause(time*1000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            orderFlag = false;
        }
    }
}