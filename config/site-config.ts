export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@NiklasSteenfatt",
    description:
      "Hey! Ich bin Informatiker, YouTuber, Podcaster und begeisterter Lerner. Nach meinem Studium in Hamburg, Cambridge und Paris arbeitete ich zunächst als Softwareentwickler bei Facebook und später in einer Führungsposition bei Masterschool. In meinen Videos teile ich meine Tipps und Erfahrungen rund um den Bildungs- und Lebensweg.",
    color: "#FF0000",
    buttonTitle: "Abbonieren",
    buttonLink: "https://www.youtube.com/@NiklasSteenfatt",
    buttonSecondaryText: "250k",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@Niklas",
    buttonTitle: "Komm in die Gruppe",
    buttonLink: "https://discord.gg/steenfatt",
    buttonSecondaryText: "10k",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    username: "@niklassteenfatt",
    buttonTitle: "Follow",
    buttonSecondaryText: "100k",
    buttonLink: "https://www.instagram.com/niklassteenfatt/",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "x.com",
    icon: "twitter",
    username: "@niklassteenfatt",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/niklassteenfatt",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Musik",
    icon: "musik",
    username: "@niklassteenfatt",
    buttonTitle: "Listen",
    buttonSecondaryText: "5K",
    buttonLink: "https://soundcloud.com/niklassteenfatt",
    color: "#f97316",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Ich reise um die Welt und nehme mit",
    image: "/travle.jpg",
    equipments: [
      {
        title: "Bücher",
        link: "https://www.amazon.de/s?k=b%C3%BCcher",
      },
      {
        title: "Schachbrett",
        link: "https://www.amazon.de/s?k=Schachbrett&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3LLH89G75TKQ6&sprefix=schachbrett%2Caps%2C180&ref=nb_sb_noss_1",
      },
      {
        title: "Klapptisch",
        link: "https://www.amazon.de/s?k=Klapptisch&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RUGSMJMBDVLH&sprefix=klapptisch%2Caps%2C158&ref=nb_sb_noss_1",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Fokus Frameworke",
    username: "",
    description:
      "Das Fokus Framework vereint die Philosophie täglicher Routinen und Habits mit einem System für langfristige Zielsetzung und Projektmanagement.",
    icon: "fokus",
    color: "#164e63",
    buttonTitle: "Nur jetzt",
    buttonSecondaryText: "%20 OFF",
    buttonLink:
    "https://fokus.so/",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Podcast",
    icon: "podcast",
    username: "@Niklas und Konsorten",
    buttonTitle: "Follow",
    buttonLink: "https://podcasts.apple.com/de/podcast/niklas-und-konsorten/id1564432812",
    buttonSecondaryText: "279",
    color: "#B150E2",
    description:
      "YouTuber Niklas Steenfatt spricht und diskutiert mit spannenden Gästen aus allen Industrien und Lebenslagen",
  },
  {
    layout: "2x2",
    type: "social",
    description:
      "Buchen Sie mich für einen Vortrag, der Ihre Veranstaltung zu einem unvergesslichen Erlebnis macht.",
    title: "Speaker",
    icon: "speaker",
    buttonTitle: "Jetzt anfragen",
    buttonLink: "https://www.instagram.com/niklassteenfatt/",
    color: "#070707",
  },
];

export const siteConfig = {
  creator: "Niklas Steenfatt",
  title: "Niklas Steenfatt",
  bio: "Niklas Steenfatt",
  location: "Niklas Steenfatt",
  items: GridItems,
} as const;
