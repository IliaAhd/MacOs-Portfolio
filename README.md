# MacOS Portfolio

A sleek, interactive macOS-inspired portfolio built with React, showcasing projects, skills, and professional information in a beautiful retro desktop environment.

![Portfolio Screenshot](https://raw.githubusercontent.com/IliaAhd/MacOs-Portfolio/public/images/screenshot.png)

## Features

- **macOS Desktop UI** – Authentic desktop experience with draggable windows, dock, and menubar
- **Interactive Windows** – Multiple window types for different content:
  - **Finder** – Browse projects and files in a familiar file manager interface
  - **Safari** – Read developer blog posts and articles
  - **Terminal** – Display technical skills and expertise
  - **Resume** – View PDF resume with download option
  - **Text Viewer** – Read detailed project descriptions and information
  - **Image Viewer** – Display portfolio images and gallery
- **Project Showcase** – Interactive project browser with descriptions, screenshots, and links
- **Smooth Animations** – GSAP-powered animations and draggable window interactions
- **Responsive Design** – Works seamlessly across different screen sizes
- **Dark Mode Support** – Beautiful dark theme with Tailwind CSS

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Animation:** GSAP 3
- **State Management:** Zustand
- **Icons:** Lucide React
- **PDF Viewer:** React PDF
- **Utilities:** Immer, dayjs, clsx

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
git clone https://github.com/IliaAhd/MacOs-Portfolio.git
cd MacOs-Portfolio
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Lint

```bash
npm lint
```

## Project Structure

```
src/
├── components/        # Reusable UI components (Dock, Navbar, WindowControls, etc.)
├── windows/           # Window components (Finder, Safari, Terminal, Resume, Text, Image)
├── hoc/               # Higher-order components (WindowWrapper)
├── store/             # Zustand state management (window, location stores)
├── constants/         # Data and configuration files
├── assets/            # Images and static assets
├── App.jsx            # Main application component
├── index.css          # Global styles
└── main.jsx           # Application entry point
```

## Features in Detail

### Window Management

- Drag windows around the screen
- Focus windows by clicking (z-index management)
- Open/close windows with smooth animations
- Window controls (minimize, maximize, close buttons)

### File Navigation

- Browse projects in an intuitive file browser
- Click files to open them in appropriate windows
- Navigate through folders and subfolders
- Support for multiple file types (txt, img, pdf, url, fig)

### Content Types

- **Text Files** – Detailed project descriptions with images and multiple paragraphs
- **Images** – Full-size image viewer with aspect ratio preservation
- **PDFs** – Embedded PDF viewer for resume
- **URLs** – Direct links to external resources
- **Web Content** – Blog posts and articles in Safari window

## Customization

### Adding Projects

Edit `src/constants/index.js` and add your projects to the `WORK_LOCATION` object:

```javascript
{
  id: 1,
  name: "Your Project Name",
  icon: "/images/folder.png",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "project-info.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      description: ["Your project description..."],
    },
    // Add more files...
  ],
}
```

### Customizing Appearance

- Modify Tailwind colors in `tailwind.config.js`
- Update global styles in `src/index.css`
- Customize component styles in individual component files

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is open source and available under the MIT License.

## Author

**Ilia Ahadi** – [GitHub](https://github.com/IliaAhd) | [LinkedIn](https://www.linkedin.com/in/ilia-ahadi/)

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

_Inspired by the elegance of macOS design, built with modern web technologies._
