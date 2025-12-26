// 원시타입은 값이 복사되어 전달됨
let a = 1
let b = a 
b = 2
console.log(a)//1
console.log(b)//2

let name = 'apple'
let color = 'red'
let display = '🍎'

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
}

console.log(apple)
console.log(apple.name)
console.log(apple['name'])
console.log(apple.color)
console.log(apple['color'])
console.log(apple.display)
console.log(apple['display'])

let orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊'
}
// 객체타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달됨
// 복사본을 변경하면 원본도 변경된다.
orange = apple 
console.log(orange)
orange.name = "Orange"
console.log(apple)