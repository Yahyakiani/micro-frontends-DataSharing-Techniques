import React from 'react';
import { getCurrentDate } from 'shared-stuff';


export const Time = () => {
  let s= getCurrentDate();
      return (
      <>Current Date:{s}</>
      );
}
