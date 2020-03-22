let apples: number = 5; // annotation 없어도 추론 됨
let speed: string = 'fast';
let hasName: boolean = true;
let age: number;
// age = 'hundred';
age = 100;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true,true,true];

// object
let point: { x: number, y: number } = {
  x: 10,
  y: 10
}

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// 언제 annotation 쓰나효
// 1) 함수가 any 타입 반환할때
const json = '{"x":10,"y":20}';
const coordinates: { x: number , y: number } = JSON.parse(json);

// 2) 변수 선언 후 즉시 초기화하지 않는 경우
let words = ['red','green','blue'];
let foundWord: boolean; // annotaion 필요!

for (let i = 0; i<words.length; i++){
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) 어떤 타입이 올지 하나로 딱 못 정할 경우
let number = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for( let i =0; i<number.length: i++) {
  if(number[i] > 0){
    numberAboveZero = number[i];
  }
}

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
