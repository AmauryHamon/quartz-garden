import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Amaury Hamon",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google', 
      tagId: 'G-EW3RSWWHBY' ,
    },
    baseUrl: "nodes.amauryhamon.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f8f8",
          lightgray: "#d3d3d3",
          gray: "#6e6e6e",
          darkgray: "#2f2f2f",
          dark: "black",
          secondary: "#6e6e6e",
          tertiary: "#black",
          highlight: "rgba(200 , 200, 200, 0.15)",
        },
        darkMode: {
          light: "black",
          lightgray: "#2f2f2f",
          gray: "#6e6e6e",
          darkgray: "#d3d3d3",
          dark: "#f8f8f8",
          secondary: "#6e6e6e",
          tertiary: "#f8f8f8",
          highlight: "rgba(200 , 200, 200, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
