import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  query: z.string().transform((value) => value.toLowerCase()),
});

export type SearchSchema = z.infer<typeof searchSchema>;

export function useSearchForm() {
  const context = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    mode: "all",
  });

  return context;
}
