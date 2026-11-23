import {services} from "./services";
export const pl = {
 nav: [ ["Projekty","/projekty"], ["Usługi","/uslugi"], ["Studio","/studio"], ["Kontakt","/kontakt"] ],
 hero: ["PRZESTRZEŃ", "Z CHARAKTEREM."], intro: "Niezależne studio architektury wnętrz. Łączymy wrażliwość na formę z uważnością na codzienność.",
 demo: "Portfolio demonstracyjne — koncepcje ilustracyjne i fotografie referencyjne. Nie przedstawiają zrealizowanych projektów RDN Design.",
 services,
 process: [ ["Rozmowa", "Poznajemy Twoje potrzeby, przyzwyczajenia i oczekiwania."], ["Koncepcja", "Szukamy kierunku, który najlepiej oddaje charakter miejsca."], ["Układ funkcjonalny", "Porządkujemy przestrzeń, proporcje i codzienne scenariusze."], ["Wizualizacje 3D", "Sprawdzamy materiały, formy i światło w przestrzeni."], ["Dokumentacja", "Przekładamy koncepcję na czytelny zestaw opracowań."] ],
 categories: {All:"Wszystkie",Residential:"Mieszkalne",Commercial:"Komercyjne",Hospitality:"Gościnne",Conceptual:"Koncepcyjne"},
 contact: {title:"POROZMAWIAJMY.", intro:"Każda przestrzeń zaczyna się od rozmowy. Opowiedz nam o swojej.",name:"Imię i nazwisko",email:"E-mail",type:"Rodzaj projektu",area:"Powierzchnia (m², opcjonalnie)",message:"Twoja wiadomość",consent:"Zapoznałem/am się z informacją o prywatności i zgadzam się na kontakt w sprawie zapytania.",send:"Wyślij zapytanie",unavailable:"Formularz nie jest jeszcze połączony z usługą e-mail. Wiadomość nie została wysłana.",success:"Dziękujemy. Twoja wiadomość została wysłana.",error:"Nie udało się wysłać wiadomości. Spróbuj ponownie później."}
};
// Future locales implement this same dictionary shape; Polish is the published default.
export const dictionaries = { pl };
