import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HOMEPAGEOne = React.lazy(() => import("pages/HOMEPAGEOne"));
const DesktopproductcardsTwentyFive = React.lazy(() =>
  import("pages/DesktopproductcardsTwentyFive")
);
const DesktopclientsThree = React.lazy(() =>
  import("pages/DesktopclientsThree")
);
const CardssectionexampleNine = React.lazy(() =>
  import("pages/CardssectionexampleNine")
);
const CardssectionexampleSevenOne = React.lazy(() =>
  import("pages/CardssectionexampleSevenOne")
);
const CardssectionexampleEight = React.lazy(() =>
  import("pages/CardssectionexampleEight")
);
const CardssectionexampleSix = React.lazy(() =>
  import("pages/CardssectionexampleSix")
);
const CardssectionexampleSeven = React.lazy(() =>
  import("pages/CardssectionexampleSeven")
);
const CardssectionexampleFour = React.lazy(() =>
  import("pages/CardssectionexampleFour")
);
const CardsOne = React.lazy(() => import("pages/CardsOne"));
const CardssectionexampleFive = React.lazy(() =>
  import("pages/CardssectionexampleFive")
);
const CARTMODAL = React.lazy(() => import("pages/CARTMODAL"));
const CARTPAGE = React.lazy(() => import("pages/CARTPAGE"));
const INFOPAGE = React.lazy(() => import("pages/INFOPAGE"));
const PRODUCTPAGEREVIEWS = React.lazy(() => import("pages/PRODUCTPAGEREVIEWS"));
const PRODUCTPAGEDESCRIPTION = React.lazy(() =>
  import("pages/PRODUCTPAGEDESCRIPTION")
);
const Frame48095563 = React.lazy(() => import("pages/Frame48095563"));
const HOMEPAGE = React.lazy(() => import("pages/HOMEPAGE"));
const COVER = React.lazy(() => import("pages/COVER"));
const Row = React.lazy(() => import("pages/Row"));
const Cards = React.lazy(() => import("pages/Cards"));
const ELEMENTS = React.lazy(() => import("pages/ELEMENTS"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/elements" element={<ELEMENTS />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/row" element={<Row />} />
          <Route path="/cover" element={<COVER />} />
          <Route path="/homepage" element={<HOMEPAGE />} />
          <Route path="/frame48095563" element={<Frame48095563 />} />
          <Route
            path="/productpagedescription"
            element={<PRODUCTPAGEDESCRIPTION />}
          />
          <Route path="/productpagereviews" element={<PRODUCTPAGEREVIEWS />} />
          <Route path="/infopage" element={<INFOPAGE />} />
          <Route path="/cartpage" element={<CARTPAGE />} />
          <Route path="/cartmodal" element={<CARTMODAL />} />
          <Route
            path="/cardssectionexamplefive"
            element={<CardssectionexampleFive />}
          />
          <Route path="/cardsone" element={<CardsOne />} />
          <Route
            path="/cardssectionexamplefour"
            element={<CardssectionexampleFour />}
          />
          <Route
            path="/cardssectionexampleseven"
            element={<CardssectionexampleSeven />}
          />
          <Route
            path="/cardssectionexamplesix"
            element={<CardssectionexampleSix />}
          />
          <Route
            path="/cardssectionexampleeight"
            element={<CardssectionexampleEight />}
          />
          <Route
            path="/cardssectionexamplesevenone"
            element={<CardssectionexampleSevenOne />}
          />
          <Route
            path="/cardssectionexamplenine"
            element={<CardssectionexampleNine />}
          />
          <Route
            path="/desktopclientsthree"
            element={<DesktopclientsThree />}
          />
          <Route
            path="/desktopproductcardstwentyfive"
            element={<DesktopproductcardsTwentyFive />}
          />
          <Route path="/homepageone" element={<HOMEPAGEOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
