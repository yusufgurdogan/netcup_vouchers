// File: data/products.js
const productInfo = {
    "Webhosting 8000": {
      title: "Webhosting 8000 - Enterprise Cloud Hosting Solution",
      description: "High-performance cloud hosting with 1000GB SSD storage, 12 domains, and advanced features for large-scale websites.",
      features: [
        "1000 GB SSD storage space",
        "12 .de domains or 3 alternative domains included",
        "SSL certificates included for all domains",
        "Ruby and NodeJS support",
        "SSH access available",
        "High-performance cloud infrastructure",
        "Plesk® management software",
        "Automatic scalability",
        "App installer with WordPress integration"
      ],
      content: `
        <h2>About Webhosting 8000</h2>
        <p>Webhosting 8000 is netcup's most powerful web hosting solution, designed for large-scale websites and demanding applications. Operating within a redundant cloud infrastructure, it provides enterprise-level performance and reliability.</p>
        
        <h2>Perfect For</h2>
        <ul>
          <li>Large websites with extensive media galleries</li>
          <li>High-traffic business sites</li>
          <li>Cloud storage solutions</li>
          <li>Multiple domain management (up to 12 domains)</li>
          <li>Video hosting and large media libraries</li>
        </ul>
        
        <h2>Technical Features</h2>
        <ul>
          <li>1000 GB SSD storage space</li>
          <li>High-performance branded hardware</li>
          <li>Ruby and NodeJS support</li>
          <li>Unlimited traffic</li>
          <li>SSH access with chroot environment</li>
          <li>Free SSL certificates via Let's Encrypt</li>
          <li>Advanced application hosting capabilities</li>
        </ul>
        
        <h2>Cloud Benefits</h2>
        <ul>
          <li>High availability through redundant infrastructure</li>
          <li>Automatic resource scaling</li>
          <li>Seamless upgrades without reinstallation</li>
          <li>Enhanced performance with powerful processors</li>
          <li>Modern Plesk® control panel</li>
        </ul>
      `
    },
    "Webhosting 4000": {
      title: "Webhosting 4000 - Professional Cloud Hosting Package",
      description: "Medium to large-scale web hosting solution with 500GB SSD storage and support for multiple domains.",
      features: [
        "500 GB SSD storage space",
        "6 .de domains or 2 alternative domains included",
        "SSL certificates included",
        "Ruby and NodeJS support",
        "SSH access available",
        "Professional cloud infrastructure",
        "Plesk® management software"
      ],
      content: `
        <h2>About Webhosting 4000</h2>
        <p>Webhosting 4000 is a high-performance web hosting package ideal for medium-sized websites and professional applications. It offers robust features and reliable cloud infrastructure for growing businesses.</p>
        
        <h2>Perfect For</h2>
        <ul>
          <li>Medium-sized business websites</li>
          <li>Professional blogs with media galleries</li>
          <li>Multiple domain hosting (up to 6 domains)</li>
          <li>Content Management Systems (CMS)</li>
          <li>Professional email hosting</li>
        </ul>
        
        <h2>Technical Features</h2>
        <ul>
          <li>500 GB SSD storage space</li>
          <li>High-performance server infrastructure</li>
          <li>Ruby and NodeJS support</li>
          <li>Unlimited traffic</li>
          <li>SSH access</li>
          <li>Free SSL certificates</li>
          <li>Advanced application installer</li>
        </ul>
      `
    },
    "Webhosting 2000": {
      title: "Webhosting 2000 - Enhanced Web Hosting Solution",
      description: "Reliable web hosting package with 150GB SSD storage, perfect for small to medium websites.",
      features: [
        "150 GB SSD storage space",
        "3 .de domains or 1 alternative domain included",
        "SSL certificates included",
        "WordPress toolkit included",
        "SSH access available",
        "Cloud infrastructure",
        "Plesk® management software"
      ],
      content: `
        <h2>About Webhosting 2000</h2>
        <p>Webhosting 2000 is the perfect entry-level solution for operating up to three domains. It provides ample resources for small business websites and CMS applications like WordPress.</p>
        
        <h2>Perfect For</h2>
        <ul>
          <li>Small business websites</li>
          <li>Personal blogs</li>
          <li>WordPress sites</li>
          <li>Multiple small websites (up to 3 domains)</li>
          <li>Professional email hosting</li>
        </ul>
        
        <h2>Technical Features</h2>
        <ul>
          <li>150 GB SSD storage space</li>
          <li>Reliable cloud infrastructure</li>
          <li>WordPress toolkit</li>
          <li>Unlimited traffic</li>
          <li>SSH access</li>
          <li>Free SSL certificates</li>
          <li>User-friendly control panel</li>
        </ul>
      `
    },
    "Webhosting 1000": {
      title: "Webhosting 1000 - Starter Hosting Package",
      description: "Entry-level web hosting solution with 50GB SSD storage, perfect for personal websites and blogs.",
      features: [
        "50 GB SSD storage space",
        "1 .de domain or 1 alternative domain included",
        "SSL certificates included",
        "SSH access available",
        "Cloud infrastructure",
        "Plesk® management software"
      ],
      content: `
        <h2>About Webhosting 1000</h2>
        <p>Webhosting 1000 is the ideal entry-level package for personal websites and small blogs. It offers all essential features needed for a professional web presence at an affordable price.</p>
        
        <h2>Perfect For</h2>
        <ul>
          <li>Personal websites</li>
          <li>Small blogs</li>
          <li>Single domain projects</li>
          <li>Basic WordPress sites</li>
          <li>Professional email hosting</li>
        </ul>
        
        <h2>Technical Features</h2>
        <ul>
          <li>50 GB SSD storage space</li>
          <li>Reliable cloud infrastructure</li>
          <li>Unlimited traffic</li>
          <li>SSH access</li>
          <li>Free SSL certificates</li>
          <li>Easy-to-use control panel</li>
        </ul>
      `
    }
  };
  
  // Add common sections to all products
  Object.values(productInfo).forEach(product => {
    product.content += `
      <h2>Why Choose Netcup Hosting?</h2>
      <ul>
        <li>High-availability cloud infrastructure</li>
        <li>State-of-the-art branded hardware</li>
        <li>Unlimited traffic included</li>
        <li>Free SSL certificates via Let's Encrypt</li>
        <li>Professional Plesk® control panel</li>
        <li>Competent technical support</li>
        <li>30-day satisfaction guarantee</li>
        <li>Best price guarantee</li>
        <li>No hidden costs</li>
      </ul>
  
      <h2>Hosting Infrastructure</h2>
      <p>All web hosting packages are provided within a redundantly designed cloud infrastructure supported by multiple servers, offering:</p>
      <ul>
        <li>High availability through redundant systems</li>
        <li>Automatic resource scaling</li>
        <li>High-performance branded hardware</li>
        <li>Fast SSD storage</li>
        <li>Modern Plesk® management interface</li>
        <li>Guaranteed 99.6% annual average availability</li>
      </ul>
  
      <h2>Support & Guarantees</h2>
      <ul>
        <li>Professional technical support</li>
        <li>30-day money-back guarantee</li>
        <li>Best price guarantee with additional 10% discount if you find a lower price</li>
        <li>No hidden costs - all traffic included</li>
        <li>Free SSL certificates for all domains</li>
      </ul>
    `;
  });
  
  module.exports = { productInfo };