# React + Vite

Install:
npm i + npm run dev

About structure:

/project-root
│
├── /components                      # all components that are reused
│   └── /ui                          # all styles that are reused
│       ├── SmallText.tsx            
│       ├── SubheadingM.tsx          
│       └── ..... etc.         
│
├── /Layout.Layout.txt              # Layout

├── /pages                          # All pages
│   └── /PageOverview
│       └── /icon
│           └── ArrowDown.tsx        
│
│   └── /settings
│       ├── ImgUploader.tsx         # This is a component for receiving and displaying images, I used it only in this component, since the project is small and it will not be expanded, I did not put it in the components folder
│       ├── styleImgUploader.module.css  
│       └── Settings.tsx 
│       ...etc.
│
├── /index.css                      # main css

├── /index.html                     # main html

├── /Main.jsx                       # Layout wrapper for pages/components

├── tailwind.config.js             # Tailwind CSS config (inferred from Tailwind usage)

├── tsconfig.json                  # TypeScript/JavaScript config

└── package.json
