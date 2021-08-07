import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Saturation } from './Saturation/Saturation';
import { ColorInput } from './ColorInput';

function SaturationWrapper() {
  const [value, onChange] = useState({ h: 90, v: 50, s: 50, a: 1 });
  return <Saturation value={value} onChange={onChange} />;
}

storiesOf('@mantine/core/ColorInput', module)
  .add('Saturation', () => (
    <div style={{ padding: 40 }}>
      <SaturationWrapper />
    </div>
  ))
  .add('Input', () => (
    <div style={{ padding: 40 }}>
      <ColorInput />
    </div>
  ));
