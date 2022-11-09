import React from 'react';
import ContentLoader from 'react-content-loader/native';
import {Rect} from 'react-native-svg';

const FILL_COLOR = 'gray';
const GLOW_COLOR = 'white';
const SPEED = 1.5;
const SVG_WIDTH = '100%';
const SVG_HEIGHT = 500;
const RADIUS = 3;
const ROWS = [
  ['30%', '30%'],
  ['25%', '35%'],
  ['31%', '25%'],
  ['30%', '30%'],
  ['20%', '25%'],
];
const CELL_Y = 116;
const COLUMN_NAME_HEIGHT = 14;
const ROW_HEIGHT = 83;
const VALUE_HEIGHT = 15;
const OFFSET_BETWEEN_VALUES = 8;
const CELL_BORDER_Y = 170;

export const SignatureSkeleton: React.FC = () => {
  const renderSearch = () => (
    <Rect width="100%" height="40" x="0" y="0" rx={RADIUS} ry={RADIUS} />
  );
  const renderColumnsName = () => (
    <>
      <Rect
        width="15%"
        height={COLUMN_NAME_HEIGHT}
        x="0"
        y="72"
        rx={RADIUS}
        ry={RADIUS}
      />
      <Rect
        width="15%"
        height={COLUMN_NAME_HEIGHT}
        x="30%"
        y="72"
        rx={RADIUS}
        ry={RADIUS}
      />
    </>
  );
  const renderFullName = (width: string, i: number) => (
    <Rect
      width={width}
      height={VALUE_HEIGHT}
      x="0"
      y={CELL_Y + ROW_HEIGHT * i}
      rx={RADIUS}
      ry={RADIUS}
    />
  );
  const renderEmail = (width: string, i: number) => (
    <Rect
      width={width}
      height={VALUE_HEIGHT}
      x="0"
      y={CELL_Y + VALUE_HEIGHT + OFFSET_BETWEEN_VALUES + ROW_HEIGHT * i}
      rx={RADIUS}
      ry={RADIUS}
    />
  );
  const renderKebab = (i: number) => (
    <Rect
      width="15"
      height="25"
      x="94%"
      y={CELL_Y + ROW_HEIGHT * i}
      rx={RADIUS}
      ry={RADIUS}
    />
  );
  const renderRowBorder = (i: number) => (
    <Rect
      width="100%"
      height="1"
      x="0"
      y={CELL_BORDER_Y + ROW_HEIGHT * i}
      rx={RADIUS}
      ry={RADIUS}
    />
  );

  return (
    <ContentLoader
      uniqueKey="contacts-skeleton"
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
      speed={SPEED}
      backgroundColor={FILL_COLOR}
      foregroundColor={GLOW_COLOR}>
      {renderSearch()}
      {renderColumnsName()}
      {ROWS.map(([fullNameWidth, emailWidth], i) => (
        <React.Fragment key={i}>
          {renderFullName(fullNameWidth, i)}
          {renderEmail(emailWidth, i)}
          {renderKebab(i)}
          {renderRowBorder(i)}
        </React.Fragment>
      ))}
    </ContentLoader>
  );
};
