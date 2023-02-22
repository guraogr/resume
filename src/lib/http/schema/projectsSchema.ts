import { z } from 'zod'

export const ProjectSchema = z.object({
  thumb: z.string(),
  thumbAlt: z.string(),
  productName: z.string(),
  taskType: z.string(),
  title: z.string(),
  desc: z.string(),
  role: z.string(),
  projectTime: z.string(),
  member: z.string(),
  contents: z.string(),
  id: z.string(),
})

export const ProjectsSchema = z.array(ProjectSchema)

export const fetchProjectsSchema = z.object({
  contents: ProjectsSchema,
  limit: z.number(),
  offset: z.number(),
  totalCount: z.number(),
})
