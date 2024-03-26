import React from 'react';

export interface InputFieldProps {
    label: string;
    id: string;
    name: string;
    type: string;
	readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required?: boolean; 
    autocomplete?: string; 
}

const InputField: React.FC<InputFieldProps> = ({ label, id, name, type, onChange, value, required = false, autocomplete = 'off' }) => {
    return (
        <div>
            <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
                {label}
            </label>
            <input
                className='mx-2 p-2 w-full border rounded-md text-black focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required} 
                autoComplete={autocomplete} 
            />
        </div>
    );
};

export default InputField;
