
export function IconSwitch({ icon, onSwitch }) {
  return (
    <div>
      <button onClick={onSwitch}>
        <span className="material-icons">{icon}</span>
      </button>
    </div>
  )
};