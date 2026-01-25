import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Terms = () => {
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
            Terms of Use
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <p className="text-lg">
                Welcome to VibeCircle. By accessing this website or signing up for notifications, you agree to the following terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Pre-launch status</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  VibeCircle is currently in development. The website is provided for informational purposes only and to allow users to sign up for launch notifications and updates.
                </p>
                <p>
                  Features, functionality, and availability may change at any time before or after launch.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
              <p className="text-muted-foreground">
                By submitting your email address, you confirm that you are at least 18 years old or have permission from a legal guardian.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Email notifications</h2>
              <div className="text-muted-foreground space-y-4">
                <p>If you choose to provide your email address, you agree that VibeCircle may contact you regarding:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Launch announcements</li>
                  <li>Product updates</li>
                  <li>Early access or beta invitations</li>
                </ul>
                <p className="mt-4">
                  You can unsubscribe at any time.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptable use</h2>
              <div className="text-muted-foreground space-y-4">
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Use this site for unlawful purposes</li>
                  <li>Attempt to access systems, data, or accounts without authorization</li>
                  <li>Interfere with the site's operation or security</li>
                </ul>
                <p className="mt-4 italic">
                  This is a quiet waiting room for a product being built—please don't try to break the furniture.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual property</h2>
              <p className="text-muted-foreground">
                All content, branding, logos, designs, and materials on this site are owned by VibeCircle or its licensors and may not be copied, modified, or used without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">No warranties</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  The site is provided "as is" and "as available."
                </p>
                <p>
                  We make no guarantees that the site will be uninterrupted, error-free, or available at all times during development.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, VibeCircle will not be liable for any damages arising from the use of this website or reliance on pre-launch information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to these terms</h2>
              <p className="text-muted-foreground">
                These Terms may be updated as VibeCircle evolves. Continued use of the site after changes are posted constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <div className="text-muted-foreground">
                <p className="mb-2">If you have questions about these Terms, you can contact us at:</p>
                <p className="font-medium text-foreground">
                  legal@vibecircle.co.za
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

export default Terms;
