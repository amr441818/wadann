'use client';
import { DualRangeSlider } from '@/components/rangeSlider';
import React, { useState } from 'react';
type rangProps ={
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>

}

const RangeSlider = (props:rangProps) => {
  

  return (
    <div className="w-full ">
      <DualRangeSlider
        label={(value) => value}
        value={props.values}
        onValueChange={props.setValues}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
};

export default RangeSlider;
