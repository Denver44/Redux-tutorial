export interface AppState {
  loading: boolean;
  error: Error | string | null;
  data: string[];
}
