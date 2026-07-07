async function fetchImages() {
  const urls = [
    'https://unsplash.com/photos/a-couple-of-people-standing-in-a-boxing-ring-photo-reddfrancisco-2W-6-r3m26Q',
    'https://unsplash.com/photos/two-men-grappling-on-a-mat-with-spectators-watching-n_5p2R1H18A'
  ];
  for (const url of urls) {
    const r = await fetch(url);
    const t = await r.text();
    const match = t.match(/https:\/\/images\.unsplash\.com\/photo-[^\\x22\x27\?]+/);
    console.log(match ? match[0] : 'Not found');
  }
}
fetchImages();
