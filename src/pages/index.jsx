import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import Pubication from "@/components/Publication";

import portfolioHeadshot from '../images/headshots/Silvia-Prina-6.jpg';
import researchConfig from '../data/research.config.js';

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
        researchConfig.introductionParagraphs.map((paragraph, index)=>
          <ReactMarkdown key={index} className="text-justify py-2 font-light" children={paragraph} />
        )
      }
      {
        <Pubication publicationListTree={researchConfig.publications}/>
      }
    </div>
  )
}
