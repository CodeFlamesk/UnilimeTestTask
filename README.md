/project-root
│
├── /components                      # Reusable components
│   └── /ui                          # Reusable styled UI components
│       ├── SmallText.tsx            
│       ├── SubheadingM.tsx          
│       └── ... (etc.)       
│
├── /Layout.Layout.txt              # Layout description/documentation
│
├── /pages                          # All page components
│   ├── /PageOverview
│   │   └── /icon
│   │       └── ArrowDown.tsx        # Icon component for the page
│   │
│   └── /settings
│       ├── ImgUploader.tsx         # Image upload & preview component.
│       │                           # Used only here due to the project's limited scope.
│       ├── styleImgUploader.module.css  
│       └── Settings.tsx 
│       └── ... (etc.)
│
├── /index.css                      # Global CSS
├── /index.html                     # Main HTML template
├── /Main.jsx                       # Layout wrapper for pages/components
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Project dependencies and scripts
