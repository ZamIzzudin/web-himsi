import { BrowserRouter, Switch, Route } from "react-router-dom";
// Navbar
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Page404 from "./pages/Page404";
import Event from "./pages/Event";
import EventDetail from "./pages/EventDetail";
import Article from "./pages/Article";
import ArticleDetail from "./pages/ArticleDetail";

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                {/* Tambah disini */}

                {/* Page Event */}
                <Route path="/event" component={Event} />
                <Route path="/event-detail/:id" component={EventDetail} />

                {/* Page Article */}
                <Route path="/article" component={Article} />
                <Route path="/article-detail/:id" component={ArticleDetail} />

                {/* 404 Handle Page */}
                <Route path="*" component={Page404} />
            </Switch>
            {/* <EventDetail /> */}
        </BrowserRouter>
    )
}