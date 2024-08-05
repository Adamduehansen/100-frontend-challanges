export const layout = "main-layout.tsx";
export const title = "Profile Card";

export default function ProfileCard(): React.JSX.Element {
  return (
    <>
      <article className="profile-card">
        <div className="profile-card__img">
          <img src="https://avatar.iran.liara.run/username?username=Johnny+Rogers" />
        </div>
        <p>Johnny Rogers</p>
        <a href="#">johnnyrogers</a>
        <div className="profile-card__icons">
          <div>
            <svg width="24" height="24">
              <use href="/styles/icons.svg#linkedin" />
            </svg>
            <svg width="24" height="24">
              <use href="/styles/icons.svg#facebook" />
            </svg>
            <svg width="24" height="24">
              <use href="/styles/icons.svg#instagram" />
            </svg>
            <svg width="24" height="24">
              <use href="/styles/icons.svg#website" />
            </svg>
          </div>
        </div>
        <p className="profile-card__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          nihil qui provident, a facere non ipsam unde illum odit autem.
        </p>
        <button>Follow</button>
        <button>Message</button>
      </article>
    </>
  );
}
