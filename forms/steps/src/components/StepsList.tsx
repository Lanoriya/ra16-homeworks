export function StepsList({ data, onDelete }: { data: { date: string; steps: number }[], onDelete: (date: string) => void }) {
  return (
    <div className="steps-container">
      <ul className="ul-steps">
        <li>Дата (ДД.ММ.ГГ)</li>
        <li>Пройдено км</li>
        <li>Действия</li>
      </ul>
      {data.map(item => (
        <div key={item.date} className="steps-info">
          <div>{item.date}</div>
          <div>{item.steps.toFixed(1)} км</div>
          <div className="steps-buttons">
            <button onClick={() => onDelete(item.date)}>✘</button>
          </div>
        </div>
      ))}
    </div>
  );
}