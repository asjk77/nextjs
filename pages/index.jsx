import React from 'react';
import SiteGuard from '../components/siteGuard';
import Home from '../pages/home';


var site_gard_on = false; 

export default function Index(){

  return site_gard_on ? <SiteGuard/> : <Home/>;
}
