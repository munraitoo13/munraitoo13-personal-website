import { CopyEmailButton } from "@/components/common/CopyEmailButton";
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
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <div className="tui-rail px-6 py-12 md:py-16">
        <div className="grid border border-[var(--color-border)] lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-8 border-b border-[var(--color-border)] p-6 md:p-8 lg:col-span-5 lg:border-r lg:border-b-0">
            <div className="space-y-6">
              <div>
                <p className="text-accent-text text-xs font-medium">
                  {t("socialLabel")}
                </p>
                <h2 className="text-primary pt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  {t("socialTitle")}
                </h2>
                <p className="text-secondary max-w-[50ch] pt-3 text-sm leading-relaxed md:text-base">
                  {t("socialDescription")}
                </p>
              </div>

              <div className="space-y-3 border-t border-[var(--color-border)] pt-6">
                <h3 className="text-primary text-sm font-semibold">
                  {t("emailSectionTitle")}
                </h3>
                <p className="text-secondary text-sm">
                  {t("emailSectionDescription")}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent-text font-mono text-sm hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>

                  <CopyEmailButton
                    email={CONTACT_EMAIL}
                    label={t("copyEmail")}
                    copiedLabel={t("copiedEmail")}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-[var(--color-border)] pt-6">
              <h3 className="text-primary text-sm font-semibold">
                {t("socialSectionTitle")}
              </h3>
              <p className="text-secondary text-sm">
                {t("socialSectionDescription")}
              </p>
              <Socials className="justify-start gap-2 pt-1" />
            </div>
          </div>

          <div className="bg-background-contrast p-6 md:p-8 lg:col-span-7">
            <p className="text-accent-text text-xs font-medium">
              {t("formLabel")}
            </p>
            <h2 className="text-primary pt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {t("formTitle")}
            </h2>
            <p className="text-secondary max-w-[55ch] pt-3 text-sm leading-relaxed md:text-base">
              {t("formDescription")}
            </p>

            <div className="pt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
