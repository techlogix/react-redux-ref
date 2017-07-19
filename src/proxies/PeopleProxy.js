import axios from 'axios'

class PeopleProxy{
    getPeople(){
         return axios.get('http://swapi.co/api/people')
    }
    getPerson(id){
        return axios.get('http://swapi.co/api/person/'+id) 
    }
}

module.exports=PeopleProxy