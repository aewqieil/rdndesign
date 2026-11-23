"use client";
import {useCopy} from "../../components/locale";


import {PageTitle} from "../../components/shared";import {ContactForm} from "../../components/ui";import {site} from "../../data/site";

export default function Contact(){const {pl,editorial,extra,projects}=useCopy();return <><PageTitle label={editorial.t50} title={pl.contact.title} description={pl.contact.intro}/><section className="section contact-layout"><aside><h2>{editorial.t47}</h2><p>{editorial.t48}</p><p>{site.location}</p>{site.email&&<a href={'mailto:'+site.email}>{site.email}</a>}<p className="demo-note">{editorial.t49}</p></aside><ContactForm/></section></>}
