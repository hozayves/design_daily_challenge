import React from 'react';
import JobCard from './components/JobCard';
import engineer from './assets/Frame-1.png';
import operation from './assets/Frame-2.png';
import people from './assets/Frame-3.png';
import sales from './assets/Frame-4.png';
import university from './assets/Frame-5.png';
import design from './assets/Frame.png';

const position = [
  {name: "Design", nums: 4, icon: design, bgGradient: "bg-bgDesign", bgPosition: null},
  {name: "Engineering", nums: 8, icon: engineer, bgGradient: "bg-bgEngineer", bgPosition: "bg-textColor"},
  {name: "Operations", nums: 2, icon: operation, bgGradient: "bg-bgDesign", bgPosition: null},
  {name: "People", nums: 6, icon: people, bgGradient: "bg-bgPeople", bgPosition: null},
  {name: "Sales", nums: 7, icon: sales, bgGradient: "bg-bgSales", bgPosition: null},
  {name: "University", nums: 8, icon: university, bgGradient: "bg-bgUniversity", bgPosition: null}
]

const App = () => {
  return (
    <main className='bg-bgColor min-h-screen flex flex-col justify-center items-center gap-6 border border-solid'>
        <h1 className='text-textColor text-[2rem] font-black leading-normal font-Merriweather not-italic'>Open Positions</h1>
        <section className='flex flex-row justify-center items-center w-[65rem] flex-wrap gap-6'>
          {/* Job Card */}
          {position.map((data, index) => {
            return <JobCard key={index} {...data}/>
          })}
        </section>
        <p className='heading-normal font-medium not-italic text-sm font-Poppins text-center text-textColor w-[52rem] opacity-70'>We are proud to be an equal opportunity employer that values diversity. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.</p>
    </main>
  )
}

export default App