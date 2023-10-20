{
  // JavaScript
  // function 자바스크립트추가(num1, num2) {
  //   return num1 + num2;
  // }

//  TypeScript
  function 추가(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript
  // function 자바스크립트숫자불러오기(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // TypeScript
  function 숫자불러오기(id:string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript
  // Optional parameter "?" => undefined or string
  function printName(firstN: string, lastN?: string) {
    console.log(firstN);
    console.log(lastN);
  }

  printName("민지", "성훈");
  printName("민지");
  printName("민지", undefined);

  // Default parameter
  function printMsg(msg: string = "default message") {
    console.log(msg);
  }

  printMsg();


  // Rest parameter
  function addNums(...num: number[]):number{
    return num.reduce((a, b) => a + b);
  }

}

