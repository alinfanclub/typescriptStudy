{
  /**
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginSatate = SuccessState | FailState;
  
  // function: login -> success, fail ⏱
  function login(): LoginSatate {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginSatate)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoaginState(state: LoginSatate): void {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
  // 이 함수는 별로 좋지 않다
}