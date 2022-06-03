import "./style.css";

export default function FeaturedMovie({ featuredMovie }: any) {
  let year = new Date(featuredMovie.first_air_date);
  let genres = featuredMovie.genres.map((item: any) => item.name);
  let description = featuredMovie.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${process.env.REACT_APP_BASE_URL_IMAGE}original${featuredMovie.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{featuredMovie.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {featuredMovie.vote_average} pontos
            </div>
            <div className="featured--year">{year.getFullYear()}</div>
            <div className="featured--seasons">
              {featuredMovie.number_of_seasons} temporada
              {featuredMovie.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a href="/" className="featured--watchbuttons">
              ► Assistir
            </a>
            <a href="/" className="featured--mylistbutton">
              + Minha lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros:</strong> {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
}
