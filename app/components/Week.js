import React, { useState } from 'react';
import LabItem from './LabItem';

const Week = ({ onGradeLab, listOfWeeks, onDelete }) => {
  const [selectedWeek, setSelectedWeek] = useState('');

  return (
    <div className='w-full p-10'>
      <ul>
        {listOfWeeks.map((week, index) => (
          <li
            key={index}
            className='text-white text-lg font-bold mb-2'
            onClick={() => setSelectedWeek(week.weekName)}
          >
            {week.weekName}
            {selectedWeek === week.weekName && (
              <ul>
                {week.labs.map((lab) => (
                  <LabItem
                    key={lab}
                    labName={lab}
                    onDelete={() => onDelete(week.weekName, lab)}
                    onGradeLab={() => onGradeLab(week.weekName, lab)}
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Week;
