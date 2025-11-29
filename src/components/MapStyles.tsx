import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const MapStyles = ({
  changeMapStyle,
}: {
  changeMapStyle: (value: string) => void;
}) => {
  return (
    <RadioGroup defaultValue="standard" onValueChange={changeMapStyle}>
      <div>
        <RadioGroupItem value="custom" id="custom">
          Standard
        </RadioGroupItem>
        <label htmlFor="custom">Custom</label>
      </div>
      <div>
        <RadioGroupItem value="standard" id="standard">
          Standard
        </RadioGroupItem>
        <label htmlFor="standard">Standard</label>
      </div>
      <div>
        <RadioGroupItem value="streets" id="streets">
          Streets
        </RadioGroupItem>
        <label htmlFor="streets">Streets</label>
      </div>
      <div>
        <RadioGroupItem value="outdoors" id="outdoors">
          Outdoors
        </RadioGroupItem>
        <label htmlFor="outdoors">Outdoors</label>
      </div>
      <div>
        <RadioGroupItem value="light" id="light">
          Light
        </RadioGroupItem>
        <label htmlFor="light">Light</label>
      </div>
      <div>
        <RadioGroupItem value="dark" id="dark">
          Dark
        </RadioGroupItem>
        <label htmlFor="dark">Dark</label>
      </div>
      <div>
        <RadioGroupItem value="satellite" id="satellite">
          Satellite
        </RadioGroupItem>
        <label htmlFor="satellite">Satellite</label>
      </div>
    </RadioGroup>
  );
};

export default MapStyles;
