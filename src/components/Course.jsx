import { useState } from "react"

export default function Course({ course }) {
    const [isSeeMoreSelected, setIsSeeMoreSelected] = useState(false)
    const courseParagraphs = isSeeMoreSelected ? course.paragraphs : [course.paragraphs.length > 0 ? [course.paragraphs[0]] : []];

    const onButtonClick = () => {
        setIsSeeMoreSelected(!isSeeMoreSelected)
    }
    return (
        <div className="pt-4 pb-4">
            <div className="text-xl font-semibold">
                {course.title} <span className='font-light text-lg'>({course.additionalTitle})</span>
            </div>
            <div>
                {
                    course.additionalLinks?.map(({ text, link }, index, { length }) => (
                        <span className='font-light' key={`Link-${index}`}>
                            <a href={link}>{text}</a>
                            {
                                index !== length - 1 && <span>{' | '}</span>
                            }
                        </span>
                    ))
                }
            </div>
                <div>
                    {
                        courseParagraphs.map((paragraph, pIndex) => (
                            <div className='font-light pl-8 pt-4 text-justify' key={`intro-para-${pIndex}`}>
                                {paragraph}
                            </div>
                        )
                        )
                    }
                </div>
                <span>
                {
                    course.paragraphs?.length > 1 && <button className='text-blue-primary text-sm' onClick={onButtonClick}>
                        {`${isSeeMoreSelected ? 'See less' : 'See more'}`}
                    </button>
                }
                </span>
        </div>
    )
}

