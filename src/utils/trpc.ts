// TRPC stands for typescript remote procedure call

import type { AppRouter } from '@/backend/router'
import { createReactQueryHooks } from '@trpc/react'

export const trpc = createReactQueryHooks<AppRouter>()
// => { useQuery: ..., useMutation: ...}
