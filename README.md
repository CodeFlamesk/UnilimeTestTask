/project-root
│
├── /components                      # Повторно використовувані компоненти
│   └── /ui                          # Повторно використовувані стилізовані компоненти
│       ├── SmallText.tsx           
│       ├── SubheadingM.tsx         
│       └── ...                     
│
├── /Layout.Layout.txt              # Файл опису Layout (можливо, технічна документація)
│
├── /pages                          # Усі сторінки
│   └── /PageOverview
│       └── /icon
│           └── ArrowDown.tsx       # Іконка для сторінки
│
│   └── /settings
│       ├── ImgUploader.tsx         # Компонент для завантаження та відображення зображень.
│       │                           # Він використовується лише тут, тому не винесений у /components.
│       ├── styleImgUploader.module.css  
│       └── Settings.tsx 
│       └── ...                     
│
├── /index.css                      # Головний CSS файл
├── /index.html                     # Головний HTML шаблон
├── /Main.jsx                       # Обгортка Layout для сторінок/компонентів
├── tailwind.config.js             # Налаштування Tailwind CSS
├── tsconfig.json                  # Налаштування TypeScript
└── package.json                   # Залежності проєкту
