//Abstruct class provides blue print and also gives defination of methods
//Can not create object of Abstract class
//super should be used 
//should abstrcut keyword for class and methods



abstract class TakePhoto{
    camerMode:string
    burst:number
    filter:string
    abstract getSepia():void
    getReeltime():number{
        console.log("Real time is :");
        return 10
    }
}

class Instagram extends TakePhoto{
constructor(
    public camerMode:string,
    public burst:number,
    public filter:string
){
super()
}
getSepia(): void {
    console.log("Welcome");
    
}
}

const obj: Instagram = new Instagram("front",32,"filter")
console.log(obj);

obj.getReeltime();