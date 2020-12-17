import styled from 'styled-components';
import ImgBg from './jobsimg20.jpg'
import ImgBg1 from './jobsimg20.jpg';
import Lod1 from './loading11.jpg'

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 40vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContainer2 = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg1});
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Loading = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Lod1});
  height: 200%;
  background-position: center;
  background-size: cover;
`;

