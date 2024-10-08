import { cn } from "@/lib/utils";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";

export default function ContactSection({ company }) {
  return (
    <section
      className={cn(
        "w-full flex items-center justify-center",
        company === "Siemens"
          ? "bg-siemensPrimary"
          : company === "Bosch"
          ? "bg-boschPrimary"
          : company === "Samsung"
          ? "bg-samsungPrimary"
          : company === "LG"
          ? "bg-lgPrimary"
          : "bg-primary"
      )}
      id="contact"
    >
      <div
        className="max-w-7xl w-full flex items-center overflow-hidden justify-center bg-fixed bg-[url(/contact.png)] bg-cover bg-center bg-no-repeat"
        style={{
          clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)",
        }}
      >
        <div className="bg-black/75 w-full gap-5 h-full text-center flex items-center justify-center flex-col px-5 py-20 text-white">
          <div className="flex flex-col items-center justify-center text-center">
            <h4
              className={cn(
                "text-lg font-semibold",
                company === "Siemens"
                  ? "text-siemensPrimary"
                  : company === "Bosch"
                  ? "text-boschPrimary"
                  : company === "Samsung"
                  ? "text-white"
                  : company === "LG"
                  ? "text-lgPrimary"
                  : "text-primary"
              )}
            >
              Contact us
            </h4>
            <h1 className="text-xl md:text-4xl max-w-3xl font-bold">
              <span
                className={cn(
                  "text-2xl md:text-5xl",
                  company === "Siemens"
                    ? "text-siemensPrimary"
                    : company === "Bosch"
                    ? "text-boschPrimary"
                    : company === "Samsung"
                    ? "text-white"
                    : company === "LG"
                    ? "text-lgPrimary"
                    : "text-primary"
                )}
              >
                Premium
              </span>{" "}
              Appliances Care Coupled With Exceptional{" "}
              <span
                className={cn(
                  "text-2xl md:text-5xl",
                  company === "Siemens"
                    ? "text-siemensPrimary"
                    : company === "Bosch"
                    ? "text-boschPrimary"
                    : company === "Samsung"
                    ? "text-white"
                    : company === "LG"
                    ? "text-lgPrimary"
                    : "text-primary"
                )}
              >
                Worksmanship
              </span>
            </h1>
          </div>
          <p className="text-white font-light max-w-2xl">
            Issues with your appliances? We are here to help. Contact us today
            for premium appliance repair services.
          </p>
          <CallAndWhatsappButton company={company} />
        </div>
      </div>
    </section>
  );
}
