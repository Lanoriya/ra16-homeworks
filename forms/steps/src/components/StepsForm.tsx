import { useState } from "react";

export function StepsForm({ onAdd }: { onAdd: (data: { date: string; steps: string }) => void }) {
  const [form, setForm] = useState({ date: '', steps: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(form);
    setForm({ date: '', steps: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          type="text"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="steps">Пройдено км</label>
        <input
          type="text"
          id="steps"
          name="steps"
          value={form.steps}
          onChange={handleChange}
        />
      </div>
      <button type="submit">OK</button>
    </form>
  );
}