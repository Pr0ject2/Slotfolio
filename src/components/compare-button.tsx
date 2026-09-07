"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSlot } from "@/lib/data";

let memorySelection: string[] = [];
export function normalizeSelection(value: unknown): string[] {
  return Array.isArray(value) ? [...new Set(value.filter((slug): slug is string => typeof slug === "string" && !!getSlot(slug)))].slice(0, 3) : [];
}
export function readSelection() {
  try { return normalizeSelection(JSON.parse(localStorage.getItem("slotfolio-compare") || "[]")); }
  catch { return memorySelection; }
}
export function saveSelection(value: string[]) {
  memorySelection = normalizeSelection(value);
  try { localStorage.setItem("slotfolio-compare", JSON.stringify(memorySelection)); } catch { /* The current tab remains usable when storage is unavailable. */ }
  window.dispatchEvent(new Event("comparison-change"));
  return memorySelection;
}
export function useSelection() {
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    const sync = () => setSelected(readSelection());
    sync();
    window.addEventListener("comparison-change", sync);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener("comparison-change", sync); window.removeEventListener("storage", sync); };
  }, []);
  return selected;
}
export function CompareButton({ slug }: { slug: string }) {
  const selected = useSelection();
  const [message, setMessage] = useState("");
  const included = selected.includes(slug);
  function toggle() {
    const previous = readSelection();
    if (previous.includes(slug)) saveSelection(previous.filter((x) => x !== slug));
    else if (previous.length < 3) saveSelection([...previous, slug]);
    else { setMessage("В сравнении уже 3 игры. Удалите одну."); return; }
    setMessage("");
  }
  return <div className="compare-control">
    <button type="button" className={`compare-button ${included ? "selected" : ""}`} aria-pressed={included} aria-label={`${included ? "Убрать" : "Добавить"} ${getSlot(slug)?.name || slug} ${included ? "из сравнения" : "в сравнение"}`} onClick={toggle}>{included ? "✓ В сравнении" : "+ Сравнить"}</button>
    {message && selected.length >= 3 && <small role="status">{message} <Link href="/compare">Открыть</Link></small>}
  </div>;
}
