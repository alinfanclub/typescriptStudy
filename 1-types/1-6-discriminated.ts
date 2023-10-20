{
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
  
}