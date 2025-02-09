const fs = require("fs");
const path = require("path");
const { voucherData } = require("../data/vouchers.js");
const { productInfo } = require("../data/products.js");

const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

const cleanDirectory = (directory) => {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file) => {
      const filePath = path.join(directory, file);
      fs.unlinkSync(filePath);
    });
  } else {
    fs.mkdirSync(directory, { recursive: true });
  }
};

// Generate individual product page HTML
const generateProductPage = (name, category, vouchers) => {
  const slug = generateSlug(name);
  const info = productInfo[name] || {
    title: `${name} - Netcup Hosting Solutions`,
    description: `Get the best deals on ${name} with our exclusive voucher codes`,
    features: [],
    content: `<h2>About ${name}</h2><p>Information about this product coming soon.</p>`,
  };

  // Find related products (same category)
  const relatedProducts = voucherData[category].items
    .filter((item) => item.name !== name)
    .map((item) => ({
      name: item.name,
      slug: generateSlug(item.name),
      discount: item.discount,
    }));

  // Find recommended products (different categories)
  const recommendedProducts = Object.entries(voucherData)
    .filter(([cat, _]) => cat !== category)
    .flatMap(([_, data]) =>
      data.items.slice(0, 2).map((item) => ({
        name: item.name,
        slug: generateSlug(item.name),
        discount: item.discount,
        category: data.name,
      }))
    )
    .slice(0, 4);

  const template = `<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${info.title}</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="${info.description}">
    <meta name="keywords" content="netcup, ${slug}, voucher codes, discount codes, hosting">
    <meta name="author" content="Netcup Vouchers">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${info.title}">
    <meta property="og:description" content="${info.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://netcupvoucher.com/${slug}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='80'>🏷️</text></svg>">
    
    <!-- Styles -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #0d1117;
            color: #c9d1d9;
        }
        .card {
            background-color: #161b22;
            border: 1px solid #30363d;
        }
        .card-header {
            background-color: #21262d;
            border-bottom: 1px solid #30363d;
        }
        .navbar {
            background-color: #161b22;
            border-bottom: 1px solid #30363d;
        }
        .code-block {
            background-color: #0d1117;
            border: 1px solid #30363d;
            border-radius: 6px;
            padding: 0.75rem;
            font-family: monospace;
            position: relative;
        }
        .copy-btn {
            position: absolute;
            right: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            transition: opacity 0.2s;
        }
        .code-block:hover .copy-btn {
            opacity: 1;
        }
        .badge-discount {
            background-color: #238636;
        }
        .feature-list {
            background-color: #161b22;
            border: 1px solid #30363d;
            border-radius: 6px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        .breadcrumb-item + .breadcrumb-item::before {
            color: #8b949e;
        }
        .breadcrumb-item a {
            color: #58a6ff;
            text-decoration: none;
        }
        .breadcrumb-item.active {
            color: #c9d1d9;
        }
        @media (max-width: 991px) {
            .mobile-vouchers {
                display: block;
                margin-bottom: 2rem;
            }
            .desktop-vouchers {
                display: none;
            }
        }
        @media (min-width: 992px) {
            .mobile-vouchers {
                display: none;
            }
            .desktop-vouchers {
                display: block;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="/">
                <i class="fas fa-ticket-alt me-2"></i>
                Netcup Vouchers
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Products
                        </a>
                        <ul class="dropdown-menu" id="productsDropdown">
                            <!-- Will be populated by JavaScript -->
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container py-4">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">${name}</li>
            </ol>
        </nav>

        <div class="row">
            <!-- Mobile Vouchers Section -->
            <div class="col-12 mobile-vouchers">
                <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="mb-0">Available Vouchers</h5>
                    </div>
                    <div class="card-body">
                        ${vouchers.codes
                          .map(
                            (code) => `
                            <div class="code-block mb-2">
                                ${code}
                                <button class="btn btn-sm btn-outline-secondary copy-btn">
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        `
                          )
                          .join("")}
                        <div class="alert alert-info mt-3">
                            <i class="fas fa-info-circle me-2"></i>
                            Current discount: ${vouchers.discount}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content Column -->
            <div class="col-lg-8">
                <h1 class="mb-4">${name}</h1>
                
                <!-- Features List -->
                <div class="feature-list">
                    <h3 class="h5 mb-3">Key Features</h3>
                    <ul class="mb-0">
                        ${info.features
                          .map((feature) => `<li>${feature}</li>`)
                          .join("\n                            ")}
                    </ul>
                </div>

                <!-- Main Content -->
                <div class="content mb-4">
                    ${info.content}
                </div>

                <!-- Related Products -->
                ${
                  relatedProducts.length > 0
                    ? `
                <div class="related-products mt-5">
                    <h2 class="h4 mb-4">Similar Products</h2>
                    <div class="row">
                        ${relatedProducts
                          .map(
                            (product) => `
                        <div class="col-md-6 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">
                                        <span class="badge badge-discount">${product.discount}</span>
                                    </p>
                                    <a href="/${product.slug}" class="btn btn-outline-primary btn-sm">Learn More</a>
                                </div>
                            </div>
                        </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                `
                    : ""
                }

                <!-- Recommended Products -->
                <div class="recommended-products mt-5">
                    <h2 class="h4 mb-4">You Might Also Like</h2>
                    <div class="row">
                        ${recommendedProducts
                          .map(
                            (product) => `
                        <div class="col-md-6 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <span class="badge text-bg-secondary mb-2">${product.category}</span>
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">
                                        <span class="badge badge-discount">${product.discount}</span>
                                    </p>
                                    <a href="/${product.slug}" class="btn btn-outline-primary btn-sm">Learn More</a>
                                </div>
                            </div>
                        </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>

            <!-- Desktop Sidebar -->
            <div class="col-lg-4">
                <div class="card sticky-top desktop-vouchers" style="top: 2rem;">
                    <div class="card-header">
                        <h5 class="mb-0">Available Vouchers</h5>
                    </div>
                    <div class="card-body">
                        ${vouchers.codes
                          .map(
                            (code) => `
                            <div class="code-block mb-2">
                                ${code}
                                <button class="btn btn-sm btn-outline-secondary copy-btn">
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        `
                          )
                          .join("")}
                        <div class="alert alert-info mt-3">
                            <i class="fas fa-info-circle me-2"></i>
                            Current discount: ${vouchers.discount}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Copy button functionality
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const code = this.parentElement.textContent.trim();
                navigator.clipboard.writeText(code);
                
                const icon = this.querySelector('i');
                icon.classList.remove('fa-copy');
                icon.classList.add('fa-check');
                setTimeout(() => {
                    icon.classList.remove('fa-check');
                    icon.classList.add('fa-copy');
                }, 1000);
            });
        });

        // Add products dropdown population
        const populateProductsDropdown = () => {
            const dropdown = document.getElementById('productsDropdown');
            const voucherData = ${JSON.stringify(voucherData)};
            
            Object.entries(voucherData).forEach(([category, data]) => {
                const header = document.createElement('li');
                header.innerHTML = \`<h6 class="dropdown-header">\${data.name}</h6>\`;
                dropdown.appendChild(header);
                
                data.items.forEach(item => {
                    const li = document.createElement('li');
                    const slug = item.name.toLowerCase().replace(/\\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    li.innerHTML = \`<a class="dropdown-item" href="/\${slug}">\${item.name}</a>\`;
                    dropdown.appendChild(li);
                });
                
                if (Object.keys(voucherData).indexOf(category) !== Object.keys(voucherData).length - 1) {
                    const divider = document.createElement('li');
                    divider.innerHTML = '<hr class="dropdown-divider">';
                    dropdown.appendChild(divider);
                }
            });
        };
        // Initialize dropdown
        populateProductsDropdown();
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  const pagesDir = path.join(process.cwd(), "pages");
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
  }

  try {
    // Write only to pages directory
    fs.writeFileSync(path.join(pagesDir, `${slug}.html`), template);
    return slug;
  } catch (error) {
    console.error(`Error writing file for ${name}:`, error);
    process.exit(1);
  }
};

// Main function to generate all pages
const generatePages = () => {
  try {
    const pages = [];

    // Clean up existing pages directory
    const pagesDir = path.join(process.cwd(), "pages");
    cleanDirectory(pagesDir);

    // Generate new pages
    Object.entries(voucherData).forEach(([category, data]) => {
      data.items.forEach((item) => {
        const slug = generateProductPage(item.name, category, item);
        pages.push({ name: item.name, slug, category });
      });
    });

    // Move index.html to pages directory as well
    if (fs.existsSync("index.html")) {
      fs.copyFileSync("index.html", path.join(pagesDir, "index.html"));
    }

    // Keep the original sitemap URLs (without /pages/)
    const today = new Date().toISOString().split("T")[0];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://netcupvoucher.com/</loc>
        <priority>1.0</priority>
        <changefreq>daily</changefreq>
        <lastmod>${today}</lastmod>
    </url>
    ${pages
      .map(
        (page) => `
    <url>
        <loc>https://netcupvoucher.com/${page.slug}</loc>
        <priority>0.8</priority>
        <changefreq>daily</changefreq>
        <lastmod>${today}</lastmod>
    </url>`
      )
      .join("")}
</urlset>`;

    fs.writeFileSync("sitemap.xml", sitemap);

    // Update main page with categorized links
    const mainPageLinks = `
        <div class="row mt-4">
            ${Object.entries(voucherData)
              .map(
                ([category, data]) => `
                <div class="col-12 mb-4">
                    <h2 class="h3 mb-3">${data.name}</h2>
                    <div class="list-group">
                        ${data.items
                          .map(
                            (item) => `
                            <a href="/${generateSlug(item.name)}" 
                               class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                <span>
                                    <i class="${data.icon} me-2"></i>
                                    ${item.name}
                                </span>
                                <span>
                                    <span class="badge badge-discount me-2">${
                                      item.discount
                                    }</span>
                                    <i class="fas fa-chevron-right"></i>
                                </span>
                            </a>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
        `;

    let indexContent = fs.readFileSync("index.html", "utf8");
    indexContent = indexContent.replace(
      "</div>\n\n    <script>",
      `${mainPageLinks}\n    </div>\n\n    <script>`
    );
    fs.writeFileSync("index.html", indexContent);

    console.log("Successfully generated:");
    console.log(` - ${pages.length} product pages`);
    console.log(" - sitemap.xml");
    console.log(" - updated index.html");
  } catch (error) {
    console.error("Error in page generation:", error);
    process.exit(1);
  }
};

module.exports = { generatePages };

// Run the generator if this script is called directly
if (require.main === module) {
  generatePages();
}
