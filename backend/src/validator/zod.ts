import z from "zod"
export const submitFormSchema = z.object({
    formType: z.enum(["A", "B"]),
    name: z.string().max(30,),
    countryCode: z.string(),
    phoneNumber: z.number()
})