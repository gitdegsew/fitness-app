import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart,isBodyPart }) => (
  <div className='w-[90%] overflow-hidden my-8 '>
    <ScrollMenu  LeftArrow={LeftArrow}   RightArrow={RightArrow} className="">
    {data.map((item) => (
     
         isBodyPart? <BodyPart key={item.id || item} item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />:<ExerciseCard exercise={item}/>
      
    ))}
  </ScrollMenu>
  </div>
);

export default HorizontalScrollbar;