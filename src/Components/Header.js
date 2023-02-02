import './css/header.css'
function Header(){
    return(
        <div class='header-right'>
            <div class="right-nav">
                
                <a href="/Login">Login</a>
                <a href="/Register">Register</a>
            </div>
            <div className='left-nav'>
               
                <a href="#">Challenges</a>
                <a href="#">Scoreboard</a>
                <a href="#">Users</a>
                <a href="#"><strong>RIGHT DATA</strong></a>

            </div>
            
           
        </div>

    )
}
export default Header;