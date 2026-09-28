/**
 * Shared Event Discovery System
 * 
 * Both Activities and Gallery pages import from this single module.
 * Events are auto-discovered from src/assets/upakrm/ subfolders.
 * 
 * To add a new event:
 *   1. Create a folder in src/assets/upakrm/
 *   2. Drop photos inside it
 *   3. Restart dev server (Vite picks up new files on restart)
 *   4. Done — no code changes needed
 */

// ─── Category detection from folder name ───
const getCategory = (folderName) => {
  const name = folderName.toLowerCase();
  if (name.includes('स्वातंत्र्य') || name.includes('प्रजासत्ताक') || name.includes('जयंती') || name.includes('दिन')) return 'राष्ट्रीय दिन';
  if (name.includes('क्रीडा')) return 'क्रीडा';
  if (name.includes('स्पर्धा')) return 'स्पर्धा';
  if (name.includes('वाचन') || name.includes('शैक्षणिक') || name.includes('पाठ्यपुस्तक')) return 'शैक्षणिक';
  if (name.includes('सांस्कृतिक') || name.includes('स्नेहसंमेलन')) return 'सांस्कृतिक';
  if (name === 'rakhi') return 'सांस्कृतिक';
  return 'इतर';
};

// ─── Display title from folder name ───
const getTitle = (folderName) => {
  if (folderName.toLowerCase() === 'rakhi') return 'सांस्कृतिक कार्यक्रम';
  return folderName;
};

// ─── Discover all images via Vite glob ───
const modules = import.meta.glob(
  '/src/assets/upakrm/**/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
);

// ─── Build event map ───
const eventMap = new Map();

for (const path in modules) {
  const relative = path.replace('/src/assets/upakrm/', '');
  const slashIdx = relative.indexOf('/');
  if (slashIdx === -1) continue; // skip files not in a subfolder

  const folderName = relative.substring(0, slashIdx);
  const fileName = relative.substring(slashIdx + 1);
  const url = modules[path]; // Vite-resolved URL

  if (!eventMap.has(folderName)) {
    eventMap.set(folderName, {
      id: folderName,
      title: getTitle(folderName),
      category: getCategory(folderName),
      images: [],
      cover: url,
      coverPriority: 99, // lower number = higher priority
    });
  }

  const event = eventMap.get(folderName);
  event.images.push(url);

  // Cover image priority: cover(1) > primary(2) > featured(3) > first-found(99)
  const lcName = fileName.toLowerCase();
  if (lcName.startsWith('cover')) {
    event.cover = url;
    event.coverPriority = 1;
  } else if (lcName.startsWith('primary') && event.coverPriority > 2) {
    event.cover = url;
    event.coverPriority = 2;
  } else if (lcName.startsWith('featured') && event.coverPriority > 3) {
    event.cover = url;
    event.coverPriority = 3;
  }
  // If coverPriority is still 99, the first image assigned during creation stays
}

// ─── Export as sorted array ───
export const allEvents = Array.from(eventMap.values());

// ─── Export unique categories ───
export const categories = ['सर्व', ...new Set(allEvents.map(e => e.category))];

// ─── Featured event IDs (folder names) ───
const FEATURED_IDS = ['पाठ्यपुस्तक व गणवेश वाटप कार्यक्रम', 'Rakhi', 'स्वातंत्र्य दिन'];

export const featuredEvents = FEATURED_IDS
  .map(id => allEvents.find(e => e.id === id))
  .filter(Boolean);

export const nonFeaturedEvents = allEvents.filter(e => !FEATURED_IDS.includes(e.id));
