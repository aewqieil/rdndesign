"use client";
import {useCopy} from "../../components/locale";


import {images} from "../../data/site";import {Photo} from "../../components/ui";import {PageTitle,CTA} from "../../components/shared";

export default function Studio(){const {pl,editorial,extra,projects}=useCopy();return <><PageTitle label={editorial.t43} title={editorial.t44} description={editorial.t45}/><section className="section"><Photo className="studio-wide" src={images.detail} alt={editorial.t46} priority/><div className="editorial-copy"><h2>{editorial.t39}<br/>{editorial.t40}</h2><div><p>{editorial.t41}</p><p>{editorial.t42}</p></div></div><div className="principles">{extra.principles.map(([n,t])=><article key={n}><h3>{n}</h3><p>{t}</p></article>)}</div></section><CTA/></>}
