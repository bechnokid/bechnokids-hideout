import EleventyFetch from '@11ty/eleventy-fetch';

export default async () => {
  try {
    let url = 'https://guestbooks.meadow.cafe/api/v2/get-guestbook-messages/484';
    const { messages } = await EleventyFetch(url, {
      duration: '1d',
      type: 'json',
    });
    return messages;
  } catch (err) {
    return fallbackMsgs;
  }
}

const fallbackMsgs = [
  {
    name: "Natasha",
    date: "2026-08-28",
    url: "https://mixtapesanddialtones.neocities.org/",
    content: "It was really cool checking out all the amazing content on your site, I genuinely appreciate all the time and care you put into it. I especially enjoyed your art and code snippets, but everything was really cool!",
  },
  {
    name: "Spud",
    date: "2026-08-03",
    url: "https://spudboy.neocities.org/",
    content: `I loooooveeee sites that focus on personal documentation. This is awesome! It feels so personal and real to who you are. Per your May "Now" update: I also loovveeee a good stationery set. I've been having great luck at thrift stores lately, and finding some sealed note/letter writing pads that have been handy for writing letters to a buddy. Wishing you the best with journaling!`,
  },
  {
    name: "shen",
    date: "2026-07-15",
    url: "https://shens.world/",
    content: "cool web site! fascinating links, im now frantically bookmarking stuff about rss that i haven't seen before. ive linked to your 100qs here: https://shens.world/about/100webmaster#other thanks for having me!",
  },
  {
    name: "Razla",
    date: "2026-07-12",
    url: "https://www.razla.net/",
    content: "Very cool website and art!!!",
  },
  {
    name: "searchingforwittiertitle",
    date: "2026-06-27",
    url: "https://searchingforwittiertitle.neocities.org/",
    content: "Cool website! Monster Hunter is goated :)",
  },
  {
    name: "Aioli",
    date: "2026-06-02",
    content: "Just signing my name in the snow before it melts. Sending good thoughts to whoever checks this log next.",
  },
  {
    name: "Nicole",
    date: "2026-05-10",
    content: "Am I right to assume you enjoy Dr. Strange alt fics? Did I see Dr. Strange and his assistant?",
  },
  {
    name: "Teaaaaaaa",
    date: "2026-05-06",
    content: "Love your website very pretty. Lots of love from Canada",
  },
  {
    name: "wilbur",
    date: "2026-02-17",
    url: "https://wilburwasneverhere.nekoweb.org/",
    content: "This site is awesome! The crossword and curse generator are especially fun :D I also totally used the calendar widget in the code snippets section. I'll definitely be displaying your website button on my site!",
  },
  {
    name: "Mekare",
    date: "2026-02-11",
    url: "https://mekare-art.neocities.org/",
    content: "Hi, I love the cool stuff you have on your site, like the web garden and the curse generator :-)",
  },
  {
    name: "Anon",
    date: "2026-02-09",
    content: "I love the nostalgic Deviantart look of your Status Café! I miss those days.",
  },
  {
    name: "Sparrow",
    date: "2026-01-29",
    url: "https://accessible-webmastery.neocities.org",
    content: "Just wanna say I love your freezeframe script/tutorial! Your site is very cute, I linked back to you as a resource :3"
  },
  {
    name: "joro",
    url: "https://joro.nu/",
    date: "2026-01-28",
    content: "thank you so much for your kind words and encouragement!! they mean a lot <3 based on your toybox i think your birthday is coming up soon?? (i couldn't find the exact date but may have just missed it @__@) happy early birthday!! i hope you have a wonderful time 😁"
  },
  {
    name: "Anonymous",
    date: "2026-01-22",
    content: "🍻"
  },
  {
    name: "Nana",
    date: "2026-01-15",
    content: "Truly love your style and your site! Inspired me to start my own!"
  },
  {
    name: "taiga",
    date: "2025-09-11",
    url: "https://taigabeetle.nekoweb.org/index.html",
    content: "i love your site and your mascot/sona is really cute :D",
  },
  {
    name: "mezlux",
    date: "2025-09-04",
    url: "https://mezlux.neocities.org/",
    content: `new "cool beans" bookmark`,
  },
  {
    name: "Aster",
    date: "2025-09-01",
    content: "Your site is co cool!!! I loved the curses thingy and I loved reading your blog!",
  },
  {
    name: "Nikki",
    date: "2025-08-25",
    content: "Very cute site!",
  },
  {
    name: "Ahmet Çadırcı",
    date: "2025-08-15",
    url: "https://ahmetcadirci.com/",
    content: "You have a very nice blog, keep sharing beautiful things.",
  },
  {
    name: "nonk",
    date: "2025-07-23",
    url: "https://nonk.dev/",
    content: "cool stuff all around. very clean looking. buncha useful content. rating this one 7/7.",
  },
  {
    name: "Rinara",
    date: "2025-07-13",
    url: "https://sunnytea.org/",
    content: "Awesome site! Your resources are super helpful~ (I'm actually using one right now, the status.cafe feed reader) Thank you so much!",
  },
  {
    name: "arouraleona",
    date: "2025-06-22",
    url: "https://arouraleona.neocities.org/",
    content: "I only recently found out neocities was a thing and am so in on this! Your site is amazing. I'm just getting started with mine (like literally opened it 10 mins ago), and the resources you have here and little touches (like the moon and sun for the light and dark mode, omg) are just so wonderful. It's just gorgeous overall.",
  },
  {
    name: "anonymous",
    date: "2025-06-17",
    content: "Your website is beautiful!! I don't have my website set up yet, but when I do finally start working on it I'll definitely add your button :]",
  },
  {
    name: "Lily",
    date: "2025-06-12",
    url: "https://lilyslab.xyz/",
    content: "I love the organisation of your pages/sidebar. And omg the curses are outright funny as he** I enjoyed reading your manifesto and I stand with you on not encouraging the entire removal of social media. Amazing site you've got here.",
  },
  {
    name: "Nathan",
    date: "2025-05-23",
    url: "https://nathanntan.neocities.org/",
    content: "Hi! I'm your rayman webring neighbour! Your website is so cool and cosy, I loved looking through all the pages! ^^ I'll add your button for sure! Have a great day!",
  },
  {
    name: "Mavis",
    date: "2025-05-14",
    content: "(I realized when posting my comment I flipped words around - LOL dyslexia got me good there. Sorry!)",
  },
  {
    name: "Mavis",
    date: "2025-05-14",
    url: "https://mavisdeluna.art/",
    content: "Absolutely love your website! I also super appreciate the accessibility work and I'm taking inspiration to do the same! I've added my button to your page, but no there's absolutely pressure to do the same - I just want to show appreciation for your work ♥",
  },
  {
    name: "cpulysses",
    date: "2025-04-30",
    content: "Hi!! I haven't made a website yet but yours is so so so cool and cozy!! I really love it!",
  },
  {
    name: "Ainna",
    date: "2025-04-27",
    url: "https://log.minty.nu/",
    content: "Hi Bechnokid! Just wanted to thank you for the status.cafe feed tutorial~ I'm using it for my own site microlog, and it was exactly what I needed. Grateful, truly! (Love your site design btw!)",
  },
  {
    name: "ENA",
    date: "2025-04-26",
    content: "Hey there! I'm just passing by, love what you did with your website! Have a good one <(￣︶￣)>",
  },
  {
    name: "Sirena Lillywing",
    date: "2025-04-26",
    content: "Hi! I found your website from skykristal's site, and it's so cozy here! I really like the categories and navigation; it's easy to see and understand what's what. It's inspiring for me since I strive to be organized but my writings are all over the place. The little symbols like the hearts and diamonds add personality to the pages too :'). I also like the day and night button. ^o^)/",
  },
  {
    name: "Pixelverse",
    date: "2025-04-22",
    url: "https://pixelverse.nekoweb.org/",
    content: "Your website is beautiful!",
  },
  {
    name: "CaptDedEyes",
    date: "2025-04-14",
    url: "https://captdedeyes.com/",
    content: "AYOOOOO WELCOME BACK FROM THE BRINK!! I love your website's dark mode!",
  },
  {
    name: "Latte",
    date: "2024-04-08",
    content: "I love the style of your website!",
  },
  {
    name: "ss",
    date: "2025-04-07",
    content: "Heyo! Cool site :)) much love",
  },
]