import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <div className="notFoundPageContainer">
        <div className="notFoundPagePanel">
          <p className="notFoundPagePanelText">
            Извините, запрашиваемая страница не найдена.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
