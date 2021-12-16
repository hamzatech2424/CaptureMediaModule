import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Dimensions} from 'react-native';

const StopSvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : 'white';
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg xmlns="http://www.w3.org/2000/svg" width="18.371" height="18.371" viewBox="0 0 18.371 18.371">
  <path id="Icon_material-stop" data-name="Icon material-stop" d="M9,9H27.371V27.371H9Z" transform="translate(-9 -9)" fill="#ff9a9a"/>
</svg>
 `}
    />
  );
};

export default StopSvg;
