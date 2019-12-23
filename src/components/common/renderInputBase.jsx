import React from 'react';
import { InputBase } from '@material-ui/core';

export const renderInputBase = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <InputBase
        placeholder={label}
        error={touched && invalid}
        //helperText={touched && error}
        {...input}
        {...custom}
    />
)