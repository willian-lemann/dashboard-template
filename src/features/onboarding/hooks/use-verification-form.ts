import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

const verificationSchema = z.object({
  cpf: z.string().refine((value) => cpfRegex.test(value), {
    message: "CPF inválido.",
  }),
});

export type VerificationSchema = z.infer<typeof verificationSchema>;

export function useVerificationForm() {
  const context = useForm<VerificationSchema>({
    resolver: zodResolver(verificationSchema),
    mode: "all",
  });

  return context;
}
