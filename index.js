// 변수 const = 상수(바뀔 수 없는 수)
// const whoAmI = "??" => 기본 형식(시작은 소문자 띄어쓰기 시 대문자)
const name = "재시크"
// name = "최현기"

// 변수 let = 변할 수 있는 수
let hobby = "보드"
console.log(hobby)

hobby = "잠"
console.log(hobby)

const a = 10
const b = 20

console.log(name)
console.log(name + hobby)
console.log(a + b)

// typeof = 변수 형식 확인 (String, int)
// "", '' 모두 동일
console.log(typeof hobby)
console.log(typeof a)
console.log("나의 이름은 " + name + "이고, " + "취미는 " + hobby + "입니다.")

// `` = 백틱 사용 형식
console.log(`나의 이름은 ${name}이고, 취미는 ${hobby}입니다.`)

// 배열
const arr =  [1, 2, 3, 4]
console.log(arr)
console.log(arr[0]) // 배열에 저장된 값 중에 1만 출력 ( [] 사용 )

const arr2 = ["최현기", "최재식", "재시크", "영진"]
console.log(arr2)

const arr3 = ["최현기", 1, 2, "최재식"]
console.log(arr3)

//객체 
const obj1 = {name: "최현기", hobby: "보드"}
const obj2 = {name: "최재식", hobby: "유희왕"}

const arr4 = [
    {name: "최현기", hobby: "보드"},
    {name: "최재식", hobby: "유희왕"}
]
console.log(arr4)
console.log(arr4[0].hobby)