import ProjectCard from "../components/UI/Card";

export default function PortfolioPage() {
  const projects = [
    {
      projImage:
        "https://github.com/blockdoyle/5-day-forecast/raw/main/overview-sc.png",
      projTitle: "5-day-forecast",
      projLink: "https://github.com/blockdoyle/5-day-forecast",
      projLive: "https://blockdoyle.github.io/5-day-forecast/",
      projText:
        "Note: This site may not work as expected due to API key expiration. A simple weather app that displays the 5-day forecast for a given city. Built with React, Bootstrap, and the OpenWeatherMap API.",
    },
    {
      projImage: "",
      projTitle: "AD-Toolkit",
      projLink: "https://github.com/blockdoyle/ad-toolkit",
      projLive: "",
      projText:
        "A collection of scripts and tools to help with Active Directory enumeration and exploitation. Built with PowerShell.",
    },
    {
      projImage:
        "https://github.com/blockdoyle/employee-tracker/raw/main/overview-sc.png",
      projTitle: "Employee Tracker",
      projLink: "https://github.com/blockdoyle/employee-tracker/",
      projLive: "",
      projText:
        "A simple CLI application that allows a user to manage a company's employee database. Built with Node.js, Inquirer, and MySQL.",
    },
    {
      projImage:
        "https://github.com/blockdoyle/NotAnotherEShop/raw/main/overview-sc.png",
      projTitle: "NotAnotherEShop",
      projLink: "https://github.com/blockdoyle/NotAnotherEShop/",
      projLive: "",
      projText:
        "Implementing MySQL, Express, React, and Node.js, this project is a full-stack e-commerce back-end that allows users to view, add, update, and delete products and categories.",
    },
    {
      projImage:
        "https://private-user-images.githubusercontent.com/149528212/311847434-27ab6895-0127-42c0-9aee-7da5a340f385.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMyMDUzODcsIm5iZiI6MTcxMzIwNTA4NywicGF0aCI6Ii8xNDk1MjgyMTIvMzExODQ3NDM0LTI3YWI2ODk1LTAxMjctNDJjMC05YWVlLTdkYTVhMzQwZjM4NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQxNVQxODE4MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01OWFlZmI2NWYyZDBkNmNiY2QyNjNlYzE1MjM5OWI0MjZkNGQ0Y2NkN2U1MDBmMDc4NTA5Zjg4YTQxZDFkNzJjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.VxciWUSqkkAzoubb5vfpyrZ6fjuZS_jsNtgYIxrh6i8",
      projTitle: "Unbreakable-Cream",
      projLink: "https://github.com/topcowmoo/unbreakable-cream",
      projLive: "https://unbreakable-cream-a4b95d823c2c.herokuapp.com/",
      projText:
        "A full-stack MySQL application that allows users to view, post, and comment on blog posts. Built with Express, Handlebars, and Sequelize.",
    },
    {
      projImage: "",
      projTitle: "Movie Mood",
      projLink: "https://github.com/MohnishBhujun/Movie-mood-v1",
      projLive: "https://mohnishbhujun.github.io/Movie-mood-v1/",
      projText:
        "This web applications allows uers to find movies based on their mood, rating, and by start year and end year. Built with HTML, CSS, JavaScript, and jQuery. Uses the TMDB API.",
    },
  ];

  return (
    <div className="d-flex flex-wrap flex-row justify-content-around">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
