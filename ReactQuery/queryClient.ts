import { QueryClient } from '@tanstack/react-query';


// 전체적으로 query의 option을 설정 할수있고 이후 다른 쿼리에서 옵션 오버로딩을 통해서 옵션을 재설정이 가능하다.
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        },
    },
})
