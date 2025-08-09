import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Heart, IndianRupee, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartSheet from '@/components/cart/CartSheet';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import React, { useEffect } from 'react';

const Header: React.FC = () => {
  const { currency, setCurrency } = useCurrency();
  const { count } = useCart();
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'R S Enterprises — Premium Cashews',
      '/products': 'Products — R S Enterprises',
      '/export': 'Export — R S Enterprises',
      '/certifications': 'Certifications — R S Enterprises',
      '/about': 'About — R S Enterprises',
      '/contact': 'Contact — R S Enterprises',
      '/cart': 'Cart — R S Enterprises',
      '/checkout': 'Checkout — R S Enterprises',
      '/account': 'Account — R S Enterprises',
    };
    document.title = titles[location.pathname] || 'R S Enterprises';
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-bold">RS</div>
          <div className="leading-tight">
            <div className="font-serif text-lg font-bold">R S Enterprises</div>
            <div className="text-xs text-muted-foreground">From Farm to Flavor</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ['Home','/'],
            ['About','/about'],
            ['Products','/products'],
            ['Export','/export'],
            ['Certifications','/certifications'],
            ['Contact','/contact'],
          ].map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant={currency==='INR'?'premium':'outline'} size="icon" aria-label="INR" onClick={() => setCurrency('INR')}>
            <IndianRupee />
          </Button>
          <Button variant={currency==='USD'?'premium':'outline'} size="icon" aria-label="USD" onClick={() => setCurrency('USD')}>
            <DollarSign />
          </Button>
          <Button variant="outline" size="icon" aria-label="Search"><Search /></Button>
          <Button variant="outline" size="icon" aria-label="Wishlist"><Heart /></Button>
          <div className="relative">
            <CartSheet />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs text-accent-foreground">
                {count}
              </span>
            )}
          </div>
          <Button asChild variant="outline" size="icon" aria-label="Account"><Link to="/account"><User /></Link></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
