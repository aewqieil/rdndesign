export const site = { name: "RDN Design", email: "", instagram: "", location: "Polska", url: process.env.NEXT_PUBLIC_SITE_URL || "https://rdn-design-studio.cherishedmacaron16.chatgpt.site" };
export const images = {
 hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",
 living: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
 kitchen: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
 detail: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=85",
 space: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
 dining: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
};
export const projects = [
 {slug:"cisza-formy",name:"Cisza formy",category:"Residential",year:"2026",image:images.living,second:images.kitchen,description:"Przestrzeń do codzienności. Ciepłe drewno, miękkie światło i oszczędna paleta budują spokojny rytm wnętrza.",materials:"Dąb, kamień naturalny, tynk mineralny, len"},
 {slug:"materia-i-swiatlo",name:"Materia i światło",category:"Conceptual",year:"2026",image:images.kitchen,second:images.detail,description:"Studium relacji między surową materią a światłem. Wyraziste bryły spotykają się z subtelną fakturą powierzchni.",materials:"Trawertyn, drewno, stal szczotkowana"},
 {slug:"wspolny-rytm",name:"Wspólny rytm",category:"Commercial",year:"2026",image:images.space,second:images.dining,description:"Koncepcja miejsca spotkań. Otwarty układ i wyraźne strefy pozwalają przechodzić od skupienia do rozmowy.",materials:"Drewno, szkło, tkaniny akustyczne"},
 {slug:"miejsce-pomiedzy",name:"Miejsce pomiędzy",category:"Hospitality",year:"2026",image:images.dining,second:images.hero,description:"Kameralna interpretacja gościnności. Naturalne materiały i przygaszone tony tworzą przestrzeń zatrzymania.",materials:"Kamień, dąb barwiony, wełna, ceramika"}
];
