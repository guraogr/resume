import { type z } from 'zod'

import {
  type projectsSchema,
  type projectSchema,
} from '@/lib/http/schema/projectsSchema'

export type Project = z.infer<typeof projectSchema>

export type Projects = z.infer<typeof projectsSchema>
