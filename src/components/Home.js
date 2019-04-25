import React from 'react';
import styled from "styled-components";
import star from '../assets/images/star.jpg';
import { Image } from 'semantic-ui-react';

const Home = () => (

    <HomeImage src={star} />
)

const HomeImage = styled(Image)`
  position: absolute
  width: 100%;
  height: 100%;`

export default Home;
