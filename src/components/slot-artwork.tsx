"use client";
import { useEffect, useRef, type ImgHTMLAttributes } from "react";
import { withBasePath } from "@/lib/base-path";

export function SlotArtwork(props: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  function fallbackImage(image: HTMLImageElement) {
    const fallback = withBasePath("/images/unavailable.svg");
    if (image.getAttribute("src") !== fallback) {
      image.removeAttribute("srcset");
      image.src = fallback;
    }
  }
  useEffect(() => {
    // An eager server-rendered image may fail before React attaches onError.
    if (ref.current?.complete && !ref.current.naturalWidth) fallbackImage(ref.current);
  }, [props.src]);
  return <img {...props} ref={ref} onError={(event) => fallbackImage(event.currentTarget)} />;
}
