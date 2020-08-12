import React from 'react';
import MainLayout from './Layouts/MainLayout/MainLayout';
import CardList from './components/CardList/CardList';
import Typography from '@material-ui/core/Typography';
import classes from './App.module.css';
import Chart from './components/Chart/Chart';
import Table from './components/Table/Table';
import Switch from './components/Switch/Switch';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

//API URL
// https://api.rootnet.in/covid19-in/stats/latest
// https://github.com/amodm/api-covid19-in
// <Chart data={this.state.data}/>
//       <Chart data={this.state.data}/>
//      <Table data={this.state.data}/>


class App extends React.Component {

  state = {
    summary: null,
    isLoaded: false,
    isChartEnabled: true,
  }

  componentDidMount() {
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then(res => res.json())
    .then(
      (success) => {
                    console.log(success);
                    this.setState({
                      summary: success.data.summary,
                      data: success.data.regional,
                      lastUpdate: success.lastRefreshed,
                      isLoaded: true
                    });
                  },
      (error) => {console.log(error)}
    )
  }

  render() {

    const handleBtnClick = (event) => {
        this.setState({
          isChartEnabled: !this.state.isChartEnabled
        });
    }


    let layout = (
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
    if (this.state.isLoaded) {
      layout = (
          <div align="center">
            <div className={classes.Logo}>
              <img src="https://img.icons8.com/officel/100/000000/virus.png" alt="logo"/>
              <h1 className={classes.MainHeading}>COVID-19<Typography variant="caption"> India</Typography></h1>
            </div>
            <CardList summary={this.state.summary} lastUpdate={this.state.lastUpdate}/>
            <Switch isSwitchedOn={this.state.isChartEnabled} onClick={handleBtnClick}/>
            {this.state.isChartEnabled ? <Chart data={this.state.data}/> : <Table data={this.state.data}/> }
          </div>
      );
    }
    return (
      <MainLayout>
      {layout}
      </MainLayout>
    );
  }
}

export default App;
