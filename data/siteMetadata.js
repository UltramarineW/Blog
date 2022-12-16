const siteMetadata = {
  title: 'UltramarineW',
  author: 'Wu Jiayang',
  headerTitle: 'Ultramarine website',
  description: 'My online place for thoughts',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://wujiayang.netlife.app',
  siteRepo: 'https://github.com/UltramarineW/Blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/jiayang-avatar.jpg',
  socialBanner: '/static/images/twittercard.png',
  email: 'mailto:2021113679@stu.hit.edu.cn',
  github: 'https://github.com/UltramarineW',
  twitter: 'https://twitter.com/',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com/',
  linkedin: 'https://www.linkedin.com/',
  locale: 'zh-CN',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: 'G-08CD29VC1Y', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'UltramarineW/Blog',
      repositoryId: 'R_kgDOImbEzA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOImbEzM4CTGoE',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      lang: 'zh-CN',
      inputPosition: 'top',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
