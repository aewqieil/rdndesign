"use client";
import {usePathname} from "next/navigation";
import {createContext,useContext,useState,useEffect} from "react";
import {pl} from "../data/copy";
import {editorial as polishEditorial} from "../data/editorial";
import {projects as baseProjects} from "../data/site";
import en from "../data/locales/en.json";
import ru from "../data/locales/ru.json";
import enEditorial from "../data/locales/en-editorial.json";
import ruEditorial from "../data/locales/ru-editorial.json";
import enExtra from "../data/locales/en-extra.json";
import ruExtra from "../data/locales/ru-extra.json";
import plExtra from "../data/locales/pl-extra.json";
export type Locale = "pl"|"en"|"ru";
const copies={pl,en,ru};
const editorials:Record<Locale,Record<keyof typeof polishEditorial,string>>={pl:polishEditorial,en:enEditorial,ru:ruEditorial};
const extras={pl:plExtra,en:enExtra,ru:ruExtra};
const Context=createContext<{locale:Locale,setLocale:(locale:Locale)=>void}>({locale:'pl',setLocale:()=>{}});
export function LocaleProvider({children}:{children:React.ReactNode}){
 const [locale,setLanguage]=useState<Locale>('pl');
 const pathname=usePathname();
 useEffect(()=>{try{const saved=localStorage.getItem('rdn-language');if(saved==='en'||saved==='ru'||saved==='pl')setLanguage(saved);}catch{}},[]);
 useEffect(()=>{document.documentElement.lang=locale;
 const copy=copies[locale];
 const nav=copy.nav.find(([,url])=>pathname===url||pathname===url+'/');
 const index=baseProjects.findIndex(p=>pathname.includes('/projekty/'+p.slug));
 const translated=locale==='en'?enExtra:ruExtra;
 const title=index>=0?(locale==='pl'?baseProjects[index].name:translated.projectNames[index]):nav?.[0]||(pathname.includes('prywatnosc')?editorials[locale].t88:copy.hero.join(' '));
 document.title=title+' — RDN Design';
 },[locale,pathname]);
 function setLocale(value:Locale){setLanguage(value);try{localStorage.setItem('rdn-language',value);}catch{}}
 return <Context.Provider value={{locale,setLocale}}>{children}</Context.Provider>;
}
export function useCopy(){const context=useContext(Context);const {locale}=context;const extra=extras[locale];const translated=locale==='pl'?null:locale==='en'?enExtra:ruExtra;return {...context,pl:copies[locale],editorial:editorials[locale],extra,projects:baseProjects.map((p,i)=>translated?{...p,name:translated.projectNames[i],description:translated.projectDescriptions[i],materials:translated.projectMaterials[i]}:p)};}
export function LanguageSwitcher(){const {locale,setLocale}=useCopy();return <div className="language" role="group" aria-label="Language / Język / Язык">{(['pl','en','ru'] as const).map(lang=><button key={lang} lang={lang} aria-label={{pl:'Polski',en:'English',ru:'Русский'}[lang]} aria-pressed={locale===lang} onClick={()=>setLocale(lang)}>{lang.toUpperCase()}</button>)}</div>}
export function SkipLink(){const {editorial}=useCopy();return <a className="skip-link" href="#main">{editorial.t0}</a>}
