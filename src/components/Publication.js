import ReactMarkdown from 'react-markdown';

const Pubication = ({ publicationListTree, treeDepth = 0 }) => {
    return (
        <div className={`pb-2 pl-${(2 * treeDepth)}`}>
            {
                publicationListTree.map(({ heading, children: nestedPublication, contents }, parentIndex) => {
                    return (
                        <div key={`tree-${parentIndex}`} className={`pl-${(2 * treeDepth)}`}>
                            <div className={`${treeDepth === 0 ? "font-bold text-2xl pt-6" : "font-semi-bold text-xl pt-4"}`}>
                                {heading}
                            </div>
                            {nestedPublication && <Pubication publicationListTree={nestedPublication} treeDepth={treeDepth + 1} />}
                            <ul className='pl-8'>
                                {
                                    contents?.map((content, contentIndex) => {
                                        return (
                                            <li key={`content-${parentIndex}-${contentIndex}`} className="text-grey">
                                                {/* eslint-disable-next-line */}
                                                <ReactMarkdown className="text-justify py-2 font-light" children={content} />
                                            </li>
                                        )
                                    })

                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pubication;