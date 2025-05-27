import Image from "next/image";
import ReactMarkdown from 'react-markdown';

import portfolioHeadshot from '../images/headshots/Silvia-Prina-6.jpg';
import homeConfig from '../data/home.config';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          className="md:w-0 my-4 md:my-0"
          src={portfolioHeadshot}
          width={150}
          height={150}
          alt="Portfolio Headshot"
        />
      </div>
      {
        homeConfig.introductionParagraphs.map((paragraph, index) => {/* eslint-disable-next-line */
          return <ReactMarkdown key={index} className="text-justify py-2 font-light">{paragraph}</ReactMarkdown>
        }
        )
      }
      <div className="py-2">
        <i className="fa fa-file-text pr-2 text-green-icon"></i>
        <a href="files/Silvia_Prina_CV.pdf">Curriculum Vitae</a>

      
      </div>

      <div className="pt-2">
        <div className="pt-2">
          {
            homeConfig.contact.map((contactInfo, index) => { /* eslint-disable-next-line */
              return <ReactMarkdown key={index} className="text-justify font-light" children={contactInfo} />
            }
            )
          }
        </div>

      </div>
    </div>
  )
}
