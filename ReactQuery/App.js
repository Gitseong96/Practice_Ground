import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './queryClient';




const App = () => {

    return (<QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
    </QueryClientProvider>)
}