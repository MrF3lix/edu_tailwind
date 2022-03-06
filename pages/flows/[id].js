import { useState } from 'react';
import ReactFlow, { removeElements, addEdge, MiniMap, Controls, Background, } from 'react-flow-renderer/nocss';
import { CustomGraphNode } from '../../components/graph/custom-graph-node';
import { FilterNode } from '../../components/graph/filter-node';
import { HttpInputNode } from '../../components/graph/http-input-node';
import { HttpOutputNode } from '../../components/graph/http-output-node';
import { PageHeader } from "../../components/page-header"

const nodeTypes = {
    input: CustomGraphNode,
    custom: CustomGraphNode,
    output: CustomGraphNode,
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
            <PageHeader name={flow.name} />
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


const demoElements = [
    {
        id: '1',
        type: 'input',
        data: {
            title: 'HTTP Trigger',
            text: 'Select an input source',
            outputs: [
                { id: 'a' },
                { id: 'b' }
            ]
        },
        position: { x: 0, y: 0 },
    },
    {
        id: '2',
        type: 'custom',
        data: {
            title: 'HTTP Out',
            text: 'A node without any output.'
        },
        position: { x: 300, y: -100 },
    },
    {
        id: '3',
        type: 'custom',
        data: {
            title: 'Filter',
            text: 'Pass through node',
            outputs: [
                { id: 'a' },
                { id: 'b' }
            ]
        },
        position: { x: 300, y: 100 }
    },
    {
        id: '4',
        type: 'output',
        position: { x: 600, y: 0 },
        data: {
            title: 'HTTP Out',
            text: 'test'
        },
    },
    {
        id: 'e1-2',
        source: '1',
        sourceHandle: 'a',
        target: '2',
        animated: true,
        type: 'default'
    },
    {
        id: 'e1-3',
        source: '1',
        sourceHandle: 'b',
        target: '3',
        animated: true,
        type: 'default'
    },
    {
        id: 'e3-4',
        source: '3',
        target: '4',
        animated: true,
        type: 'default'
    },
]