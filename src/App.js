import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import {
  Card,  CardBody,
  CardTitle,
} from 'reactstrap';

const API_KEY = "b5a9c069f4cb93d65209dd61093d3eb0";

class App extends React.Component {
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},
    ${country}&APPID=${API_KEY}`);
    const data= await api_call.json();
    if(city && country){
      console.log(data);
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""
    });
    }
    else{
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please enter some data",
    });
  }
}
render() {
  return (
    <div>
      <Card className="background">
        <CardBody>
        <CardTitle><Titles /></CardTitle>
        <div className="col-xs-12 form-container">
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature} 
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
        </CardBody>
      </Card>
    </div>
  );
};
}
export default App;
