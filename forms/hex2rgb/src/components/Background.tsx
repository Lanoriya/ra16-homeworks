import { useState, useEffect } from "react";

export function Background() {
  const [style, setStyle] = useState('');

  function styler(hex: string) {
    if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      setStyle(`rgb(${r}, ${g}, ${b})`);
    } else {
      setStyle('Ошибочное значение');
    }
  }

  useEffect(() => {
    if (style !== 'Ошибочное значение') {
      document.body.style.backgroundColor = style;
    } else {
      document.body.style.backgroundColor = 'transparent';
    }
  }, [style]);

  return (
    <div>
      <input type="text" onChange={e => styler(e.target.value)} placeholder="Введите hex цвет" />
      <div style={{ backgroundColor: style !== 'Ошибочное значение' ? style : 'transparent', width: '100%', height: '100px' }}>
        <p style={{ color: style === 'Ошибочное значение' ? 'red' : 'black' }}>{style}</p>
      </div>
    </div>
  );
}
