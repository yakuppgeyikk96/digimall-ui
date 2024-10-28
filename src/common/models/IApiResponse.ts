export interface IApiResponse<T> {
  message: string;
  data: T | null;
  status: number;
  pagination?: {
    total: number;
    page: number;
    pageSize: number;
  };
}
