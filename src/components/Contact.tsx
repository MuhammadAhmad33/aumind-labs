import { useState } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
  };

  return (
    <section id="contact" className="section-padding bg-foreground text-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: bold pitch */}
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-6 text-background/70">Let's build</div>
            <h2 className="display-xl mb-10">
              Have an <em className="italic text-primary">idea?</em>
              <br />Let's ship it.
            </h2>
            <p className="text-lg md:text-xl text-background/75 max-w-md mb-10 font-display">
              Tell us where you're stuck. We'll reply within 24 hours with a clear next step —
              not a sales script.
            </p>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-3 rounded-full bg-background text-foreground px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book a free 30-min consult
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="mt-16 space-y-2 font-mono text-xs uppercase tracking-[0.18em] text-background/60">
              <div>hello@aumindlabs.com</div>
              <div>aumindlabs.com</div>
              <div>Remote · Worldwide</div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={onSubmit} className="col-span-12 md:col-span-6 space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="name" placeholder="Your name" value={form.name} onChange={onChange} required
                className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 h-12 text-base placeholder:text-background/50 focus-visible:ring-0 focus-visible:border-primary"
              />
              <Input
                name="company" placeholder="Company" value={form.company} onChange={onChange}
                className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 h-12 text-base placeholder:text-background/50 focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>
            <Input
              type="email" name="email" placeholder="Email address" value={form.email} onChange={onChange} required
              className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 h-12 text-base placeholder:text-background/50 focus-visible:ring-0 focus-visible:border-primary"
            />
            <Textarea
              name="message" placeholder="What are you building?" rows={6} value={form.message} onChange={onChange} required
              className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 text-base placeholder:text-background/50 focus-visible:ring-0 focus-visible:border-primary resize-none pt-4"
            />
            <button
              type="submit" disabled={sending}
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-6 py-3 hover:bg-background hover:text-foreground transition-colors disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
