// 클래스 - ES6( ECMAScript 2015 지원 )
{
  class fruit{
    //생성자 함수: new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji){
      this.name = name;
      this.emoji = emoji;
    }
    //함수 선언시 function예약어 사용 불가
    display = () => {
      console.log(`${this.name} : ${this.emoji}`);
    }
  }

  
  //a = new fruit("과일", '나라');
  const tomato = new fruit("tomato", "🍔");
  const kiwi = new fruit("kiwi", "🌮");

  console.log();
  console.log(tomato.name);
  console.log(tomato.emoji);
  console.log();
  tomato.display();
  kiwi.display();

  //주의
  console.log()
  const obj = {name: 'scott'};
  console.log(`${obj} : 이것은 Object임`)
}