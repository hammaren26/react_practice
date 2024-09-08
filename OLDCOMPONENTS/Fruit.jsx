export default function Fruit(props) {
  let { name, price, emoji, soldout } = props;

  return (
    <>
      <li>
        <div>
          <b>Name: </b> {name}
        </div>
        <div>
          <b>Price: </b> {price}
        </div>
        <div>
          <b>Emoji: </b> {emoji}
        </div>

        {soldout ? (
          <pre>
            <b>SOLD OUT EBAT kopat</b>
          </pre>
        ) : (
          ""
        )}
      </li>
    </>
  );
}
