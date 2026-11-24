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

      <div className="grid gap-8 pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="bg-background-contrast space-y-5 rounded-xl p-8">
          <div>
            <p className="text-accent text-sm">{t("socialLabel")}</p>
            <h2 className="pt-2 text-3xl">{t("socialTitle")}</h2>
            <p className="text-secondary pt-4">{t("socialDescription")}</p>
          </div>

          <Socials className="justify-start" linkClassName="rounded-full" />

          <div className="space-y-6 pt-2">
            <div className="space-y-2">
              <h3 className="text-lg">{t("socialSectionTitle")}</h3>
              <p className="text-secondary">{t("socialSectionDescription")}</p>
              <p className="text-secondary">{t("socialSectionHandle")}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg">{t("emailSectionTitle")}</h3>
              <p className="text-secondary">{t("emailSectionDescription")}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent inline-block text-sm hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-background-contrast rounded-xl p-8">
          <p className="text-accent text-sm">{t("formLabel")}</p>
          <h2 className="pt-2 text-3xl">{t("formTitle")}</h2>
          <p className="text-secondary pt-4">{t("formDescription")}</p>

          <div className="pt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
