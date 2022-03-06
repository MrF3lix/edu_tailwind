import { Node } from './node'

const conditions = [
    { value: "eq", name: "Equals (==)" },
    { value: "ne", name: "Not equals (!=)" },
    { value: "g", name: "Greater (>)" },
    { value: "ge", name: "Greater or equal (>=)" },
    { value: "s", name: "Smaller (<)" },
    { value: "se", name: "Smaller or equal (<=)" },
    { value: "nn", name: "Not empty or null" },
    { value: "mr", name: "Match Regex" }
]

const fieldNames = [
    { value: "id", name: "Id" },
    { value: "title", name: "Title" },
    { value: "tags", name: "Tags" },
]

export const FilterNode = ({ data, type }) => {
    return (
        <Node data={data} type={type}>
            <div className="flex flex-col gap-3">
                <label className="text-left">
                    <span className="text-gray-600 text-xs">Field Name</span>
                    <select className="p-2 border border-gray-200 w-full bg-gray-50 text-sm">
                        <option>Select Field</option>
                        {fieldNames.map((field, i) => (
                            <option
                                key={i}
                                value={field.value}
                                selected={field.value === data.filter.field}
                            >
                                {field.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="text-left">
                    <span className="text-gray-600 text-xs">Condition</span>
                    <select className="p-2 border border-gray-200 w-full bg-gray-50 text-sm">
                        <option>Select Condition</option>
                        {conditions.map((condition, i) => (
                            <option
                                key={i}
                                value={condition.value}
                                selected={condition.value === data.filter.condition}
                            >
                                {condition.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="text-left">
                    <span className="text-gray-600 text-xs">Filter Value</span>
                    <input
                        className="p-2 border border-gray-200 w-full bg-gray-50 text-sm"
                        value={data.filter.value}
                    />
                </label>
            </div>
        </Node>
    )
}