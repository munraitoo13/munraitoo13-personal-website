import { Header } from "@/components/common/Header";
import { Socials } from "@/components/common/Socials";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_EMAIL } from "@/constants/constants";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("contact"),
    description: t("contactDesc"),
  };
}

export default async function Page() {
  const t = await getTranslations("Contact");

  return (
    <>
      <Header
        sectionIndex="05"
        sectionLabel={t("socialLabel")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <div className="tui-rail px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="bg-background-contrast space-y-5 border border-[var(--color-border)] p-8">
            <div>
              <p className="text-accent font-mono text-xs uppercase tracking-[0.16em]">
                {t("socialLabel")}
              </p>
              <h2 className="text-primary pt-2 text-3xl">{t("socialTitle")}</h2>
              <p className="text-secondary pt-4">{t("socialDescription")}</p>
            </div>

            <Socials className="justify-start gap-2" />

            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <h3 className="text-primary text-lg">
                  {t("socialSectionTitle")}
                </h3>
                <p className="text-secondary">
                  {t("socialSectionDescription")}
                </p>
                <p className="text-secondary">{t("socialSectionHandle")}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-primary text-lg">
                  {t("emailSectionTitle")}
                </h3>
                <p className="text-secondary">{t("emailSectionDescription")}</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent inline-block font-mono text-sm hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background-contrast border border-[var(--color-border)] p-8">
            <p className="text-accent font-mono text-xs uppercase tracking-[0.16em]">
              {t("formLabel")}
            </p>
            <h2 className="text-primary pt-2 text-3xl">{t("formTitle")}</h2>
            <p className="text-secondary pt-4">{t("formDescription")}</p>

            <div className="pt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
