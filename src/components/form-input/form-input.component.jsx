import React from 'react';

// Stylesheet
// import './form-input.styles.scss';
// styled component
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer
      onChange={handleChange}
      {...props}
    />
    {label ? (
      <FormInputLabel >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer >
)
export default FormInput;