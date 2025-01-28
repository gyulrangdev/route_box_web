import React, { useEffect, useState } from 'react';
import { InputLabel, InputSection } from '../style';
import { BirthContainer, BirthSelect } from './style';

interface BirthProps {
  birthDay: string;
  handleInputChange: (name: string, value: string) => void;
}

export const Birth: React.FC<BirthProps> = ({ birthDay, handleInputChange }) => {
  const splitBirthday = birthDay.split('-');
  const year = splitBirthday[0];
  const month = splitBirthday[1];
  const day = splitBirthday[2];

  const years = Array.from({ length: 100 }, (_, i) => `${2024 - i}`);
  const months = Array.from({ length: 12 }, (_, i) => `0${i + 1}`.slice(-2));
  const days = Array.from({ length: 31 }, (_, i) => `0${i + 1}`.slice(-2));

  function handleDateChange(type: 'year' | 'month' | 'day', value: string) {
    const [currentYear, currentMonth, currentDay] = birthDay.split('-');
    const newDate = [
      type === 'year' ? value : currentYear,
      type === 'month' ? value : currentMonth,
      type === 'day' ? value : currentDay,
    ].join('-');

    handleInputChange('birthDay', newDate);
  }

  return (
    <InputSection>
      <InputLabel>생년월일</InputLabel>
      <BirthContainer>
        <BirthSelect
          $hasValue={!!year}
          value={year}
          onChange={(e) => handleDateChange('year', e.target.value)}
        >
          <option value="" disabled>
            년
          </option>
          {years.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </BirthSelect>
        <BirthSelect
          $hasValue={!!month}
          value={month}
          onChange={(e) => handleDateChange('month', e.target.value)}
        >
          <option value="" disabled>
            월
          </option>
          {months.map((mn) => (
            <option key={mn} value={mn}>
              {mn}
            </option>
          ))}
        </BirthSelect>
        <BirthSelect
          $hasValue={!!day}
          value={day}
          onChange={(e) => handleDateChange('day', e.target.value)}
        >
          <option value="" disabled>
            일
          </option>
          {days.map((dy) => (
            <option key={dy} value={dy}>
              {dy}
            </option>
          ))}
        </BirthSelect>
      </BirthContainer>
    </InputSection>
  );
};
