import { useCallback, useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { fetching } from "./API"
import { queryKeys } from "./queryKeys"


export const usefetchData = () => {
    // const seletFn = useCallback((selet)=>)

    const { data, status } = useQuery([queryKeys.name], fetching,
        {
            // 특정 훅에 옵션을 지정이 가능하다.
            staleTime: 5000,
            cacheTime: 150000,
        }
    )

    return { data, status }
}

// 프리페칭 함수를 통해서 캐시값을 미리 가져오는 함수
export const usePrefetchData = (): void => {
    const queryClinet = useQueryClient(); //useQueryClinet를 통해서 캐시값 저장
    queryClinet.prefetchQuery([queryKeys.name], fetching)
}







// useQuery({ queryKey: ['todos', 1, { data, page }], })
// useQuery({ queryKey: ['todos', 1, { page, data }], })
// useQuery({ queryKey: ['todos', 1, { page, data, other: undefined }], })

// // 쿼리 키의 배열의 순서가 동일해야 같은 키 값으로 사용이 가능
// useQuery({ queryKey: ['todos', data, page], })
// useQuery({ queryKey: ['todos', page, data], })
// useQuery({ queryKey: ['todos', undefined, page, data], })    








