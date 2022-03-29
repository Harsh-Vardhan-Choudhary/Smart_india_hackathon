import Footer from "../components/Footer/Footer"
import Scholarship_card from "../components/Scholarship_card/Scholarship_card"
import Navbar from "../components/Navbar/Navbar"
import Scholarship_card2 from "../components/Scholarship_card/Scholarship_card2"
import Scholarship_card3 from "../components/Scholarship_card/Scholarship_card3"
import Scholarship_card4 from "../components/Scholarship_card/Scholarship_card4"

export default function SortedScholarship() {
  return (
    <div>
      <Navbar/>
      <Scholarship_card3/>
      <Scholarship_card/>
      <Scholarship_card2/>
      <Scholarship_card4/>
      <Footer/>
    </div>
    
  )
}