import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Dimensions} from 'react-native';

const PlaySvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : 'white';
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`<svg xmlns="http://www.w3.org/2000/svg" width="18.207" height="23.214" viewBox="0 0 18.207 23.214">
      <path id="Icon_ionic-md-play" data-name="Icon ionic-md-play" d="M6.75,3.656V26.87L24.957,15.263Z" transform="translate(-6.75 -3.656)" fill="#ff9a9a"/>
    </svg>
    `}
    />
  );
};

export default PlaySvg;
