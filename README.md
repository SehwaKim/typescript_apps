# Typescript: The Complete Developer's Guide [2020] (Udemy)

## 1. fetchjson

- 왜 TS를 쓰는가? 왜 유용한가?
  - 버그가.. 있는데.. runtime때 발견
  - 컴파일 타임에 버그를 발견하고 싶다.
  - That is what typescript is all about!!!
- interface
  - object의 구조를 정의하기 위해 interface를 쓴다.
  - (ts 컴파일러로 하여금) 어떤 데이터구조를 다룰지 예측하게 해줌.
- Type이란?
  - 값(String, number, boolean, object, array, function…)이 가지는 여러가지 프로퍼티와 함수들을 쉽게 지칭하는 방법. (이 값은 string 이다 -> string 타입이 갖는 모든 프로퍼티, 함수들이 포함됨을 뜻함)
  - 타입은 즉 shortcut이자 label 이다.
  - typescript에서 모든 값은 타입을 가진다.
  - Primitive types / Object Types (function, array, class, object)
  - type 은 결국 typescript compiler 한테 알려주려고 쓰는거임
  - 협업 시 코드 파악을 용이하게 해주는 장점도 있음
- 타입 추론
  - typescript에서 모든 값들은 타입을 가진다.
  - 추론될 수 있는 타입은 ts에서 자동으로 추론해준다.
  - 따라서 추론이 불가하고 개발자가 typescript에게 타입을 알려줘야 할 때만 annotation을 적어주면 된다. (any 타입을 없애라)
