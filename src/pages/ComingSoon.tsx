import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import Footer from "@/components/Footer";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoon = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number>(() => {
    // Load from localStorage on initial render
    const saved = localStorage.getItem('waitlistCount');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Fixed launch date (January 11, 2029 - approximately 1080 days from January 26, 2026)
  const launchDate = new Date('2029-01-11T00:00:00');

  // Reusable fetcher for the waitlist count
  const fetchWaitlistCount = async () => {
    if (!isSupabaseConfigured) return;

    try {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      if (!error && typeof count === 'number') {
        // Only update if we got a valid count from the database
        // This preserves localStorage count if database is empty
        if (count > 0) {
          setWaitlistCount(count);
        }
      }
    } catch (err) {
      console.error('Failed to fetch waitlist count', err);
    }
  };

  useEffect(() => {
    // Fetch the actual count from the database on page load
    fetchWaitlistCount();

    const calculateTimeLeft = () => {
      const difference = launchDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('waitlistCount', waitlistCount.toString());
  }, [waitlistCount]);

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured) {
        toast({
          title: "You're on the list! 🎉",
          description: "We'll notify you when we launch.",
        });
        setEmail("");
        setWaitlistCount((c) => c + 1);
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from('waitlist')
        .insert([
          { 
            email: email.toLowerCase().trim(),
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        // Handle duplicate email error gracefully
        if (error.code === '23505') {
          toast({
            title: "Already subscribed! 🎉",
            description: "You're already on our waitlist.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "You're on the list! 🎉",
          description: "We'll notify you when we launch.",
        });

        // Increment count locally
        setWaitlistCount((c) => c + 1);
      }
      
      setEmail("");
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VibeCircle
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Talk. Laugh. </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Be Real.
            </span>
            <br />
            <span className="text-foreground"> - No filters, just friendships.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            A place for positivity and people who vibe with you.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-3 md:gap-6 mb-12"
          >
            {timeBlocks.map((block, index) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px]">
                  <motion.span
                    key={block.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="block text-3xl md:text-5xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent"
                  >
                    {String(block.value).padStart(2, "0")}
                  </motion.span>
                  <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2 block">
                    {block.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Email Signup */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            onSubmit={handleNotify}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-card/50 border-border/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button type="submit" variant="hero" size="lg" className="h-12 px-6" disabled={isSubmitting}>
              <Bell className="w-4 h-4 mr-2" />
              {isSubmitting ? "Adding..." : "Notify Me"}
            </Button>
          </motion.form>

          {/* Social proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-sm text-muted-foreground mt-6"
          >
            Join <span className="text-primary font-semibold">{waitlistCount.toLocaleString()}</span> others waiting for launch
          </motion.p>
        </motion.div>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default ComingSoon;
