import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

const profileFormSchema = z.object({
  cpf: z.string().refine((value) => cpfRegex.test(value), {
    message: "CPF inválido.",
  }),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;

export function useProfileForm() {
  const context = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    mode: "all",
  });

  return context;
}
