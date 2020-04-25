import React from 'react';

export default jest.mock(
    'react-dropdown',
    () => ({ options, value, onChange }) => {
        return (
            <select
            value={value}
            onChange={(e) => onChange(e.target)}
            data-testid="select"
            >
            {options.map((option, i) => (
            <option key={i} value={option}>
                {option}
            </option>
            ))}
            </select>
        );
    }
);