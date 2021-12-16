import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Dimensions} from 'react-native';

const GallerySvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : 'white';
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`<svg xmlns="http://www.w3.org/2000/svg" width="30.621" height="30.621" viewBox="0 0 30.621 30.621">
      <g id="Group_8472" data-name="Group 8472" transform="translate(-33.373 -741)">
        <g id="Icon_feather-image" data-name="Icon feather-image" transform="translate(30.373 738)">
          <path id="Path_3568" data-name="Path 3568" d="M7.5,4.5h21a3,3,0,0,1,3,3v21a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3V7.5a3,3,0,0,1,3-3Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_3570" data-name="Path 3570" d="M31.5,22.5,24,15,7.5,31.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <circle id="Ellipse_85" data-name="Ellipse 85" cx="2.5" cy="2.5" r="2.5" transform="translate(8.627 9)" fill="#fff"/>
        </g>
      </g>
    </svg> `}
    />
  );
};

export default GallerySvg;
