import React from 'react';
import './App.css';

//router-dom
import { Route, Switch } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

//firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//redux
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  //khi người dùng đăng nhập thì thông tin người dùng đã có trên authentication của firebase 
  //khi gọi api từ backend thì luôn dùng DidMount, khi đang gọi api thì nó sẽ ko gọi api nữa mà phải đợi DidMount được gọi lại lần nữa
  //nhưng mình ko muốn remount lại toàn bộ lifecycle, mà mình chỉ cần luôn luôn biết trạng thái authentication được thay đổi hay chưa 
  //khi ai đó sign-in hay sign-out mình cần chú ý đến sự thay đổi đó mà ko cần phải tự chúng ta fetch lại
  componentDidMount() {
    const {setCurrentUser} = this.props;
    //method onAuthStateChanged gửi một object userAuth từ authentication về và object đó ko bị mất đi cho dù refresh hay xoá trang vô lại, thì object vẫn luôn ở đó cho đến khi bị signout mới thôi  
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //đây là DocSnapshot
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data() 
          });
        });
        
      }else{
        setCurrentUser(userAuth)
        
      }

    });
  }

  //method onAuthStateChanged là open subscription, tất là dù ng dùng update từ các chỗ khác thì nó sẽ auto update trong cái app này luôn, cho nên nó luôn liên tục, và nếu open thì phải close qua WillUnmount để ko bị memory leak
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  setCurrentUser: user => {
    dispatch(
      setCurrentUser(user)
    )
  }
})

export default connect(null,mapDispathToProps)(App);
