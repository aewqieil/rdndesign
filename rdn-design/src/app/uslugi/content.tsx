"use client";
import {useCopy} from "../../components/locale";


import Link from "next/link";import {images} from "../../data/site";import {Photo} from "../../components/ui";import {PageTitle,CTA} from "../../components/shared";

export default function Services(){const {pl,editorial,extra,projects}=useCopy();const photos=[images.hero,images.space,images.living,images.kitchen,images.detail];return <><PageTitle label={editorial.t56} title={editorial.t57} description={editorial.t58}/><section className="section full-services">{pl.services.map((s,i)=><article className="service-detail" key={s.name}><Photo src={photos[i]} alt={s.name+' — '+extra.reference}/><div><h2>{s.name.toUpperCase()}</h2><p>{s.text}</p><h3>{editorial.t54}</h3><p>{s.deliver}</p><Link className="text-link" href="/kontakt">{editorial.t55}</Link></div></article>)}</section><CTA/></>}
