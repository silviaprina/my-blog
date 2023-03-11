import teachingConfig from '../../data/teaching.config.js';

export default function Teaching() {
  return (
    <div>
      {
        teachingConfig.courses.map((course) => {
          return (
            <div key={course.title} className="pt-4 pb-4">
              <div className="text-xl font-semibold">
                {course.title} <span className='font-light text-lg'>({course.additionalTitle})</span>
              </div>
              <div>
                {
                  course.additionalLinks.map(({ text, link },index, {length}) => (
                    <span className='font-light'>
                      <a href={link}>{text}</a> 
                      {
                        index!==length-1&& <span>{' | '}</span>
                      }
                    </span>
                  ))
                }
              </div>
              <div>
                {
                  course.paragraphs.map((paragraph) => (
                    <div className='font-light pl-8 pt-4 text-justify'>
                      {paragraph}
                    </div>
                  )
                  )
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
