const baseUrl = "https://penzionmalba.cz";

export default function sitemap() {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
  ];
}
