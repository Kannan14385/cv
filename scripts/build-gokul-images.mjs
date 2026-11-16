import sharp from 'sharp';

async function generate() {
  const portrait = await sharp('public/assets/gokul-portrait.jpg')
    .resize({ height: 580 })
    .png()
    .toBuffer();

  const bgSvg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g" cx="78%" cy="45%" r="45%">
          <stop offset="0%" stop-color="#e5132b" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#e5132b" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#g)"/>
    </svg>
  `);

  const textSvg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <text x="72" y="270" font-family="Impact, 'Arial Narrow', sans-serif" font-size="96" fill="#f4f1ec" letter-spacing="4">GOKULA KANNAN</text>
      <text x="78" y="330" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="14">THE SERIES</text>
      <text x="78" y="395" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="4">WORDPRESS &amp; WEB DEVELOPER • DATA ANALYST • MCA</text>
    </svg>
  `);

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: '#07070a'
    }
  })
  .composite([
    { input: bgSvg },
    { input: portrait, gravity: 'southeast' },
    { input: textSvg }
  ])
  .jpeg({ quality: 85 })
  .toFile('public/assets/og-image.jpg');

  console.log('OG image created successfully');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
