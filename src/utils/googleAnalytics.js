import { useEffect } from "react";
import ReactGA from 'react-ga';

export const useAnalytics = ()=>{
    useEffect(() => {
        ReactGA.pageview("Home");
      }, []);
}