import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { formatPrice } from '@/utils/currency';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const { currency } = useCurrency();
  const [qty, setQty] = useState<number>(product?.moqKg ?? 10);

  if (!product) return <main className="container mx-auto py-10">Product not found</main>;

  const onAdd = () => {
    const res = addItem(product, qty);
    if (!res.ok) toast({ title: 'MOQ not met', description: res.message, variant: 'destructive' });
    else toast({ title: 'Added to cart', description: `${product.name} • ${qty}kg` });
  };

  return (
    <main className="container mx-auto py-10 grid gap-8 lg:grid-cols-2">
      <div>
        <div className="grid grid-cols-3 gap-3">
          <img src={product.images[0]} alt={`${product.name} main`} className="col-span-3 rounded-md object-cover w-full h-80" />
          {product.images.slice(1).map((img, idx) => (
            <img key={idx} src={img} alt={`${product.name} ${idx+2}`} className="rounded-md object-cover w-full h-24" />
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold">{product.name}</h1>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.badges.map(b => <Badge key={b}>{b}</Badge>)}
          <Badge variant="secondary">MOQ 10kg</Badge>
        </div>
        <div className="mt-4 text-xl font-semibold">{formatPrice(product.pricePerKgINR, currency)} / kg</div>
        <p className="mt-2 text-muted-foreground max-w-prose">{product.description}</p>
        <div className="mt-4 flex items-center gap-3">
          <Input type="number" min={product.moqKg} step={1} value={qty} onChange={(e)=> setQty(Number(e.target.value))} />
          <Button onClick={onAdd} disabled={qty < product.moqKg}>Add to Cart</Button>
          <Button asChild variant="premium"><Link to="/checkout">Buy Now</Link></Button>
        </div>
        <div className="text-xs text-muted-foreground mt-2">For &gt;100kg or container loads, request an export quote.</div>
        <Tabs defaultValue="description" className="mt-8">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & MOQ</TabsTrigger>
            <TabsTrigger value="certs">Certifications</TabsTrigger>
          </TabsList>
          <TabsContent value="description"><p className="text-sm text-muted-foreground">{product.description}</p></TabsContent>
          <TabsContent value="specs">
            <ul className="text-sm text-muted-foreground space-y-1">
              {Object.entries(product.specs).map(([k,v]) => <li key={k}><span className="font-medium text-foreground">{k}:</span> {v}</li>)}
            </ul>
          </TabsContent>
          <TabsContent value="shipping"><p className="text-sm text-muted-foreground">Domestic rates calculated at checkout. Export freight quoted separately. MOQ per product is {product.moqKg}kg.</p></TabsContent>
          <TabsContent value="certs"><p className="text-sm text-muted-foreground">ISO • HACCP • Organic • FSSAI — download certificates from the Certifications page.</p></TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default ProductDetail;
