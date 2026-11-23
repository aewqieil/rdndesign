"use client";
import {useCopy} from "../../components/locale";


import {PageTitle} from "../../components/shared";export default function Privacy(){const {pl,editorial,extra,projects}=useCopy();return <><PageTitle label={editorial.t65} title={editorial.t66}/><section className="section privacy"><h2>{editorial.t59}</h2><p>{editorial.t60}</p><h2>{editorial.t61}</h2><p>{editorial.t62}</p><h2>{editorial.t63}</h2><p>{editorial.t64}</p></section></>}
