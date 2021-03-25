import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer G9w0plO_HviqW5eU5P6pw5k6o4brKdjAhCp1xRdsHnq50cjQZ6M1laUbH8hrRpg2yN_6EJ_P8XtErkinVAlrl8Ec07Au8ODzs3Wbl716o0tbQoJQi9dHcjIfaSxbYHYx'
    }
});