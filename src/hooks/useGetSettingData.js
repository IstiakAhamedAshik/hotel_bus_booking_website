"use client";
import { mainURL } from "@/api/client";
import { useQuery } from "@tanstack/react-query";

const useGetSettingData = () => {
  return useQuery({
    queryKey: [`/api/v1/setting`],
    queryFn: async () => {
      const res = await fetch(`${mainURL}/setting`);
      const data = await res.json();
      return data;
    },
  });
};

export default useGetSettingData;
