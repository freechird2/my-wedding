import { getWedding } from '@api/wedding'
import { Wedding } from '@models/wedding'
import { useSuspenseQuery } from '@tanstack/react-query'

const useWedding = () => {
  const { data, isLoading, error } = useSuspenseQuery<Wedding>({
    queryKey: ['wedding'],
    queryFn: () =>
      getWedding().then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch wedding data')
        }

        return res.json()
      }),
  })

  return { wedding: data, isLoading, error }
}

export default useWedding
