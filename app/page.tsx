import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';
import Students from './components/Students/Students';
import Newsletter from './components/Newsletter/Newsletter';
import HomeCarousle from './components/HomeCarousle/HomeCarousle';
export default function Home() {
  return (
    <main>
      <HomeCarousle />
      <Banner />
      <Companies />
      <Tabs />
      <Mentor />
      <Students />
      {/* <Newsletter /> */}
    </main>
  )
}

