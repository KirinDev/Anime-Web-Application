"use client";
import Airing from "@/components/airing";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Top from "@/components/top";
import { Silkscreen } from "next/font/google";
import "tw-elements-react/dist/css/tw-elements-react.min.css";


const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

export default function Home() {

  const slides = [
    {
      url: "https://sm.ign.com/ign_pt/screenshot/default/blob_a8au.jpg",
      title: "Jujutsu Kaisen Season 2",
      description: "Second season of Jujutsu Kaisen.",
    },
    {
      url: "https://images6.alphacoders.com/129/thumb-1920-1293436.jpg",
      title: "Ore dake Level Up na Ken",
      description:
        "Humanity was caught at a precipice a decade ago when the first gates—portals linked with other dimensions that harbor monsters immune to conventional weaponry—emerged around the world. Alongside the appearance of the gates, various humans were transformed into hunters and bestowed superhuman abilities. Responsible for entering the gates and clearing the dungeons within, many hunters chose to form guilds to secure their livelihoods.",
    },
    {
      url: "https://images5.alphacoders.com/134/1346620.jpeg",
      title: "Sousou no Frieren",
      description:
        "During their decade-long quest to defeat the Demon King, the members of the heroes party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.",
    },
    {
      url: "https://randomc.net/image/Kimetsu%20no%20Yaiba/Kimetsu%20no%20Yaiba%20Hashira%20Geiko%20Hen%20-%20OP%20-%20Large%2003.jpg",
      title: "Kimetsu no Yaiba: Hashira Geiko-hen",
      description:
        "Kimetsu no Yaiba Season 3.",
    },
    {
      url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/todoroki-deku-and-star-and-stripe-from-mha-season-7.jpg",
      title: "Boku No Hero Academia 7",
      description:
        "Boku No Hero Academia Season 7.",
    }
  ];

  const airing = [
    {
      url: "https://a.storyblok.com/f/178900/1064x1596/08c0e10608/demon-slayer-kimetsu-no-yaiba-hashira-training-arc-kv.jpg/m/filters:quality(95)format(webp)",
      title: "Kimetsu no Yaiba: Hashira Geiko-hen",
    },
    {
      url: "https://a.storyblok.com/f/178900/1064x1596/d057641427/my-hero-academia-season-7-key-art-tall.png/m/filters:quality(95)format(webp)",
      title: "Boku No Hero Academia 7",
    },
    {
      url: "https://br.web.img3.acsta.net/pictures/16/02/03/17/11/571106.jpg",
      title: "One Piece",
    },

    {
      url: "https://a.storyblok.com/f/178900/960x1280/f7e1bf7160/tower-of-god-s2-kv3.jpg/m/filters:quality(95)format(webp)",
      title: "Kami no Tou: Ouji no Kikan",
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/1370/140362.jpg",
      title: "Kaijuu 8-gou",
    },
    {
      url: "https://www.toramp.com/posters/shows/6157/width360/6157.jpg",
      title: "Gimai Seikatsu",
    },

    {
      url: "https://animefire.plus/img/animes/shinmai-ossan-boukensha-saikyou-party-ni-shinu-hodo-kitaerarete-muteki-ni-naru-large.webp",
      title:
        "Shinmai Ossan Bouken-sha, Saikyou Party ni Shinu Hodo Kitaerarete Muteki ni Naru",
    },
    {
      url: "https://m.media-amazon.com/images/I/51sywUuHIpL.jpg",
      title: "Isekai Yururi Kikou: Kosodate Shinagara Boukensha Shimasu",
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/1281/144104.jpg",
      title: "Tsue to Tsurugi no Wistoria",
    },

    {
      url: "https://cdn.myanimelist.net/images/anime/1252/143457.jpg",
      title: "Isekai Shikkaku",
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/1059/142414.jpg",
      title: "Ookami to Koushinryou",
    },
    {
      url: "https://myanimelist.net/images/anime/1033/118296.jpg",
      title: "Tensei Shitara Slime Datta Ken 3rd Season",
    },
  ];

  const topRated = [
    {
      url: "https://br.web.img3.acsta.net/pictures/16/02/03/17/11/571106.jpg",
      title: "One Piece",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://a.storyblok.com/f/178900/1064x1596/08c0e10608/demon-slayer-kimetsu-no-yaiba-hashira-training-arc-kv.jpg/m/filters:quality(95)format(webp)",
      title: "Kimetsu no Yaiba: Hashira Geiko-hen",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://animefire.plus/img/animes/shinmai-ossan-boukensha-saikyou-party-ni-shinu-hodo-kitaerarete-muteki-ni-naru-large.webp",
      title: "Shinmai Ossan Bouken-sha, Saikyou Party ni Shinu Hodo Kitaerarete Muteki ni Naru",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/1252/143457.jpg",
      title: "Isekai Shikkaku",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/1370/140362.jpg",
      title: "Kaijuu 8-gou",
      aired: "Oct 20, 1999"
    }
  ];

  const newReleases = [
    {
      url: "https://br.web.img3.acsta.net/pictures/16/02/03/17/11/571106.jpg",
      title: "One Piece",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://a.storyblok.com/f/178900/1064x1596/08c0e10608/demon-slayer-kimetsu-no-yaiba-hashira-training-arc-kv.jpg/m/filters:quality(95)format(webp)",
      title: "Kimetsu no Yaiba: Hashira Geiko-hen",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://animefire.plus/img/animes/shinmai-ossan-boukensha-saikyou-party-ni-shinu-hodo-kitaerarete-muteki-ni-naru-large.webp",
      title: "Shinmai Ossan Bouken-sha, Saikyou Party ni Shinu Hodo Kitaerarete Muteki ni Naru",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/1252/143457.jpg",
      title: "Isekai Shikkaku",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/1370/140362.jpg",
      title: "Kaijuu 8-gou",
      aired: "Oct 20, 1999"
    }
  ];

  const justCompleted = [
    {
      url: "https://br.web.img3.acsta.net/pictures/16/02/03/17/11/571106.jpg",
      title: "One Piece",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://a.storyblok.com/f/178900/1064x1596/08c0e10608/demon-slayer-kimetsu-no-yaiba-hashira-training-arc-kv.jpg/m/filters:quality(95)format(webp)",
      title: "Kimetsu no Yaiba: Hashira Geiko-hen",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://animefire.plus/img/animes/shinmai-ossan-boukensha-saikyou-party-ni-shinu-hodo-kitaerarete-muteki-ni-naru-large.webp",
      title: "Shinmai Ossan Bouken-sha, Saikyou Party ni Shinu Hodo Kitaerarete Muteki ni Naru",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/1252/143457.jpg",
      title: "Isekai Shikkaku",
      aired: "Oct 20, 1999"
    },
    {
      url: "https://cdn.myanimelist.net/images/anime/1370/140362.jpg",
      title: "Kaijuu 8-gou",
      aired: "Oct 20, 1999"
    }
  ];

  return (
    <main>
      <Navbar />
      <Carousel slides={slides} />
      <Airing airing={airing} />
      <Top 
        topRated={topRated} 
        newReleases={newReleases} 
        justCompleted={justCompleted} 
      />
      <Footer />
    </main>
  );
}
