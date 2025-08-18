import { Counter } from "@/components";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>

      <Counter />
    </div>
  );
}