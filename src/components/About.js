export const About = ({ info, name }) => {
  return (
    <div className="aboutContainer">
      <h1 className="name">{name}</h1>
      <p className="about">{info}</p>
    </div>
  );
};
