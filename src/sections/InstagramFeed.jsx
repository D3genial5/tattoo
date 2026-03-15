import { useEffect, useState } from 'react';

// Feed de Instagram usando embed oficial
// Requiere variables de entorno VITE:
// - VITE_IG_USER_ID (opcional con Graph API Business)
// - VITE_IG_TOKEN (obligatorio): Access Token (Graph API o Basic Display)
// - VITE_IG_EXCLUDE_PERMALINKS (opcional): lista separada por comas de permalinks a excluir (pinned)
export default function InstagramFeed() {
  const IG_USER_ID = import.meta.env.VITE_IG_USER_ID;
  const IG_TOKEN = import.meta.env.VITE_IG_TOKEN;
  const EXCLUDE = (import.meta.env.VITE_IG_EXCLUDE_PERMALINKS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const [reels, setReels] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!IG_TOKEN) {
      setLoading(false);
      setError('Falta VITE_IG_TOKEN');
      return;
    }

    const controller = new AbortController();

    async function fetchReels() {
      try {
        // Preferimos Graph API Business si hay IG_USER_ID
        let url;
        if (IG_USER_ID) {
          // Graph API (facebook.com): devuelve media_product_type
          url = `https://graph.facebook.com/v20.0/${IG_USER_ID}/media?fields=id,media_type,media_product_type,permalink,thumbnail_url,timestamp&access_token=${IG_TOKEN}&limit=50`;
        } else {
          // Basic Display (instagram.com): no tiene media_product_type, filtramos por permalink /reel/
          url = `https://graph.instagram.com/me/media?fields=id,media_type,permalink,thumbnail_url,timestamp&access_token=${IG_TOKEN}&limit=50`;
        }

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        const items = Array.isArray(data.data) ? data.data : [];
        const onlyReels = items
          .filter((m) => m.media_type === 'VIDEO')
          .filter((m) =>
            // Si existe media_product_type, lo usamos; si no, detectamos por permalink
            (m.media_product_type ? (m.media_product_type === 'REELS' || m.media_product_type === 'REEL') : (m.permalink || '').includes('/reel/'))
          )
          .filter((m) => !EXCLUDE.some((ex) => (m.permalink || '').includes(ex)));

        // Ordenar por fecha desc y tomar 20
        onlyReels.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setReels(onlyReels.slice(0, 20));
      } catch (err) {
        setError(err.message || 'Error cargando reels');
      } finally {
        setLoading(false);
      }
    }

    fetchReels();

    return () => controller.abort();
  }, [IG_USER_ID, IG_TOKEN]);

  // Cargar el script de embed y procesar cuando haya reels
  useEffect(() => {
    if (!reels.length) return;

    function processEmbeds() {
      if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
        window.instgrm.Embeds.process();
      }
    }

    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const s = document.createElement('script');
      s.async = true;
      s.defer = true;
      s.src = 'https://www.instagram.com/embed.js';
      s.onload = processEmbeds;
      document.body.appendChild(s);
    } else {
      processEmbeds();
    }
  }, [reels]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', color: '#bbb' }}>Cargando reels…</div>
    );
  }

  if (error && !reels.length) {
    return (
      <div style={{ textAlign: 'center', color: '#bbb' }}>
        No se pudo cargar el feed de Instagram. {error}
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: 580, margin: '0 auto' }}>
      {reels.map((item) => (
        <blockquote
          key={item.id}
          className="instagram-media"
          data-instgrm-permalink={item.permalink}
          data-instgrm-version="14"
          style={{
            background: '#000',
            border: 0,
            margin: '0 auto',
            maxWidth: '540px',
            minWidth: '320px',
            width: '100%'
          }}
        />
      ))}
    </div>
  );
}
