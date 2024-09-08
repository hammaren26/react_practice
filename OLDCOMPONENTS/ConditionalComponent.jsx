export default function ConditionalComponent() {
  let display = false;

  let message1 = <h1>message one</h1>;
  let message2 = <h1>message two</h1>;

  return <div>{display ? message1 : message2}</div>;
}
