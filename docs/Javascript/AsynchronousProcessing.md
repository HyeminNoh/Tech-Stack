# 동기식 처리 모델 vs 비동기식 처리 모델
*written by sohyeon, hyemin 💡*

<br>

## 1. 동기식 처리 모델  

태스크를 순차적으로 실행하고 먼저 실행 중인 작업이 있으면 다음 작업은 대기하게 된다.  

예를 들어 서버에서 데이터를 가져와서 화면에 표시하는 작업을 수행할 때, 서버에 데이터를 요청하고 데이터가 응답될 때 까지 이후 태스크들은 블로킹 된다.  

### 1-1. 예제

```Javascript
function func1() {
  console.log('func1');
  func2();
}

function func2() {
  console.log('func2');
  func3();
}

function func3() {
  console.log('func3');
}

func1();
```

## 2. 비동기식 처리 모델

먼저 실행된 태스크가 종료되지 않은 상태라 하더라도 대기하지 않고 다음 태스크를 실행한다. 병렬적으로 태스크를 수행하게 된다.  

서버에 데이터를 요청한 이후 서버로부터 데이터가 응답받을 때까지 대기하지 않고 즉시 다음 태스크를 수행한다. 이후 서버로부터 응답되면 이벤트가 발생하고 이벤트 핸들러가 데이터를 가지고 수행할 태스크를 계속해 수행한다.  

자바스크립트의 대부분의 DOM 이벤트 핸들러와 Timer 함수(setTimeout, setInterval), Ajax 요청은 비동기식 처리 모델로 동작한다.  

### 2-1. 예제

```Javascript
function func1() {
  console.log('func1');
  func2();
}

function func2() {
  setTimeout(function() {
    console.log('func2');
  }, 0);

  func3();
}

function func3() {
  console.log('func3');
}

func1();
```
위 예제를 실행하면 setTimeout 메소드에 두번째 인수 인터벌을 0초로 설정하여도 콘솔에 “func1 func2 func3”의 순서로 로그가 출력되지 않는다. 이는 setTimeout 메소드가 비동기 함수이기 때문이다.

<br>

## Reference & Additional Resources
* [동기식 처리 모델 vs 비동기식 처리 모델](https://poiemaweb.com/js-async)