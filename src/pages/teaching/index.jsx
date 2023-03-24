import Course from '@/components/Course.jsx';
import { useState } from 'react';
import teachingConfig from '../../data/teaching.config.js';

export default function Teaching() {

  const [selectedSeeMoreIndex, setSelectedSeeMoreIndex] = useState(-1);

  const onSeeMoreClick = (index) => {
    if (selectedSeeMoreIndex !== index)
      setSelectedSeeMoreIndex(index);
    else
      setSelectedSeeMoreIndex(-1)
  }
  return (
    <div>
      {
        teachingConfig.courses.map((course, index) => {
          return (
            <Course course={course}></Course>
          )
        })
      }
    </div>
  )
}
