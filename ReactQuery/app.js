


// 1 , 2 , 3  
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient()

function App() {
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