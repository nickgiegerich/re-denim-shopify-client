import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";

function ContactPage() {
  const pageTitle = `Contact | ${process.env.siteTitle}`;

  return (
    <div className="container mx-auto min-h-screen">
      <SEO title={pageTitle} />
      <PageTitle text="Contact Us" />
      <div className="max-w-7xl mx-auto space-y-4 px-2">
        <div className="font-semibold text-3xl w-full">Feel to reach out to me anytime!</div>
        <div className="font-semibold text-palette-light text-xl w-full">The best way to reach me is via WhatsApp/SMS @ 775-621-6811 </div>
        <div className="font-semibold text-palette-light text-xl w-full">If you call and I don't answer please leave a detailed voicemail. </div>
      </div>
    </div>
  );
}

export default ContactPage;
