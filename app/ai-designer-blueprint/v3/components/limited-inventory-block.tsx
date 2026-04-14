"use client"

import Image from "next/image"

import { RichTextLite } from "./rich-text-lite"

const FLOAT_TOP =
  "https://storage.googleapis.com/msgsndr/6wYenDXfjxDuH7eBrO2C/media/67a777098f9e7e524c68df9e.svg"
const FLOAT_BOTTOM =
  "https://storage.googleapis.com/msgsndr/6wYenDXfjxDuH7eBrO2C/media/67a77709fc768502b11132a7.svg"

type Props = {
  bookSrc: string
  bookAlt?: string
  titleId?: string
  kicker: string
  title: string
  lines: readonly string[]
  cta: React.ReactNode
  floatTopAlt: string
  floatBottomAlt: string
}

export function LimitedInventoryBlock({
  bookSrc,
  bookAlt = "The AI Designer Blueprint",
  titleId,
  kicker,
  title,
  lines,
  cta,
  floatTopAlt,
  floatBottomAlt,
}: Props) {
  return (
    <div className="abp3-inv">
      <div className="abp3-inv__wave" aria-hidden />
      <div className="abp3-inv__inner">
        <p className="abp3-kicker">{kicker}</p>
        <h2 id={titleId} className="abp3-h2">
          {title.split(" ").map((word, i, arr) => {
            const isLaunch = word.toLowerCase() === "launch"
            const isLast = i === arr.length - 1
            if (isLaunch) {
              return (
                <span key={`${word}-${i}`}>
                  <span style={{ color: "var(--pen-lime-bright, #a9eb35)" }}>{word}</span>{" "}
                </span>
              )
            }
            if (isLast) {
              return (
                <span key={`${word}-${i}`} className="abp3-hl-mark">
                  {word}
                </span>
              )
            }
            return (
              <span key={`${word}-${i}`}>
                {word}{" "}
              </span>
            )
          })}
        </h2>
        <div className="abp3-prose abp3-inv__copy">
          {lines.map((line) => (
            <p key={line.slice(0, 40)}>
              <RichTextLite text={line} />
            </p>
          ))}
        </div>
        <div className="abp3-inv__cta">{cta}</div>

        <div className="abp3-inv__visual">
          <Image
            src={FLOAT_TOP}
            alt={floatTopAlt}
            width={280}
            height={140}
            className="abp3-inv__float abp3-inv__float--top"
            unoptimized
          />
          <Image src={bookSrc} alt={bookAlt} width={520} height={680} className="abp3-inv__book" priority={false} />
          <Image
            src={FLOAT_BOTTOM}
            alt={floatBottomAlt}
            width={360}
            height={180}
            className="abp3-inv__float abp3-inv__float--bottom"
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}
