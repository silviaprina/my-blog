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
        homeConfig.introductionParagraphs.map((paragraph, index) =>
          <ReactMarkdown key={index} className="text-justify py-2 font-light" children={paragraph} />
        )
      }
      <div className="pt-2">

        <h1 className="pt-2 font-bold text-xl">
          Contact
        </h1>
        <div className="pt-2">
          {
            homeConfig.contact.map((contactInfo, index) => <ReactMarkdown key={index} className="text-justify font-light" children={contactInfo} />
            )
          }
        </div>

      </div>

      {/* // Name
        // EMail
        // Phone number
        // {Designation} at Northeastern University */}
    </div>
  )
}
