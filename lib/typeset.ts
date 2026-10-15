/**
 * Applies the rules in .cursor/rules/typesetting.mdc to a plain string:
 * binds 1–2 letter words, short sentence starters, comma/semicolon
 * conjunctions and numbers to the following word, and binds the last
 * two words of every paragraph (paragraphs split on blank lines or \n).
 * Strings that already carry   are safe to pass through.
 */
const NB = " "
const SHORT = "a|i|of|at|in|on|to|or|by|an|as|is|it|if|so|up|we|no|do|be|he|my|the|and|for|but|nor|yet|our|its|his|her|your|their|with|from|into|per|via"

export function tp(input: string): string {
  return input
    .split("\n")
    .map((line) => {
      let s = line
      // Tiers 1–2: short function words bind to the next word.
      s = s.replace(new RegExp(`(?<=^|[\\s(${NB}—–-])(${SHORT}) (?=\\S)`, "gi"), `$1${NB}`)
      // Tier 3: a sentence starter of 4 letters or fewer binds to the next word.
      s = s.replace(/([.?!]["”’]?\s+)([A-Za-z’']{1,4}) (?=\S)/g, `$1$2${NB}`)
      // Tier 4: conjunction after a comma or semicolon binds to the next word.
      s = s.replace(/([,;]\s+)(and|but|or|nor|yet|so) (?=\S)/g, `$1$2${NB}`)
      // Tier 6: numbers bind to their unit or noun.
      s = s.replace(/(\d[\d,.]*[%+k]?) (?=[A-Za-z·])/g, `$1${NB}`)
      // Keep number-word compounds like "25-person" on one line.
      s = s.replace(/(\d)-(?=[A-Za-z])/g, "$1\u2011")
      // Tier 5: no single-word last line.
      const last = s.lastIndexOf(" ")
      if (last > 0 && s.trim().split(/\s+/).length > 2) s = s.slice(0, last) + NB + s.slice(last + 1)
      return s
    })
    .join("\n")
}
