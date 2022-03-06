import { Node } from './node'

const httpMethods = [
    { value: "get", name: "GET" },
    { value: "post", name: "POST" },
    { value: "put", name: "PUT" },
    { value: "patch", name: "PATCH" },
    { value: "delete", name: "DELETE" },
]

export const HttpOutputNode = ({ data, type }) => {
    return (
        <Node data={data} type={type}>
            <div className="p-2 flex flex-col gap-3">
                <label className="text-left">
                    <span className="text-gray-600 text-xs">Endpoint</span>
                    <input
                        className="p-2 border border-gray-200 w-full bg-gray-50 text-sm"
                        value={data.output.url}
                        disabled={true}
                    />
                </label>
                <label className="text-left">
                    <span className="text-gray-600 text-xs">HTTP Method</span>
                    <select className="p-2 border border-gray-200 w-full bg-gray-50 text-sm">
                        <option>Select Method</option>
                        {httpMethods.map((method, i) => (
                            <option
                                key={i}
                                value={method.value}
                                selected={method.value === data.output.method}
                            >
                                {method.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="text-left">
                    <span className="text-gray-600 text-xs">Content Type</span>
                    <input
                        className="p-2 border border-gray-200 w-full bg-gray-50 text-sm"
                        value={data.output.contentType}
                    />
                </label>
                <label className="text-left">
                    <span className="text-gray-600 text-xs">Request Header</span>
                    <textarea className="p-2 border border-gray-200 w-full bg-gray-50 font-mono text-sm" placeholder="Request Header">
                        {data.output.header}
                    </textarea>
                </label>
                <label className="text-left">
                    <span className="text-gray-600 text-xs">Request Body</span>
                    <textarea className="p-2 border border-gray-200 w-full bg-gray-50 font-mono text-sm" placeholder="Request Body">
                        {data.output.body}
                    </textarea>
                </label>
            </div>
        </Node>
    )
}

