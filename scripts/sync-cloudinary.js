/*
  Sync Cloudinary assets into js/portfolio-items.json
  Usage (PowerShell):
  $env:CLOUDINARY_CLOUD_NAME='xxx'; $env:CLOUDINARY_API_KEY='xxx'; $env:CLOUDINARY_API_SECRET='xxx'; node scripts/sync-cloudinary.js
*/

const fs = require('node:fs/promises');
const path = require('node:path');

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;
const PREFIX = process.env.CLOUDINARY_PREFIX || '';
const MAX_ITEMS = Number(process.env.CLOUDINARY_MAX_ITEMS || 120);

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('Missing Cloudinary credentials. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.');
  process.exit(1);
}

function encodePublicId(publicId) {
  return publicId
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/');
}

function inferType(resource) {
  if (resource.resource_type === 'video') {
    if (['mp4', 'mov', 'webm', 'm4v', 'avi', 'mkv'].includes((resource.format || '').toLowerCase())) return 'Edicion de video';
    return 'Produccion audiovisual';
  }
  const id = (resource.public_id || '').toLowerCase();
  if (id.includes('logo') || id.includes('brand')) return 'Branding';
  if (id.includes('post') || id.includes('social') || id.includes('feed')) return 'Diseno de post';
  return 'Diseno grafico';
}

function humanTitle(publicId) {
  const raw = publicId.split('/').pop() || publicId;
  const cleaned = raw.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return cleaned.length > 2 ? cleaned : `Pieza ${publicId}`;
}

function isExcludedAsset(publicId) {
  const id = (publicId || '').toLowerCase();
  if (!id) return true;

  // Cloudinary default samples and sample-like placeholders
  if (id.startsWith('samples/')) return true;
  if (id.startsWith('sample/')) return true;
  if (id.includes('cld-sample')) return true;
  if (id === 'main-sample') return true;

  return false;
}

async function fetchResources(resourceType) {
  const out = [];
  let nextCursor = null;
  const targetRaw = MAX_ITEMS * 3;

  while (out.length < targetRaw) {
    const params = new URLSearchParams({
      type: 'upload',
      max_results: '100',
      direction: 'desc',
    });

    if (PREFIX) params.set('prefix', PREFIX);
    if (nextCursor) params.set('next_cursor', nextCursor);

    const endpoint = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/${resourceType}?${params.toString()}`;
    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Cloudinary API error (${resourceType}): ${res.status} ${text}`);
    }

    const data = await res.json();
    const resources = Array.isArray(data.resources) ? data.resources : [];
    out.push(...resources);

    nextCursor = data.next_cursor || null;
    if (!nextCursor || resources.length === 0) break;
  }

  return out.slice(0, MAX_ITEMS);
}

async function main() {
  const [images, videos] = await Promise.all([
    fetchResources('image'),
    fetchResources('video'),
  ]);

  const merged = [...images, ...videos]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .filter((resource) => !isExcludedAsset(resource.public_id))
    .slice(0, MAX_ITEMS)
    .map((resource) => {
      const publicId = resource.public_id;
      const encodedId = encodePublicId(publicId);

      const preview = resource.resource_type === 'video'
        ? `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0/${encodedId}.jpg`
        : resource.secure_url;

      return {
        title: humanTitle(publicId),
        type: inferType(resource),
        image: preview,
        link: resource.secure_url,
        format: resource.format || '',
        resourceType: resource.resource_type,
        publicId,
        createdAt: resource.created_at,
      };
    });

  const outputPath = path.resolve(__dirname, '..', 'js', 'portfolio-items.json');
  await fs.writeFile(outputPath, JSON.stringify(merged, null, 2), 'utf8');

  console.log(`Synced ${merged.length} assets -> ${outputPath}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
