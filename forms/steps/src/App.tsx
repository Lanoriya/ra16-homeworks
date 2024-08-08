import { useState } from "react";
import './App.css';
import { StepsList } from './components/StepsList';
import { StepsForm } from './components/StepsForm';

function App() {
  const [formData, setFormData] = useState<{ date: string; steps: number }[]>([]);

  const addData = (newData: { date: string; steps: string }) => {
    setFormData(prevData => {
      const existingItem = prevData.find(item => item.date === newData.date);

      if (existingItem) {
        return prevData.map(item =>
          item.date === newData.date
            ? { ...item, steps: item.steps + parseFloat(newData.steps) }
            : item
        );
      } else {
        const updatedData = [...prevData, { date: newData.date, steps: parseFloat(newData.steps) }];

        return updatedData.sort((a, b) => {
          const [dayA, monthA, yearA] = a.date.split('.').map(Number);
          const [dayB, monthB, yearB] = b.date.split('.').map(Number);
          
          const dateA = new Date(yearA, monthA - 1, dayA);
          const dateB = new Date(yearB, monthB - 1, dayB);

          return dateB.getTime() - dateA.getTime();
        });
      }
    });
  };

  const deleteData = (dateToDelete: string) => {
    setFormData(prevData => prevData.filter(item => item.date !== dateToDelete));
  };

  return (
    <>
      <StepsForm onAdd={addData} />
      <StepsList data={formData} onDelete={deleteData} />
    </>
  );
}

export default App;
