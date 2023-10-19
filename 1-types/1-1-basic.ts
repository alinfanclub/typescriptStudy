{
  /**
   * JavaScript
   * Primitive(원시타입): number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array 등등
   */

  // number
  const 숫자:number = 1; // 정수, 소수점 숫자

  // string
  const 문자:string = '안녕'; // 문자타입

  // boolean
  const 참말이여:boolean = false; // true, false

  // undefined
  let 이름: undefined; // 💩
  let 나이: number | undefined; // 타입이 정해지지 않은 경우
  나이 = undefined;
  나이 = 1;

  function 찾아라드래곤볼(): number | undefined {
    return undefined;
  }

  // null
  let 사람: null; // 💩
  let 인간: string | null;

}