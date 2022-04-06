export const posts = Array.from(Array(12).keys()).map((item) => (
  {
    title: `Post N˚ ${item + 1}`,
    content: 'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy...',
    linkTitle: `post-number-${item}`,
  }
));
