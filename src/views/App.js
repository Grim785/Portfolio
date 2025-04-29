import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout'; // import DefaultLayout
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Projects from '../components/pages/Projects';
import Contact from '../components/pages/Contact';
import Login from '../components/pages/Login';
import ProjectForm from '../components/pages/ProjectForm';

function App() {
  return (
    <div className="App align-items-center d-flex flex-column">
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/about"
          element={
            <DefaultLayout>
              <About />
            </DefaultLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <DefaultLayout>
              <Projects />
            </DefaultLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          }
        />
        <Route
          path="/login"
          element={
            <DefaultLayout>
              <Login />
            </DefaultLayout>
          }
        />
        <Route
          path="/projects/add"
          element={
            <DefaultLayout>
              <ProjectForm isEditMode={false} />
            </DefaultLayout>
          }
        />
        <Route
          path="/projects/edit/:id"
          element={
            <DefaultLayout>
              <ProjectForm isEditMode={true} />
            </DefaultLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
