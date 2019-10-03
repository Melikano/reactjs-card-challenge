const themes = {
  sport: { title: "sport", icon: "fa-basketball-ball", color: "blue" },
  art: { title: "art", icon: "fa-paint-brush", color: "green" },
  fun: { title: "fun", icon: "fa-smile", color: "orange" },
  default: { title: "default", icon: "fa-window", color: "gray" }
};

const getTheme = tag => {
  switch (tag) {
    case themes.sport.title:
      return themes.sport;
    case themes.art.title:
      return themes.art;
    case themes.fun.title:
      return themes.fun;
    default:
      return themes.default;
  }
};
export default getTheme;
