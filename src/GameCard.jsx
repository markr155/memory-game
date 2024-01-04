export default function GameCard({ name, img, onClick, id }) {
  return (
    <div className="game-card" onClick={() => onClick(id)}>
      <img src={img} alt={img ? name : "Image not found"} />
      <p>{name}</p>
    </div>
  );
}
