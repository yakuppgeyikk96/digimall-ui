export interface IApiResponse<T> {
  message: string;
  data: T | null;
  status: number;
  formErrors?: {
    field: string;
    message: string;
  }[];
  pagination?: {
    total: number;
    page: number;
    pageSize: number;
  };
}
