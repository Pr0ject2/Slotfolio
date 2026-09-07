// Only explicitly configured HTTPS destinations can become commercial links.
export const operators = {
  "1win": {
    name: "1win",
    url: process.env.AFFILIATE_1WIN_URL || "",
    disclosure:
      "Партнёрская ссылка. Редакция может получить вознаграждение за переход или регистрацию.",
  },
};
export function affiliateUrl() {
  try {
    const u = new URL(operators["1win"].url);
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}
