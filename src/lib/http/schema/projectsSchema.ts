import { z } from 'zod'

export const projectSchema = z.object({
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
  category: z.string().array(),
  productDetail: z.string().optional(),
  productUrl: z.string().optional(),
})

export const projectsSchema = z.array(projectSchema)

export const fetchProjectsSchema = z.object({
  contents: projectsSchema,
  limit: z.number(),
  offset: z.number(),
  totalCount: z.number(),
})
