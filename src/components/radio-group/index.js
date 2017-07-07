import React, {PropTypes} from 'react';

import {RadioGroup as RadioGroupComponent, Radio} from 'react-radio-group';

const RadioGroup = (props) => {
  const {
    input: {
      value,
      onChange
    },

    options,
    radioClassName,
    ...rest
  } = props;

  return (
    <RadioGroupComponent selectedValue={value} onChange={onChange} {...rest}>
      {options.map((item, i) => {
        const id = item.key;
        return (
          <div key={i} className={radioClassName}>
            <div className="ui radio checkbox">
              <Radio value={item.value} id={id} className="hidden"/>
              <label htmlFor={id}>{item.text}</label>
            </div>
          </div>
        );
      })}
    </RadioGroupComponent>
  );
}

RadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,

  options: PropTypes.array.isRequired,
  radioClassName: PropTypes.string
}

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
