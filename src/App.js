import React from 'react';
import { BrowserRouter as Router,Switch } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import PublicRoute from './routerComponents/PublicRouter';
import ListOffre from './components/AdminComponents/ListOffre';
import ListEntreprise from './components/AdminComponents/ListEntreprise';
import Listcandidature from './components/AdminComponents/ListCandidature';
import Candidats from './components/AdminComponents/Candidats';
import CreateOffre from './components/ComponentEntreprise/CreateOffre';
import Post from './components/condidat/Post';
import OffreEntreprise from './components/ComponentEntreprise/OffreEntreprise';
import TopBar from './layout/Topbar';
import CandidatureCandidat from './components/condidat/CandidatureCandidat';
import Home from './pages/Home';
import OffreDetails from './components/AdminComponents/OffreDetails';
import Company from './pages/Company';
import PrivateRoute from './routerComponents/PrivateRouter';
import CondidatureCompany from './components/ComponentEntreprise/CondidatureCompany';
import Profil from './components/condidat/Profil';
function App() {

  return (

    <Router>
      <Switch>  
        <PublicRoute  restricted={true}  path="/index" component={Home} />
        <PublicRoute  roles={["Company"]}  path="/offrentreprise" component={OffreEntreprise} />
        <PublicRoute   path="/login" component={Login} />
        <PrivateRoute  roles={["Admin"]} path="/candidatures" component={Listcandidature} />
        <PrivateRoute  roles={["Company"]} path="/candidaturesComapny" component={CondidatureCompany} />
        <PrivateRoute  roles={["Candidate"]} path="/candidatureCandidat" component={CandidatureCandidat} />
        <PrivateRoute  roles={["Admin"]} path="/entreprises" component={ListEntreprise} />
        <PrivateRoute  roles={["Admin"]}  path="/candidats" component={Candidats} />
        <PrivateRoute   roles={["Admin"]}  path="/offres" component={ListOffre} />
        <PrivateRoute   roles={["Candidate"]} path="/offredetails" component={OffreDetails} />
        <PrivateRoute  roles={["Company"]} path="/createOffre" component={CreateOffre} />
        <PrivateRoute  roles={["Company","Candidate"]} path="/profil" component={Profil} />
        <PublicRoute   path="/company" component={Company} />
        <PublicRoute   path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
export default App;