// Lets TypeScript accept plain side-effect CSS imports such as
// `import "./globals.css"` in layout.tsx (newer TS versions check them).
declare module "*.css";
