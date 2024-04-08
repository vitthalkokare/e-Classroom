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
    placeholder?: string; 
    Class?:string
    pattern?:string
    min?:string
    max?:string
    maxLength?:number; 
}

const InputField: React.FC<InputFieldProps> = ({ label,Class,min,max ,pattern,maxLength, id, name, type, onChange,placeholder, value, required = false, autocomplete = 'off' }) => {
    return (
        <div className='flex flex-col'>
            <label htmlFor={id} className='block  font-medium text-gray-700'>
                {label}
            </label>
            <input
                className={` ${Class} p-2 w-full border-2 rounded-md text-black focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300`}
                id={id}
                min={min}
                max={max}
                type={type} 
                name={name}
                placeholder={placeholder}
                value={value}
                pattern={pattern}
                maxLength={maxLength}
                
                onChange={onChange} 
                required={required} 
                autoComplete={autocomplete} 
            />
        </div>
    );
};

export default InputField;
