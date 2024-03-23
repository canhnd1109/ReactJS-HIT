import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import UserCardList from './components/UserCardList/UserCardList';
import dataUsers from './data/users.json';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';

const App = () => {
    return (
        <div className="app flex justify-center items-center">
            <Header />
            <Banner />
            <UserCardList usersList={dataUsers}>
                <Search />
            </UserCardList>
            <Footer />
        </div>
    );
};

export default App;
