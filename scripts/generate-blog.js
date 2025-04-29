// scripts/generate-blog.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');
const { voucherData } = require('../data/vouchers.js');

// Function to generate slug from a title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Function to format a date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Process a markdown file
const processMarkdownFile = (filePath) => {
  // Read the markdown file
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Parse frontmatter
  const { data, content } = matter(fileContent);
  
  // Check required frontmatter
  if (!data.title || !data.date) {
    console.warn(`Warning: ${filePath} is missing required frontmatter (title or date)`);
    return null;
  }
  
  // Generate slug from filename if not provided
  const slug = data.slug || generateSlug(path.basename(filePath, '.md'));
  
  // Convert markdown to HTML
  const htmlContent = marked.parse(content);
  
  return {
    title: data.title,
    date: data.date,
    formatDate: formatDate(data.date),
    author: data.author || 'Netcup Vouchers Team',
    description: data.description || '',
    tags: data.tags || '',
    content: htmlContent,
    slug,
    ...data // Add any other frontmatter fields
  };
};

// Get featured vouchers for sidebar
const getFeaturedVouchers = () => {
  const featured = [];
  
  // Get one item from each category
  Object.entries(voucherData).forEach(([category, data]) => {
    if (data.items && data.items.length > 0) {
      const item = data.items[0];
      featured.push({
        name: item.name,
        discount: item.discount,
        slug: generateSlug(item.name)
      });
    }
  });
  
  return featured.slice(0, 4); // Limit to 4 vouchers
};

// Read blog template
const readTemplate = (templatePath) => {
  try {
    return fs.readFileSync(templatePath, 'utf8');
  } catch (err) {
    console.error(`Error reading template at ${templatePath}:`, err);
    process.exit(1);
  }
};

// Replace template variables
const applyTemplate = (template, data) => {
    // Replace basic variables
    let result = template;

    // Replace all {{varName}} with their values
    Object.entries(data).forEach(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number') {
        const regex = new RegExp(`{{${key}}}`, 'g');
        result = result.replace(regex, value);
        }
    });
  
  // Handle arrays and conditional sections
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // Handle {{#each arrayName}}...{{/each}}
      const eachRegex = new RegExp(`{{#each ${key}}}([\\s\\S]*?){{/each}}`, 'g');
      
      result = result.replace(eachRegex, (match, template) => {
        return value.map(item => {
          let itemTemplate = template;
          
          // Replace item properties
          Object.entries(item).forEach(([itemKey, itemValue]) => {
            if (typeof itemValue === 'string' || typeof itemValue === 'number') {
              const itemRegex = new RegExp(`{{this.${itemKey}}}`, 'g');
              itemTemplate = itemTemplate.replace(itemRegex, itemValue);
            }
          });
          
          // Handle @last
          const lastRegex = new RegExp(`{{#unless @last}}([\\s\\S]*?){{/unless}}`, 'g');
          itemTemplate = itemTemplate.replace(lastRegex, (match, content) => {
            return item === value[value.length - 1] ? '' : content;
          });
          
          return itemTemplate;
        }).join('');
      });
    } else if (typeof value === 'object' && value !== null) {
      // Handle nested objects
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        const regex = new RegExp(`{{${key}.${nestedKey}}}`, 'g');
        result = result.replace(regex, nestedValue);
      });
    }
  });
  
  // Handle conditionals {{#if varName}}...{{/if}}
  Object.entries(data).forEach(([key, value]) => {
    const ifRegex = new RegExp(`{{#if ${key}}}([\\s\\S]*?){{/if}}`, 'g');
    
    result = result.replace(ifRegex, (match, content) => {
      return value ? content : '';
    });
    
    // Handle {{#if varName}}...{{else}}...{{/if}}
    const ifElseRegex = new RegExp(`{{#if ${key}}}([\\s\\S]*?){{else}}([\\s\\S]*?){{/if}}`, 'g');
    
    result = result.replace(ifElseRegex, (match, ifContent, elseContent) => {
      return value ? ifContent : elseContent;
    });
  });
  
  // Add voucher data as JSON
  result = result.replace('{{voucherData}}', JSON.stringify(voucherData));
  
  result = result.replace(
    "const slug = item.name.toLowerCase().replace(/\\\\s+/g, '').replace(/[^a-z0-9]/g, '');", 
    "const slug = item.name.toLowerCase().replace(/\\\\s+/g, '-').replace(/[^a-z0-9-]/g, '');"
  );
  
  return result;
};

// Write HTML file
const writeHtmlFile = (outputPath, content) => {
  try {
    // Create directory if it doesn't exist
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, content);
    return true;
  } catch (err) {
    console.error(`Error writing file at ${outputPath}:`, err);
    return false;
  }
};

// Generate the blog
const generateBlog = () => {
  try {
    const blogDir = path.join(process.cwd(), 'blog');
    const pagesDir = path.join(process.cwd(), 'pages');
    const templateDir = path.join(process.cwd(), 'templates');
    
    // Check if blog directory exists
    if (!fs.existsSync(blogDir)) {
      console.warn('Blog directory not found. Creating empty blog directory.');
      fs.mkdirSync(blogDir, { recursive: true });
      
      // Create example blog post
      const examplePost = `---
title: Welcome to the Netcup Voucher Blog
date: ${new Date().toISOString().split('T')[0]}
author: Netcup Vouchers Team
description: Welcome to our new blog where we'll share the latest Netcup deals, hosting tips, and server tutorials.
tags: announcements, netcup
---

# Welcome to the Netcup Voucher Blog

We're excited to launch our new blog where we'll be sharing:

- The latest Netcup voucher codes and promotions
- Tutorials and guides for Netcup services
- Hosting tips and best practices
- Server configuration tutorials
- News about Netcup product updates

## Why We Started This Blog

As enthusiastic users of Netcup's hosting services, we wanted to create a resource that helps others make the most of their Netcup experience while saving money with the best available discount codes.

## What to Expect

We'll be posting regular updates about new voucher codes as they become available, as well as in-depth guides on how to set up and optimize various services on Netcup's hosting platform.

Stay tuned for our upcoming posts!
`;
      fs.writeFileSync(path.join(blogDir, 'welcome.md'), examplePost);
      console.log('Created example blog post: welcome.md');
    }
    
    // Get list of markdown files
    const markdownFiles = fs.readdirSync(blogDir)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(blogDir, file));
    
    if (markdownFiles.length === 0) {
      console.warn('No markdown files found in blog directory.');
      return;
    }
    
    // Process all markdown files
    const posts = markdownFiles
      .map(file => processMarkdownFile(file))
      .filter(post => post !== null)
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)
    
    if (posts.length === 0) {
      console.warn('No valid blog posts found.');
      return;
    }
    
    // Create blog directory in pages
    const blogPagesDir = path.join(pagesDir, 'blog');
    if (!fs.existsSync(blogPagesDir)) {
      fs.mkdirSync(blogPagesDir, { recursive: true });
    }
    
    // Read templates
    const postTemplatePath = path.join(templateDir, 'blog-template.html');
    const indexTemplatePath = path.join(templateDir, 'blog-index-template.html');
    
    const postTemplate = readTemplate(postTemplatePath);
    const indexTemplate = readTemplate(indexTemplatePath);
    
    // Get featured vouchers for sidebar
    const featuredVouchers = getFeaturedVouchers();
    
    // Process each blog post
    posts.forEach(post => {
      // Find related posts (excluding current post)
      const relatedPosts = posts
        .filter(p => p.slug !== post.slug)
        .slice(0, 2); // Limit to 2 related posts
      
      // Find recent posts (excluding current post)
      const recentPosts = posts
        .filter(p => p.slug !== post.slug)
        .slice(0, 5); // Limit to 5 recent posts
      
      // Apply template to post
      const postData = {
        ...post,
        relatedPosts,
        recentPosts,
        featuredVouchers
      };
      
      const html = applyTemplate(postTemplate, postData);
      
      // Write HTML file
      const outputPath = path.join(blogPagesDir, `${post.slug}.html`);
      writeHtmlFile(outputPath, html);
      console.log(`Generated blog post: ${post.slug}`);
    });
    
    // Generate blog index page
    const indexData = {
      posts,
      featuredPost: posts[0], // First post is featured
      featuredVouchers,
      schemaBlogs: posts.slice(0, 10) // Limit to 10 posts for schema
    };
    
    // Extract tags from all posts
    const tagMap = new Map();
    posts.forEach(post => {
      if (post.tags) {
        post.tags.split(',').map(tag => tag.trim()).forEach(tag => {
          const tagSlug = generateSlug(tag);
          if (tagMap.has(tagSlug)) {
            tagMap.set(tagSlug, {
              name: tag,
              slug: tagSlug,
              count: tagMap.get(tagSlug).count + 1
            });
          } else {
            tagMap.set(tagSlug, {
              name: tag,
              slug: tagSlug,
              count: 1
            });
          }
        });
      }
    });
    
    // Convert tag map to array
    indexData.tags = Array.from(tagMap.values());
    
    const indexHtml = applyTemplate(indexTemplate, indexData);
    
    // Write index HTML file
    const indexOutputPath = path.join(pagesDir, 'blog.html');
    writeHtmlFile(indexOutputPath, indexHtml);
    console.log('Generated blog index page');
    
    // Update sitemap.xml
    try {
      const sitemapPath = path.join(pagesDir, 'sitemap.xml');
      if (fs.existsSync(sitemapPath)) {
        let sitemap = fs.readFileSync(sitemapPath, 'utf8');
        const today = new Date().toISOString().split('T')[0];
        
        // Check if blog entries already exist
        if (!sitemap.includes('<loc>https://netcupvoucher.com/blog</loc>')) {
          // Add blog index to sitemap
          sitemap = sitemap.replace('</urlset>', `
    <url>
        <loc>https://netcupvoucher.com/blog</loc>
        <priority>0.8</priority>
        <changefreq>weekly</changefreq>
        <lastmod>${today}</lastmod>
    </url>
</urlset>`);
        }
        
        // Add blog posts to sitemap
        posts.forEach(post => {
          // Check if this post already exists in sitemap
          if (!sitemap.includes(`<loc>https://netcupvoucher.com/blog/${post.slug}</loc>`)) {
            sitemap = sitemap.replace('</urlset>', `
    <url>
        <loc>https://netcupvoucher.com/blog/${post.slug}</loc>
        <priority>0.7</priority>
        <changefreq>monthly</changefreq>
        <lastmod>${today}</lastmod>
    </url>
</urlset>`);
          }
        });
        
        fs.writeFileSync(sitemapPath, sitemap);
        console.log('Updated sitemap.xml with blog posts');
      }
    } catch (err) {
      console.warn('Warning: Could not update sitemap.xml', err);
    }
    
    // Update navbar in template.html to include Blog link
    try {
      const templatePath = path.join(process.cwd(), 'templates', 'template.html');
      if (fs.existsSync(templatePath)) {
        let template = fs.readFileSync(templatePath, 'utf8');
        
        // Check if Blog link already exists
        if (!template.includes('<a class="nav-link" href="/blog">Blog</a>')) {
          // Add Blog link after Products dropdown
          template = template.replace(
            '</ul>\n                    </li>',
            '</ul>\n                    </li>\n                    <li class="nav-item">\n                        <a class="nav-link" href="/blog">Blog</a>\n                    </li>'
          );
          
          fs.writeFileSync(templatePath, template);
          console.log('Updated template.html with Blog navigation link');
        }
      }
    } catch (err) {
      console.warn('Warning: Could not update template.html with Blog link', err);
    }
    
    return posts.length;
  } catch (error) {
    console.error('Error generating blog:', error);
    return 0;
  }
};

// Run the blog generator
const postsGenerated = generateBlog();
console.log(`Blog generation complete. Generated ${postsGenerated} blog posts.`);

module.exports = { generateBlog };