const projects = [
  {
    title: "Snap",
    githubLink: "https://github.com/muhammadqodirm/snap",
    vercelLink: "https://snap-virid.vercel.app/",
  },
  {
    title: "Perfume",
    githubLink: "https://github.com/muhammadqodirm/Perfume",
    vercelLink: "https://perfume-theta.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
