const Certifications = () => {
  return (
    <main className="container mx-auto py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Certifications</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">We maintain stringent quality standards. Download our certificates below.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { name: 'ISO 22000', file: '#' },
          { name: 'HACCP', file: '#' },
          { name: 'Organic', file: '#' },
          { name: 'FSSAI', file: '#' },
        ].map(doc => (
          <a key={doc.name} href={doc.file} className="rounded-lg border p-6 hover:border-primary transition-colors">
            <div className="font-medium">{doc.name}</div>
            <div className="text-sm text-muted-foreground">Download PDF</div>
          </a>
        ))}
      </div>
      <div className="mt-8 text-sm text-muted-foreground">HS Codes: 08013200 (Cashew kernels), 200819 (Nut preparations)</div>
    </main>
  );
};

export default Certifications;
