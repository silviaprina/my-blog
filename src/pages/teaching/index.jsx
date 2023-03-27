import Course from '@/components/Course.jsx';
import teachingConfig from '../../data/teaching.config.js';

export default function Teaching() {
  return (
    <div>
      {
        teachingConfig.courses.map((course) => {
          return (
            <Course course={course} key={course.title}></Course>
          )
        })
      }
    </div>
  )
}
