import Card from './Card';

export default function CardStack({ cards }) {
  return (
    <div className="quizBoard">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}
