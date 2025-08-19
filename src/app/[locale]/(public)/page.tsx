import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 className="tw:bg-primary tw:flex-center tw:typo-12 tw:mt-lg">{t('title')}</h1>
      <div className="tw:content-grid">
        <div className="tw:content-grid-breakout">
          <button className="tw:btn-sm tw:btn-filled">
            button
          </button>
          <button className="tw:btn-sm tw:btn-outline">
            button
          </button>
        </div>
      </div>
    </div>
  );
}