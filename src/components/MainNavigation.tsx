import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"

const MainNavigation = async () => {
    const t = await getTranslations('General.Navigation');

    return (
        <div>
            <Link href="/">{t('HomePage')}</Link>
            <Link href="/about">{t('AboutPage')}</Link>
        </div>
    )
}

export default MainNavigation