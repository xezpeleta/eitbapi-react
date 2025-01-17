import React from 'react';
import { getRadios } from '../api';
import { useSelector } from 'react-redux';

export const Radios = () => {
  const { langCode: language } = useSelector((state) => state.language);

  const radios = getRadios();
  return (
    <div>
      <ul>
        {radios.map((item, index) => {
          return (
            <li key={index}>
              <a href={`/eitbapi-react/#/${language}/radios/${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
