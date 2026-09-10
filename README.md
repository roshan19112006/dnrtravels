# DNR Travels - Official Web Application

A modern, luxury-styled, ultra-responsive, and high-performance website for **DNR Travels** (Owner: Dinesh).

---

## 🌟 Key Features

- **Luxury Travel Design System**: Custom glassmorphism, obsidian & champagne gold luxury palette, micro-animations, and clean typography (`Outfit` & `Plus Jakarta Sans`).
- **Mobile-First Responsive Layout**: Smooth experience across mobile phones (with custom slide-out navigation drawer and floating quick call/WhatsApp buttons), tablets, and 4K desktop screens.
- **Dynamic WhatsApp Booking Generator**: Pre-fills customer pickup, destination, dates, passenger count, vehicle choice, and special notes directly into WhatsApp format (`+91 8220671760`).
- **Comprehensive Service Catalog**: 8 dedicated service cards (Local Trips, Outstation Trips, Family Tours, Tourist Packages, Airport Transfers, One-Way, Round Trips, Corporate Commutes).
- **South Indian Destinations**: 9 popular tourist hubs (Ooty, Kodaikanal, Munnar, Coorg, Mysore, Rameshwaram, Madurai, Chennai, Pondicherry) with category filters & highlights.
- **Customizable Fleet Section**: Clear specs for Sedans, SUVs/MUVs, Luxury MUVs, and Tempo Travelers.
- **Categorized Photo Gallery**: Scenic road trips with interactive full-screen Lightbox.
- **AEO & Technical SEO Built-in**:
  - Valid Schema.org JSON-LD (`TravelAgency`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`, `WebSite`)
  - OpenGraph & Twitter Card rich social previews
  - Search engine friendly `robots.txt` & `sitemap.xml`
  - Zero fake statistics or fabricated reviews.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd "DNR Travels"

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Create optimized production build
npm run build

# Preview build locally
npm run preview
```

---

## ✏️ Easy Customization

All business contact details, services, destinations, fleet specifications, gallery items, and FAQ answers are centralized in a single file:
👉 **[`src/data/travelData.js`](./src/data/travelData.js)**

To update phone number, email, or add new destinations, simply modify the values in `src/data/travelData.js`.

---

## ☁️ Deployment on Vercel & GitHub

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial release of DNR Travels official website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Deploy on [Vercel](https://vercel.com/):
   - Import your GitHub repository.
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**!
