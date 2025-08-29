# Hospice of Ukiah Website

A modern, responsive website for Hospice of Ukiah, providing community-supported hospice care in Mendocino County.

## About the Project

This is a redesigned website proposal for Hospice of Ukiah, built with Next.js and Tailwind CSS. The website features a clean, accessible design with a focus on compassionate care and community support.

### Current Status
- **Current Website**: hospiceofukiah.com
- **Future Domain**: hospiceofukiah.org (recently acquired)
- **Development**: Currently deployed on Vercel for review and testing
- **Plan**: Transfer current domain to Vercel deployment, then eventually migrate to .org domain

## Features

- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Custom Branding**: 
  - Primary color: Forest Green (#2E6D38)
  - Secondary color: Teal Blue (#5BA8D1) 
  - Accent color: Goldenrod (#F9A826)
  - Typography: Open Sans for body, Playfair Display for headings

- **Key Components**:
  - Sticky header with navigation
  - Hero section with call-to-action
  - Service highlights
  - Contact information in footer
  - Social media integration

## Technology Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS with custom color palette
- **Language**: TypeScript
- **Fonts**: Google Fonts (Open Sans, Playfair Display)
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samuelmholley1/hospiceofukiah.org.git
cd hospiceofukiah.org
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with Header/Footer
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header with mobile menu
│   └── Footer.tsx           # Footer with contact info and links
```

## Contact Information

**Hospice of Ukiah**
- Address: 620 S Dora St, Suite 101, Ukiah, CA 95482
- Phone: (707) 462-4038
- Email: hospice.ukiah@gmail.com
- Tax ID: 68-0248383

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Deployment

This project is set up for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure the build settings
3. Every push to main branch will trigger a new deployment

## Contributing

This website was designed and developed by [Samuel Holley](https://github.com/samuelmholley1) as a redesign proposal for Hospice of Ukiah.

## License

© 2025 Hospice of Ukiah, Inc. All rights reserved.
