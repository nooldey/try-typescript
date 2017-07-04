/*
interface StringArray {
    [index: number]: string;
}
let MyArr:StringArray;
MyArr = ["风","云","突","变"];
console.log(MyArr[3])
*/

interface ClockInter {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInter {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number,m: number) {}
}