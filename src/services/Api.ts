import axios from "axios";
import { ApiResponse } from "../App/App";

export const fetchData = async (
  query: string,
  page: number,
  signal: AbortSignal
): Promise<ApiResponse> => {
  const Key = "fYoFt843xSWkyQgaYsm8BsAihsxk64tMrb29TK4Nr64";
  const response = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos/?client_id=${Key}&per_page=10&query=${query}&page=${page}`,
    { signal }
  );
  return response.data;
};
