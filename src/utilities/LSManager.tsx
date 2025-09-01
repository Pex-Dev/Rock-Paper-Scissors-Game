export function GetScoreFromLocalStorage(): number {
  const score = localStorage.getItem("score");
  return score ? JSON.parse(score) : 0;
}

export function SetScoreToLocalStorage(score: number): void {
  localStorage.setItem("score", JSON.stringify(score));
}
