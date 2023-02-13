export interface GetListRequestQuery<T> {
  contents: T
  limit: number
  offset: number
  totalCount: number
}
