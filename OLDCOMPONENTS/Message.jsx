function test(event) {
  console.log(event);
}

export default function Message() {
  return <button onClick={test}>click me to get message</button>;
}
