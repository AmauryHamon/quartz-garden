import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.PageTitle(),Component.MobileOnly(Component.Spacer()),Component.Search(),Component.Darkmode(),],
  footer: Component.Footer({
    links: {
      "www": "http://amauryhamon.com/",
      "email": "mailto:contact@amauryhamon.com",
      "are.na": "https://www.are.na/amaury-hamon",
      github: "https://github.com/AmauryHamon",
      instagram: "https://www.instagram.com/amauryhamon/",
      impressum: "/Impressum"
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [ 
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [Component.Graph(), Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [],
  right: [],
}
