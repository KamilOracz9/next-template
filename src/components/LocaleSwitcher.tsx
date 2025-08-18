'use client';

import { Link } from "@/i18n/navigation";
import { without } from "lodash";
import { Locale, useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const LocaleSwitcher = ({
    supportedLocales
}: {
    supportedLocales: Locale[];
}) => {
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations('General.Languages')

    const locales = useMemo(() => without(supportedLocales, locale), [supportedLocales, locale]);

    return (
        <div>
            <div>{t(locale)}</div>
            {locales.map(locale => <Link key={locale} href={pathname as any} locale={locale}>{t(locale)}</Link>)}
        </div>
    )
}

export default LocaleSwitcher