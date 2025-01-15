


export default function NavBar (){
    return (
    <nav className='flex justify-around m-4 p-4 bg-slate-400'>
        <div>
            <h1>Logo</h1>
        </div>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>About me</li>
            <li>Projects</li>
        </ul>
        <div>
            <h1>Contact</h1>
        </div>
  </nav>);
}