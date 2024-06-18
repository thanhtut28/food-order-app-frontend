export function capitializeText(s: string) {
   return s
      .split("_")
      .map(c => c.charAt(0).toUpperCase() + c.slice(1))
      .join(" ");
}
