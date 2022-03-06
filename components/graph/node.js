import { Handle, Position } from 'react-flow-renderer/nocss'

const calcOutputOffset = (i, length) => length === 1 ? 50 : 80 / length * i + 10

export const Node = ({ data, type, hasInput = true, children }) => {
    return (
        <div className="flex">
            {hasInput &&
                <Handle type="target" position={Position.Left} />
            }
            <div className="flex flex-col flex-1 text-gray-900 dark:text-gray-100">
                <div className="p-2  border-b border-gray-200 dark:border-gray-100">
                    {data.title}
                </div>
                <div className="p-2">
                    {children}
                </div>
            </div>
            {data.outputs &&
                <div className="w-2 bg-yellow-400 ">
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
            }
        </div>
    )
}