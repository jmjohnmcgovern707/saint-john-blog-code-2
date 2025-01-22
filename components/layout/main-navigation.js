import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';
//
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
          <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <a href="https://stmichaelreno.org/docs/bulletins/Bulletin.pdf" target="_blank">Bulletin</a>
          </li>
          <li>
            <a href="https://www.stmichaelreno.org/" target="_blank">Saint Michaels</a>
          </li>
          <li>
            <a href="https://www.usccb.org/resources/2024cal.pdf" target="_blank">Catholic Church Liturgical Calendar</a>
          </li>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;


// import Link from 'next/link';

// import Logo from './logo';
// import classes from './main-navigation.module.css';

// function MainNavigation() {
//   return (
//     <header className={classes.header}>
//       <Link href='/'>
//         {/* <a>  a used like this is an app router feature*/}
//           <Logo />
//         {/* </a> */}
//       </Link>
//       <nav>
//         <ul>
//           <li>
//             <Link href='/posts'>Posts</Link>
//           </li>
//           <li>
//             <Link href='/contact'>Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default MainNavigation;
