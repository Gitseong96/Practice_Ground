import { useEffect, useState } from "react"
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const usePageNation = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const queryClient = useQueryClient()

    useEffect(() => {
        const nextPage = currentPage + 1;
        queryClient.prefetchQuery([querykey], () => quertFn(nextPage))
    }, [queryClient, currentPage])

    const { data, status } = useQuery([queryKey], () => quertFn)
    return { data, status, currentPage, setCurrentPage }
}