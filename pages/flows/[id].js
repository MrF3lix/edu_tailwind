import { useState } from 'react';
import ReactFlow, { removeElements, addEdge, MiniMap, Controls, Background, } from 'react-flow-renderer/nocss';
import { FilterNode } from '../../components/graph/filter-node';
import { HttpInputNode } from '../../components/graph/http-input-node';
import { HttpOutputNode } from '../../components/graph/http-output-node';
import { PageTitle } from "../../components/page-title"

const nodeTypes = {
    httpIn: HttpInputNode,
    httpOut: HttpOutputNode,
    filter: FilterNode,
};

const onLoad = (reactFlowInstance) => {
    console.log('flow loaded:', reactFlowInstance);
    reactFlowInstance.fitView({ padding: 1 });
};

const DataFlowOverview = ({ flow }) => {
    const [elements, setElements] = useState(flow.flowElements);
    const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge({ ...params, animated: true }, els));
    return (
        <>
            <PageTitle name={flow.name} />
            <main>
                <ReactFlow
                    elements={elements}
                    onElementsRemove={onElementsRemove}
                    onConnect={onConnect}
                    onLoad={onLoad}
                    snapToGrid={true}
                    snapGrid={[15, 15]}
                    nodeTypes={nodeTypes}
                >
                    <MiniMap />
                    <Controls />
                    <Background color="#6b7280" size={.7} gap={16} />
                </ReactFlow>
            </main>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/flows/${context.query.id}`)
    const flow = await res.json()

    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );

    return { props: { flow } }
}


export default DataFlowOverview
