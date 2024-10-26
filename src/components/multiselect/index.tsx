import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Option } from '@/types';
import { CheckIcon, ChevronsUpDown, Eraser } from 'lucide-react';
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
    const [searchInput, setSearchInput] = useState('');
    const wrapperRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleToggle = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 0);
      }
    };

    const handleSelect = (value: Option) => {
      if (selectedValues.some((v) => v.value === value.value)) {
        onChange(selectedValues.filter((v) => v.value !== value.value));
      } else {
        onChange([...selectedValues, value]);
      }
    };

    const clearSelection = () => {
      onChange([]);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(false);
        setHighlightedIndex(null);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null ? 0 : Math.min(prev + 1, filteredOptions.length - 1)
        );
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null ? filteredOptions.length - 1 : Math.max(prev - 1, 0)
        );
      } else if (
        (event.key === 'Enter' || event.key === ' ') &&
        highlightedIndex !== null
      ) {
        event.preventDefault();
        handleSelect(filteredOptions[highlightedIndex]);
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

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useEffect(() => {
      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
      } else {
        document.removeEventListener('keydown', handleKeyDown);
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [isOpen, highlightedIndex, filteredOptions]);

    return (
      <div className='relative' ref={wrapperRef}>
        {selectedValues.length > 0 && (
          <Tooltip>
            <TooltipTrigger
              type='button'
              className='absolute p-2 right-2 rounded-ss-xl rounded-se-xl bottom-full shrink-0 opacity-50 bg-red-200 text-red-500'
              onClick={clearSelection}
            >
              <Eraser className='h-4 w-6' />
            </TooltipTrigger>
            <TooltipContent>
              <p>Limpar seleção</p>
            </TooltipContent>
          </Tooltip>
        )}
        <button
          type='button'
          onClick={handleToggle}
          className='flex items-center border border-brand-200 rounded-md p-2 w-full text-left justify-between focus:outline-none focus:ring-2 focus:ring-brand-900 focus:ring-offset-2'
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
            <input
              type='text'
              placeholder='Buscar...'
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                setHighlightedIndex(0);
              }}
              ref={searchInputRef}
              className='w-full p-2 border-b border-gray-200 focus:outline-none'
            />
            <div className='max-h-60 overflow-y-auto'>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    key={option.value}
                    className={`p-2 hover:bg-gray-50 cursor-pointer ${
                      highlightedIndex === index ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => handleSelect(option)}
                  >
                    <div className='flex flex-row w-full items-center gap-2'>
                      {selectedValues.some((v) => v.value === option.value) ? (
                        <CheckIcon className='text-brand-500 h-4 w-4' />
                      ) : (
                        <div className='w-4 h-4' />
                      )}
                      {option.label}
                    </div>
                  </div>
                ))
              ) : (
                <div className='p-2 text-gray-500'>
                  Nenhuma opção encontrada
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
export default MultiSelect;
