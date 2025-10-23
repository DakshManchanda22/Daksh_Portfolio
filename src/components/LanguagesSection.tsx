const LanguagesSection = () => {
  const languages = ["English", "Hindi"];

  return (
    <section className="languages-section">
      <div className="languages-container">
        <h2 className="languages-title">LANGUAGES</h2>
        <div className="languages-list">
          {languages.map((language, index) => (
            <span key={index} className="language-item">
              {language}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;

