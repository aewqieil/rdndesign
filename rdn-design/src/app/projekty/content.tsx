"use client";
import {useCopy} from "../../components/locale";


import {PageTitle,CTA} from "../../components/shared";import {Portfolio} from "../../components/ui";

export default function Projects(){const {editorial}=useCopy();return <><PageTitle className="portfolio-title" label={editorial.t51} title={editorial.t52} description={editorial.t53}/><section className="section portfolio"><Portfolio/></section><CTA/></>}
