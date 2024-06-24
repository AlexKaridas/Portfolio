export type post = {
  id: number;
  title: string;
  content: string;
  summary: string;
  image: string | null;
  created_at: string;
};

export interface FetchError {
  message: string;
  code?: string;
}
