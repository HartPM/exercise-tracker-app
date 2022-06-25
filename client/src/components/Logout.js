function Logout({ onLogout }) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        <header className="logout">
            <button className='button1' onClick={handleLogout}>Logout</button>
        </header>
    )
}

export default Logout;