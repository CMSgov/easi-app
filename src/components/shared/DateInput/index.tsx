import React from 'react';
import { RefCallBack } from 'react-hook-form';
import classnames from 'classnames';

type DateInputProps = {
  id: string;
  name: string;
  onChange: () => void;
  value: string;
  inputRef?: RefCallBack;
  error?: boolean;
  className?: string;
} & JSX.IntrinsicElements['input'];

const DateInputMonth = ({
  id,
  name,
  value,
  onChange,
  inputRef,
  error,
  className,
  ...props
}: DateInputProps) => {
  const classes = classnames(
    'usa-input',
    'usa-input--inline',
    { 'usa-input--error': error },
    className
  );

  return (
    <>
      <span id="DateMonthHelp" className="usa-sr-only">
        Month, this field requires two digits. For example, zero three
      </span>
      <input
        className={classes}
        id={id}
        name={name}
        type="text"
        maxLength={2}
        pattern="[0-9]*"
        inputMode="numeric"
        value={value}
        onChange={onChange}
        aria-describedby="DateMonthHelp"
        ref={inputRef}
        {...props}
      />
    </>
  );
};

const DateInputDay = ({
  id,
  name,
  value,
  onChange,
  inputRef,
  error,
  className,
  ...props
}: DateInputProps) => {
  const classes = classnames(
    'usa-input',
    'usa-input--inline',
    { 'usa-input--error': error },
    className
  );

  return (
    <>
      <span id="DateDayHelp" className="usa-sr-only">
        Day, this field requires two digits. For example, two three
      </span>
      <input
        className={classes}
        id={id}
        name={name}
        type="text"
        maxLength={2}
        pattern="[0-9]*"
        inputMode="numeric"
        value={value}
        onChange={onChange}
        aria-describedby="DateDayHelp"
        ref={inputRef}
        {...props}
      />
    </>
  );
};

const DateInputYear = ({
  id,
  name,
  value,
  onChange,
  inputRef,
  error,
  className,
  ...props
}: DateInputProps) => {
  const classes = classnames(
    'usa-input',
    'usa-input--inline',
    { 'usa-input--error': error },
    className
  );

  return (
    <>
      <span id="DateYearHelp" className="usa-sr-only">
        Year, this field requires four digits. For example, two zero two one
      </span>
      <input
        className={classes}
        id={id}
        name={name}
        type="text"
        minLength={4}
        maxLength={4}
        pattern="[0-9]*"
        inputMode="numeric"
        value={value}
        onChange={onChange}
        aria-describedby="DateYearHelp"
        ref={inputRef}
        {...props}
      />
    </>
  );
};

export { DateInputMonth, DateInputDay, DateInputYear };
