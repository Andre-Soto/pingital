import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  return (
    <main>
      <h1>{dictionary.home.title}</h1>
      <p>{dictionary.home.description}</p>
    </main>
  );
}