const Footer = () => {
  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025-2026{" "}
            <a
              href="https://www.vibecircles.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              VibeCircles PTY LTD
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="https://www.vibecircles.co.za/forum" className="text-muted-foreground hover:text-foreground transition-colors">
              Dev-Forum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
