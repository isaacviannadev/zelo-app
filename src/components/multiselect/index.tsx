import { Option } from '@/types';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Pill } from './pill';

type MultiSelectProps = {
  options: Option[];
  selectedValues: Option[];
  onChange: (selectedValues: Option[]) => void;
};

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  ({ options, selectedValues, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(
      null
    );
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleSelect = (value: Option) => {
      if (selectedValues.filter((v) => v.value === value.value).length > 0) {
        onChange(selectedValues.filter((v) => v.value !== value.value));
      } else {
        onChange([...selectedValues, value]);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(false);
        setHighlightedIndex(null);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null ? 0 : Math.min(prev + 1, options.length - 1)
        );
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null ? options.length - 1 : Math.max(prev - 1, 0)
        );
      } else if (
        (event.key === 'Enter' || event.key === ' ') &&
        highlightedIndex !== null
      ) {
        event.preventDefault();
        handleSelect(options[highlightedIndex]);
      }
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setHighlightedIndex(null);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [highlightedIndex, options]);

    return (
      <div className='relative' ref={wrapperRef}>
        <button
          type='button'
          onClick={handleToggle}
          className='flex items-center border rounded-md p-2 w-full text-left justify-between focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2'
          ref={ref}
          {...props}
        >
          <div className='flex flex-wrap gap-1 w-full h-fit '>
            {selectedValues.length > 0
              ? selectedValues.map((value, index) => (
                  <Pill
                    key={value.value + index}
                    value={value.label}
                    remover={() => handleSelect(value)}
                  />
                ))
              : 'Selecione uma opção'}
          </div>
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </button>
        {isOpen && (
          <div className='absolute border rounded-md mt-1 w-full bg-white z-10 p-1'>
            {options.map((option, index) => (
              <div
                key={option.value}
                className={`p-2 hover:bg-gray-50 cursor-pointer ${
                  highlightedIndex === index ? 'bg-gray-100' : ''
                }`}
                onClick={() => handleSelect(option)}
              >
                <input
                  type='checkbox'
                  checked={
                    selectedValues.filter((v) => v.value === option.value)
                      .length > 0
                  }
                  onChange={() => handleSelect(option)}
                  className='mr-2 hidden'
                />
                <div className='flex flex-row w-full items-center gap-2'>
                  {selectedValues.filter((v) => v.value === option.value)
                    .length > 0 ? (
                    <CheckIcon className='text-brand-500 h-4 w-4' />
                  ) : (
                    <div></div>
                  )}
                  {option.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
export default MultiSelect;
