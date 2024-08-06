export const layout = "main-layout.tsx";
export const title = "Profile Card";

export default function ProfileCard(): React.JSX.Element {
  return (
    <>
      <article className="profile-card">
        <div className="profile-card__img">
          <img src="https://avatar.iran.liara.run/username?username=Johnny+Rogers" />
        </div>
        <div className="profile-card__content">
          <p>Johnny Rogers</p>
          <a href="#">johnnyrogers</a>
          <div className="profile-card__icons">
            <div>
              <a href="#">
                <svg width="24" height="24">
                  <use href="/styles/icons.svg#linkedin" />
                </svg>
              </a>
              <a href="#">
                <svg width="24" height="24">
                  <use href="/styles/icons.svg#facebook" />
                </svg>
              </a>
              <a href="#">
                <svg width="24" height="24">
                  <use href="/styles/icons.svg#instagram" />
                </svg>
              </a>
              <a href="#">
                <svg width="24" height="24">
                  <use href="/styles/icons.svg#website" />
                </svg>
              </a>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            nihil qui provident, a facere non ipsam unde illum odit autem.
          </p>
        </div>
        <div className="profile-card__buttons">
          <a href="#">Follow</a>
          <button>Message</button>
        </div>
      </article>
    </>
  );
}
