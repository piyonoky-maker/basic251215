{
  function add(a, b){
    const result = a + b;
    return result;
  }

  function minus(a, b){
    const result = a - b;
  }

  const result = add(1, 2);
  console.log(result);
  console.log(minus(3, 2));
}
//함수할당
//함수도 객체임
{
  function add(a, b){
    const result = a + b;
    return result;
  }
  const sum = add;    //const sum은 add의 복제본
  console.log(sum(1, 2));
  console.log(sum(2, 3));

  //함수를 파라미터로 전달
  function other(tot){
    console.log(tot(2, 3));
  }
  other(sum);
}

//함수에서 return 사용
//return을 함수 중간에 사용하면 함수가 종료됨
{
  console.log();
  function print2(num){
    if(num < 0){
      return;
    }
    console.log('here');
  }
  print2(5);
  print2(-3);
}
// 콜백함수
{
  const add = (a, b) => a + b 
  const multiply = (a, b) => a * b 
  // 파라미터로 전달된 action은 콜백함수이다.
  // 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는게 아니라
  // 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
  function calculator(a, b, action){
    if(a < 0 || b < 0){//둘  중에 하나만 만족하더라도
      return //함수를 탈출한다.
    }
    let result = action(a, b)
    console.log(`calculator ${result}`)
    return result 
  }//end of calculator
  console.log('여기로 온다.')
  //insert here
  //어떤 함수를 전달하는가에 따라서 계산 결과가 달라진다.
  let r1 = calculator(1,2,add)
  let r2 = calculator(-1,-2,add) //a와 b가 음수이므로 return됨
  let r3 = calculator(1,2,multiply)
  console.log(r1)
  console.log(r2)
  console.log(r3)
}