import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        },
    },
})
const queryKeys = {
    id: "id",
    name: "name",
    person: 'person'

}
const fetching = async () => {
    const response = await fetch('url')
    return response
}
function App() {


    const { data, status, error, failureReason, remove } = useQuery([queryKeys.id], fetching)

    if (status === "isloading") return <div>Loading....</div>
    if (status === "error") return <div>{error.toString()}</div>
    return (
        <QueryClientProvider client={queryClient}>
            ...
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}


import { useQuery, useMouation } from "@tanstack/react-query"



useQuery({ queryKey: ['todos', 1, { data, page }], })
useQuery({ queryKey: ['todos', 1, { page, data }], })
useQuery({ queryKey: ['todos', 1, { page, data, other: undefined }], })

// 쿼리 키의 배열의 순서가 동일해야 같은 키 값으로 사용이 가능
useQuery({ queryKey: ['todos', data, page], })
useQuery({ queryKey: ['todos', page, data], })
useQuery({ queryKey: ['todos', undefined, page, data], })