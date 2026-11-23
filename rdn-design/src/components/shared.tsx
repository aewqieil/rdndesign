"use client";
import {useCopy} from "./locale";


import Link from "next/link";
import {site} from "../data/site";

export function CTA(){const {editorial}=useCopy();return <section className="cta"><div className="eyebrow">{editorial.t79}</div><Link href="/kontakt"><h2>{editorial.t80}<br/><span>{editorial.t81}</span></h2></Link><Link className="button light" href="/kontakt">{editorial.t82}</Link></section>}
export function Footer(){const {editorial,pl,extra}=useCopy();return <footer><div className="footer-top"><Link href="/" className="footer-logo">{editorial.t83}<span>{editorial.t84}</span></Link><div>{pl.nav.map(([n,u])=><Link href={u} key={u}>{n}</Link>)}</div><div><span>{extra.country}</span>{site.email?<a href={'mailto:'+site.email}>{site.email}</a>:<Link href="/kontakt">{editorial.t86}</Link>}{site.instagram&&<a href={site.instagram} rel="noopener noreferrer" target="_blank">{editorial.t87}</a>}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} RDN Design</span><Link href="/prywatnosc">{editorial.t88}</Link><span>{editorial.t89}</span></div></footer>}
export function PageTitle({label,title,description,className}:{label:string,title:string,description?:string,className?:string}){return <section className={className ? "page-title "+className : "page-title"}><p className="eyebrow">{label}</p><h1>{title}</h1>{description&&<p className="page-intro">{description}</p>}</section>}
