import React, { useState } from "react";
// import { InputGroup, Form } from "react-bootstrap";
import {
  InputGroup as BaseInput,
  InputGroupProps,
  FormControl,
  Form
} from "react-bootstrap";

export interface InputProps extends InputGroupProps, React.HTMLAttributes<HTMLElement> {
  type?: string;
  value?: any;
  textArea?: boolean,
  rows?: number,
  label?: any,
  ref?: React.RefObject<HTMLInputElement>
}

export type IInput = InputProps;

export const Input: React.FC<IInput> = ({
  id,
  placeholder,
  size,
  className,
  textArea = false,
  type,
  ref,
  rows,
  label,
  ...rest
}) => {
  const [_id] = useState(id || `basic-input-${Math.random()}`);

  return (
    <>
      <BaseInput {...rest} size={size}>
        {label && <Form.Label htmlFor={_id}>{label}</Form.Label>}
        <FormControl
          as={`${textArea ? "textarea" : "input"}`}
          rows={`${textArea ? rows : 0}`}
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby={_id}
          className={className}
          type={type}
          id={_id}
          ref={ref}
        />
      </BaseInput>
    </>
  );
};
