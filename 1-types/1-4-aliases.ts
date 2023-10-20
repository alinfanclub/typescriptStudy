{
  /**
   * Type Aliases (타입 할당)
   */
  type Text = string;
  const name: Text = 'minji';
  const address: Text = 'busan';
  type Student = {
    이름: string;
    나이: number;
  };

  const 학생: Student = {
    이름: 'minji',
    나이: 26,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let minjiName: Name;
  minjiName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}