const Footer = () => {
  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-6 text-center">
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
      </div>
    </footer>
  );
};

export default Footer;
