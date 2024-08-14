import React, { useEffect, useState } from 'react';
import demoData from '../assets/data.json';
import { useDebounce } from '../hooks/useDebounce';
import { User } from '../interfaces/User';
function DebouncePage() {
  const [val, setVal] = useState('');
  const debounceVal = useDebounce(val, 3000);
  const [filterVal, setFilterVal] = useState<User[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  useEffect(() => {
    if (debounceVal === '') return;
    setFilterVal(
      demoData.filter((item) => {
        return item.name.toLowerCase().startsWith(debounceVal);
      })
    );
  }, [debounceVal]);

  return (
    <div>
      <h3> Debounce</h3>
      <p>Type to see the debounce in action, </p>
      <p style={{ color: 'blue' }}>it will filter the list after 3 seconds</p>
      <input type="text" onChange={handleChange} />
      <div style={{ textAlign: 'left' }}>
        {filterVal.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </div>
  );
}

export default DebouncePage;
