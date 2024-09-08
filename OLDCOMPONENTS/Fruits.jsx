import Fruit from "./Fruit";

const fruits = [
  { name: "Apple", price: 10, emoji: "🍎", soldout: true },
  { name: "Avocado", price: 20, emoji: "🥑", soldout: false },
  { name: "Banana", price: 30, emoji: "🍌", soldout: false },
];

export default function Fruits() {
  return (
    <ul className="list_box">
      {fruits.map((fruit) => (
        <Fruit
          key={fruit.name}
          name={fruit.name}
          emoji={fruit.emoji}
          price={fruit.price}
          soldout={fruit.soldout}
        />
      ))}
    </ul>
  );
}
