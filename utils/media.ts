const photoFiles = import.meta.glob<string>('../assets/ts1789889675508/*.jpg', { eager: true, query: '?url', import: 'default' })
const videoFiles = import.meta.glob<string>('../assets/ts1789889322000/*.mp4', { eager: true, query: '?url', import: 'default' })
const featured = ['WA0055', 'WA0006', 'WA0025', 'WA0019', 'WA0052', 'WA0071']
const photoEntries = Object.entries(photoFiles).sort(([a], [b]) => {
  const rank = (path: string) => { const i = featured.findIndex(name => path.includes(name)); return i < 0 ? 99 : i }
  return rank(a) - rank(b) || a.localeCompare(b)
})
export const photos = photoEntries.map(([path, src], index) => ({
  id: path, src, title: `Outreach moment ${String(index + 1).padStart(2, '0')}`,
  alt: `Almannan Charity Foundation community outreach photograph ${index + 1}`,
}))
export const videos = Object.entries(videoFiles).sort(([a], [b]) => a.localeCompare(b)).map(([path, src], index) => ({
  id: path, src, title: `From the field · ${String(index + 1).padStart(2, '0')}`,
}))
