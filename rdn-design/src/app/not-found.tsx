"use client";

import {useCopy} from "../components/locale";
import Link from "next/link";export default function NotFound(){const {editorial}=useCopy();return <section className="page-title not-found"><p className="eyebrow">{editorial.t35}</p><h1>{editorial.t36}<br/>{editorial.t37}</h1><Link className="button" href="/">{editorial.t38}</Link></section>}
