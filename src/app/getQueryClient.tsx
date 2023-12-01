import { QueryClient } from '@tanstack/react-query'
import React, { cache } from 'react'

const GetQueryClient = cache(() => new QueryClient())

export default GetQueryClient
