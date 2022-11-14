import React from "react"
import Icon1 from "../../images/img1.jpeg"
import Icon2 from "../../images/img2.jpeg"
import Icon3 from "../../images/img3.jpeg"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./ServicesElements"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help Reduce your njkwncjbjkbcjk</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>virtual offices</ServicesH2>
          <ServicesP>We help Reduce your njkwncjbjkbcjk</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>njkenwjkf</ServicesH2>
          <ServicesP>We help Reduce your njkwncjbjkbcjk</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
