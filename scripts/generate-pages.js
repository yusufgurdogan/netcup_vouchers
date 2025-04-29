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
    // Don't delete the favicon directory or its contents or image files we need
    const preserveFiles = ['favicon', 'icon.png', 'netcup-voucher-image.png', 'robots.txt', 'sitemap.xml', 'blog'];
    
    fs.readdirSync(directory).forEach((file) => {
      if (!preserveFiles.includes(file)) {
        const filePath = path.join(directory, file);
        if (fs.lstatSync(filePath).isDirectory()) {
          if (file !== 'favicon' && file !== 'blog') {
            // Recursively delete subdirectories except favicon and blog
            cleanDirectory(filePath);
            fs.rmdirSync(filePath);
          }
        } else {
          fs.unlinkSync(filePath);
        }
      }
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

  // Find recommended products (different categories) - enhanced to include more diversity
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

  // Generate schema.org JSON-LD markup for the product
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": info.description,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Netcup GmbH"
      },
      "discount": vouchers.discount
    }
  };

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
    <meta property="og:image" content="https://netcupvoucher.com/netcup-voucher-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${info.title}">
    <meta name="twitter:description" content="${info.description}">
    <meta name="twitter:image" content="https://netcupvoucher.com/netcup-voucher-image.png">
    
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#0d1117">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#0d1117">
    
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
        .navbar-brand img {
            height: 24px;
            width: auto;
            margin-right: 0.5rem;
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
        @media (max-width: 576px) {
            .card-header {
                flex-direction: column;
                align-items: flex-start;
            }
            .badge-discount {
                margin-top: 0.5rem;
            }
            h1 {
                font-size: 1.75rem;
            }
        }
    </style>
    
    <!-- Schema.org Markup -->
    <script type="application/ld+json">
    ${JSON.stringify(schemaMarkup)}
    </script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="/icon.png" alt="Netcup Vouchers Logo">
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
                    <li class="nav-item">
                        <a class="nav-link" href="/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
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
                <li class="breadcrumb-item"><a href="/#${category}">${voucherData[category].name}</a></li>
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
                        <a href="https://www.netcup.com/en/checkout/cart"
                        target="_blank" rel="noopener"
                        class="btn btn-success w-100 mt-3">
                        Redeem at netcup.com &raquo;
                        </a>
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
                        <a href="https://www.netcup.com/en/checkout/cart"
                        target="_blank" rel="noopener"
                        class="btn btn-success w-100 mt-3">
                        Redeem at netcup.com &raquo;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <footer class="bg-dark py-4 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-0">© 2025 NetcupVoucher.com - All voucher codes are updated regularly</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <p class="mb-0">Not affiliated with Netcup GmbH</p>
                </div>
            </div>
        </div>
    </footer>

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

// Generate about page
const generateAboutPage = () => {
  const template = `<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Netcup Vouchers - How Our Discount Codes Work</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Learn about Netcup Vouchers, how our discount codes work, and how to save money on Netcup hosting products and services.">
    <meta name="keywords" content="netcup, voucher codes, discount codes, hosting, about, how it works">
    <meta name="author" content="Netcup Vouchers">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="About Netcup Vouchers - How Our Discount Codes Work">
    <meta property="og:description" content="Learn about Netcup Vouchers, how our discount codes work, and how to save money on Netcup hosting products and services.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://netcupvoucher.com/about">
    <meta property="og:image" content="https://netcupvoucher.com/netcup-voucher-image.png">
    
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#0d1117">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#0d1117">
    
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
        .dropdown-menu {
            background-color: #161b22;
            border: 1px solid #30363d;
        }
        .dropdown-item {
            color: #c9d1d9;
        }
        .dropdown-item:hover {
            background-color: #21262d;
            color: #ffffff;
        }
        .dropdown-header {
            color: #8b949e;
        }
        .dropdown-divider {
            border-color: #30363d;
        }
        .navbar-brand img {
            height: 24px;
            width: auto;
            margin-right: 0.5rem;
        }
    </style>
    
    <!-- Schema.org Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do Netcup voucher codes work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Netcup voucher codes are special discount codes that you can enter during the checkout process at netcup.com. Simply copy your desired code from our site, add your desired products to your cart at Netcup, and enter the code in the designated voucher field before completing your purchase."
                }
            },
            {
                "@type": "Question",
                "name": "Are these voucher codes official?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all our voucher codes are official Netcup discount codes. We curate and verify them to ensure they work, but we are not affiliated with Netcup GmbH."
                }
            },
            {
                "@type": "Question",
                "name": "Can existing Netcup customers use these vouchers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most vouchers are valid for new customers only. If you're an existing customer, check specific terms for each voucher code."
                }
            }
        ]
    }
    </script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="/icon.png" alt="Netcup Vouchers Logo">
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
                    <li class="nav-item">
                        <a class="nav-link" href="/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/about">About</a>
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
                <li class="breadcrumb-item active">About</li>
            </ol>
        </nav>

        <div class="row">
            <div class="col-12">
                <h1 class="mb-4">About Netcup Vouchers</h1>
                
                <div class="card mb-4">
                    <div class="card-body">
                        <h2 class="h4 mb-3">Our Mission</h2>
                        <p>Welcome to NetcupVoucher.com, your trusted source for verified Netcup discount codes and promotional offers. Our mission is to help you save money on high-quality web hosting, VPS, and root server solutions from Netcup.</p>
                        <p>We maintain an updated collection of voucher codes for all major Netcup products, regularly verify their validity, and organize them in an easy-to-use format so you can quickly find and apply the best discounts.</p>
                    </div>
                </div>
                
                <div class="card mb-4">
                    <div class="card-header">
                        <h2 class="h4 mb-0">How to Use Our Voucher Codes</h2>
                    </div>
                    <div class="card-body">
                        <ol>
                            <li class="mb-2">Browse our collection of vouchers by category or product</li>
                            <li class="mb-2">Click the copy button next to your desired voucher code</li>
                            <li class="mb-2">Add your desired products to your cart at <a href="https://www.netcup.com/en/checkout/cart" target="_blank" rel="noopener">netcup.com</a></li>
                            <li class="mb-2">Enter the voucher code in the designated field during checkout</li>
                            <li>Complete your purchase and enjoy the savings!</li>
                        </ol>
                    </div>
                </div>
                
                <div class="card mb-4">
                    <div class="card-header">
                        <h2 class="h4 mb-0">FAQ</h2>
                    </div>
                    <div class="card-body">
                        <div class="mb-4">
                            <h3 class="h5">Are these voucher codes official?</h3>
                            <p>Yes, all our voucher codes are official Netcup discount codes. We curate and verify them to ensure they work, but we are not affiliated with Netcup GmbH.</p>
                        </div>
                        
                        <div class="mb-4">
                            <h3 class="h5">Can existing Netcup customers use these vouchers?</h3>
                            <p>Most vouchers are valid for new customers only. If you're an existing customer, check specific terms for each voucher code.</p>
                        </div>
                        
                        <div class="mb-4">
                            <h3 class="h5">How often are voucher codes updated?</h3>
                            <p>We update our voucher codes regularly as new promotions become available. Check the "Last updated" indicator on our homepage for the most recent update date.</p>
                        </div>
                        
                        <div>
                            <h3 class="h5">What if a voucher code doesn't work?</h3>
                            <p>While we strive to maintain only valid voucher codes, occasionally some may expire or have usage limitations. If you encounter an issue with a voucher, try another code from the same category or check back later for updates.</p>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h2 class="h4 mb-0">About Netcup</h2>
                    </div>
                    <div class="card-body">
                        <p>Netcup is a German web hosting provider founded in 2003, known for their high-quality hosting solutions and excellent price-performance ratio. They offer a wide range of products including:</p>
                        
                        <ul>
                            <li class="mb-2"><strong>Web Hosting:</strong> Reliable cloud hosting solutions with SSD storage and multiple domain support</li>
                            <li class="mb-2"><strong>Virtual Private Servers (VPS):</strong> Flexible virtual servers with guaranteed resources</li>
                            <li class="mb-2"><strong>Root Servers:</strong> Powerful dedicated servers with full root access</li>
                            <li class="mb-2"><strong>Domain Registration:</strong> Register and manage domains</li>
                            <li><strong>SSL Certificates:</strong> Secure your websites with SSL encryption</li>
                        </ul>
                        
                        <p class="mt-3">Netcup operates state-of-the-art data centers in Germany and Austria, ensuring high availability and performance for all their services.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <footer class="bg-dark py-4 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-0">© 2025 NetcupVoucher.com - All voucher codes are updated regularly</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <p class="mb-0">Not affiliated with Netcup GmbH</p>
                </div>
            </div>
        </div>
    </footer>

    <script>
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
  try {
    fs.writeFileSync(path.join(pagesDir, "about.html"), template);
    return "about";
  } catch (error) {
    console.error("Error writing about page:", error);
    process.exit(1);
  }
};

// Main function to generate all pages
const generatePages = () => {
  try {
    const pages = [];

    // Clean up existing pages directory while preserving the favicon directory and crucial files
    const pagesDir = path.join(process.cwd(), "pages");
    cleanDirectory(pagesDir);

    // Generate new pages
    Object.entries(voucherData).forEach(([category, data]) => {
      data.items.forEach((item) => {
        const slug = generateProductPage(item.name, category, item);
        pages.push({ name: item.name, slug, category });
      });
    });

    // Generate the About page
    const aboutSlug = generateAboutPage();
    pages.push({ name: "About", slug: aboutSlug, category: "info" });

    // Move index.html to pages directory
    if (fs.existsSync("index.html")) {
      fs.copyFileSync("index.html", path.join(pagesDir, "index.html"));
    }

    // Copy OG image to pages directory if it exists
    const sourceOgImage = path.join(process.cwd(), "data", "netcup-voucher-image.png");
    const destOgImage = path.join(pagesDir, "netcup-voucher-image.png");
    
    if (fs.existsSync(sourceOgImage) && !fs.existsSync(destOgImage)) {
      fs.copyFileSync(sourceOgImage, destOgImage);
    }
    
    // Copy icon image for navbar logo
    const sourceIconImage = path.join(process.cwd(), "data", "icon.png");
    const destIconImage = path.join(pagesDir, "icon.png");
    
    if (fs.existsSync(sourceIconImage) && !fs.existsSync(destIconImage)) {
      fs.copyFileSync(sourceIconImage, destIconImage);
    }

    // Generate sitemap with today's date for all pages
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
    fs.writeFileSync(path.join(pagesDir, "sitemap.xml"), sitemap);

    // Create robots.txt
    const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://netcupvoucher.com/sitemap.xml`;
    fs.writeFileSync(path.join(pagesDir, "robots.txt"), robotsTxt);

    console.log("Successfully generated:");
    console.log(` - ${pages.length} pages`);
    console.log(" - sitemap.xml");
    console.log(" - robots.txt");
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