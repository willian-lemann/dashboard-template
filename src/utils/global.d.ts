type ApiResponse<T = any> = {
  result?: T;
  error: { message: string } | null;
  success: boolean;
};
