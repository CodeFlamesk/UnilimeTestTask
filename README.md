# React + Vite

Install:
npm i + npm run dev

About structure:

[image](https://github.com/user-attachments/assets/af5e1c80-002f-47cc-9352-6cc24e0f7149)
 
 
 /components – Contains all reusable components.
    /ui – A subfolder for styled UI components, such as SmallText.tsx, SubheadingM.tsx, etc.

/Layout.Layout.txt – A layout description or documentation file.

/pages – Contains all the page components.
    /PageOverview/icon/ArrowDown.tsx – An icon component used on the overview page.
    /settings – The settings page. Contains:

ImgUploader.tsx – A component for uploading and displaying images. It is only used here, so it was not moved to /components.

styleImgUploader.module.css – CSS module specific to the image uploader.

Settings.tsx – Main settings page component.

/index.css – Global styles.

/index.html – Main HTML template.

/Main.jsx – The layout wrapper for pages and components.

tailwind.config.js – Configuration file for Tailwind CSS.

tsconfig.json – TypeScript configuration.

package.json – Project dependencies and scripts.
