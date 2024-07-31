import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

const getSupporters = async () => {
  const { data } = await api.get("qupn02bi");

  return data;
};

const useGetSupporters = () => {
  return useQuery({
    queryKey: ["supporters"],
    queryFn: getSupporters,
  });
};

export { useGetSupporters };
