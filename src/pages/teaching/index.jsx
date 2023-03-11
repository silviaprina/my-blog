import teachingConfig from '../../data/teaching.config.js';

export default function Teaching() {
  return (
    <div>
      {
        teachingConfig.courses.map((course, index) => {
          return (
            <div key={`Course-${index}`} className="pt-4 pb-4">
              <div className="text-xl font-semibold">
                {course.title} <span className='font-light text-lg'>({course.additionalTitle})</span>
              </div>
              <div>
                {
                  course.additionalLinks.map(({ text, link },index, {length}) => (
                    <span className='font-light' key={`Link-${index}`}>
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
                  course.paragraphs.map((paragraph, pIndex) => (
                    <div className='font-light pl-8 pt-4 text-justify' key={`intro-para-${pIndex}`}>
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
