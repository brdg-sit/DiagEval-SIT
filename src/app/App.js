import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../module/ScrollToTop'
import Main from './step/Main'
import Step1 from './step/Step1'
import Step2 from './step/Step2'
import Step3 from './step/Step3'
import Step4 from './step/Step4'
import Step5 from './step/Step5'
import Print1 from './print/Print1'
import Print2 from './print/Print2'
import Print3 from './print/Print3'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
          <Route path="/print1" element={<Print1 />} />
          <Route path="/print2" element={<Print2 />} />
          <Route path="/print3" element={<Print3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
