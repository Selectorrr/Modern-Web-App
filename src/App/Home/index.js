import React from 'react'
import { Helmet } from 'react-helmet'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '&/redux/actions'

import Header from '../Header'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  paper: {
    margin: "auto",
    marginTop: 200,
    width: "40%",
    padding: 15
  }
}

class Home extends React.Component{
  constructor(){
    super()
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }
  increase(){
    this.props.actions.increase()
  }
  decrease(){
    this.props.actions.decrease()
  }
  render(){
    return (
      <div>
        <Header/>
        <Helmet>
          <title>VaMax</title>
          <meta name="description" content="VaMax app" />
        </Helmet>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h5">Redux-Counter</Typography>
          <Typography variant="subtitle1">Counter: {this.props.count}</Typography>
          <br/>
          <Button variant="contained" onClick={this.increase}>Increase</Button>
          <Button variant="contained" onClick={this.decrease}>Decrease</Button>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)