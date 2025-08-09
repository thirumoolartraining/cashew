import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ExportPage = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: 'Export RFQ submitted', description: 'Thanks! Connect Supabase to send and track RFQs.' });
  };

  return (
    <main className="container mx-auto py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Export & Bulk Orders</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">Bulk shipments (≥100kg), private label, and container loads supported. HS Code: 08013200. Certifications: ISO • HACCP • Organic • FSSAI.</p>
      <section className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-semibold mb-2">Request Export Quote</h2>
          <form onSubmit={onSubmit} className="space-y-3">
            <Input required name="company" placeholder="Company name" />
            <div className="grid grid-cols-2 gap-3">
              <Input required name="email" type="email" placeholder="Email" />
              <Input required name="country" placeholder="Country" />
            </div>
            <Input name="products" placeholder="Products & grades (e.g., Premium W320)" />
            <Input name="quantity" type="number" min={100} step={10} placeholder="Quantity in kg (≥100)" />
            <Input name="incoterms" placeholder="Incoterms (e.g., FOB, CIF)" />
            <Input name="port" placeholder="Port (e.g., Nhava Sheva)" />
            <Textarea name="message" placeholder="Requirements & packaging" />
            <div className="text-xs text-muted-foreground">Attachments & emails will be enabled once Supabase is connected.</div>
            <Button type="submit" variant="hero">Submit RFQ</Button>
          </form>
        </div>
        <aside className="rounded-lg border p-6 bg-secondary">
          <h3 className="font-semibold mb-2">Export Capabilities</h3>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
            <li>Packaging: 10kg / 25kg vacuum, nitrogen-flushed</li>
            <li>OEM & Private Label options</li>
            <li>Container shipments with temperature control</li>
            <li>Traceability from farm to pack</li>
          </ul>
        </aside>
      </section>
    </main>
  );
};

export default ExportPage;
