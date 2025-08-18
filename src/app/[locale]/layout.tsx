import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { LocaleSwitcher, MainNavigation } from '@/components';
import { headers } from 'next/headers';

import { isEmpty } from 'lodash';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const headersList = await headers();
  const host = headersList.get("host");

  const domainConfig = routing.domains?.find((d) => d.domain === host);
  const supportedLocales = domainConfig?.locales ?? [];

  if (!hasLocale(routing.locales, locale) || isEmpty(supportedLocales)) notFound();

  return (
    <html lang={locale}>
      <body>

        <NextIntlClientProvider>
          <>
            <LocaleSwitcher supportedLocales={supportedLocales} />

            <MainNavigation />

            {children}
          </>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}