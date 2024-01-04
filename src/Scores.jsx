export default function Scores({ currentScore, highScore, currentRound }) {
  return (
    <div className="score-container">
      <div id="high-score">High Score: {highScore}</div>
      <div id="current-score">Score: {currentScore}</div>
      <div id="current-round">Current round: {currentRound + 1}</div>
    </div>
  );
}
