import { useState, useEffect } from 'react';
import './dist/output.css';

const options = [
  {
    icon: 'sunny',
    text: 'light'
  },
  {
    icon: 'moon',
    text: 'dark'
  },
  {
    icon: 'desktop-outline',
    text: 'system'
  }
]

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch(theme) {
      case 'dark': 
        element.classList.add("dark");
        localStorage.setItem("theme", "dark")
        break;
      case 'light':
        element.classList.remove("dark");
        localStorage.setItem("theme", "light")
        break;
      default:
        localStorage.removeItem("theme")
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", e => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark")
      } else {
        element.classList.remove("dark")
      }
    }
  })

  return (
    <section className='min-h-screen min-w-screen dark:text-gray-100 dark:bg-slate-900 duration-100 flex flex-col items-center gap-4 py-4'>
      <div className='fixed bottom-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded-lg lg:top-5 lg:bottom-auto'>
        { options?.map(({icon, text}, index) => ( 
          <button 
            onClick={() => setTheme(text)} 
            key={ index } 
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${ theme === text && "text-sky-600"}`}>
            <ion-icon name={icon}></ion-icon>
          </button>
        ))}
      </div>
      <h1 className='capitalize font-extrabold text-5xl'>Visit Rwanda</h1>
      <h2 className='text-4xl capitalize font-semibold break-words'>Come And See</h2>
      <p className='leading-9 p-5 text-2xl md:px-11 md:w-4/5 md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non sequi totam impedit quo autem possimus repellat ipsam nobis incidunt dolor qui praesentium dolorem, laborum neque quae inventore soluta quidem magni accusamus repudiandae sunt in temporibus. Sequi odit rerum blanditiis porro! Dolorum consectetur sint repudiandae, laudantium veritatis delectus necessitatibus dolores omnis ut fugiat labore temporibus excepturi iusto veniam inventore, tempore itaque voluptate debitis facilis alias! Ducimus deserunt rerum, vitae eveniet nemo quidem iure commodi, fuga cum accusamus aut aspernatur exercitationem recusandae dignissimos corporis dolorum eaque quod natus voluptatum nesciunt ea, porro aliquam. Fugit sunt rem, alias aliquid quis et libero ea? soluta quidem magni accusamus repudiandae sunt in temporibus. Sequi odit rerum blanditiis porro! Dolorum consectetur sint repudiandae, laudantium veritatis delectus necessitatibus dolores omnis ut fugiat labore temporibus excepturi iusto veniam inventore, tempore itaque voluptate debitis facilis alias! Ducimus</p>
      <footer className='flex gap-4 text-2xl'>
        <a href="https://www.twitter.com/hozayves" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a>
        <a href="https://www.github.com/hozayves" target='_blank'><ion-icon name="logo-github"></ion-icon></a>
      </footer>
    </section>
  )
}

export default App
