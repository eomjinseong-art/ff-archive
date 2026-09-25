import { redirect } from "next/navigation";

/** Dedicated 시리즈 URL; the eight-film framing lives on the films hub. */
export default function SeriesPage() {
  redirect("/films");
}
