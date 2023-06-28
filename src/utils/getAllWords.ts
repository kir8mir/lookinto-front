import { api } from "../utils/api";

export const getAllWords = async () => {
  const data = await api.get("/word");
  return await data.data;
};
