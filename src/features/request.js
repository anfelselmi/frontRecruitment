const port = 4000
const serverurl = 'http://localhost:' + port
export const requests = {
   candidateapi: serverurl + '/candidate',
   candidatureapi: serverurl + '/candidacy',
   entrepriseapi: serverurl + '/company',
   annonceapi: serverurl + '/job',
   usersapi: serverurl + '/user',
}

