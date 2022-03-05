import { DataFlowListItem } from "../components/data-flow-list-item"
import { List } from "../components/list"
import { PageHeader } from "../components/page-header"

const flows = [
    {
        id: 1,
        name: 'Tweet new GitHub Issues',
        status: 'Active',
        lastEdited: '05.03.2022 11:18.32'
    },
    {
        id: 2,
        name: 'Contact Form ',
        status: 'Active',
        lastEdited: '05.03.2022 12:23.55'
    }
]

export const Dashboard = () => {
    return (
        <>
            <PageHeader name="Dashboard" />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <List>
                            {flows.map((flow, i) => <DataFlowListItem {...flow} key={i} />)}
                        </List>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard