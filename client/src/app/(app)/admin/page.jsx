// import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Dashboard | Mattress Home',
}

const Dashboard = () => {
    return (
        <>
            {/* <Header title="Dashboard" /> */}
            <div className="pt-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 text-center">
                            You are logged in!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
