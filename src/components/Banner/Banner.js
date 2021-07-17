import './Banner.css';

const Banner = () => {
  // If you ask yourself why I didn't use the arrow function here?!
  // simply because I don't need it ;)
  // you only use it when you need to use it ^_^
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          reprehenderit praesentium cumque nihil neque sint voluptas, quo magnam
          vitae ipsum deserunt totam temporibus voluptatibus, quibusdam quod eum
          non pariatur quidem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellendus reprehenderit praesentium cumque nihil
          neque sint voluptas, quo magnam vitae ipsum deserunt totam temporibus
          voluptatibus, quibusdam quod eum non pariatur quidem!
            `,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
