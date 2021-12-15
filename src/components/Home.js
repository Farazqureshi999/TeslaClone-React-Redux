import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
           <Section 
            title="Model S"
            description="Order Online for Touchless Delievery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
           />
           <Section 
           title="Model Y"
           description="Order Online for Touchless Delievery"
           backgroundImg="model-y.jpg"
           leftBtnText="Custom Order"
           rightBtnText="Existing Inventory"/>
           <Section
           title="Model 3"
           description="Order Online for Touchless Delievery"
           backgroundImg="model-3.jpg"
           leftBtnText="Custom Order"
           rightBtnText="Existing Inventory"/>
             <Section
           title="Model X"
           description="Order Online for Touchless Delievery"
           backgroundImg="model-x.jpg"
           leftBtnText="Custom Order"
           rightBtnText="Existing Inventory"/>
             <Section
           title="Solar Panel"
           description="Money Back Guarantee"
           backgroundImg="solar-panel.jpg"
           leftBtnText="Order Now"
           rightBtnText="Learn more"/>
             <Section
           title="Solar Roof"
           description="Money Back Guarantee"
           backgroundImg="solar-roof.jpg"
           leftBtnText="Order Now"
           rightBtnText="Learn more"/>
              <Section
           title="Accessories"
           description="Money Back Guarantee"
           backgroundImg="accessories.jpg"
           leftBtnText="Shop Now"/>
        </Container>
    )
}

export default Home


const Container = styled.div`
    height:100vh;
    
`
