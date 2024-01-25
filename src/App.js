import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

// Add react-router-dom imports

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    {/* Add a separate Route for the HomePage component without dynamic parameters */}
    <Route index element={<HomePage />} />

    {/* Add a nested Route for the PetDetailsPage component with multiple URL parameters */}
    <Route
      path="/:type/:id"  // Using :type and :id as dynamic parameters
      element={<PetDetailsPage />}
    />

    {/* Add a nested Route for the SearchPage component */}
    <Route
      path="/search/*"  // Match URLs beginning with /search
      element={<SearchPage />}
    />

    {/* Add a nested Route for the PetDetailsNotFound component */}
    <Route
      path="/pet-details-not-found"
      element={<PetDetailsNotFound />}
    />
  </Route>
));

function App() {
  return (
         <RouterProvider router={appRouter}>
    </RouterProvider>
  );
}

export default App;
