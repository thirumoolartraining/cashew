import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: 'Message sent', description: 'Thanks! Connect Supabase to enable email delivery.' });
  };

  return (
    <main className="container mx-auto py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Contact</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-3">
          <Input name="name" placeholder="Your name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="phone" type="tel" placeholder="Phone" />
          <Textarea name="message" placeholder="How can we help?" required />
          <Button type="submit">Send</Button>
        </form>
        <aside>
          <div className="rounded-lg border p-6 bg-secondary">
            <div className="font-medium mb-2">Our Office</div>
            <p className="text-sm text-muted-foreground">Mangalore, Karnataka, India</p>
            <div className="mt-4 text-sm text-muted-foreground">Email: sales@rs-enterprises.com • Phone: +91 98765 43210</div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Contact;
