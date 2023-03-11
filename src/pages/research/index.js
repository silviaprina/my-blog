
import Pubication from "@/components/Publication";
import researchConfig from '../../data/research.config.js';

export default function Research() {
    return (
      <div>
      {
        <Pubication publicationListTree={researchConfig.publications}/>
      }
      </div>
    )
  }
  