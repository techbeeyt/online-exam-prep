import OurServiceExams from "../container/OurServiceExams";
import HowItWorks from "../components/HowItWorks";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from 'react-redux';
import { register } from './../store/AuthState';
const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authState);
  console.log(auth)
  dispatch(register({user: "Abir", pass: "uiy34324"}));
  return (
    <>
      <Hero />
    
      <OurServiceExams />

      <HowItWorks />

      <Footer />
    </>
  );
};

export default Home;
