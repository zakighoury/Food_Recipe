import React from 'react'
import Header from '../../components/Header/Header'
import Add_Header from '../../Add_Recipie/add_header/add_header'
import Add_Recipie from '../../Add_Recipie/create_recipie/Add_Recipie'
import Footer from '../../components/Footer/Footer'
// import AddListing_recipie from '../../Add_Recipie/create_recipie/AddRecipeListing'

const Create_Recipe = () => {
  return (
    <div>
           <Header />
        <Add_Header />
        <Add_Recipie />
        {/* <AddListing_recipie /> */}
        <Footer />
    </div>
  )
}

export default Create_Recipe