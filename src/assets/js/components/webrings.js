const COOKIE_LIST = [
  { name: 'Timekeeper', reason: 'I love her voice and design! We love crazy intelligent girls in this household!'},
  { name: 'Silent Salt', reason: "This is Bechno Kid's favorite cookie! When asked why they liked this cookie, they said: 'I love his design and story so much! He makes me sob but in a good way!"},
  { name: 'Venom Dough', reason: "ngl but I was kind of ok with them at first until I saw their waving animation and thought it was really cute given how intimidating they are. So polite!" },
  { name: 'Dark Enchantress', reason: "Listen...I really like her voice actor. Patty McCormack is so good!"},
]

function getWebringSites(json, params) {
  $.ajax({
    url: json,
    success: function(data) {
      params["sites"] = data.map(item => item[params.attr])
      updateWebringLinks(params);
    },
    fail: function(data) {
      console.error("Error found in {{ params.name }}: ", data);
    }
  })
}

function setWebringLink(ringId, type, site) {
  const element = $(`.${ringId} a.${type}`);
  if (element.length > 0) {
    element.attr('href', site);
  }
}

function updateWebringLinks(params) {
  const sites = params.sites;
  const override = params.override === "true" || params.override === true ? true : false;
  const idx = sites.findIndex((site) => site.includes('bechnokid'));
  if (!override && idx < 0) {
    $(`.${params.id}`).html(`<div class="pending-ring"><p>Waiting to join the <a class="pending-link" href="${params.url}">${params.name}</a> webring.</p></div>`);
    return;
  };
  const prev = (idx > 0) ? sites[idx - 1] : sites[sites.length - 1];
  const next = (idx > 0) ? sites[(idx + 1) % sites.length] : (sites[0].includes(params.url) ? sites[1] : sites[0]);
  const rand = sites[getRandomIndex(sites)];

  setWebringLink(params.id, "prev", prev);
  setWebringLink(params.id, "rand", rand);
  setWebringLink(params.id, "next", next);
}

export function loadWebrings(webringLinks) {
  for (let ringId in webringLinks) {
    let webringParams = webringLinks[ringId];
    webringParams["id"] = ringId;
    if (webringParams.json) {
      getWebringSites(webringParams.json, webringParams);
    } else {
      updateWebringLinks(webringParams);
    }
  };

  const randomCookie = COOKIE_LIST[getRandomIndex(COOKIE_LIST)];
  const cookieCls = randomCookie.name.toLowerCase().replaceAll(' ', '-');
  let ckwr = document.querySelectorAll('.ckwr')[0];
  if (!ckwr.className.includes(cookieCls)) {
    ckwr.className = `ckwr ${cookieCls}`;
    document.querySelectorAll('.ckwr #reason')[0].innerHTML = randomCookie.reason;
  }
}