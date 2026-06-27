import https from 'https';
const products = [
  {id: 1, url: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&q=80&w=800'},
  {id: 2, url: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=800'},
  {id: 4, url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800'},
  {id: 6, url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'},
  {id: 8, url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=800'},
  {id: 9, url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800'},
  {id: 10, url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800'},
  {id: 12, url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800'},
  {id: 14, url: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800'},
  {id: 15, url: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?auto=format&fit=crop&q=80&w=800'},
  {id: 16, url: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=800'},
  {id: 17, url: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cb2?auto=format&fit=crop&q=80&w=800'},
  {id: 18, url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800'},
  {id: 19, url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800'},
  {id: 22, url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800'},
  {id: 24, url: 'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?auto=format&fit=crop&q=80&w=800'},
  {id: 25, url: 'https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=800'},
  {id: 26, url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'},
  {id: 27, url: 'https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&q=80&w=800'},
  {id: 28, url: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&q=80&w=800'},
  {id: 29, url: 'https://images.unsplash.com/photo-1508344928928-7137b26de6aa?auto=format&fit=crop&q=80&w=800'},
  {id: 30, url: 'https://images.unsplash.com/photo-1623862215284-ad4b986e80b4?auto=format&fit=crop&q=80&w=800'},
  {id: 31, url: 'https://images.unsplash.com/photo-1584859871789-9a2d6a592ea6?auto=format&fit=crop&q=80&w=800'},
  {id: 32, url: 'https://images.unsplash.com/photo-1638202366114-1ae023fcbede?auto=format&fit=crop&q=80&w=800'}
];

async function check() {
  for (const product of products) {
    try {
      const resp = await fetch(product.url, { method: 'HEAD', signal: AbortSignal.timeout(2000) });
      if (resp.status === 404) console.log('404:', product.id);
    } catch(e) {
      console.log('Error:', product.id);
    }
  }
}
check();
