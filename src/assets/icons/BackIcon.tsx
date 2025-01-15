import React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image } from 'react-native-svg';
import { IconBase } from '../../components/Icon/Icon';

export function BackIcon({ size = 32, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Rect width={size} height={size} fill="url(#pattern0_1030_2)" />
      <Defs>
        <Pattern
          id="pattern0_1030_2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use xlinkHref="#image0_1030_2" transform="scale(0.0078125)" />
        </Pattern>
        <Image
          id="image0_1030_2"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+UlEQVR4nO3cUUobYRiF4Y9uwksX0S5GZNKSSbELyAziVbqPdm/dgLiFSmMphEYxybR/nPM88N3P8B5EE7AKAAAAAN6yq9XdRetnoJHFcvy6WA4Pi3780PpZ+M+28fvx5/aMIMtOfCPIsje+EWR4Mb4RzNur4hvBPB0U3wjm5aj4RjAPJ8X/fV0/3F/368vW78KBpoj/dMO3zWbzrvX7cADxg4kfTPxg4gcTP5j4wcQPJn4w8YOJH0z8YOIHEz+Y+MHEDyZ+MPGDiR9M/GDiBxM/mPjBxA8mfjDxg4kfTPxg4gcTP5j4wcQPJn4w8YOJH0z8YOIHEz/YVPG7fvjxcTV86ZbjjTu/+6fx3fmf+OEnfviJH37ih5/44VddP962fgjXcAC/GEHu/fkl0Agyb+fPQCPIu78+CDKCrNv7UbAR5NzeAUz52YAvg877nh3AxD8Jvvs6+I0yAowAI6CMgDICyggoI6CMgDICyggoI6CMgDICyggoI6CMgDICyggoI6CMgDICyggoI6CMgDICyggoI6CMgDICyggoI6CMgDICyggoI6CMgDICapp/Ydf1w/11v75s/S4c6aSfBMvh4dPn9fvW78CJjhqB+PNy0AjEn6dXjUD8eXtxBOJn2DsC8bPsjED8TNsRiJ/tanV30foZAAAAAOBsPAKMv7dpmVyPHgAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}
