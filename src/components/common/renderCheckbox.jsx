import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

export const renderCheckbox = ({ input, label }) => (
    <FormControlLabel
        control={
            <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
            />
        }
        label={label}
        />

)