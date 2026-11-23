
import {LocaleProvider,SkipLink} from "../components/locale";
import type {Metadata} from "next";
import "./globals.css";
import {Header} from "../components/ui";
import {Footer} from "../components/shared";
import {site} from "../data/site";
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"RDN Design — Przestrzeń z charakterem",template:"%s — RDN Design"},description:"Niezależne studio projektowania wnętrz. Uważne podejście do przestrzeni, materiałów i światła.",openGraph:{title:"RDN Design",description:"Przestrzeń z charakterem. Niezależne studio architektury wnętrz.",locale:"pl_PL",type:"website",images:[{url:"/og.svg",width:1200,height:630}]}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pl"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet"/></head><body><LocaleProvider><SkipLink/><Header/><main id="main">{children}</main><Footer/></LocaleProvider></body></html>}
