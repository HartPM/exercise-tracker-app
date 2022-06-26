function Logout({ onLogout }) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        
            <button className='button1' onClick={handleLogout}>Logout</button>
        
    )
}

export default Logout;