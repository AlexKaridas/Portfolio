export type post = {
  id: number;
  title: string;
  content: string;
  summary: string;
  image: string;
};

export interface FetchError {
  message: string;
  code?: string;
}
