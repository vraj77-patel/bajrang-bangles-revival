

# Update Shree Bajrang Acrylic Bangles Pipe Website

## Changes Overview

### 1. Rename Business
Update the business name from "Shree Bajrang Bangles Pipe" to **"Shree Bajrang Acrylic Bangles Pipe"** across all components:
- Header, Hero Section, About Section, Footer

### 2. Fix Color Visibility (Hero Section)
The business name is currently white text on a blue gradient background, making it hard to read. Changes:
- Make the company name **white** and the subtitle "Acrylic Bangles Pipe" use the **gold/accent color** (already partially done)
- Adjust the hero gradient to be **darker blue** so white text stands out better
- Alternatively, add a text shadow for better contrast

### 3. Contact Info - Clickable Actions
Update the contact info cards in the Contact Section so clicking each one opens the right app:
- **Phone**: Opens WhatsApp chat (`https://wa.me/918690599990`)
- **Email**: Opens Gmail compose (`mailto:shreebajrangpipe@gmail.com`)
- **Address**: Opens Google Maps with the location (`https://www.google.com/maps/search/Balaji+Estate+Manda+Dunger+Rajkot+360003`)

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Header.tsx` | Update business name to "Shree Bajrang Acrylic Bangles Pipe" |
| `src/components/HeroSection.tsx` | Update name, improve text contrast on blue background |
| `src/components/AboutSection.tsx` | Update business name reference |
| `src/components/ContactSection.tsx` | Update contact links - phone to WhatsApp, address to Google Maps, email to mailto |
| `src/components/Footer.tsx` | Update business name |

### Technical Details

**Contact Links:**
- Phone: `href="https://wa.me/918690599990"` (opens WhatsApp)
- Email: `href="mailto:shreebajrangpipe@gmail.com"` (opens email client/Gmail)
- Address: `href="https://www.google.com/maps/search/Balaji+Estate,+Manda+Dunger,+Rajkot+360003"` with `target="_blank"` (opens Google Maps)

**Hero Text Contrast Fix:**
- Add a darker overlay or text shadow to the hero gradient
- Ensure "Shree Bajrang" heading is clearly visible against the blue background
- Keep the accent/gold color on "Acrylic Bangles Pipe" for visual separation

