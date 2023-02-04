import {z} from "zod";
export const registerInput = z.object({
    email: z.string().email({message: "Neplatný email."}).min(1, {message: "Email je povinný."}).max(255, {message: "Maximální délka emailu překročena."}),
    password: z.string().min(1, {message: "Heslo je povinné."}).max(100, {message: "Maximální délka hesla překročena."}),
});

export const registerOutput = z.object({message: z.string()});