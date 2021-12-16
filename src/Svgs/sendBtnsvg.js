import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Dimensions} from 'react-native';

const SendBtnSvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : 'white';
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.823" height="16.823" viewBox="0 0 16.823 16.823">
      <g id="Icon_feather-send" data-name="Icon feather-send" transform="translate(-2.25 -1.939)">
        <path id="Path_3678" data-name="Path 3678" d="M24.757,3,16.5,11.257" transform="translate(-6.744)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_3679" data-name="Path 3679" d="M18.013,3,12.758,18.013l-3-6.756L3,8.254Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      </g>
    </svg>
     `}
    />
  );
};

export default SendBtnSvg;
