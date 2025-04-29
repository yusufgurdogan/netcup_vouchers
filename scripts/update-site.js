// scripts/update-site.js
const fs = require('fs');
const path = require('path');
const { voucherData } = require('../data/vouchers.js');

// Function to copy the netcup-voucher-image.png to the pages directory
const copyOpenGraphImage = () => {
  const sourcePath = path.join(process.cwd(), 'data', 'netcup-voucher-image.png');
  const pagesDir = path.join(process.cwd(), 'pages');
  const destinationPath = path.join(pagesDir, 'netcup-voucher-image.png');
  
  try {
    // Check if source image exists
    if (fs.existsSync(sourcePath)) {
      // Ensure pages directory exists
      if (!fs.existsSync(pagesDir)) {
        fs.mkdirSync(pagesDir, { recursive: true });
      }
      
      // Copy the file
      fs.copyFileSync(sourcePath, destinationPath);
      console.log('Successfully copied netcup-voucher-image.png for Open Graph');
    } else {
      console.warn('Warning: netcup-voucher-image.png not found in data directory');
    }
  } catch (error) {
    console.warn('Warning: Could not copy Open Graph image:', error.message);
  }
};

// Function to copy the icon.png to the pages directory for navbar logo
const copyIconImage = () => {
  const sourcePath = path.join(process.cwd(), 'data', 'icon.png');
  const pagesDir = path.join(process.cwd(), 'pages');
  const destinationPath = path.join(pagesDir, 'icon.png');
  
  try {
    // Check if source image exists
    if (fs.existsSync(sourcePath)) {
      // Ensure pages directory exists
      if (!fs.existsSync(pagesDir)) {
        fs.mkdirSync(pagesDir, { recursive: true });
      }
      
      // Copy the file
      fs.copyFileSync(sourcePath, destinationPath);
      console.log('Successfully copied icon.png for navbar logo');
    } else {
      console.warn('Warning: icon.png not found in data directory');
    }
  } catch (error) {
    console.warn('Warning: Could not copy icon image:', error.message);
  }
};

// Function to create the manifest.json file in the favicon directory
const createManifestJson = () => {
  const faviconDir = path.join(process.cwd(), 'pages', 'favicon');
  const manifestPath = path.join(faviconDir, 'manifest.json');
  
  // Create manifest JSON
  const manifest = {
    "name": "Netcup Voucher Codes",
    "short_name": "NetcupVouchers",
    "icons": [
      {
        "src": "/favicon/android-icon-36x36.png",
        "sizes": "36x36",
        "type": "image/png",
        "density": "0.75"
      },
      {
        "src": "/favicon/android-icon-48x48.png",
        "sizes": "48x48",
        "type": "image/png",
        "density": "1.0"
      },
      {
        "src": "/favicon/android-icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
        "density": "1.5"
      },
      {
        "src": "/favicon/android-icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png",
        "density": "2.0"
      },
      {
        "src": "/favicon/android-icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
        "density": "3.0"
      },
      {
        "src": "/favicon/android-icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "density": "4.0"
      }
    ],
    "theme_color": "#0d1117",
    "background_color": "#0d1117",
    "start_url": "/?source=pwa",
    "display": "standalone",
    "orientation": "portrait"
  };
  
  try {
    // Ensure favicon directory exists
    if (!fs.existsSync(faviconDir)) {
      fs.mkdirSync(faviconDir, { recursive: true });
    }
    
    // Write manifest file
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('Successfully created manifest.json in favicon directory');
  } catch (error) {
    console.warn('Warning: Could not create manifest.json:', error.message);
  }
};

const updateSite = () => {
  try {
    // Try multiple possible template locations
    const possiblePaths = [
      process.env.TEMPLATE_PATH,
      path.join(process.cwd(), 'templates', 'template.html'),
      path.join(process.cwd(), 'template.html'),
      path.join(__dirname, '..', 'templates', 'template.html'),
      path.join(__dirname, '..', 'template.html')
    ];

    let templatePath;
    let templateContent;

    for (const p of possiblePaths) {
      if (p && fs.existsSync(p)) {
        console.log('Found template at:', p);
        try {
          templateContent = fs.readFileSync(p, 'utf8');
          if (templateContent.includes('// VOUCHER_DATA_PLACEHOLDER')) {
            templatePath = p;
            break;
          }
        } catch (err) {
          console.log(`Couldn't read template at ${p}:`, err.message);
        }
      }
    }

    if (!templatePath || !templateContent) {
      throw new Error('Valid template file not found in any of the expected locations');
    }
    
    // Check if Blog link is missing and add it if needed
    if (!templateContent.includes('<a class="nav-link" href="/blog">Blog</a>')) {
      // Add Blog link after Products dropdown
      templateContent = templateContent.replace(
        '</ul>\n                    </li>',
        '</ul>\n                    </li>\n                    <li class="nav-item">\n                        <a class="nav-link" href="/blog">Blog</a>\n                    </li>'
      );
      
      // Save the updated template
      fs.writeFileSync(templatePath, templateContent);
      console.log('Added Blog navigation link to template.html');
    }
    
    // Inject voucher data
    const updatedHtml = templateContent.replace(
      '// VOUCHER_DATA_PLACEHOLDER',
      `const voucherData = ${JSON.stringify(voucherData, null, 2)};`
    );

    // Fix favicon paths
    const fixedFaviconPaths = updatedHtml
      .replace(/href="\/favicon-(\d+)x(\d+)\.png"/g, 'href="/favicon/favicon-$1x$2.png"')
      .replace(/href="\/android-icon-(\d+)x(\d+)\.png"/g, 'href="/favicon/android-icon-$1x$2.png"')
      .replace(/href="\/apple-icon-(\d+)x(\d+)\.png"/g, 'href="/favicon/apple-icon-$1x$2.png"')
      .replace(/href="\/ms-icon-(\d+)x(\d+)\.png"/g, 'href="/favicon/ms-icon-$1x$2.png"')
      .replace(/href="\/manifest\.json"/g, 'href="/favicon/manifest.json"')
      .replace(/content="\/ms-icon-(\d+)x(\d+)\.png"/g, 'content="/favicon/ms-icon-$1x$2.png"');
    
    // Fix the slug generation issue in the JavaScript code
    const fixedSlugJs = fixedFaviconPaths.replace(
      "const slug = item.name.toLowerCase().replace(/\\s+/g, '-').replace(/[^a-z0-9-]/g, '');",
      "const slug = item.name.toLowerCase().replace(/\\s+/g, '-').replace(/[^a-z0-9-]/g, '');"
    );

    // Write the fixed HTML instead of the original updatedHtml
    fs.writeFileSync('index.html', fixedSlugJs);
    console.log('Successfully updated index.html');
    
    // Copy images
    copyOpenGraphImage();
    copyIconImage();
    
    // Create manifest.json in favicon directory
    createManifestJson();
    
    // Create robots.txt in root directory and pages directory
    const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://netcupvoucher.com/sitemap.xml`;
    fs.writeFileSync('robots.txt', robotsTxt);
    fs.writeFileSync(path.join(process.cwd(), 'pages', 'robots.txt'), robotsTxt);
    console.log('Successfully created robots.txt');
    
  } catch (error) {
    console.error('Error updating site:', error);
    console.error('Error details:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
};

updateSite();