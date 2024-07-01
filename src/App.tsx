import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./widgets/layout";
import routes from "./routes";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname === '/sign-in' || pathname === '/sign-up') && (
        <div className="">
          <Navbar routes={routes} />
        </div>
      )
      }
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            {routes.map(
              ({ path, element }, key) =>
                element && <Route key={key} path={path} element={element} />
            )}
            <Route path="*" element={<Navigate to="/search" replace />} />
          </Routes></div>
      </main>
      {!(pathname === '/sign-in' || pathname === '/sign-up') && (
        <div className="container">
          <Footer />
        </div>
      )
      }
    </>
  );
}

export default App;
