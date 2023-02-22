import { type z } from 'zod'

import {
  type ProjectsSchema,
  type ProjectSchema,
} from '@/lib/http/schema/projectsSchema'

export type Project = z.infer<typeof ProjectSchema>

export type Projects = z.infer<typeof ProjectsSchema>
