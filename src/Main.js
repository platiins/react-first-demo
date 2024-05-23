import "./styles.scss";

function Main() {
  const sendHey = () => {
    return alert("you sent hey to Lera");
  };

  return (
    <main>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <h2>sending hey from Main.js!</h2>
      <button className="main-btn" onClick={sendHey}>
        <i className="fa-solid fa-paper-plane"></i>
      </button>
      <p>press button to send hey back</p>
    </main>
  );
}

export default Main;
