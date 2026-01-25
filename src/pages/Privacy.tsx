import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 -ml-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Privacy Notice 
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <p className="text-lg">
                VibeCircle is currently in development. We respect your privacy and are committed to being transparent about how we handle information from day one.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What information we collect</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  At this stage, we only collect email addresses when you choose to sign up to be notified about the VibeCircle launch, updates, or early access.
                </p>
                <p className="font-medium text-foreground">
                  That's it.
                </p>
                <p>
                  No profiles, no tracking feeds, no behavioral analysis—just an email.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How we use your email</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Your email address is used solely to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Notify you when VibeCircle launches</li>
                  <li>Share important updates about the product</li>
                  <li>Invite you to early access or beta testing (if applicable)</li>
                </ul>
                <p className="font-medium text-foreground mt-4">
                  We do not sell, rent, or trade your email address.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How we store your information</h2>
              <p className="text-muted-foreground">
                Email addresses are stored securely and accessed only by the VibeCircle team for launch-related communication. We take reasonable technical and organizational measures to protect this data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-party services</h2>
              <p className="text-muted-foreground">
                We may use trusted third-party tools to manage email notifications (such as email delivery or mailing list services). These providers are only allowed to process your email for the purposes described above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your choices</h2>
              <div className="text-muted-foreground space-y-2">
                <ul className="list-disc pl-6 space-y-1">
                  <li>You can unsubscribe from our emails at any time by using the link included in our messages.</li>
                  <li>If you want your email removed entirely, you can contact us and we'll take care of it.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Future updates</h2>
              <p className="text-muted-foreground">
                As VibeCircle evolves into a full platform, this privacy notice will be updated to reflect new features and data practices. When that happens, we'll be clear about what's changing and why.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <div className="text-muted-foreground">
                <p className="mb-2">If you have any questions about this privacy notice or how your information is handled, you can contact us at:</p>
                <p className="font-medium text-foreground">
                  privacy@vibecircle.co.za
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
