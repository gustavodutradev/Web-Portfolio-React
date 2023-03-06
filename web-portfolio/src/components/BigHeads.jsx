import React from 'react';
import { BigHead } from '@bigheads/core';

function BigHeads() {
  return (
    <div>
      <BigHead
        accessory="roundGlasses"
        body="chest"
        circleColor="blue"
        clothing="shirt"
        clothingColor="black"
        eyebrows="raised"
        eyes="happy"
        faceMask={ false }
        faceMaskColor="red"
        facialHair="stubble"
        graphic="react"
        hair="short"
        hairColor="black"
        hat="none2"
        hatColor="blue"
        lashes
        lipColor="red"
        mask
        mouth="grin"
        skinTone="light"
        style={ {
          width: '5rem',
          height: '5rem',
        } }
      />
    </div>
  );
}

export default BigHeads;
