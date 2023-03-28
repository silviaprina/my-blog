import ReactMarkdown from 'react-markdown';

const Pubication = ({ publicationListTree, treeDepth = 0 }) => {
    return (
        <div className={`pb-2 pl-${(2 * treeDepth)}`}>
            {
                publicationListTree.map(({ heading, children: nestedPublication, contents }, parentIndex) => {
                    return (
                        <div key={`tree-${parentIndex}`} className={`pl-${(2 * treeDepth)}`}>
                            <div className={`font-semi-bold text-xl ${treeDepth === 0 ? "pt-6" : "pt-4"}`}>
                                {heading}
                            </div>
                            {nestedPublication && <Pubication publicationListTree={nestedPublication} treeDepth={treeDepth + 1} />}
                            <ul className='pl-8'>
                                {
                                    contents?.map(({ title, author, journal }, contentIndex) => {
                                        return (
                                            <div className='py-2' key={contentIndex}>
                                                {/* eslint-disable-next-line */}
                                                <ReactMarkdown className="text-justify font-light" children={title} />
                                                <div className='font-semi-bold'>{author}</div>
                                                {/* eslint-disable-next-line */}
                                                <ReactMarkdown className="text-justify font-light" children={journal} />
                                            </div>
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