{
  // array
  const 과일들: string[] = ['사과', '바나나', '오렌지'];
  const 숫자들: number[] = [1, 2, 3];
  const 숫자들2: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {}
  // function printArray(fruits: readonly Array<string>) {} // 허용 안됨

  // Tuple -> interface, type alias, class 
  let 학생: [string, number];
  학생 = ['name', 123];
  학생[0]; // name
  학생[1]; // 123
  const [이름, 나이] = 학생;

  // 튜플사용 예시 : useSatate
}