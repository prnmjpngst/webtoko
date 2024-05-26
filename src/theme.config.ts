export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "Purnomo",
  /** your name */
  author: "Mas Pur",
  /** website description */
  desc: "Print dan Foto Copy",
  /** your deployed domain */
  website: "https://purnomo.vercel.app/",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: "dark",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/prnmjpngst/prnmjpngst",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "twitter",
      href: "https://x.com/prnmjpngst",
    },
    {
      name: "mastodon",
      href: "https://mastodon.social/@prnmjpngst",
    }
  ],
  /** your header info */
  header: {
    twitter: "@prnmjpngst",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  comments: {
    disqus: {
      shortname: "purnomo",
    },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  }
}

