import { ArrowRightIcon } from "@heroicons/react/outline"
import { CheckCircleIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { ListItem } from "./list-item"

export const DataFlowListItem = ({ id, name, lastEdited, status }) => (
    <ListItem>
        <div>
            <div className="font-semibold dark:text-gray-100">{name}</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">Last Edited: {lastEdited}</div>
        </div>
        <div className="flex items-center">
            <CheckCircleIcon className="text-emerald-400 h-4 w-4" />
            <div className="m-1 dark:text-gray-100">{status}</div>
        </div>
        <Link href={`/flow/${id}`}>
            <a className="dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <ArrowRightIcon className="block h-5 w-5" />
            </a>
        </Link>
    </ListItem>
)