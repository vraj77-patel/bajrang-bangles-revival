

# Update Shree Bajrang Bangles Pipe Website

## Changes Summary

### 1. Add Company Logo
- Copy the uploaded logo (`user-uploads://logo.png`) to `src/assets/logo.png`
- Replace the text-based "SB" circle logo in **Header** and **Footer** with the actual logo image
- Also add the logo to the **Hero Section**

### 2. Update Contact Information
Update all contact details across the site (ContactSection, Footer, WhatsAppButton):
- **Phone**: 8690599990
- **Email**: shreebajrangpipe@gmail.com
- **Address**: Balaji Estate, Manda Dunger, Rajkot - 360003
- **WhatsApp**: Link to 918690599990

### 3. Remove "View Products" Button and Products Section
- Remove the "View Products" button from the Hero Section (keep only "Contact Us")
- Remove `ProductsSection` from the Index page
- Remove "Products" link from the Header and Footer navigation

### 4. Change Contact Section Color
- Update the Contact Us section background to use a distinct color scheme (e.g., a soft blue/primary tinted background instead of plain white) to make it visually stand out

---

## Files to Modify

| File | Change |
|------|--------|
| `src/assets/logo.png` | Copy logo image here |
| `src/components/Header.tsx` | Use logo image, remove "Products" nav link |
| `src/components/HeroSection.tsx` | Remove "View Products" button, optionally add logo |
| `src/components/ContactSection.tsx` | Update phone/email/address, change background color |
| `src/components/Footer.tsx` | Use logo image, update contact info, remove "Products" link |
| `src/components/WhatsAppButton.tsx` | Update WhatsApp number to 8690599990 |
| `src/pages/Index.tsx` | Remove ProductsSection import and usage |

