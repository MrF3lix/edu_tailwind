import { Handle, Position } from 'react-flow-renderer/nocss'

export const CustomGraphNode = ({ data }) => {

    const calcOutputOffset = (i, length) => length === 1 ? 50 : 80 / length * i + 50 - (160 / length / 2)

    return (
        <div className="flex flex-col">
            <div className="p-2 text-gray-900 dark:text-gray-100 border-b border-gray-900 dark:border-gray-100 text-align-left">
                {data.title}
            </div>
            <div className="p-2">
                <Handle type="target" position={Position.Left} />
                <div className="text-gray-900 dark:text-gray-100">{data.text}</div>
                {data.outputs?.map((output, i) => (
                    <Handle
                        key={i}
                        type="source"
                        position={Position.Right}
                        id={output.id}
                        style={{ top: `${calcOutputOffset(i, data.outputs.length)}%` }}
                    />
                ))}
            </div>
        </div>
    )
}