import { useState, useRef } from "react";
import EmailTemplate from "@/components/EmailTemplate";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const emailRef = useRef<HTMLDivElement>(null);

  const handleCopyHTML = () => {
    if (emailRef.current) {
      const html = emailRef.current.innerHTML;
      navigator.clipboard.writeText(html).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Email Template</h1>
            <p className="text-muted-foreground text-sm mt-1">Preview and copy your HTML email</p>
          </div>
          <Button onClick={handleCopyHTML}>
            {copied ? "✓ Copied!" : "Copy HTML"}
          </Button>
        </div>

        <div
          ref={emailRef}
          className="rounded-lg border border-border overflow-hidden shadow-sm"
        >
          <EmailTemplate />
        </div>
      </div>
    </div>
  );
};

export default Index;
