import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../module/ScrollToTop'
import Main from './step/Main'
import Step1 from './step/Step1'
import Step2 from './step/Step2'
import Step3 from './step/Step3'
import Step4 from './step/Step4'
import Step5 from './step/Step5'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

        <Routes>
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
