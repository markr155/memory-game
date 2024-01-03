export default function GameCard({ name, img }) {
  return (
    <div className="game-card">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}
