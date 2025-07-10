function Hole({ index, hasMole, onWhack }) {
  return (
    <div className="hole">
      {hasMole && (
        <div
          className="mole"
          onClick={onWhack}
          aria-label={`Mole at hole ${index}`}
        />
      )}
    </div>
  );
}

export default Hole;