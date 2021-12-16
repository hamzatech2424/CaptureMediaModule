import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Dimensions} from 'react-native';

const InvertCameraSvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : 'white';
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg xmlns="http://www.w3.org/2000/svg" width="35.709" height="29.5" viewBox="0 0 35.709 29.5">
  <g id="rotate-camera" transform="translate(0 -42.656)">
    <g id="Group_8463" data-name="Group 8463" transform="translate(13.973 64.394)">
      <g id="Group_8462" data-name="Group 8462">
        <path id="Path_3571" data-name="Path 3571" d="M196.426,344.67l-3.105-3.105a.776.776,0,0,0-1.1,1.1l2.556,2.556-2.557,2.557a.777.777,0,0,0,1.1,1.1l3.105-3.105A.777.777,0,0,0,196.426,344.67Z" transform="translate(-191.994 -341.338)" fill="#fff"/>
      </g>
    </g>
    <g id="Group_8465" data-name="Group 8465" transform="translate(21.768 57.034)">
      <g id="Group_8464" data-name="Group 8464">
        <path id="Path_3572" data-name="Path 3572" d="M307.888,240.263a.775.775,0,1,0-.557,1.447c2.644,1.02,4.161,2.307,4.161,3.529,0,1.935-4.1,4.414-11.694,5.2a.776.776,0,0,0,.079,1.548c.026,0,.054,0,.079,0,7.949-.824,13.087-3.472,13.087-6.746C313.042,243.285,311.26,241.564,307.888,240.263Z" transform="translate(-299.102 -240.209)" fill="#fff"/>
      </g>
    </g>
    <g id="Group_8467" data-name="Group 8467" transform="translate(0 57.034)">
      <g id="Group_8466" data-name="Group 8466" transform="translate(0)">
        <path id="Path_3573" data-name="Path 3573" d="M17.855,250.678c-9.606,0-16.3-2.865-16.3-5.434,0-1.222,1.517-2.509,4.159-3.531a.775.775,0,1,0-.557-1.447C1.782,241.567,0,243.289,0,245.243c0,4.538,9.2,6.987,17.855,6.987a.776.776,0,0,0,0-1.553Z" transform="translate(0 -240.214)" fill="#fff"/>
      </g>
    </g>
    <g id="Group_8469" data-name="Group 8469" transform="translate(12.421 48.866)">
      <g id="Group_8468" data-name="Group 8468" transform="translate(0 0)">
        <path id="Path_3574" data-name="Path 3574" d="M176.1,127.989a5.434,5.434,0,1,0,5.434,5.434A5.44,5.44,0,0,0,176.1,127.989Zm0,9.316a3.882,3.882,0,1,1,3.882-3.882A3.886,3.886,0,0,1,176.1,137.3Z" transform="translate(-170.666 -127.989)" fill="#fff"/>
      </g>
    </g>
    <g id="Group_8471" data-name="Group 8471" transform="translate(4.658 42.656)">
      <g id="Group_8470" data-name="Group 8470">
        <path id="Path_3575" data-name="Path 3575" d="M86.513,45.761H81.558l-.908-1.817a2.315,2.315,0,0,0-2.084-1.289H75.828a2.316,2.316,0,0,0-2.084,1.287l-.908,1.818H67.882A3.886,3.886,0,0,0,64,49.643v9.316a3.886,3.886,0,0,0,3.882,3.882H86.513a3.886,3.886,0,0,0,3.882-3.882V49.643A3.886,3.886,0,0,0,86.513,45.761Zm2.329,13.2a2.332,2.332,0,0,1-2.329,2.329H67.882a2.332,2.332,0,0,1-2.329-2.329V49.643a2.332,2.332,0,0,1,2.329-2.329h5.434a.778.778,0,0,0,.694-.429l1.124-2.248a.768.768,0,0,1,.694-.429h2.739a.767.767,0,0,1,.694.43l1.124,2.247a.778.778,0,0,0,.694.429h5.434a2.332,2.332,0,0,1,2.329,2.329Z" transform="translate(-64 -42.656)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>
 `}
    />
  );
};

export default InvertCameraSvg;
