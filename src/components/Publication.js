import ReactMarkdown from 'react-markdown';

const Pubication = ({ publicationListTree, treeDepth = 1 }) => {
    return (
        <div className={`py-2 px-${2 * treeDepth} pr-0`}>
            {
                publicationListTree.map(({ heading, children, contents }, parentIndex) => {
                    return (
                        <div key={`tree-${parentIndex}`}>
                            <div className={`${treeDepth === 1 ? "font-bold text-2xl pt-6" : "font-semi-bold text-xl pt-4"}`}>
                                {heading}
                            </div>
                            <hr />
                            {children && <Pubication publicationListTree={children} treeDepth={treeDepth + 1} />}
                            <ul>
                                {
                                    contents?.map((content, contentIndex) => {
                                        return (
                                            <li key={`content-${parentIndex}-${contentIndex}`} className="text-grey">
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