const Wincard = props => {
  const {pres, ont} = props
  const rte = () => {
    ont()
  }
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE {pres}</p>
      <button onClick={rte}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default Wincard
