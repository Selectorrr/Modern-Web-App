import React, {Component} from 'react'
import { Switch, Route } from 'react-router'
import Loadable from 'react-loadable'
import Loading from '~/src/Loading'

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ './Home'),
  loading: Loading,
  delay: 300,
})
const AsyncAbout = Loadable({
  loader: () => import(/* webpackChunkName: "About" */ './About'),
  loading: Loading,
  delay: 300,
})

class App extends Component {

  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }


  render() {
    return(
      <Switch>
        <Route exact path="/" component={AsyncHome}/>
        <Route exact path="/about" component={AsyncAbout}/>
      </Switch>
    )
  }
}
 
export default App
