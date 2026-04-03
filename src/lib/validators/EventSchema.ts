import { z } from "zod"; // zod kütüphanesini içeri aktarıyoruz

const eventSchema = z.object({
    ip:z 
    .string()
    .min(1, "IP is essential.") // string olmalı ve min 1 karakterli olmalı
    .refine((val) => { // Ip kontrolü (refine=özel kontrol)
        const parts = val.split("."); //ip'yi parçalıyoruz
        if(parts.length !== 4) return false; //ip 4 parçadan oluşmalı
        return parts.every((p) => { // her parçayı kontrol et
            const num =Number(p); //parçayı sayıya çevir
            return num >= 0 && num <= 255; // parça 0-255 arasında olmalı
        });      
    }, "Invalid IP"), // fail olursa
    date: z
    .string()
    .min(1, "Date is essential."), // string olacak ve min 1 karakterli olacak
});

export default eventSchema

export type EventFormData = z.infer<typeof eventSchema> // infer ile eventSchema'dan type oluşturuyoruz ve bunu eventformdata olarak export ediyoruz

