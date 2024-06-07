// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ef4444",
        primaryLight: "#dc2626",
        light: "#fee2e2",
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      backgroundImage: {
        login:
          "url('https://i.imgur.com/ZmkPgge.jpeg')",
        hero: "url('https://images.pexels.com/photos/3070968/pexels-photo-3070968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        addrecipe:"url('https://i.imgur.com/0BzfY2f.png')",
        addblog:"url('https://i.imgur.com/pm31KML.png')",
        recipe:"url('https://i.imgur.com/ZurFnKi.png')",

      },
    },
  },
  plugins: [],
};
