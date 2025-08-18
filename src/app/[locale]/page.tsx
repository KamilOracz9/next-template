import { Counter } from "@/components";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 className="bg-primary">{t('title')}</h1>

      <Counter />
    </div>
  );
}